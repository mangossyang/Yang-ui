
import React, { useContext, useState, FunctionComponentElement } from 'react'

import classNames from 'classnames'

import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'
export interface SubMenuProps {
    index?: string
    title: string
    className?: string
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
    const context = useContext(MenuContext)
    const { index, title, className, children } = props
    const openSubMenu = context.defaultOpenSubMenus as Array<string>
    const isOpen = (index && context.mode==='vertical') ? openSubMenu.includes(index) : false
    const [menuOpen, setOpen] = useState(isOpen)
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index
    })

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setOpen(!menuOpen)
    }
    let timer: any
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer)
        e.preventDefault()
        timer = setTimeout(() => {
            setOpen(toggle)
        }, 300);
    }

    const clickEvents = context.mode == 'vertical' ? {
        onClick: handleClick
    } : {}
    const hoverEvents = context.mode != 'vertical' ? {
        onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
        onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false),
    } : {}
    const renderChildren = () => {
        const subMenuClasses = classNames('submenu', {
            'menu-opened': menuOpen
        })
        const childrenComponent = React.Children.map(children, (child, i) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>
            const { displayName } = childElement.type
            if (displayName === 'menuItem') {
                return React.cloneElement(childElement,{
                    index:`${index}-${i}`
                })
            } else {
                console.error('warning...');

            }
        })
        return (
            <ul className={subMenuClasses}>
                {childrenComponent}
            </ul>
        )
    }
    return (
        <li key={index} className={classes} {...hoverEvents}>
            <div className="submenu-title" {...clickEvents}>{title}</div>
            {renderChildren()}
        </li>
    )
}

SubMenu.displayName = 'subMenu'

export default SubMenu