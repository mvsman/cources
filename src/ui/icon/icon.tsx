import React, { FC, CSSProperties } from 'react'
import cn from 'classnames'
import { getIconSvg, IconName } from './utils'
import styles from './icon.module.scss'

export interface IconProps {
  name: IconName
  style?: CSSProperties
  className?: string
}

export const Icon: FC<IconProps> = ({ className, name, style }) => {
  const iconClass = cn(styles.icon, className)
  const SvgIcon = getIconSvg(name)
  return <SvgIcon className={iconClass} style={style} />
}
