import React, { Component } from 'react';
import Footer from './components/Footer'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'

class App extends Component {

  constructor (props) {
    super (props)

    this.state = {
      contact: {
        isInFormMode: 1,
        liveVars: {

        },
        savedVars: {

        }
      },
      experience: {
        isInFormMode: 1,
        experienceArray: [
          {

          },
        ],
      },
      education: {
        isInFormMode: 1,
        educationArray: [
          {

          },
        ],
      },
    }

    this.setContactFormMode = this.setContactFormMode.bind(this);
    this.handleContactSubmit = this.handleContactSubmit.bind(this);
    this.handleContactEdit = this.handleContactEdit.bind(this);
    this.setExperienceFormMode = this.setExperienceFormMode.bind(this);
    this.handleExperienceSubmit = this.handleExperienceSubmit.bind(this);
    this.handleExperienceEdit = this.handleExperienceEdit.bind(this);
    this.setEducationFormMode = this.setEducationFormMode.bind(this);
    this.handleEducationSubmit = this.handleEducationSubmit.bind(this);
    this.handleEducationEdit = this.handleEducationEdit.bind(this);
  }

  setContactFormMode() {
    this.state.contact.isInFormMode ? this.setState({contact: {isInFormMode: 0}}) : this.setState({contact: {isInFormMode: 1}})
  }
  handleContactEdit() {
    this.setContactFormMode();
  }
  handleContactSubmit(e) {
    e.preventDefault();
    this.setContactFormMode();
  }

  setExperienceFormMode() {
    this.state.experience.isInFormMode ? this.setState({experience: {isInFormMode: 0}}) : this.setState({experience: {isInFormMode: 1}})
  }
  handleExperienceEdit() {
    this.setExperienceFormMode();
  }
  handleExperienceSubmit(e) {
    e.preventDefault();
    this.setExperienceFormMode();
  }

  setEducationFormMode() {
    this.state.education.isInFormMode ? this.setState({education: {isInFormMode: 0}}) : this.setState({education: {isInFormMode: 1}})
  }
  handleEducationEdit() {
    this.setEducationFormMode();
  }
  handleEducationSubmit(e) {
    e.preventDefault();
    this.setEducationFormMode();
  }

  render() {
    return (
      <div className="fullheight">
        <main className="flex-shrink-0">
          <div className="container">
            <h1 clasName="mt-5">Contact</h1>
            <Contact isInFormMode={this.state.contact.isInFormMode} handleContactSubmit={this.handleContactSubmit} handleContactEdit={this.handleContactEdit}/>
            <h1 clasName="mt-5">Experience</h1>
            <Experience isInFormMode={this.state.experience.isInFormMode} handleExperienceSubmit={this.handleExperienceSubmit} handleExperienceEdit={this.handleExperienceEdit} />
            <h1 clasName="mt-5">Education</h1>
            <Education isInFormMode={this.state.education.isInFormMode} handleEducationSubmit={this.handleEducationSubmit} handleEducationEdit={this.handleEducationEdit}/>
          </div>
        </main>
        <Footer />
        </div>
    )
  }
  
}

export default App;
