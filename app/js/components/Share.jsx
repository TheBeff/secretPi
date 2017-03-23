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
          }
          #input-message {
            width: 100%;
          }
        `}</style>
      </div>
    )
  }
}
