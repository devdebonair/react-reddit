import React from 'react'
import styles from './styles.css'

import SearchBar from '../search'
import PostList from '../post-list'

const SubredditPage = ({ subreddit, posts, onSearch, isLoading }) => {
    return (
        <div>
            <SearchBar term={subreddit} onSearch={onSearch} isLoading={isLoading} />
            <PostList posts={posts} />
        </div>
    )
}

export default SubredditPage