import './ladingEstilo.css';
import imgs from '../../imgs/arrayImagens';


function ladingEstilo() {
  return (
    <>
      <div className="ladingEstilo">
        <header className="header">
          <div className='header-logo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scissors"><circle cx="6" cy="6" r="3" /><path d="M8.12 8.12 12 12" /><path d="M20 4 8.12 15.88" /><circle cx="6" cy="18" r="3" /><path d="M14.8 14.8 20 20" /></svg>

            <h1 className='logo-japa'>Japa dos cortes</h1>
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
              <p className='color'>métodos sem ardencias</p>
              <span className='color'>Em breve...</span>
            </div>

            <div className="card">
            <a href="/Cursos"><img src={imgs.pigmento} alt="corte branco" className='logo-pigmento' /></a>
              <h2 className='color'>Pigmentado</h2>
              <p className='color'>Corte do Jaca Curtinho</p>
              <span className='color'>Em breve...</span>
            </div>

            <div className="card">
              <a href="/Cursos"><img src={imgs.reflexo} alt="corte branco" className='logo-reflexo' /></a>
              <h2 className='color'>Reflexo</h2>
              <p className='color'>Reflexo na risca</p>
              <span className='color'>Em breve...</span>
            </div>

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