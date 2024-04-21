import React from 'react'
import styles from './footer.module.css'
function footer() {
  return (
    <>
    <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.dvago_pk}>
           Dvagopk.com
          </span>
        </a>
      </footer>
    </>
  )
}

export default footer