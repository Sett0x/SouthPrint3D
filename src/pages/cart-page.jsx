import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import userService from '../services/userService';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState('0.00');
    const [loading, setLoading] = useState(true);
    const [redirect, setRedirect] = useState(false);
    const [redirectToLogin, setRedirectToLogin] = useState(false); // Estado para la redirección a login
    const [message, setMessage] = useState(null); // Estado para mensajes de confirmación o error

    const getFormattedImageURL = (image) => {
        const nameWithoutExtension = image.split('.')[0];
        const folderName = nameWithoutExtension.slice(0, -2);
        return `/products/${folderName}/${image}`;
    };

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await userService.getCart();
                setCartItems(response.userCart);
                setTotalPrice(response.totalPrice);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching cart items:', error);
                setRedirectToLogin(true); // Establecer redirectToLogin en true si no hay sesión activa
            }
        };

        fetchCartItems();
    }, []);

    const handleRemoveItem = async (productId) => {
        try {
            await userService.removeItemFromCart(productId);
            // Filtrar el elemento del carrito
            const updatedCartItems = cartItems.filter(item => item._id !== productId);
            // Actualizar los elementos del carrito
            setCartItems(updatedCartItems);
            // Recalcular el totalPrice sumando los precios de los elementos restantes
            const newTotalPrice = updatedCartItems.reduce((acc, item) => acc + item.totalPrice, 0);
            setTotalPrice(newTotalPrice.toFixed(2)); // Ajustar a 2 decimales
            setMessage('Producto eliminado del carrito.');
        } catch (error) {
            console.error('Error removing item from cart:', error);
            setMessage('Error al eliminar el producto del carrito.');
        }
    };

    const handleClearCart = async () => {
        try {
            await userService.clearCart();
            setCartItems([]);
            setMessage('Carrito vaciado correctamente.');
        } catch (error) {
            console.error('Error clearing cart:', error);
            setMessage('Error al vaciar el carrito.');
        }
    };

    const handleConfirmOrder = async () => {
        try {
            await userService.confirmOrder();
            setRedirect(true);
        } catch (error) {
            console.error('Error confirming order:', error);
            setMessage('Error al confirmar el pedido.');
        }
    };

    // Si redirectToLogin es true, redirige a la página de inicio de sesión
    if (redirectToLogin) {
        return <Navigate to="/login" replace={true} />;
    }

    if (redirect) {
        return <Navigate to="/profile" replace={true} />;
    }

    if (loading) {
        return <div>Cargando productos del carrito...</div>;
    }

    return (
        <div className="container mx-auto py-8 px-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Carrito de Compras</h1>
            {message && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <span className="block sm:inline">{message}</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" onClick={() => setMessage(null)}>
                            <title>Cerrar</title>
                            <path fillRule="evenodd" d="M2.293 3.293a1 1 0 011.414 0L10 8.586l6.293-6.293a1 1 0 111.414 1.414L11.414 10l6.293 6.293a1 1 0 11-1.414 1.414L10 11.414l-6.293 6.293a1 1 0 01-1.414-1.414L8.586 10 2.293 3.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </span>
                </div>
            )}
            {cartItems.length === 0 ? (
                <p>No hay productos en tu carrito.</p>
            ) : (
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {cartItems.map(item => (
                            <div key={item._id} className="bg-white p-4 rounded-lg shadow-md relative">
                                <div className="flex items-center mb-4">
                                    <img src={getFormattedImageURL(item.image)} alt={item.name} className="w-24 h-24 object-contain mr-4" />
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                                        <p className="text-gray-600">{item.totalPrice} €</p>
                                    </div>
                                </div>
                                <button
                                    className="absolute bottom-2 right-2 bg-transparent border-none p-0 focus:outline-none"
                                    onClick={() => handleRemoveItem(item._id)}
                                >
                                    <img src="/icons/rubbish-bin.svg" alt="Eliminar" className="w-6 h-6" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-800 text-xl mb-4">Total: {totalPrice} €</p>
                        <div className="flex space-x-4">
                            <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none"
                                onClick={handleClearCart}>
                                Vaciar Carrito
                            </button>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                                onClick={handleConfirmOrder}>
                                Confirmar Pedido
                            </button>
                            <Link to="/products" className="text-blue-500 hover:underline flex items-center">
                                Seguir comprando
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
