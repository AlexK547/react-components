import Result from './components/Result'
import Search from './components/Search'

import { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <Result />
      </div>
    )
  }
}