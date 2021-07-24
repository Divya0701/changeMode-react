import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'dark', text: 'Light'}

  mode = () => {
    const {mode} = this.state
    if (mode === 'light') {
      this.setState({mode: 'dark'})
      this.setState({text: 'Light'})
    } else {
      this.setState({mode: 'light'})
      this.setState({text: 'Dark'})
    }
  }

  render() {
    const {mode} = this.state
    const {text} = this.state
    return (
      <div className={`container ${mode}`}>
        <h1>Click To Change Mode</h1>
        <button type="button" onClick={this.mode}>
          {text} Mode
        </button>
      </div>
    )
  }
}
export default LightDarkMode
