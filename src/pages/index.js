import React from 'react'
import Layout from '../layouts/layout'
import Hero from '../components/Hero'
import About from '../components/About'
import '../styles/styles.scss'


const index = () => {
  return (
    <main>
      <Layout>
        <Hero />
        <About />
      </Layout>
    </main>
  )
}

export default index
