import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <>
        <section>
          <header>
            <h1 className="header">What a Time to be Funny..</h1>
          </header>
          <h1>Clock goes Here</h1>
        </section>
        <section className="joke-section">
          <h1 className="joke-heading">This is a joke I think..</h1>
          <hr />
          <p className="joke">Joke goes here</p>
          <button className="joke-button"> New Joke Please! </button>
        </section>
      </>
    )
  }
}

export default Home
