import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import RelatedProduct from '../components/relatedProduct.tsx/RelatedProduct';
import axios from 'axios';
import { Product, ProductDetails} from '../types'; 
import { fetchRelatedProducts } from './api/api'; 
import { Container, Grid } from "@mui/material";
import styles from "../styles/Home.module.css";
import Link from 'next/link';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/store';

interface ProductPageProps {
  productDetails: ProductDetails | null;
  relatedProducts: Product[];
}

const ProductPage: React.FC<ProductPageProps> = ({ productDetails, relatedProducts }) => {
  const [selectedValue, setSelectedValue] = React.useState('a');
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleAddToCart = () => {
    console.log('Adding to cart:', productDetails); // Log productDetails
    if (productDetails && typeof productDetails.ID === 'string') {
      dispatch(addToCart(productDetails));
    }
  };

  if (!productDetails) {
    return <p>Product not found</p>;
  }

  const {
    Title,
    Description,
    Price,
    ProductImage,
    Variations,
    Brand,
    BrandSlug,
    MetaTitle,
    MetaDescription
  } = productDetails;

  return (
    <>
       <Head>
        <title>{`Dvago || ${Title}`}</title>
        <meta name="title" content={`${MetaTitle}`} />
        <meta name="description" content={`${MetaDescription}`} />
        
      </Head>
      <Container maxWidth="lg" className='y_pad'>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="imageHOlder">
              <img src={ProductImage} alt={Title} style={{ width: '200px', height: 'auto' }} />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="detailprdContent">
              <h1>{Title}</h1>
              <h2 className='dlBrand'>Brand: <Link href={`/brands/${BrandSlug}`}>{Brand}</Link></h2>
              <p className='dlprice'>Price: {Price}</p>
              <FormControlLabel 
                control={<Radio checked={selectedValue === 'a'} onChange={handleChange} value="a" style={{ color: '#76bc21' }} />}
                label={`Per${Variations}`}
              />
              <div className="tim_btn">
                <div className="acpted_tim">
                  <span>Expected time 1 hour </span> | <span><svg width="25" height="20" viewBox="0 0 24 24"><path fill="#76BD21" d="M17.415 9H15.81V6.51C15.7935 5.39475 14.8853 4.5 13.77 4.5H2.79C1.67475 4.5 0.7665 5.39475 0.75 6.51V15.99C0.7665 17.1052 1.67475 18 2.79 18H5.415C5.83875 19.1678 7.1295 19.7715 8.298 19.347C8.92425 19.1197 9.41775 18.6262 9.645 18H16.335C16.7588 19.1678 18.0495 19.7715 19.218 19.347C19.8443 19.1197 20.3378 18.6262 20.565 18H21.525C22.4775 18 23.25 17.2275 23.25 16.275V14.865C23.2628 11.6385 20.6565 9.01275 17.43 9C17.4247 9 17.4202 9 17.415 9V9ZM7.5 13.17C7.35975 13.2862 7.19175 13.3643 7.0125 13.395C6.63525 13.4648 6.249 13.3275 6 13.035L5.175 12C4.914 11.6895 4.947 11.2275 5.25 10.9575C5.568 10.692 6.04125 10.7355 6.306 11.0535L6.3075 11.055L6.8775 11.73L9.8775 9.2625C10.1798 8.97975 10.6545 8.9955 10.9373 9.29775C11.22 9.6 11.2043 10.0748 10.902 10.3575C10.8795 10.3785 10.8555 10.3987 10.83 10.4167L7.5 13.17ZM7.5 18C7.086 18 6.75 17.664 6.75 17.25C6.75 16.836 7.086 16.5 7.5 16.5C7.914 16.5 8.25 16.836 8.25 17.25C8.25 17.664 7.914 18 7.5 18ZM18.45 18C18.036 18 17.7 17.664 17.7 17.25C17.7 16.836 18.036 16.5 18.45 16.5C18.864 16.5 19.2 16.836 19.2 17.25C19.2 17.664 18.864 18 18.45 18ZM16.3275 16.5H15.81V10.5H17.415C19.809 10.5 21.75 12.441 21.75 14.835V14.865V16.275C21.7545 16.395 21.66 16.4955 21.54 16.5C21.5347 16.5 21.5295 16.5 21.525 16.5H20.5725C20.2358 15.6323 19.4047 15.0533 18.4792 15.0413C17.5335 15.0293 16.6718 15.612 16.3275 16.5Z"></path></svg> Quick Delivery</span>
                </div>
                <div className="adto_cart theme_btn">
                  <button onClick={handleAddToCart}>Add To Cart</button>
                </div>
              </div>
          
            </div>
          </Grid>
        </Grid>
        <div className="more_detail">
          <p><strong>Description:</strong> {Description}</p>
        </div>
      </Container>

      {/* Related Product start  */}
      <div className="relatedProducts y_pad">
        
          {/*grid system */}
        <Container maxWidth="lg">
        <h2>Related Products</h2>
          <div className={styles.container}>
            {/* grid flex start*/}
            <Grid container spacing={2} columns={12}>
              {relatedProducts.map((product) => (
              <RelatedProduct key={product.ID} product={product} />
              ))}
            </Grid>
            {/* grid flex end--*/}
          </div>
        </Container>

          {/*grid system */}

      </div>
      {/* Related Product start  */}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async ({ params }) => {
  const slug = params?.slug;

  if (!slug || typeof slug !== 'string') {
    return {
      notFound: true,
    };
  }

  try {
    const apiUrl = `https://apidb.dvago.pk/AppAPIV3/GetProductDetailBySlugV2?ProductSlug=${slug}&BranchCode=32`;
    const response = await axios.get(apiUrl);
    const responseData = response.data;
    console.log(responseData);

    if (responseData.ResponseType === 1 && responseData.Data.length > 0) {
      const productDetails: ProductDetails = responseData.Data[0];

      // Fetch related products
      const relatedProducts = await fetchRelatedProducts();

      return {
        props: {
          productDetails,
          relatedProducts,
        },
      };
    } else {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    console.error('Error fetching product details:', error);
    return {
      notFound: true,
    };
  }
};

export default ProductPage;
