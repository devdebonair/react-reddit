import { connect } from 'react-redux'
import * as Actions from '../../actions'

import SubredditPage from '../../components/subreddit-page'

const mapStateToProps = ({ subreddit, posts }) => {
    return  {
        subreddit,
        posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (subreddit) => {
            dispatch(Actions.selectSubreddit(subreddit))
        }
    }
}

const RedditSearch = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubredditPage)

export default RedditSearch