import React from 'react'

import styles from './hero.module.css'

import {MdPhone} from 'react-icons/md'
import runner from '../images/runners-hero.svg'
import bottom from '../images/hero-bottom.svg'

export default ({heading, copy}) => (
  <header className={styles.header} style={{backgroundImage: `url(${bottom})`}}>
      <div className={styles.innerFlex}>
          <div className={styles.content}>
              <h1>{heading}</h1>
              <p>{copy}</p>
              <a href='tel:000000000'><MdPhone size='1.5rem' />Call Us</a>
          </div>
          <div className={styles.runners}>
            <img src={runner} alt='Runners' />
          </div>
      </div>
  </header>
)
