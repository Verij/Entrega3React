import React from 'react'
import Navbar from '../navbar/Navbar'
import { ContenedorLayout, Contenido } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <ContenedorLayout>
      <Navbar />
      <Contenido>{children}</Contenido>
    </ContenedorLayout>
  )
}
