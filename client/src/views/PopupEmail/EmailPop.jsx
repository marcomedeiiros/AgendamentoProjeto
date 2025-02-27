import React, { useState, useEffect } from 'react';
import './estilo.css'; 

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
        <div className="email-popup-overlay">
          <div className="email-popup">            
            <p>Por favor, insira um e-mail válido!</p>
          </div>
        </div>
      )}      
    </div>
  );
}

export default App;