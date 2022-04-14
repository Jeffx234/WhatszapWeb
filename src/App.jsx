import  AvatarDemo  from './components/Avatar/Avatar'
import { MdMessage, MdSend } from 'react-icons/md'
import { AiOutlineMore, AiOutlineSearch } from 'react-icons/ai'
import { BiCrosshair } from 'react-icons/bi'
import ScrollAreaDemo from './components/ScrollArea/ScrollArea'
import { useState } from 'react'
import { Icone } from './components/ContatoMensagem/styles'
import {
   Main,
   Contato, 
   Header, 
   Message, 
   globalStyles,
   Input, 
   Input2, 
   Icone2,
   Avatar,
   InputMensage,
   Flex, 
   Name,
   Form
} from './styles'

import { Component } from './components/ContatoMensagem/component'
import { MensageList } from './components/MensageList'
import { api } from './services/api'

export function App( ) {
    
   const [ message, setMessage ] = useState('')

   async function handleSendMessage(event) {
    event.preventDefault()

    // Se a messagem for vazia mesmo com espaços nao faça nada
    if(!message.trim()) {
      return
    }

    await api.post('messages', { message })

    setMessage('')

  }

  // Resetar css
  globalStyles()

  return(
    
    <Main>
      <Contato>     
        <Header style={{ borderRight: '1px solid gray'}}>
          <div>
            <AvatarDemo />
          </div>
          <Icone>
            <BiCrosshair size="25" />
            <MdMessage size="25" />
            <AiOutlineMore size="25" />
          </Icone>
        </Header>
        <Input>
          <Input2 
            type="text" 
            placeholder='Pesquisar ou começar uma nova conversa'
          />
        </Input>
        <ScrollAreaDemo>
          <Component/>
          <Component/>
          <Component/>
          <Component/>
          <Component/>
          <Component/>
        </ScrollAreaDemo>
      </Contato>
      <Message>
        <Header>
          <Avatar>
            <Flex>
              <AvatarDemo />
              <Name>
                <p className='name'> Jeferson Luis </p>
                <p className="mensagem"> visto por ultimo em 12:47h </p>
              </Name>
            </Flex>
          </Avatar>
          <Icone2>
            <AiOutlineSearch/>
            <AiOutlineMore />
          </Icone2>
        </Header>

        <MensageList/>
        <Form onSubmit={handleSendMessage}>
            <InputMensage 
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <button type="submit">
              <MdSend size="35" style={{ 
                marginLeft: '10px', 
                cursor: 'pointer', 
                color: '#34af23'
              }}/>
            </button>
        </Form>
      </Message>
    </Main>
  )
}

