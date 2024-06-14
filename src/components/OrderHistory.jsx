import { useEffect, useState } from 'react';
import userService from '../services/userService';

const OrderHistory = () => {
    const [orderHistory, setOrderHistory] = useState([]);

    useEffect(() => {
        const fetchOrderHistory = async () => {
            try {
                const orders = await userService.getOrderHistory();
                // Ordenar los pedidos por fecha de creación de forma ascendente
                orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setOrderHistory(orders);
            } catch (error) {
                console.error('Error fetching order history:', error);
            }
        };
        fetchOrderHistory();
    }, []);

    return (
        <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2"></h2>
            {orderHistory.length > 0 ? (
                orderHistory.map(order => (
                    <div key={order._id} className="border rounded-lg p-4 mt-4 shadow-lg">
                        <p className="px-2 py-2">ID del Pedido: {order._id}</p>
                        <p className="px-2 py-2">Fecha: {new Date(order.createdAt).toLocaleString()}</p>
                        <ul className="list-disc list-inside">
                            {order.products.map(product => (
                                <li className="px-1 py-1" key={product._id}>{product.productName} - {product.price.toFixed(2)} €</li>
                            ))}
                        </ul>
                        <p className="px-2 py-2">Total: {order.totalPrice.toFixed(2)} €</p>
                    </div>
                ))
            ) : (
                <p>No hay historial de pedidos disponible.</p>
            )}
        </div>
    );
};

export default OrderHistory;
