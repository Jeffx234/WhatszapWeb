import { TelaMessage } from "../../styles"
import { useEffect, useState } from 'react'
import { api } from "../../services/api"
import io from 'socket.io-client'
import { UL } from './styles'

const messagesQueue = []

const socket = io('http://localhost:4000')

socket.on('new_message', newMessage => {
  messagesQueue.push(newMessage)
})

export function MensageList() {
  const [ messages, setMessages ] = useState([])

  useEffect(() => {
    const timer = setInterval(() => {
      if(messagesQueue.length > 0) {
        setMessages(prevState => [
          messagesQueue[0],
          prevState[0],
          prevState[1],
        ].filter(Boolean))

        messagesQueue.shift()
      }
    }, 3000)
  }, [])

  useEffect(() => {
    api.get('/messages/last3').then(response => setMessages(response.data))
  }, [])

  return(
    <TelaMessage >
      <UL>
        { messages.map(message => (
          <li>
            <p> {message.text} </p>
          </li>
        )) }
      </UL>
    </TelaMessage>
  )
}