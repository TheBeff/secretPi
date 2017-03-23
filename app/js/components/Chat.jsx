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
        <style jsx>{`
          #messages {
            list-style-type: none;
            margin: 0;
            padding: 0;
            height: 100%;
          }
          #messages li {
            padding: 5px 10px;
          }
          #messages li:nth-child(odd) {
            background: #eee;
          }
        `}</style>
      </div>
    )
  }
}
