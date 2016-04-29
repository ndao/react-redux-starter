import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
  render () {
    return  <div>
              <h1>Hello, world!</h1>
              <Link to={`/child`}>Child Link</Link>

              <main>
                { this.props.children || 'Default page'}
              </main>
            </div>
  }
}

export default App
