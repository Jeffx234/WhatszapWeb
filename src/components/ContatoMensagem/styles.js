import { styled } from '@stitches/react'


export const ContatoMessage = styled('article', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#fff',
  height: '70px',
  width: '100%',
  padding: '10px',
  borderBottom: '1px solid lightGray',
  transition: 'filter .2s',
  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(0.9)',
  }
})

export const AvatarMessage = styled('div', {
  display: 'flex',
})

export const NameMessage = styled('div', {
  paddingLeft: '15px',

  '.mensagem': {
    color: 'lightSlateGray'
  },
})

export const Icone = styled('div', {
  display: 'flex',
  width: '40%',
  paddingLeft: '10px',
  justifyContent: 'space-between',
})