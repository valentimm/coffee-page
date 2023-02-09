import { HeaderContainer } from './styles'
import { Activity } from 'phosphor-react'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logo} alt="" />
      </span>
      <div>
        <Activity size={24} />
      </div>
    </HeaderContainer>
  )
}
