import React from 'react'
import styles from './styles.css'

import SearchBar from '../search'
import PostList from '../post-list'

const SubredditPage = ({ subreddit, posts, onSearch }) => {
    return (
        <div>
            <SearchBar term={subreddit} onSearch={onSearch} />
            <PostList posts={posts} />
        </div>
    )
}

export default SubredditPage