import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handlePageClick = (page) => {
    onPageChange(page);
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
  };

  return (
    <div className="flex justify-center mt-4">
      <nav className="inline-flex">
        <ul className="flex flex-wrap">
          {getPageNumbers().map((page) => (
            <li key={page}>
              <button
                onClick={() => handlePageClick(page)}
                className={`${
                  currentPage === page
                    ? 'bg-blue-500 text-white'
                    : 'text-blue-500 hover:bg-blue-100'
                } font-medium px-4 py-2 mx-1 rounded`}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
