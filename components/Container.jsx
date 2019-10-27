import { cloneElement } from 'react'

const style = {
  width: '100%',
  maxWidth: 1200,
  marginLeft: 'auto',
  marginRight: 'auto'
}
export default ({children, renderer}) => {
  console.log(renderer);
  
  return cloneElement(renderer, {
    style,
    children
  })
}