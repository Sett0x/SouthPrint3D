import PropTypes from 'prop-types';

export const ProductPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  averageRating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired
});
