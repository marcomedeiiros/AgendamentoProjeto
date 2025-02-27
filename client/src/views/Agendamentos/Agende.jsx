import React, { useState } from 'react';
import "./AgendeEstilo.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function AgendaEstilo() {
  const [phone, setPhone] = useState('');
  const [datetime, setDatetime] = useState('');
  const [email, setEmail] = useState('');
  const [isAfterHours, setIsAfterHours] = useState(false);
  const [isBeforeAllowedTime, setIsBeforeAllowedTime] = useState(false);

  const handlePhoneChange = (e) => {
    let input = e.target.value;

    input = input.replace(/\D/g, '');

    if (input.length <= 2) {
      input = `(${input}`;
    } else if (input.length <= 7) {
      input = `(${input.slice(0, 2)}) ${input.slice(2)}`;
    } else {
      input = `(${input.slice(0, 2)}) ${input.slice(2, 7)}-${input.slice(7, 11)}`;
    }

    if (input.length > 15) {
      input = input.slice(0, 15);
    }

    setPhone(input);
  };

  const handleDatetimeChange = (e) => {
    const selectedDatetime = e.target.value;
    setDatetime(selectedDatetime);

    const selectedDate = new Date(selectedDatetime);
    const selectedHour = selectedDate.getHours();
    const selectedMinutes = selectedDate.getMinutes();

    const allowedStartHour = 9;
    const allowedStartMinutes = 30;
    const allowedEndHour = 20;

    const isAfter20Hours = selectedHour >= allowedEndHour;
    const isBefore930AM = selectedHour < allowedStartHour || (selectedHour === allowedStartHour && selectedMinutes < allowedStartMinutes);

    setIsAfterHours(isAfter20Hours);
    setIsBeforeAllowedTime(isBefore930AM);

    if (isAfter20Hours || isBefore930AM) {
      alert('Horário inválido! O agendamento deve ser feito entre 09:30 e 20:00.');
      setDatetime('');
    }
  };

  // Função para validar o e-mail
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se o e-mail é válido
    if (!validateEmail(email)) {
      alert('Por favor, insira um e-mail válido!');
      return;
    }

    if (isBeforeAllowedTime || isAfterHours) {
      alert('Por favor, escolha um horário entre 09:30 e 20:00!');
      return;
    }

    alert('Agendamento realizado com sucesso!');
  };

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

            <form action="" className="form" onSubmit={handleSubmit}>
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
                      value={phone}
                      onChange={handlePhoneChange}
                      maxLength="15"
                    />
                    <i className="fa-solid fa-mobile-screen"></i>
                  </div>
                </div>

                <div className="input-box">
                  <label htmlFor="email" className="form-label">
                    E-mail
                  </label>
                  <div className="input-field">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Digite seu e-mail..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <i className="fa-solid fa-envelope"></i>
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
                      value={datetime}
                      onChange={handleDatetimeChange}
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
                    <i className="fa-solid fa-bell"></i>
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

              <button 
                type="submit" 
                className="btn-default"
                disabled={isBeforeAllowedTime || isAfterHours} 
              >
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