import { BsTelephoneMinus } from 'react-icons/bs'
import AvatarDemo from '../Avatar/Avatar'
import {
  Icone, 
  NameMessage, 
  AvatarMessage, 
  ContatoMessage
} from './styles'


export function Component() {
  return (
    <ContatoMessage>
        <AvatarMessage>
           <AvatarDemo />
           <NameMessage>
              <h1> Jeferson Luis </h1>
              <p className="mensagem"> Mensagem </p>
           </NameMessage>
        </AvatarMessage>
          <Icone>
            <div>

            </div>
            <BsTelephoneMinus color="#34af23"/>
          </Icone>
    </ContatoMessage>
  )
}