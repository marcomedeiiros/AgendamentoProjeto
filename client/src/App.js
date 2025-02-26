import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LadingPage from './views/LadingPage/lading.jsx';
import Agenda from './views/Agendamentos/Agende.jsx';
import Cursos from './views/Cursos/Cursos.jsx';
import Pagamentos from './views/Pagamentos/pagamento.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LadingPage />} />
        <Route path='Agendamentos' element={<Agenda />} />
        <Route path='Cursos' element={<Cursos />} />
        <Route path='Pagamentos' element={<Pagamentos />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;