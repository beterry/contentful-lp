import React from "react"
import {Helmet} from 'react-helmet'
import {graphql} from 'gatsby'

import '../styles/base.css'

import Layout from '../layout/layout'
import Hero from '../components/hero'
import PopularProduct from '../components/popular-product'

export default function Home({data}) {

    //map nodes from query data to a new array
    const products = data.allContentfulProduct.edges.map(edge => edge.node)

    //deconstruct heading and subheading from query data
    const {heroHeading, heroSubtext} = data.allContentfulWebsitePage.edges[0].node

    return (
        <Layout>
            <Helmet>
                <title>Chester Running Co</title>
                <meta name='description' content='A simple landing page built with GatsbyJS and Contentful' />
            </Helmet>
            <Hero 
                heading={heroHeading}
                copy={heroSubtext}
            />
            <div className='container'>
                <h2 className='center-text mb-2'>Popular Products</h2>
                <ul className='popular-products mb-6'>
                    {products.map((product, index) =>
                        <PopularProduct
                            name={product.name}
                            description={product.description.description}
                            image={product.image.fluid}
                            key={index}
                        />
                    )}
                </ul>
            </div>
        </Layout>
    )
}

//I used GraphiQL to understand what I was getting back 
export const pageQuery = graphql`
    query MyQuery {
        allContentfulWebsitePage(filter: {contentful_id: {eq: "15SRsvCklUtt2swIXM8D6K"}}) {
            edges {
                node {
                    heroHeading
                    heroSubtext
                }
            }
        }
        allContentfulProduct {
            edges {
                node {
                    name
                    description {
                        description
                    }
                    image {
                        fluid {
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }
`