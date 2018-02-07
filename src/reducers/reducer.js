import * as Actions from '../actions/index'
import { handle } from "redux-pack";

export const subreddit = (state = "", action) => {
    const { type, payload } = action
    switch (type) {
        case Actions.SELECT_SUBREDDIT:
            return payload
        default:
            return state
    }
}

export const posts = (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case Actions.REQUEST_POSTS:
            return handle(state, action, {
                start: prevState => {
                    return [...prevState]
                },
                failure: prevState => {
                    return []
                },
                success: prevState => {
                    return payload.map(submission => {
                        return { title: submission.title }
                    })
                }
            })
        default:
            return state
    }
}

export const isLoading = (state = false, action) => {
    const { type, payload } = action
    switch (type) {
        case Actions.REQUEST_POSTS:
            return handle(state, action, {
                start: prevState => true,
                finish: prevState => false
            })
        default:
            return state
    }
}
