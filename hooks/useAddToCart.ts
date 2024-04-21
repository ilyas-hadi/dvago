import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/store';

const useAddToCart = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (productId: string) => {
    dispatch(addToCart(productId));
  };

  return addToCartHandler;
};

export default useAddToCart;