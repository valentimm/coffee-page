import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logo} alt="" />
      </span>
      <div>
        <div className='pin'>
          <MapPin size={20} weight="fill" />
          <a>Curitiba, PR</a>
        </div>
        <div className='cart'>
        <ShoppingCart size={24} weight="fill" />
        </div>
      </div>
    </HeaderContainer>
  )
}
