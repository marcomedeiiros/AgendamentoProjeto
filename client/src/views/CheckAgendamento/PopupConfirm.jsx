import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import './estilo.css';

function PopupConfirm() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 4000);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className="popup-container-corfirmar">
      <div className="popup-confirmar">
        <FaCheckCircle className="popup-icon" />
        <div className="popup-heading">
          <h2>Agendamento Confirmado!</h2>
        </div>
        <div className="popup-message">
          <p>Seu agendamento foi realizado com sucesso.</p>
        </div>
      </div>
    </div>
  );
}

export default PopupConfirm;
