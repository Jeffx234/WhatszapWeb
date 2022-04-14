import { styled } from '@stitches/react'

export const UL = styled('li', {
  float: 'right',
  padding: '1rem',
  listStyle: 'none',
  top: '100px',
  bottom: '100px',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '12rem',

  'li': {
    marginTop: '1rem',
    padding: '1rem',
  },
  
  'p': {
    background: 'LightSeaGreen',
    padding: '.5rem',
    float: 'right',
    borderRadius: '8px 0px 8px 8px',
    
  }
})