import React from 'react'
import { Link } from 'react-router-dom'

import Layout from './Layout'
import Search from './search'
import Post from './post'

const Home = () => {
    return (
        <Layout>
            <p>Hello World of React and Webpack! Hot Reloaded :)</p>
            <p>
                <Link to="/dynamic">Navigate to Dynamic Page</Link>
            </p>
        </Layout>
    )
}

export default Home