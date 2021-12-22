import React, { FC, InputHTMLAttributes, ReactElement } from 'react'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon'
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  clearable?: Boolean
  size?: 'lg' | 'sm'
  icon?: IconProp
  prepend?: string | ReactElement
  append?: string | ReactElement
}

export const Input: FC<InputProps> = (props) => {
  const { disabled, size, icon, prepend, append, style, ...restProps } = props
  const classes = classNames('input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-prepend': !!prepend,
    'input-group-append': !!append
  })

  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }
  if ('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }
  return (
    <div className={classes} style={style}>
      {prepend && <div className="input-group-prepend-wrapper">{prepend}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input className="input-inner" disabled={disabled} {...restProps} />
      {append && <div className="input-group-append-wrapper">{append}</div>}
    </div>
  )
}

export default Input
