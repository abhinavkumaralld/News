import React, { Component } from 'react'

export default class Exp extends Component {
      a="ounjkm ,"
      constructor(){
            super();
            console.log("constucter called");
            this.state={
                  a:"nnn",
                  b:"bbb"
            }
      }
      componentDidMount(){
            this.setState({ a: 'test@example.com' })
      }

  render() {
    return (
      <div>hii
            {this.state.a}
      </div>
    )
  }
}
