import React, { Component } from 'react'
import moment from 'moment'
import axios from 'axios'

class Home extends Component {
  state = {
    joke: ''
  }

  componentDidMount() {
    axios
      .get('https://sv443.net/jokeapi/category/Any', {
        headers: {
          'content-type': 'application/json',
          Accepts: 'application/json'
        }
      })
      .then(resp => {
        console.log(resp)
        resp.data.joke = this.joke
      })
  }

  getMeAJoke = () => {
    console.log('button clicked')
    axios.get('https://sv443.net/jokeapi/category/Any').then(resp => {
      console.log(resp)
    })
  }

  render() {
    return (
      <>
        <section className="top-section-flex">
          <header>
            <h1 className="header">What a Time to be Funny..</h1>
          </header>
          <h1 className="clock">
            {moment().format('MMMM Do YYYY, h:mm:ss a')}
          </h1>
        </section>
        <section className="joke-section">
          <h1 className="joke-heading">This is a joke I think..</h1>
          <hr />
          <p className="joke">{this.joke}</p>
          <button onClick={this.getMeAJoke} className="joke-button">
            New Joke Please!
          </button>
        </section>
      </>
    )
  }
}

export default Home
