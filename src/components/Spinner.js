import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
        <div className="text-center">
            <img src={loading} alt="loading" />
        </div>
    )
  }
}

export default Spinner

// React based news app You have to install node also install react-router-dom command in terminal npm install-react-router-dom get a new api key from https://newsapi.org/ and paste it in News.js url write command in terminal npm run start