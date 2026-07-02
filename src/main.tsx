import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import App from './App.tsx'
import Login from './componentes/login/login.tsx'
import Cadastro from './componentes/Cadastro/Cadastro.tsx'
import Sobre from './componentes/Sobre/Sobre.tsx'
import NossosServicos from './componentes/NossosServicos/NossosServicos.tsx'
import Perfil from './componentes/Perfil/Perfil.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<NossosServicos />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
