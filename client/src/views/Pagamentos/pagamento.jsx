import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { QRCodeCanvas } from 'qrcode.react'; 
import imgs from '../../imgs/arrayImagens';
import "./pagamentoEstilo.css";

function App() {
  const [numeroCartao, setNumeroCartao] = useState("");
  const [nomeTitular, setNomeTitular] = useState("");
  const [validade, setValidade] = useState("06/28");
  const [cvv, setCvv] = useState("");
  const [email, setEmail] = useState("");
  const [formaPagamento, setFormaPagamento] = useState(null); 
  const [tokenPix, setTokenPix] = useState(null); 
  const [tempoRestante, setTempoRestante] = useState(600); 
  const [parcelas, setParcelas] = useState(1); 
  const [formValido, setFormValido] = useState(false); 

  const limparDados = () => {
    setNumeroCartao("");
    setNomeTitular("");
    setValidade("06/28");
    setCvv("");
    setEmail("");
    setParcelas(1);
    setTempoRestante(600); 
    setFormValido(false); 
  };

  const handleNumeroCartaoChange = (e) => {
    let numeroInput = e.target.value.replace(/\D/g, "");
    if (numeroInput.length > 16) numeroInput = numeroInput.slice(0, 16);
    setNumeroCartao(numeroInput);
  };

  const handleNomeTitularChange = (e) => {
    const valor = e.target.value.slice(0, 30);
    setNomeTitular(valor);
  };

  const handleValidadeChange = (e) => {
    const inputString = e.target.value;
    if (inputString.length < 1) {
      setValidade("06/28");
      return;
    }    
    setValidade(inputString);
  };

  const handleCvvChange = (e) => {
    const input = e.target.value.slice(0, 3).replace(/\D/g, "");
    setCvv(input);  
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value); 
  };

  const handleFormaPagamentoChange = (e) => {
    setFormaPagamento(e.target.value); 
    limparDados();
  };

  const handleParcelasChange = (e) => {
    setParcelas(e.target.value);
  };

  const virarCartao = () => {
    document.getElementById("cartao").style.transform = "rotateY(180deg)";
  };

  const voltarCartao = () => {
    document.getElementById("cartao").style.transform = "rotateY(0deg)";
  };

  const handleSubmit = (e) => {
    e.preventDefault();   
    if (!formaPagamento) {
      alert("Por favor, escolha uma forma de pagamento.");
      return;
    }
    if (!formValido) {
      alert("Preencha todos os campos corretamente.");
      return;
    }
    alert("Formulário enviado com sucesso!");
  };

  const gerarTokenPix = () => {
    const tokenGerado = Math.random().toString(36).substring(2, 15); 
    setTokenPix(tokenGerado);
    setTempoRestante(600); 
  };

  useEffect(() => {
    if (formaPagamento === 'pix') {
      gerarTokenPix();  
    }
  }, [formaPagamento]);

  useEffect(() => {
    let intervalo;

    if (tempoRestante > 0 && tokenPix) {
      intervalo = setInterval(() => {
        setTempoRestante((prevTempo) => prevTempo - 1);
      }, 1000);
    } else if (tempoRestante === 0 && tokenPix) {
      alert("O tempo do QR Code expirou. Você precisa gerar um novo.");
      setTokenPix(null); 
    }

    return () => clearInterval(intervalo);
  }, [tempoRestante, tokenPix]);

  useEffect(() => {

    if (formaPagamento === "cartao") {
      setFormValido(
        numeroCartao.length === 16 &&
        nomeTitular.length > 0 &&
        validade.length === 5 &&
        cvv.length === 3 &&
        email.includes("@") && email.includes(".")
      );
    }
  }, [numeroCartao, nomeTitular, validade, cvv, email, formaPagamento]);

  const formatarTempo = (tempo) => {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  };

  return (
    <section className="fundo">
      <div className="wrapper">       
        <Link to="/Cursos" className="seta-voltar">
          <FiArrowLeft size={24} color="#000" />
          <span>Voltar</span>
        </Link>

        {formaPagamento === null ? (          
          <div className="escolha-pagamento">
            <h2>Escolha a forma de pagamento</h2>
            <button 
              className="btn-credito" 
              onClick={() => setFormaPagamento('cartao')}
            >
              Cartão de Crédito
            </button>
            <button 
              className="btn-pix" 
              onClick={() => setFormaPagamento('pix')}
            >
              PIX
            </button>
          </div>
        ) : (         
          <div className="formulario-pagamento">
            {formaPagamento === "cartao" && (
              <div className="credit-card" id="cartao">
                <div className="card-front">
                  <div className="branding">
                    <img src={imgs.chip} alt="chip" />
                    <img src={imgs.visa} alt="visa" />
                  </div>
                  <div className="card-number">
                    <div>
                      {Array.from({ length: 4 }).map((_, index) => (
                        <span key={index} className="card-number-display">
                          {numeroCartao[index] || "_"}
                        </span>
                      ))}
                    </div>
                    <div>
                      {Array.from({ length: 4 }).map((_, index) => (
                        <span key={index + 4} className="card-number-display">
                          {numeroCartao[index + 4] || "_"}
                        </span>
                      ))}
                    </div>
                    <div>
                      {Array.from({ length: 4 }).map((_, index) => (
                        <span key={index + 8} className="card-number-display">
                          {numeroCartao[index + 8] || "_"}
                        </span>
                      ))}
                    </div>
                    <div>
                      {Array.from({ length: 4 }).map((_, index) => (
                        <span key={index + 12} className="card-number-display">
                          {numeroCartao[index + 12] || "_"}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="details">
                    <div>
                      <span>Nome do Titular</span>
                      <span>{nomeTitular}</span> 
                    </div>
                    <div>
                      <span>Validade</span>
                      <span>{validade}</span> 
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <div className="black-strip"></div>
                  <div className="white-strip">
                    <span>CVV</span>
                    <div>{cvv}</div> 
                  </div>
                  <img src={imgs.visa} alt="visa" />
                </div>
              </div>
            )}

            {formaPagamento === "pix" && tokenPix && (
              <div className="qr-code-container">                
                <div className="qr-code">
                  <QRCodeCanvas 
                    value={`https://meuservidor.com/pagamento/pix?token=${tokenPix}`} 
                    size={256}
                  />
                </div>                
                <p>Esse QR Code é válido por {formatarTempo(tempoRestante)}. Após esse tempo, ele expirará.</p>
              </div>
            )}

            <form action="" className="form-pagamento" onSubmit={handleSubmit}>
              {formaPagamento === "cartao" && (
                <div>
                  <label htmlFor="numero-cartao">Número do cartão</label>
                  <input
                    type="text"
                    id="numero-cartao"
                    placeholder="5248 0821 7286 3754"
                    value={numeroCartao}
                    onChange={handleNumeroCartaoChange}
                    disabled={formaPagamento !== "cartao"}
                  />

                  <label htmlFor="nome-titular">Nome</label>
                  <input
                    type="text"
                    id="nome-titular-input"
                    placeholder="Digite seu nome completo"
                    value={nomeTitular}
                    onChange={handleNomeTitularChange}
                    disabled={formaPagamento !== "cartao"}
                  />

                  <label htmlFor="email">E-mail</label> 
                  <input
                    type="email"
                    id="email-input"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={handleEmailChange}
                  />

                  <div className="date-cvv">
                    <div>
                      <label htmlFor="validade">Data de vencimento:</label>
                      <input
                        type="month"
                        id="validade-input"
                        value={validade}
                        onChange={handleValidadeChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv">CVV:</label>
                      <input
                        type="text"
                        id="cvv"
                        placeholder="***"
                        value={cvv}
                        onChange={handleCvvChange}
                        onClick={virarCartao}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="parcelas">Parcelas:</label>
                    <select 
                      id="parcelas" 
                      value={parcelas} 
                      onChange={handleParcelasChange}
                    >
                      <option value="1">1x</option>
                      <option value="2">2x</option>
                      <option value="3">3x</option>                     
                    </select>
                  </div>
                </div>
              )}
              {formaPagamento === "cartao" && (
                <button 
                  type="submit" 
                  className="btn-enviar-pagamento" 
                  disabled={!formValido}  
                >
                  Comprar
                </button>
              )}
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;