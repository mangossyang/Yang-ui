
import React from 'react'
import classnames from 'classnames'
export type ButtonSize = 'lg' | 'sm'

export type ButtonType = 'primary' | 'default' | 'danger' | 'link'
interface BaseButtonProps {
    className?: string
    disabled?: boolean
    size?: ButtonSize
    btnType?: ButtonType
    children: React.ReactNode
    href?: string
    circle?: boolean
}
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
const Button: React.FC<ButtonProps> = (props) => {
    const {
        btnType,
        disabled,
        size,
        children,
        href,
        circle,
        className,
        ...restProps
    } = props

    const classes = classnames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === 'link') && disabled,
        'is-circle': circle
    })

    if (btnType === 'link' && href) {
        return (
            <a
                href={href}
                className={classes}
                {...restProps}>{children}</a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}>{children} </button>
        )
    }
}

Button.defaultProps = {
    btnType: 'default',
    disabled: false,
}

export default Button