import React from 'react';
import "./AgendeEstilo.css";

function AgendaEstilo() {
  return (
    <>
      <div className="AgendaEstilo">
        <header className="header-Agenda">
          <div className='header-logo-Agenda'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scissors"><circle cx="6" cy="6" r="3" /><path d="M8.12 8.12 12 12" /><path d="M20 4 8.12 15.88" /><circle cx="6" cy="18" r="3" /><path d="M14.8 14.8 20 20" /></svg>

            <h1 className='logo-japa-Agenda'>Japa dos cortes</h1>
          </div>
          <ul className='nav-Agenda'>
            <li><a href="/">Início</a></li>
            <li><a href="/Agendamentos">Agendamentos</a></li>
            <li><a href="/Cursos">Cursos</a></li>
          </ul>
        </header>        
      </div>
    </>
  );
}

export default AgendaEstilo;
