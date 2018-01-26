import { AppContainer } from "react-hot-loader"
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { middleware as reduxPackMiddleware } from "redux-pack";
import reducers from './reducers'

const defaultStore = {
    subreddit: "",
    posts: [],
    isLoading: false
}

let store = createStore(reducers, defaultStore, applyMiddleware(reduxPackMiddleware))

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
}

render(App)

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./components/App', () => render(App))