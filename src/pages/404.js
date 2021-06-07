import React from "react"
import { Link } from "gatsby"
import Layout from '../layouts/layout'

// markup
const PageNotFound = ({ location }) => {
  return (
    <main className='home-page'>
      <Layout location={location}>
        <h3>Sorry, the page you're looking for doesn't exist</h3>
        <button className='go-home-btn'>
                <Link to='/'>Back to homepage</Link>
            </button>
      </Layout>
    </main>
  )
}

export default PageNotFound
