import React, { FC, MouseEventHandler } from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import styles from './button-icon.module.scss'
import Icon, { IconProps } from '../icon'

export interface ButtonIconProps {
  type?: 'button' | 'submit' | 'reset'
  color?: 'primary' | 'secondary'
  className?: string
  icon: IconProps['name']
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const ButtonIcon: FC<ButtonIconProps> = (props) => {
  const { className, href, color, icon, ...rest } = props
  const buttonClass = cn(styles.button, styles[`button-${color}`], className)

  const iconEl = <Icon name={icon} className={styles.icon} />

  if (href) {
    return (
      <Link className={buttonClass} to={href}>
        {iconEl}
      </Link>
    )
  }
  return (
    <button className={buttonClass} {...rest}>
      {iconEl}
    </button>
  )
}
