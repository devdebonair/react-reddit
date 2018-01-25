import { AppContainer } from "react-hot-loader"
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'


const defaultStore = {
    subreddit: "Rocket League",
    posts: [
        {
            title: "Introducing RLCS Season 5 + the brand new RL Esports website!"
        },
        {
            title: "Half flip practice is paying off"
        },
        {
            title: "Stop telling people to \"kill yourself\" or \"hope you get cancer and die"
        },
        {
            title: "Neat kick-off strat"
        },
        {
            title: "Done 'em good"
        }
    ]
}

let store = createStore(reducers, defaultStore)

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