import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, inputText: ''}

  onInputChange = event => {
    this.setState({
      count: event.target.value.length,
      inputText: event.target.value,
    })
  }

  render() {
    const {count, inputText} = this.state
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="label" htmlFor="inputEle">
            Enter the phrase
          </label>
          <input
            type="text"
            id="inputEle"
            value={inputText}
            className="inputEle"
            onChange={this.onInputChange}
            placeholder="Enter the phrase"
          />
          <p className="count-text">No.of letters: {count}</p>
        </div>
        <img
          className="calculate-img"
          alt="letters calculator"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
        />
      </div>
    )
  }
}

export default LettersCalculator
