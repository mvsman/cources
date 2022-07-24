import cn from 'classnames'
import React, { FC, AnchorHTMLAttributes } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { isExternalUrl } from './utils'
import styles from './link.module.scss'

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const Link: FC<LinkProps> = (props) => {
  const { children, className, href, ...anchorProps } = props
  const linkClass = cn(styles.link, className)

  if (!href || isExternalUrl(href)) {
    return (
      <a className={linkClass} href={href} {...anchorProps}>
        {children}
      </a>
    )
  }

  return (
    <RouterLink className={linkClass} to={href} {...anchorProps}>
      {children}
    </RouterLink>
  )
}
