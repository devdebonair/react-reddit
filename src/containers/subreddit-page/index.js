import { connect } from 'react-redux'
import { search } from '../../actions/search'

import SubredditPage from '../../components/subreddit-page'

const mapStateToProps = ({ term }) => {
    return  {
        term,
        posts
    }
}

const mapDispatchToProps = ({ dispatch }) => {
    return {
        onSearch: (term) => {
            dispatch(search(term))
        }
    }
}

const SubredditPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubredditPage)