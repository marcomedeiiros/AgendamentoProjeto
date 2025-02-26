import React, { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react'; 
import './pagamentoEstilo.css';

function PagamentoEstilo() {
  const [paymentMethod, setPaymentMethod] = useState(null); 
  const [showPopup, setShowPopup] = useState(false); 
  const [cardData, setCardData] = useState({
    name: '',
    cpf: '',
    cardNumber: '',
    expirationDate: '',
    email: '',
    phone: '',  // Novo campo para número de telefone
    address: '', // Novo campo para endereço
    cvv: '' // Novo campo para número de segurança (CVV)
  });

  useEffect(() => {    
    setShowPopup(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value); 
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSubmitPayment = () => {    
    alert('Pagamento realizado!');
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <div className="popup-header">
              <h2>Pagamento</h2>               
              {paymentMethod !== 'cartao' && (
                <button onClick={handleClosePopup} className="close-btn">X</button>
              )}
            </div>

            <p className="payment-method-text">Escolha a forma de pagamento</p>

            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  value="cartao"
                  name="paymentMethod"
                  checked={paymentMethod === 'cartao'}
                  onChange={handlePaymentMethodChange}
                />
                Cartão de Crédito
              </label>
              <label>
                <input
                  type="radio"
                  value="pix"
                  name="paymentMethod"
                  checked={paymentMethod === 'pix'}
                  onChange={handlePaymentMethodChange}
                />
                PIX
              </label>
            </div>

            {paymentMethod === 'cartao' && (
              <div className="payment-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  value={cardData.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="cpf"
                  placeholder="CPF"
                  value={cardData.cpf}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Número do Cartão"
                  value={cardData.cardNumber}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="expirationDate"
                  placeholder="Data de Vencimento (MM/AA)"
                  value={cardData.expirationDate}
                  onChange={handleChange}
                />
                <input
                  type="email"  
                  name="email"
                  placeholder="Email (Importante)"
                  value={cardData.email}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Número de Telefone"
                  value={cardData.phone}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Endereço Completo"
                  value={cardData.address}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="Número de Segurança (CVV)"
                  value={cardData.cvv}
                  onChange={handleChange}
                />
              </div>
            )}

            {paymentMethod === 'pix' && (
              <div className="pix-qr-code">
                <QRCodeCanvas value="https://pixapi.com" size={256} />
                <p>Escaneie para pagar via PIX</p>
              </div>
            )}

            <div className="payment-buttons">
              {paymentMethod === 'cartao' && (
                <>
                  <button onClick={handleSubmitPayment} className="confirm-btn">Comprar</button>
                  <button onClick={handleClosePopup} className="cancel-btn">Cancelar</button>
                </>
              )}
              {paymentMethod === 'pix' && (
                <></> 
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PagamentoEstilo;