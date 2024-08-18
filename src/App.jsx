import './App.css'
import {Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home/Home'
import {Header} from './layouts/Header/Header'
import {Footer} from './layouts/Footer/Footer'
import { Main } from './layouts/Main/Main'
import { Calculadora1} from './pages/Calculadora/Calculadora1'
import { Fondo1 } from './pages/Fondo/Fondo1'
import { Formulario1 } from './pages/Formulario/Formulario1'
import { ListaTareas1 } from './pages/ListaTareas/ListaTareas1'
import { NotFound } from './pages/NotFound/NotFound'

export function App() {
  
  return (
    <>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Calculadora' element={<Calculadora1/>}/>
      <Route path='/Fondo' element={<Fondo1/>}/>
      <Route path='/Formulario' element={<Formulario1/>}/>
      <Route path='/ListaTareas' element={<ListaTareas1/>}/>
      <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/> 
    </>
  )
}
