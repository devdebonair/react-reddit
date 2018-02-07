import React from 'react'
import { Link } from 'react-router-dom'

import Layout from './Layout'
import RedditSearch from '../containers/subreddit-page'

const Home = () => {
    return (
        <Layout>
            <RedditSearch />
            <p>Hello World of React and Webpack! Hot Reloaded :)</p>
            <p>
                <Link to="/dynamic">Navigate to Dynamic Page</Link>
            </p>
        </Layout>
    )
}

export default Home