import React from 'react';
import "./CursosEstilo.css";
import imgs from '../../imgs/arrayImagens';

function Cursos() {
  return (
    <>
      <div className="Cursos">
        <header className="header-Cursos">
          <div className='header-logo-Cursos'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scissors"><circle cx="6" cy="6" r="3" /><path d="M8.12 8.12 12 12" /><path d="M20 4 8.12 15.88" /><circle cx="6" cy="18" r="3" /><path d="M14.8 14.8 20 20" /></svg>
            <a href="/"><h1 className='logo-japa-Cursos'>Japa dos cortes</h1></a>
          </div>
          <ul className='nav-Cursos'>
            <li><a href="/">Início</a></li>
            <li><a href="/Agendamentos">Agendamentos</a></li>
            <li><a href="/Cursos">Cursos</a></li>
          </ul>
        </header>

        <section className='course-section'>
          <h2 className='section-header'>Meus <span>cursos</span></h2>
          <div className="course-cards">
            
            <div className="course-card">
              <img src={imgs.nevou} alt="Curso Nevou - Métodos sem ardências" className='logo-cabelo' />
              <h2 className='course-title'>Nevou</h2>
              <p className='course-description'>Métodos sem ardências, um curso inovador que ensina cortes de cabelo sem causar desconforto.</p>              
              <button className="btn-adquirir">Adquirir</button>
            </div>

            
            <div className="course-card">
              <img src={imgs.pigmento} alt="Curso Pigmentado - Corte do Jaca Curtinho" className='logo-cabelo' />
              <h2 className='course-title'>Pigmentado</h2>
              <p className='course-description'>Aprenda o famoso Corte do Jaca Curtinho, um estilo que está fazendo sucesso.</p>              
              <button className="btn-adquirir">Adquirir</button>
            </div>

            
            <div className="course-card">
              <img src={imgs.reflexo} alt="Curso Reflexo - Reflexo na risca" className='logo-cabelo' />
              <h2 className='course-title'>Reflexo</h2>
              <p className='course-description'>Aperfeiçoe sua técnica com o curso Reflexo na risca, trazendo precisão para seus cortes.</p>              
              <button className="btn-adquirir">Adquirir</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Cursos;