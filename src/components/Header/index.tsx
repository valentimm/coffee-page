import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import * as Popover from '@radix-ui/react-popover';
import { CartModal } from '../CartModal';
import { ProductInCart } from '../ProductInCart';
export function Header() {
  return (
    <HeaderContainer>
      <Popover.Root>
        <span>
          <img src={logo} alt="" />
        </span>
        <div>
          <div className='pin'>
            <MapPin size={20} weight="fill" />
            <a>Curitiba, PR</a>
          </div>
          <Popover.Trigger>
            <div className='cart'>
            <ShoppingCart size={24} weight="fill" />
            </div>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className='PopoverContent'>
              <CartModal />
            </Popover.Content>
          </Popover.Portal>
        </div>
      </Popover.Root>
    </HeaderContainer>
  )
}
