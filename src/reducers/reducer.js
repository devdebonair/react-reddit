import * as Actions from '../actions/index'

export const subreddit = (state = "", action) => {
    switch (action.type) {
        case Actions.SELECT_SUBREDDIT:
            return action.payload.subreddit
    }
    return state
}

export const posts = (state = [], action) => {
    switch (action.type) {
        case Actions.RECEIVE_POSTS:
            return action.payload.posts
    }
    return state
}