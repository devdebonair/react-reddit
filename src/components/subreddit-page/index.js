import React from 'react'
import styles from 'styles.css'

import SearchBar from '../search'
import PostList from '../post-list'

cosnt SubredditPage = ({ term, posts, onSearch }) => {
    return (
        <div>
            <SearchBar term={term} />
            <PostList posts={posts} />
        </div>
    )
}