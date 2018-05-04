import React from 'react'


interface MouseEvent {
  clientX: number,
  clientY: number
}

interface MouseProps{
  render: Function
}

interface MouseState{
  x: number,
  y: number
}

// Instead of using a HOC, we can share code using a
// regular component with a render prop!
class Mouse extends React.Component<MouseProps, MouseState> {
  constructor(props: MouseProps){
    super(props);

    this.state = {
      x: 0,
      y: 0
    }
  // state: MouseState = { x: 0, y: 0 }
    
  }


  handleMouseMove = (event: MouseEvent) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

class App extends React.Component{
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Mouse render={({ x, y }:any)=> (
          // The render prop gives us the state we need
          // to render whatever we want here.
          <h1>The mouse position is ({x}, {y})</h1>
        )}/>
      </div>
    )
  }
}

// ReactDOM.render(<App/>, document.getElementById('app'))