import { connect } from 'react-redux'
import * as Actions from '../../actions'

import SubredditPage from '../../components/subreddit-page'

const mapStateToProps = ({ subreddit, posts, isLoading }) => {
    return  {
        subreddit,
        posts,
        isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (subreddit) => {
            dispatch(Actions.requestPosts(subreddit))
        }
    }
}

const RedditSearch = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubredditPage)

export default RedditSearch