import React from 'react'
import Layout from '../layouts/layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import '../styles/styles.scss'


const index = () => {
  return (
    <main className='home-page'>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Layout>
    </main>
  )
}

export default index
