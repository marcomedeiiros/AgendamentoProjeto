import './ladingEstilo.css';
import imgs from '../../imgs/arrayImagens';


function ladingEstilo() {
  return (
    <>
      <div className="ladingEstilo">
        <header className="header">
          <div className='header-logo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scissors"><circle cx="6" cy="6" r="3" /><path d="M8.12 8.12 12 12" /><path d="M20 4 8.12 15.88" /><circle cx="6" cy="18" r="3" /><path d="M14.8 14.8 20 20" /></svg>

            <a href="/"><h1 className='logo-japa'>Japa dos cortes</h1></a>
          </div>
          <ul className='nav'>
            <li><a href="/">Início</a></li>
            <li><a href="/Agendamentos">Agendamentos</a></li>
            <li><a href="/Cursos">Cursos</a></li>
          </ul>
        </header>
        <section className='text-foto'>
          <div className='main-text'>
            <h1 >Transforme <br /> Seu Estilo com os<br /> Melhores Cortes<br /> <span>de Cabelo Masculino!</span></h1>
            <p>Oferecemos cursos especializados para barbeiros que querem evoluir e dominar os cortes de cabelo.
              Aprenda técnicas avançadas e se destaque no mercado comigo!</p>
            <a href="https://api.whatsapp.com/"><button className='whatts-btn'>Whatsapp</button></a>
            <a href="https://www.instagram.com/japa_dos_corte?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><button className='insta-btn'>Instagram</button></a>
          </div>
          <img src={imgs.japa} alt="japa do corte" className='logo-barbearia' />

        </section>

        <section className='tab-cursos'>
          <h2 className='header2'>Meus <span>Cursos</span></h2>
          <div className="cards">
            <div className="card">
              <a href="/Cursos"><img src={imgs.nevou} alt="corte branco" className='logo-nevou' /></a>
              <h2 className='color'>Nevou</h2>
              <a href="/Cursos"><p className='color'>Veja mais informações...</p></a>
            </div>

            <div className="card">
              <a href="/Cursos"><img src={imgs.pigmento} alt="corte branco" className='logo-pigmento' /></a>
              <h2 className='color'>Pigmentado</h2>
              <a href="/Cursos"><p className='color'>Veja mais informações...</p></a>
            </div>

            <div className="card">
              <a href="/Cursos"><img src={imgs.reflexo} alt="corte branco" className='logo-reflexo' /></a>
              <h2 className='color'>Reflexo</h2>
              <a href="/Cursos"><p className='color'>Veja mais informações...</p></a>
            </div>

          </div>
        </section>

        <section className='Agendamentos'>
          <div className="text-agendar">
            <h1>Agende seu Corte ou Barba com Conforto <br /> <span>e Praticidade.</span></h1>
            <p>Na minha barbearia, a sua experiência vai além de um simples corte de cabelo. Ofereço um atendimento exclusivo, especializado em cortes modernos e serviços de barbearia, tudo feito sob medida para o seu estilo. Com meu sistema de agendamento online, você escolhe o horário que melhor se encaixa na sua rotina e garante um atendimento sem espera. Agende agora e viva a experiência de sair renovado, com a confiança de estar em boas mãos!</p>
            <a href="/Agendamentos"><button className='btn-agenda'>Faça seu agendamento</button></a>
            <p><strong>Endereço:</strong> Av. Presi Kennedy, 384 - Barramares, Vila Velha - ES</p>
            <p><strong>Horário de Funcionamento:</strong> Aos Sábados: 09:30 - 20:00</p>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6287.715292300547!2d-40.346984642483925!3d-20.436510250301783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb84062f2f3d009%3A0x71b6c3d55854a56b!2sBarramares%2C%20Vila%20Velha%20-%20ES!5e0!3m2!1spt-BR!2sbr!4v1740531053680!5m2!1spt-BR!2sbr"
              width="auto"
              height="350"
              style={{ borderRadius: '50px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <section className='footer'>
          <p>2025 - 2026 | Todos os direitos reservados</p>
        </section>
      </div>
    </>
  );
}

export default ladingEstilo;