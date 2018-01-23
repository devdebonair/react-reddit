import React from 'react'
import styles from './styles.css'
import { Header } from 'semantic-ui-react'

const Post = ({ title }) => {
    return (
        <Header as="h3">{title}</Header>
    )
}

export default Post