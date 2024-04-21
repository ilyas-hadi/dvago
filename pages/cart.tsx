import Cart from '../components/addToCart/AddToCart';
import { Container } from "@mui/material";
const CartPage: React.FC = () => {
  return (
    <Container maxWidth="lg" className='y_pad'>
      <Cart />
    </Container>
  );
};

export default CartPage;