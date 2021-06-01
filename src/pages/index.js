import React from 'react'
import Layout from '../layouts/layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import '../styles/styles.scss'


const index = ({ location }) => {
  return (
    <main className='home-page'>
      <Layout location={location}>
        <Hero />
        <About />
        <Projects location={location}/>
      </Layout>
    </main>
  )
}

export default index
