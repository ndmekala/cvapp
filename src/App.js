import React, { Component } from 'react';
import Footer from './components/Footer'
import Contact from './components/Contact'

class App extends Component {

  constructor (props) {
    super (props)

    this.state = {
      contact: {
        isInFormMode: 1,
      },
    }

    this.setFormMode = this.setFormMode.bind(this);
    this.handleContactSubmit = this.handleContactSubmit.bind(this);
  }handleContactSubmit

  setFormMode() {
    this.state.contact.isInFormMode ? this.setState({contact: {isInFormMode: 0}}) : this.setState({contact: {isInFormMode: 1}})
  }

  handleContactSubmit(e) {
    e.preventDefault();
    this.setFormMode();
    console.log('yeah!');
  }

  render() {
    return (
      <div className="fullheight">
        <main className="flex-shrink-0">
          <div className="container">
            <h1 clasName="mt-5">Contact</h1>
            <Contact isInFormMode={this.state.contact.isInFormMode} handleContactSubmit={this.handleContactSubmit}/>
            <button className="btn btn-primary" onClick={this.setFormMode}>Y’all.</button>
  
          </div>
        </main>
        <Footer />
        </div>
    )
  }
  
}

export default App;
