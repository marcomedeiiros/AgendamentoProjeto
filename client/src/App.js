import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LadingPage from './views/LadingPage/lading.jsx';
import Agenda from './views/Agendamentos/Agende.jsx';
import Cursos from './views/Cursos/Cursos.jsx';
import Pagamentos from './views/Pagamentos/pagamento.jsx';
import Carrinho from './views/Carrinho/cart.jsx';
import AgendaPop from './views/PopupAgenda/AgendaPopup.jsx';
import PopupCompras from './views/PopupCompras/ComprasPopup.jsx';
import PopupEmail from './views/PopupEmail/EmailPop.jsx';
import CheckAgendar from './views/CheckAgendamento/PopupConfirm.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LadingPage />} />
        <Route path='Agendamentos' element={<Agenda />} />
        <Route path='Cursos' element={<Cursos />} />
        <Route path='Pagamentos' element={<Pagamentos />} />
        <Route path='Carrinho' element={<Carrinho />} />
        <Route path='PopupAgenda' element={<AgendaPop />} />
        <Route path='PopCompras' element={<PopupCompras />} />
        <Route path='PopEmail' element={<PopupEmail />} />
        <Route path='ConfirmarAgendar' element={<CheckAgendar />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;