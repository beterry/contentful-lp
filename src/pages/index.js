import React from "react"

import '../styles/base.css'

import Layout from '../layout/layout'
import Hero from '../components/hero'
import PopularProduct from '../components/popular-product'

import product1 from '../images/product-1.png'
import product2 from '../images/product-2.png'
import product3 from '../images/product-3.png'

export default function Home() {
    const products = [
        {
            name: 'Garmin Forerunner 245',
            copy: 'This GPS smartwatch tracks your stats, crunches the numbers and gets to know all about your performance, your running form, your training and even your goals.',
            image: product1
        },
        {
            name: 'Nike TrailBlazer',
            copy: 'TrailBlazer technology brings lightweight, bouncy cushioning to every stride, and mesh helps keep you cool.',
            image: product2
        },
        {
            name: 'Adidas Running Shirt',
            copy: 'With this running shirt for men sweat has no chance even during intensive workouts. It’s made of lightweight, soft Climalite fabric that wicks sweat away from the skin for a comfortable, dry feel at any distance.',
            image: product3
        },
    ]


    return (
        <Layout>
            <Hero 
                heading='Gear for all paces'
                copy='Stop in today to experience our expertise shoe fitting and outstanding selection of technical running gear.'
            />
            <div className='container'>
            <h2 className='center-text mb-2'>Popular Products</h2>
            <ul className='popular-products mb-6'>
                {products.map((product, index) =>
                    <PopularProduct
                        name={product.name}
                        copy={product.copy}
                        image={product.image}
                        key={index}
                    />
                )}
            </ul>
            </div>
        </Layout>
    )
}
