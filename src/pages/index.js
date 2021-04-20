import React from 'react'
import Layout from '../layouts/layout'
import Hero from '../components/Hero'
import '../styles/styles.scss'

const myName = 'Hello, my Name is Reuben Allik.'

const index = () => {
  return (
    <main>
      <Layout>
        <Hero/>
      </Layout>
    </main>
  )
}

export default index
