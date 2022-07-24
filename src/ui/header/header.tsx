import React, { MouseEventHandler } from 'react'
import Link from '../link'
import cn from 'classnames'
import Button from '../button'
import styles from './header.module.scss'
// import { ReactComponent as AccountSvg } from '../../assets/icons/account.svg'
import Icon from '../icon'
import { links } from './links'

export const Header = () => {
  const clickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e)
  }

  return (
    <header>
      <nav className={styles.nav}>
        {links.map(({ href, name }, idx) => (
          <Link className={styles.link} key={idx} href={href}>
            {name}
          </Link>
        ))}
        <Button
          className={styles.consultButton}
          type="button"
          onClick={clickHandler}
        >
          Get consultation
        </Button>
        <Link className={cn(styles.link, styles.login)} href="/">
          <Icon name="account" />
          <span>Log in / Register</span>
        </Link>
      </nav>
    </header>
  )
}
