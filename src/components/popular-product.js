import React from 'react'

import styles from './popular-product.module.css'

export default ({name, copy, image}) => (
    <li className={styles.popular}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{copy}</p>
    </li>
)