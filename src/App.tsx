import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store"

import "./App.css"

import Routes from "./router"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
