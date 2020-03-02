import React from 'react';

const UserInput = props => {
  return (
    <form onSubmit={props.submit}>
      <label>
        Todo:
          <textarea
          placeholder="Whats on your schedule?"
          value={props.textField}
          onChange={props.change} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default UserInput;