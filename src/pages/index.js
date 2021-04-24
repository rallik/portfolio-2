import React from 'react'
import Layout from '../layouts/layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import '../styles/styles.scss'


const index = () => {
  return (
    <main>
      <Layout>
        <Hero />
        <About />
        <Projects />
      </Layout>
    </main>
  )
}

export default index
