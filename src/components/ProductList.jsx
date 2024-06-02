import { useEffect, useState } from 'react'; 
import productService from '../services/productService';
import ProductCard from './ProductCard';
import Pagination from './pagination'; // Asegúrate de importar el componente Pagination

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Estado para almacenar la página actual
  const [totalPages, setTotalPages] = useState(1); // Estado para almacenar el total de páginas

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getProducts({}, currentPage); // Pasa currentPage al servicio
        setProducts(data.products);
        setTotalPages(data.totalPages); // Actualiza el total de páginas
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]); // Ejecuta el efecto cuando currentPage cambia

  const handlePageChange = (page) => {
    setCurrentPage(page); // Actualiza la página actual cuando se cambia de página
  };

  return (
    <div className="container mx-auto p-4">
      
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </>
      )}
    </div>
  );
};

export default ProductList;
