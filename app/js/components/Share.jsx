import React from 'react'

export default class Share extends React.Component {
  render() {
    const {inputValue, handleMessageChange, handleMessageSubmit} = this.props
    return (
      <div className="share">
        <form onSubmit={handleMessageSubmit}>
          <label>***secrets***</label>
          <input id="input-message" type="text" name="message" value={inputValue} onChange={handleMessageChange} />
          <input type="submit" value="share" />
        </form>
        <style jsx>{`
          .share {
            border: 2px solid black;
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            width: 320px;
            margin: 0 auto;
            box-sizing: border-box;
          }
          form {
            padding: 0 4rem;
            display: block;
            background: pink;
          }
          #input-message {
            width: 100%;
          }
        `}</style>
      </div>
    )
  }
}
