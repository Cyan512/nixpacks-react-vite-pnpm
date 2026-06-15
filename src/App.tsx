import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { InstitutionalLayout } from '@/layouts/InstitutionalLayout'
import Home from '@/pages/Home'
import Comunicados from '@/pages/Comunicados'
import ComunicadoDetalle from '@/pages/ComunicadoDetalle'
import ProcesoAdmision from '@/pages/ProcesoAdmision'
import ProgramList from '@/pages/ProgramList'
import ProgramDetail from '@/pages/ProgramDetail'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<InstitutionalLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/comunicados" element={<Comunicados />} />
        <Route path="/comunicados/:slug" element={<ComunicadoDetalle />} />
        <Route path="/proceso-admision" element={<ProcesoAdmision />} />
        <Route path="/:tipo" element={<ProgramList />} />
        <Route path="/:tipo/:slug" element={<ProgramDetail />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
