import React from 'react'


export const Footer = () => {
  let footersty={
    position:'relative',
    top:'100vh',
    width:'100%',
    

  }
  return (
    
    <footer className='bg-dark text-light py-3' style={footersty}><p className="text-center">Copyright &copy; dhruvtodoslist.com</p></footer>
  )
}
