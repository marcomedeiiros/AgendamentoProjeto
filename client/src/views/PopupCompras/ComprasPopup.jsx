import React, { useState, useEffect } from 'react';
import './PopupCompras.css'; 

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
        <div className="popup-overlay-compras">
          <div className="popup-compras">
            <h2>Atenção!</h2>
            <p>Selecione a quantidade de cursos que você deseja comprar.</p>
          </div>
        </div>
      )}      
    </div>
  );
}

export default App;