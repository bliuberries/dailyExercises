import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: '',
      line: false
    }
    this.changeState = this.changeState.bind(this);
  }

  changeState () {
    this.setState({
      line: !this.state.line
    })
  }

  componentDidMount() {
    this.setState({
      todo: this.props.todo
    })
  }

  render() {
    const astyle = {
      textDecoration: !this.state.line ? 'none' : 'line-through',
      cursor: 'default'
    }
    return (
      <div className='aTodo' style={astyle} onClick={this.changeState}>
        {this.state.todo}
      </div>
    )
  }
}

export default Todo;