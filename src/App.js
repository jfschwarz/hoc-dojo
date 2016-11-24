import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Text, Address, Email, Phone } from './components'
import { isEmail, isPhone } from './validation'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'John Doe',
      addressLines: null, // e.g. ['Kurfürstenstr. 111', '10787 Berlin', 'Germany' ]
      email: null,
      phone: null,
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Coding Dojo: Higher-order components</h2>
        </div>

        <div className="form">
          <div>
            <Text
              label="Name"
              value={this.state.name}
              onChange={(name) => {
                this.setState({ name })
              }}
            />
          </div>

          <div>
            <Address
              label="Address"
              value={this.state.addressLines}
              onChange={(addressLines) => {
                this.setState({ addressLines })
              }}
            />
          </div>

          <div>
            <Email
              label="Email address"
              value={this.state.email}
              onChange={(email) => {
                this.setState({ email })
              }}
            />
          </div>

          <div>
            <Phone
              label="Phone number"
              value={this.state.phone}
              onChange={(phone) => {
                this.setState({ phone })
              }}
            />
          </div>
        </div>



      <hr />
      <table>
        <tr><td>name</td><td>{ this.state.name }</td></tr>
        <tr>
          <td>address</td>
          <td>
            <ul>
            { this.state.addressLines && this.state.addressLines.map &&
              this.state.addressLines.map((line, i) => (
              <li key={i}>{ line }</li>
            )) }
            </ul>
          </td>
        </tr>
        <tr>
          <td>email</td>
          <td>
            { this.state.email == null ?
                <i style={{ color: '#ccc' }}>-</i> :
                (isEmail(this.state.email) ?
                  this.state.email :
                  <i style={{ color: 'red' }}>Not a valid email!</i>) }
          </td>
        </tr>
        <tr>
          <td>phone</td>
          <td>
            { this.state.phone == null ?
                <i style={{ color: '#ccc' }}>-</i> :
                  (isPhone(this.state.phone) ?
                    this.state.phone :
                    <i style={{ color: 'red' }}>Not a valid phone number!</i>) }
          </td>
        </tr>
      </table>

      </div>
    );
  }
}

export default App;
