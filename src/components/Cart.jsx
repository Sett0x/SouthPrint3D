import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import userService from '../services/userService';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userCart = await userService.getCart();
        setCart(userCart);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchCart();
  }, []);

  const handleRemoveItem = async (productId) => {
    try {
      await userService.removeItemFromCart(productId);
      // Actualizar el carrito después de eliminar el producto
      const updatedCart = await userService.getCart();
      setCart(updatedCart);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const handleClearCart = async () => {
    try {
      await userService.clearCart();
      // Actualizar el carrito después de limpiarlo
      setCart([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const handleConfirmOrder = async () => {
    try {
      await userService.confirmOrder();
      // Redirigir a la página de historial de pedidos después de confirmar el pedido
      history.push('/order-history');
    } catch (error) {
      console.error('Error confirming order:', error);
    }
  };

  if (!cart || cart.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

  return (
    <div className="cart-container fixed top-0 right-0 h-full w-64 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Carrito de Compras</h1>
        {cart.map(item => (
          <div key={item.productId} className="border rounded-lg p-4 mt-4">
            <p>Producto: {item.productName}</p>
            <p>Precio: ${item.price.toFixed(2)}</p>
            <button onClick={() => handleRemoveItem(item.productId)}>Eliminar del carrito</button>
          </div>
        ))}
        <div className="mt-4">
          <button onClick={handleClearCart}>Vaciar Carrito</button>
          <button onClick={handleConfirmOrder}>Confirmar Pedido</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
