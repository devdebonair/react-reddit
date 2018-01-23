export const SEARCH = "SEARCH"

export const search = (term) => {
    return {
        type: SEARCH,
        payload: term
    }
}