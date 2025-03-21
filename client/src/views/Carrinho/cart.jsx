import React, { useState } from 'react';
import './cartEstilo.css'; 
import imgs from '../../imgs/arrayImagens';
import PopupCompras from '../PopupCompras/ComprasPopup'; 

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Curso de Nevou', description: 'Métodos de nevou sem ardências...', img: imgs.nevou, price: 199.99, quantity: 0 },
    { id: 2, name: 'Curso de Pigmentação', description: 'Corte do Jaca Curtinho...', img: imgs.pigmento, price: 249.99, quantity: 0 },
    { id: 3, name: 'Curso de Reflexo', description: 'Reflexo na risca...', img: imgs.reflexo, price: 299.99, quantity: 0 },
  ]);

  const [isOpen, setIsOpen] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const updateQuantity = (id, change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.min(Math.max(item.quantity + change, 0), 1) } 
          : item
      )
    );
  };

  const handleCheckout = () => {
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    
    if (totalQuantity === 0) {
      setShowPopup(true);  
    } else {
      window.location.href = '/Pagamentos'; 
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="cart-overlay">
          <div className="cart-popup">
            <button className="close-btn" onClick={handleClose}>X</button>
            <h2>Carrinho de Compras</h2>
            <ul>
              {cartItems.map(item => (
                <li key={item.id} className="cart-item">
                  <img src={item.img} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p className="cart-item-price">R${item.price.toFixed(2)}</p> 
                    <div className="cart-item-quantity">                      
                      <button className="decrement" onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity === 0}>-</button>
                      <span>{item.quantity}</span>                       
                      <button className="increment" onClick={() => updateQuantity(item.id, 1)} disabled={item.quantity === 1}>+</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <button className="checkout-btn" onClick={handleCheckout}>
              <i className="fa-solid fa-basket-shopping"></i> Finalizar Compra
            </button>
          </div>
        </div>
      )}
      
      {showPopup && <PopupCompras message="Selecione a quantidade de cursos que você deseja comprar!" />}
    </div>
  );
}

export default Cart;