import React from 'react';
import "./AgendeEstilo.css";
import imgs from '../../imgs/arrayImagens'; 

function AgendaEstilo() {
  return (
    <>
      <div className="AgendaEstilo">
        <header className="header-Agenda">
          <div className='header-logo-Agenda'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scissors">
              <circle cx="6" cy="6" r="3" />
              <path d="M8.12 8.12 12 12" />
              <path d="M20 4 8.12 15.88" />
              <circle cx="6" cy="18" r="3" />
              <path d="M14.8 14.8 20 20" />
            </svg>
            <a href="/"><h1 className='logo-japa-Agenda'>Japa dos cortes</h1></a>
          </div>
          <ul className='nav-Agenda'>
            <li><a href="/">Início</a></li>
            <li><a href="/Cursos">Cursos</a></li>
            <li><a href="/Agendamentos">Agendamentos</a></li>
          </ul>
        </header>

        <section className='agendar'>
          <main className="form_container">
            <div className="form-header">
              <h1 className="form-title">
                Agendar Corte
              </h1>
            </div>

            <form action="" className="form">
              <div className="input-container">
                <div className="input-box">
                  <label htmlFor="name" className="form-label">
                    Nome completo
                  </label>
                  <div className="input-field">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Digite seu nome..."
                    />
                    <i className="fa-regular fa-user"></i>
                  </div>
                </div>

                <div className="input-box">
                  <label htmlFor="phone" className="form-label">
                    Telefone de contato
                  </label>
                  <div className="input-field">
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="(XX) XXXXX-XXXX"
                      pattern="^\(\d{2}\) \d{5}-\d{4}$"
                    />
                  </div>
                </div>

                <div className="input-box">
                  <label htmlFor="birthdate" className="form-label">
                    Data e horario
                  </label>
                  <div className="input-field">
                    <input
                      type="datetime-local"
                      name="birthdate"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="input-box">
                  <label htmlFor="observations" className="form-label">
                    Observações
                  </label>
                  <div className="input-field">
                    <textarea
                      name="observations"
                      className="form-control"
                      placeholder="Deixe suas observações aqui..."
                    />
                  </div>
                </div>

                <div className="radio-container">
                  <label className="form-label">
                    Especifique o corte de cabelo
                  </label>

                  <div className="gender-inputs">
                    <div className="radio-box">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        className="form-control"
                      />
                      <label htmlFor="female" className="form-label">
                        Reflexo
                      </label>
                    </div>

                    <div className="radio-box">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        className="form-control"
                      />
                      <label htmlFor="male" className="form-label">
                        Pigmentação
                      </label>
                    </div>

                    <div className="radio-box">
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        className="form-control"
                      />
                      <label htmlFor="other" className="form-label">
                        Nevou
                      </label>
                    </div>

                    <div className="radio-box">
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        className="form-control"
                      />
                      <label htmlFor="other" className="form-label">
                        Outros
                      </label>
                    </div>
                  </div>
                </div>

                <div className="input-box">
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      name="confirm"
                      id="confirm"
                      required
                    />
                    <label htmlFor="confirm" className="form-label">
                      Eu confirmo o agendamento e li os termos de serviço.
                    </label>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-default">
                <i className="fa-solid fa-check"></i>
                Agendar
              </button>
            </form>
          </main>
        </section>
      </div>
    </>
  );
}

export default AgendaEstilo;