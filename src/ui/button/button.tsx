import React, { FC, ReactNode, MouseEventHandler } from 'react'
import cn from 'classnames'
import styles from './button.module.scss'

export interface ButtonProps {
  children?: ReactNode
  type?: 'button' | 'submit' | 'reset'
  color?: 'primary' | 'secondary'
  href?: string
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    color = 'primary',
    href,
    onClick,
    className,
    ...rest
  } = props
  const buttonClass = cn(styles.button, styles[`button-${color}`], className)

  return (
    <button className={buttonClass} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
