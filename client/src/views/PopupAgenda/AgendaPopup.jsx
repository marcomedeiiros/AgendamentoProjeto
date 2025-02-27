import React, { useState, useEffect } from 'react';
import './PopupEstilo.css';

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const showPopup = () => {
    setIsPopupVisible(true);

    setTimeout(() => {
      setIsPopupVisible(false);
    }, 4000); 
  };

  useEffect(() => {
    showPopup();  
  }, []);

  return (
    <div>
      {isPopupVisible && (
        <div className="popup-overlay-agenda">
          <div className="popup-agenda">
            <h2>Horário inválido!</h2>
            <p>O agendamento deve ser feito até entre 09:30 até 20:00.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
