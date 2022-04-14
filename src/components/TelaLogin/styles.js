import { styled } from '@stitches/react'

export const Container = styled('div', {
  height: '100vh',
  width: '100vw',
  background: '#121214',
  justifyContent: 'center',
  display: 'flex',


})

export const Content = styled('div', {
  background: '#121211',
  width: '40%',
  margin: 'auto',
  borderRadius: '6px',
})

export const Form = styled("form", {
  padding: '2rem',
  color: 'LightBlue',

  'h1': {
    textAlign: 'center',
    marginBottom: '20px',
  },

  "input": {
    display: 'block',
    width: '100%',
    padding: '.5rem',
    borderRadius: '8px',
    outlne: 'none',
    margin: '5px 0 25px 0',
    border: '0',

    '&:focus': {
      outline: 'none'
    },
  },

  '.github': {
    margin: 'auto',
    background: 'LightPink',
    width: '50%',
    height: '30px',
    borderRadius: '7px',
    textAlign: 'center',

    'a': {
      fontSize: '20px',

     
    },
  }

})