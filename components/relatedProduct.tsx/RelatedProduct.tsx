import React from "react";
import { useDispatch } from "react-redux";
import { Product } from "../../types";
import {Grid } from "@mui/material";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { addToCart } from "../../redux/store";

interface RelatedProductProps {
    product: Product;
}

const RelatedProduct: React.FC<RelatedProductProps> = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        console.log(product);
        dispatch(addToCart(product));
    };

    const {
        Title,
        Price,
        DiscountPrice,
        ProductImage,
        ID
    } = product;

    return (
<>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className={styles.pruduct_holder}>
            <div className={styles.prdtimg__holder}>
              <img src={ProductImage} height={200} width={200} alt={Title}/>
            </div>
            <div className={styles.product_price}>
                <Link href={`/${ID}`} as={`${Title}`}>{Title}</Link>
                <h3>Rs. {DiscountPrice} <span>RS. {Price}</span></h3>
                <button className="theme_btn" onClick={handleAddToCart}>Add to Cart</button>
            </div>
            </div>
        </Grid>
        
</>
    );
};

export default RelatedProduct;
