import React from 'react'

import styles from './navigation.module.css'

import logo from '../images/chester-running.svg'
import {MdPhone, MdPlace} from 'react-icons/md'

export default () => (
  <nav role="navigation" className={styles.navigation}>
    <div className={styles.innerFlex}>
        <img
            className={styles.logo}
            src={logo}
            alt='Chester Running Co'
        />
        <ul>
            <li className={styles.navLink}>Catalog</li>
            <li className={styles.navLink}>About Us</li>
            <li className={styles.navIcon}><MdPhone size='1.5rem' /></li>
            <li className={styles.navIcon}><MdPlace size='1.5rem' /></li>
        </ul>
    </div>
  </nav>
)
