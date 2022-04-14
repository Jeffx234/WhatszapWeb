import { styled, globalCss } from '@stitches/react'
import img from './images/fundoMensagem.png'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
})

export const Main = styled('main', {
  position: 'absolute',
  display: 'flex',
  width: '100vw',
  height: 'calc(100vh - 9rem)'
})

export const Contato = styled('section', {
  width: '30%',
  background: '#fff',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'lightgray',
  height: '70px',
  width: '100%',
  padding: '10px',
})

export const Input = styled('div', {
  width: '100%',
  padding: '10px',
  
})

export const Input2 = styled('input', {
  width: '100%',
  height: '40px',
  borderRadius: '10px',
  padding: '10px',
  border: '0',
  backgroundColor: 'lightgray',
  outline: 'none'

})


export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'start',
})

export const Message = styled('header', {
  width: '70%',
  
})

export const TelaMessage = styled('div', {
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  height: '100%'
})

export const Form = styled('form', {
  backgroundColor: 'lightgray',
  display: 'flex',
  height: '70px',
  boxSizing: 'border-box',
  padding: '20px',
  alignItems: 'center',
  justifyContent: 'space-between',

  'button': {
    background: 'transparent',
    border: '0',
  },
})

export const InputMensage = styled('input', {
  width: '100%',
  height: '40px',
  borderRadius: '10px',
  padding: '10px',
  border: '0',
  backgroundColor: '#fff',
  outline: 'none'
})

export const Component = styled('article', {
  display: 'flex',
})

export const Avatar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '10px'
})

export const Icone2 = styled('div', {
  display: 'flex',
  width: '6%',
})

export const Name = styled('div', {
  marginLeft: '20px',
  'p': {
    color: 'black',
  },
  ".mensagem": {
    color: 'LightSlateGray'
  },
})




