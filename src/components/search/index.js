import React from 'react'
import styles from './styles.css'
import { Input } from 'semantic-ui-react'

let inputValue = "";

const Search = ({ term = "", onSearch, isLoading = false }) => {
    inputValue = term;
    const handleAction = (e) => {
        return onSearch(inputValue)
    }

    const handleOnChange = e => {
        inputValue = e.target.value
    }

    const handleOnKeyUp = e => {
        if (e.key === "Enter") handleAction()
    }
    
    const action = {
        content: "Search",
        onClick: handleAction   
    }

    return (
        <Input fluid onChange={handleOnChange} placeholder="Search" icon="search" iconPosition="left" action={action} defaultValue={inputValue} loading={isLoading} onKeyUp={handleOnKeyUp} />
    )
}

export default Search