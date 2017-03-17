import React from 'react'

import io from 'socket.io-client'
let socket = io(window.location.origin, {transports:['websocket']})

export default class Chat extends React.Component {
  constructor() {
    super()
    this.state = {value: '', messages: ['foo', 'bar', 'baz', 'snail', 'slug', 'ladybug', 'beetle', 'worm', 'whale']}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount () {
    //console.log('window.location.origin', window.location.origin)
    socket.on('chat message', function(msg){
      this.setState({messages: this.state.messages.concat(msg)})
    })
  }
  handleChange(e) {
    this.setState({value: e.target.value})
  }
  handleSubmit(e) {
    //console.log('received message', e.target.message.value)
    //console.log('state', this.state.value)
    e.preventDefault()
    socket.emit('chat message', this.state.value)
  }
  render() {
    return (
      <div>
        <ul id="messages">
          {
            this.state.messages && this.state.messages.map((msg, idx)=>(
              <li key={idx}>{msg}</li>
            ))
          }
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>***secrets***</label>
          <input id="input-message" type="text" name="message" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="share" />
        </form>
      </div>
    )
  }
}
