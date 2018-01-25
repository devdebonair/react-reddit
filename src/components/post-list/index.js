import React from 'react'
import styles from './styles.css'

import { List } from 'semantic-ui-react'
import Post from '../post'

const PostList = ({ posts }) => {
    return (
        <List as="ol">
            { posts.map((post, index) => <List.Item key={index}><Post title={post.title} /></List.Item>) }
        </List>
    )
}

export default PostList