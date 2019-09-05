import React from 'react'
import ReactDOM from 'react-dom'

import './app.css'
import cat from './images/cat.jpg'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1  className="red">react app!</h1>
        <img src={ cat } alt="A cute cat"/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector("#root"))