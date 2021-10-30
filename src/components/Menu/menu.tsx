import React, { useState, createContext } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'
type MenuMode = 'horizontal' | 'vertical'
type SelectCallBack = (selectIndex: string) => void
export interface MenuProps {
    defaultIndex?: string
    className?: string
    mode?: MenuMode
    style?: React.CSSProperties
    onSelect?: SelectCallBack
    defaultOpenSubMenus?: string[]
}

interface IMenuContext {
    index: string
    onSelect?: SelectCallBack
    mode?: MenuMode
    defaultOpenSubMenus?: string[]
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })

const Menu: React.FC<MenuProps> = (props) => {
    const { defaultIndex, className, mode, style, children, onSelect, defaultOpenSubMenus } = props
    const [currentActive, setActive] = useState(defaultIndex)
    const classes = classNames('menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    })

    const handleClick = (index: string) => {
        setActive(index)

        onSelect && onSelect(index)
    }
    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const { displayName } = childElement.type
            if (displayName === 'menuItem' || displayName === 'subMenu') {
                return React.cloneElement(childElement, {
                    index: index + ''
                })
            }
            else {
                console.log("Warning.....");
            }
        })
    }

    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode,
        defaultOpenSubMenus
    }
    return (
        <MenuContext.Provider value={passedContext}>
            <ul className={classes} style={style} data-testid="test-menu">
                {renderChildren()}
            </ul>
        </MenuContext.Provider>

    )
}

Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: []
}

export default Menu