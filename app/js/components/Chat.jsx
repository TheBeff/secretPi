import React from 'react'

export default class Messages extends React.Component {
  render() {
    const {messages} = this.props
    return (
      <div>
        <ul id="messages">
          {
            messages && messages.map((msg, idx)=>(
              <li key={idx}>{msg}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}
