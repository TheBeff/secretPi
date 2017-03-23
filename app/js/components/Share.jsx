import React from 'react'

export default class Share extends React.Component {
  render() {
    const {inputValue, handleMessageChange, handleMessageSubmit} = this.props
    return (
      <div>
        <form onSubmit={handleMessageSubmit}>
          <label>***secrets***</label>
          <input id="input-message" type="text" name="message" value={inputValue} onChange={handleMessageChange} />
          <input type="submit" value="share" />
        </form>
      </div>
    )
  }
}
