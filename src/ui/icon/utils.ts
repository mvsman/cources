import { ReactComponent as account } from '../../assets/icons/account.svg'

const iconSvgs = {
  account,
}

export type IconName = keyof typeof iconSvgs

export const getIconSvg = (name: IconName) => iconSvgs[name]
