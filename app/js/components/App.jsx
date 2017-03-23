import React from 'react'

import Chat from './Chat'
import Share from './Share'

export default class App extends React.Component {
  constructor() {
    super()
    // state contains some seedlings
    this.state = {value: '', messages: ['foo', 'bar', 'baz', 'snail', 'slug', 'ladybug', 'beetle', 'worm', 'whale']}

    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this)
  }
  componentDidMount () {
    socket.on('chat message', msg => {
      this.setState({messages: this.state.messages.concat(msg)})
    })
  }
  handleMessageChange(e) {
    this.setState({value: e.target.value})
  }
  handleMessageSubmit(e) {
    e.preventDefault()
    // reset input after sharing
    this.setState({value: ''})
    socket.emit('chat message', this.state.value)
  }
  render() {
    return (
      <div className="app">
        <Chat
          messages={this.state.messages}
        />
        <Share
          inputValue={this.state.value}
          handleMessageChange = {this.handleMessageChange}
          handleMessageSubmit = {this.handleMessageSubmit}
        />
        <style jsx>{`
          .app {
            border: 2px solid black;
            width: 320px;
            margin: 0 auto;
          }
        `}</style>
      </div>
    )
  }
}
