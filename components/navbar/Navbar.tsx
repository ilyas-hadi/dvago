// navbar.tsx

import React from 'react';
import styles from './navbar.module.css';
import Logo from '/public/dvago-logo.svg'; 
import location from '/public/address-icon.svg'; 
import arrowRight from '/public/right-arrow.svg'; 
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


export default function Navbar() {
   const {cartItem} = useSelector((state: RootState) => state.cart);
   return (
      <>
         <header>
            <Container maxWidth="lg">
               <div className={styles.navList__top}>
                  <div className={styles.logo_dev}>
                     <Link href="/"><Image priority={false} src={Logo} width="120" height="48" alt="logo image" /></Link>
                  </div>
                  <div className={styles.nav_items}>
                     <div className={styles.form_item}>
                        <input type='text' placeholder='Search' />
                        <svg width="16" height="16" stroke='#cecece' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7778 20.5555C16.1779 20.5555 20.5555 16.1779 20.5555 10.7778C20.5555 5.37766 16.1779 1 10.7778 1C5.37766 1 1 5.37766 1 10.7778C1 16.1779 5.37766 20.5555 10.7778 20.5555Z" stroke="var(--text-color-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22.9964 23.0003L17.6797 17.6836" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                     </div>
                     <div className={styles.form_item}>
                        <input type='text' placeholder='No address selected' />
                        <Image src={location} height={16} width={16} alt='location icon'/>
                        <Image className={styles.right} src={arrowRight} height={16} width={16} alt='arrow right icon'/>
                     </div>
                     <div className={`${styles.order_btn} ${styles.theme_btn}`}>
                        <button>
                           <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.25 1.3C4.2736 1.3 1.05 4.5236 1.05 8.5C1.05 12.4764 4.2736 15.7 8.25 15.7C12.2264 15.7 15.45 12.4764 15.45 8.5C15.45 4.5236 12.2264 1.3 8.25 1.3ZM0.25 8.5C0.25 4.0816 3.8316 0.5 8.25 0.5C12.6684 0.5 16.25 4.0816 16.25 8.5C16.25 12.9184 12.6684 16.5 8.25 16.5C3.8316 16.5 0.25 12.9184 0.25 8.5ZM5.05 10.9V4.5C5.05 4.39391 5.09214 4.29217 5.16716 4.21716C5.24217 4.14214 5.34391 4.1 5.45 4.1H7.85C8.36652 4.10017 8.86295 4.30018 9.23533 4.65813C9.60771 5.01608 9.82717 5.50422 9.84774 6.02034C9.86832 6.53645 9.68842 7.04051 9.34571 7.42697C9.003 7.81343 8.52407 8.05231 8.0092 8.0936L9.85 9.9344L11.5672 8.2172L12.1328 8.7828L10.4156 10.5L12.1328 12.2172L11.5672 12.7828L9.85 11.0656L8.1328 12.7828L7.5672 12.2172L9.2844 10.5L6.8844 8.1H5.85V10.9H5.05ZM5.85 7.3H7.85C8.16826 7.3 8.47348 7.17357 8.69853 6.94853C8.92357 6.72348 9.05 6.41826 9.05 6.1C9.05 5.78174 8.92357 5.47652 8.69853 5.25147C8.47348 5.02643 8.16826 4.9 7.85 4.9H5.85V7.3Z" fill="#fff"></path></svg> Instant Order
                        </button>
                     </div>
                     <div className={`${styles.button_group} ${styles.theme_btn}`}>
                        <button>
                           <svg width="17" height="15" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8914 19V17C15.8914 15.9391 15.473 14.9217 14.7283 14.1716C13.9836 13.4214 12.9735 13 11.9203 13H4.97103C3.91785 13 2.9078 13.4214 2.16309 14.1716C1.41838 14.9217 1 15.9391 1 17V19" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.44763 9C10.6408 9 12.4187 7.20914 12.4187 5C12.4187 2.79086 10.6408 1 8.44763 1C6.25447 1 4.47656 2.79086 4.47656 5C4.47656 7.20914 6.25447 9 8.44763 9Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </button>
                        <Link href="/cart">
                           <svg width="25" height="15" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.32086 22C9.86914 22 10.3136 21.5523 10.3136 21C10.3136 20.4477 9.86914 20 9.32086 20C8.77259 20 8.32812 20.4477 8.32812 21C8.32812 21.5523 8.77259 22 9.32086 22Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.235 22C20.7833 22 21.2278 21.5523 21.2278 21C21.2278 20.4477 20.7833 20 20.235 20C19.6867 20 19.2422 20.4477 19.2422 21C19.2422 21.5523 19.6867 22 20.235 22Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1.375 1H5.34604L8.00663 14.39C8.09741 14.8504 8.34606 15.264 8.70905 15.5583C9.07204 15.8526 9.52624 16.009 9.99215 16H19.6418C20.1077 16.009 20.5619 15.8526 20.9249 15.5583C21.2879 15.264 21.5365 14.8504 21.6273 14.39L23.2157 6H6.33879" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </Link>
                        <div className="adtocartlegth"><span style={{color:"#fff", fontWeight:600}}>{cartItem.reduce((total, product) => total + (product.count || 0), 0)}</span></div>
                     </div>
                  </div>
               </div>
            </Container>
         </header>
      </>
   )
}
