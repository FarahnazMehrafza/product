/* ProductDetails.js
import {useSta}



import { useParams, useHistory } from 'react-router-dom'; // Assuming you're using react-router for navigation
import useProductStore from '../stores/useProductStore';

const ProductDetails = ({title,description,price}: ProdtsDetailprops) => {
  const { productId } = useParams(); // Assuming you have a route parameter for productId
  const history = useHistory();
  const product = useProductStore(state => state.products.find(prod => prod.id === productId));

  const handleEdit = () => {
    history.push(`/products/${productId}/edit`); // Assuming your edit route is defined like this
  };

  const handleDelete = () => {
    // Implement delete functionality here using Zustand or any other state management library
    // For example:
    useProductStore.setState(state => ({
      products: state.products.filter(prod => prod.id !== productId)
    }));
    history.push('/products'); // Redirect to product list after deletion
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return [(
    <div>
      <h2>{product.name}</h2>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      {product.image && <img src={product.image} alt={product.name} />}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  ) ;

export default ProductDetails;
*/
