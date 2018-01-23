import React from 'react'
import styles from './styles.css'
import { Input } from 'semantic-ui-react'

let inputValue = "";

const Search = ({ term, onSearch }) => {
    inputValue = term;
    const handleAction = (e) => {
        return onSearch(inputValue)
    }

    const handleOnChange = e => {
        inputValue = e.target.value
    }
    
    const action = {
        content: "Search",
        onClick: handleAction   
    }

    return (
        <Input fluid onChange={handleOnChange} placeholder="Search" icon="search" iconPosition="left" action={action} defaultValue={inputValue} />
    )
}

export default Search