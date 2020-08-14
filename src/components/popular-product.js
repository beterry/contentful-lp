import React from 'react'
import Img from 'gatsby-image'

import styles from './popular-product.module.css'

export default ({name, description, image}) => (
    <li className={styles.popular}>
        <Img fluid={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
    </li>
)