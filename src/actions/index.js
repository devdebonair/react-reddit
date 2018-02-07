import snoowrap from 'snoowrap'

export const SELECT_SUBREDDIT = "SELECT_SUBREDDIT"
export const selectSubreddit = (subreddit) => {
    return {
        type: SELECT_SUBREDDIT,
        payload: subreddit
    }
}

export const REQUEST_POSTS = "REQUEST_POSTS"
export const requestPosts = (subreddit) => {
    return {
        type: REQUEST_POSTS,
        promise: r.getSubreddit(subreddit).getHot()
    }
}