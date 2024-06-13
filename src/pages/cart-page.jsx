// cart-page.jsx

import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import userService from '../services/userService';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [redirect, setRedirect] = useState(false);

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
                setLoading(false);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    const handleRemoveItem = async (productId) => {
        try {
            await userService.removeItemFromCart(productId);
            setCartItems(cartItems.filter(item => item._id !== productId));
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    const handleClearCart = async () => {
        try {
            await userService.clearCart();
            setCartItems([]);
        } catch (error) {
            console.error('Error clearing cart:', error);
        }
    };

    const handleConfirmOrder = async () => {
        try {
            await userService.confirmOrder();
            setRedirect(true);
        } catch (error) {
            console.error('Error confirming order:', error);
        }
    };

    if (redirect) {
        return <Navigate to="/orders" replace={true} />;
    }

    if (loading) {
        return <div>Cargando productos del carrito...</div>;
    }

    return (
        <div className="container mx-auto py-8 px-8">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Carrito de Compras</h1>
            {cartItems.length === 0 ? (
                <p>No hay productos en tu carrito.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cartItems.map(item => (
                        <div key={item._id} className="bg-white p-4 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <img src={getFormattedImageURL(item.image)} alt={item.name} className="w-16 h-16 object-contain mr-4" />
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                                    <p className="text-gray-600">Precio total: ${item.totalPrice}</p>
                                </div>
                            </div>
                            <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none"
                                onClick={() => handleRemoveItem(item._id)}>
                                Eliminar
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <div className="mt-4">
                <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none"
                    onClick={handleClearCart}>
                    Vaciar Carrito
                </button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md ml-4 hover:bg-blue-600 focus:outline-none"
                    onClick={handleConfirmOrder}>
                    Confirmar Pedido
                </button>
                <Link to="/products" className="ml-4 text-blue-500 hover:underline">Seguir comprando</Link>
            </div>
        </div>
    );
};

export default CartPage;
