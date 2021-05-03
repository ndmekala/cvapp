import React, { Component } from 'react';
import uniqid from 'uniqid';
import Header from './components/Header'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'




class App extends Component {

  constructor (props) {
    super (props)

    this.state = {
      contact: {
        isInFormMode: true,
        liveInfo: {
          name: '',
          email: '',
          phone: '',
          address: '',
        },
        savedInfo: {
          name: '',
          email: '',
          phone: '',
          address: '',
        }
      },
      experience: [this.returnNewExperience()],
      education: [this.returnNewEducation()],
    }
    this.idToIndex = this.idToIndex.bind(this);
    
    this.setContactFormMode = this.setContactFormMode.bind(this);
    this.handleContactSubmit = this.handleContactSubmit.bind(this);
    this.handleContactEdit = this.handleContactEdit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePhoneChange = this.handlePhoneChange.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)

    this.handleExperienceSubmit = this.handleExperienceSubmit.bind(this);
    this.handleExperienceEdit = this.handleExperienceEdit.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
    this.handleDeleteExperience = this.handleDeleteExperience.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleEmployerChange = this.handleEmployerChange.bind(this);
    this.handleExpStartChange = this.handleExpStartChange.bind(this);
    this.handleExpEndChange = this.handleExpEndChange.bind(this);
    this.handleExpLocationChange = this.handleExpLocationChange.bind(this);
    this.handleBulletChange = this.handleBulletChange.bind(this);

    this.handleEducationSubmit = this.handleEducationSubmit.bind(this);
    this.handleEducationEdit = this.handleEducationEdit.bind(this);
    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.handleDeleteEducation = this.handleDeleteEducation.bind(this);
    this.handleDegreeChange = this.handleDegreeChange.bind(this);
    this.handleInstitutionChange = this.handleInstitutionChange.bind(this);
    this.handleEdStartChange = this.handleEdStartChange.bind(this);
    this.handleEdEndChange = this.handleEdEndChange.bind(this);
    this.handleEdLocationChange = this.handleEdLocationChange.bind(this);
    this.handleGpaChange = this.handleGpaChange.bind(this)
  }
  returnNewExperience() {
    return {
        id: uniqid(),
        isInFormMode: true,
        liveInfo: {
          position: '',
          employer: '',
          start: '',
          end: '',
          location: '',
          bullets: [ '', '', '', '', '', ''],
        },
        savedInfo: {
          position: '',
          employer: '',
          start: '',
          end: '',
          location: '',
          bullets: [ '', '', '', '', '', ''],
        }
    }
  }
  returnNewEducation() {
    return {
      id: uniqid(),
      isInFormMode: true,
      liveInfo: {
        degree: '',
        institution: '',
        start: '',
        end: '',
        location: '',
        gpa: ''
      },
      savedInfo: {
        degree: '',
        institution: '',
        start: '',
        end: '',
        location: '',
        gpa: ''
      }
    }
  }
  idToIndex(array, id){
    return array.findIndex(element => element.id === id);
  }
  setContactFormMode() {
      this.setState(prevState => ({
        contact: {
          ...prevState.contact,
          isInFormMode: !this.state.contact.isInFormMode,
        }
      }))
  }
  handleContactEdit() {
    this.setContactFormMode();
  }
  handleContactSubmit(e) {
    e.preventDefault();
    this.setState(prevState => ({
      contact: {
        ...prevState.contact,
        liveInfo: {
          name: '',
          email: '',
          phone: '',
          address: '',
        },
        savedInfo: {
          name: prevState.contact.liveInfo.name ? prevState.contact.liveInfo.name : prevState.contact.savedInfo.name,
          email: prevState.contact.liveInfo.email ? prevState.contact.liveInfo.email : prevState.contact.savedInfo.email,
          phone: prevState.contact.liveInfo.phone ? prevState.contact.liveInfo.phone : prevState.contact.savedInfo.phone,
          address: prevState.contact.liveInfo.address ? prevState.contact.liveInfo.address : prevState.contact.savedInfo.address,
        }
      }
    }))
    this.setContactFormMode();
  }
  handleNameChange(e) {
    this.setState(prevState => ({
      contact: {
        ...prevState.contact,
        liveInfo: {
          ...prevState.contact.liveInfo,
          name: e.target.value,
        }
      }
    }))
  }
  handleEmailChange(e) {
    this.setState(prevState => ({
      contact: {
        ...prevState.contact,
        liveInfo: {
          ...prevState.contact.liveInfo,
          email: e.target.value,
        }
      }
    }))
  }
  handlePhoneChange(e) {
    this.setState(prevState => ({
      contact: {
        ...prevState.contact,
        liveInfo: {
          ...prevState.contact.liveInfo,
          phone: e.target.value,
        }
      }
    }))
  }
  handleAddressChange(e) {
    this.setState(prevState => ({
      contact: {
        ...prevState.contact,
        liveInfo: {
          ...prevState.contact.liveInfo,
          address: e.target.value,
        }
      }
    }))
  }
  

  // Experience EDIT, ADD, DELETE, SUBMIT
  
  handleExperienceEdit(e) {
    const index = this.idToIndex(this.state.experience, e.target.id.replace('-edit', ''))
    this.setState(prevState => ({
      experience: [
        ...prevState.experience.slice(0, index),
        Object.assign({}, this.state.experience[index], {isInFormMode: !this.state.experience[index].isInFormMode}),
        ...prevState.experience.slice(index+1)
      ]
    }))    
  }
  handleExperienceSubmit(e) {
    e.preventDefault();
    const index = this.idToIndex(this.state.experience, e.target.id.replace('-submit', ''))
    this.setState(prevState => ({
      experience: [
        ...prevState.experience.slice(0, index),
        {
          id: prevState.experience[index].id,
          isInFormMode: !prevState.experience[index].isInFormMode,
          liveInfo: {
            position: '',
            employer: '',
            start: '',
            end: '',
            location: '',
            bullets: [ '', '', '', '', '', ''],
          },
          savedInfo: {
            position: prevState.experience[index].liveInfo.position ? prevState.experience[index].liveInfo.position : prevState.experience[index].savedInfo.position,
            employer: prevState.experience[index].liveInfo.employer ? prevState.experience[index].liveInfo.employer : prevState.experience[index].savedInfo.employer,
            start: prevState.experience[index].liveInfo.start ? prevState.experience[index].liveInfo.start : prevState.experience[index].savedInfo.start,
            end: prevState.experience[index].liveInfo.end ? prevState.experience[index].liveInfo.end : prevState.experience[index].savedInfo.end,
            location: prevState.experience[index].liveInfo.location ? prevState.experience[index].liveInfo.location : prevState.experience[index].savedInfo.location,
            bullets: [
              prevState.experience[index].liveInfo.bullets[0] ? prevState.experience[index].liveInfo.bullets[0] : prevState.experience[index].savedInfo.bullets[0],
              prevState.experience[index].liveInfo.bullets[1] ? prevState.experience[index].liveInfo.bullets[1] : prevState.experience[index].savedInfo.bullets[1],
              prevState.experience[index].liveInfo.bullets[2] ? prevState.experience[index].liveInfo.bullets[2] : prevState.experience[index].savedInfo.bullets[2],
              prevState.experience[index].liveInfo.bullets[3] ? prevState.experience[index].liveInfo.bullets[3] : prevState.experience[index].savedInfo.bullets[3],
              prevState.experience[index].liveInfo.bullets[4] ? prevState.experience[index].liveInfo.bullets[4] : prevState.experience[index].savedInfo.bullets[4],
              prevState.experience[index].liveInfo.bullets[5] ? prevState.experience[index].liveInfo.bullets[5] : prevState.experience[index].savedInfo.bullets[5],
            ]
          }
        },
        ...prevState.experience.slice(index+1)
      ]
    }))
  }
  handleAddExperience() {
    this.setState(prevState => ({
      experience: [
        ...prevState.experience,
        this.returnNewExperience()
      ]
    }))
  }
  handleDeleteExperience(e) {
    if (this.state.experience.length > 1) {
      const id = e.target.id.replace('-delete', '')
      const index = this.idToIndex(this.state.experience, id)
      this.setState(prevState => ({
        experience: [
          ...prevState.experience.slice(0,index),
          ...prevState.experience.slice(index+1)
        ]
    }))
    }
  }

  // EXPERIENCE FORM HANDLERS
  handlePositionChange(e) {
    const id = e.target.id.replace('-position','')
    const index = this.idToIndex(this.state.experience, id)
    this.setState(prevState => ({
      experience: [
        ...prevState.experience.slice(0,index),
        Object.assign({}, this.state.experience[index], {liveInfo: {
          ...prevState.experience[index].liveInfo,
          position: e.target.value,
        }}),
        ...prevState.experience.slice(index+1)
      ]
    }))
  }
  handleEmployerChange(e) {
    const id = e.target.id.replace('-employer','')
    const index = this.idToIndex(this.state.experience, id)
    this.setState(prevState => ({
      experience: [
        ...prevState.experience.slice(0,index),
        Object.assign({}, this.state.experience[index], {liveInfo: {
          ...prevState.experience[index].liveInfo,
          employer: e.target.value,
        }}),
        ...prevState.experience.slice(index+1)
      ]
    }))
  }
  handleExpStartChange(e) {
    const id = e.target.id.replace('-start','')
    const index = this.idToIndex(this.state.experience, id)
    this.setState(prevState => ({
      experience: [
        ...prevState.experience.slice(0,index),
        Object.assign({}, this.state.experience[index], {liveInfo: {
          ...prevState.experience[index].liveInfo,
          start: e.target.value,
        }}),
        ...prevState.experience.slice(index+1)
      ]
    }))
  }
  handleExpEndChange(e) {
    const id = e.target.id.replace('-end','')
    const index = this.idToIndex(this.state.experience, id)
    this.setState(prevState => ({
      experience: [
        ...prevState.experience.slice(0,index),
        Object.assign({}, this.state.experience[index], {liveInfo: {
          ...prevState.experience[index].liveInfo,
          end: e.target.value,
        }}),
        ...prevState.experience.slice(index+1)
      ]
    }))
  }
  handleExpLocationChange(e) {
    const id = e.target.id.replace('-location','')
    const index = this.idToIndex(this.state.experience, id)
    this.setState(prevState => ({
      experience: [
        ...prevState.experience.slice(0,index),
        Object.assign({}, this.state.experience[index], {liveInfo: {
          ...prevState.experience[index].liveInfo,
          location: e.target.value,
        }}),
        ...prevState.experience.slice(index+1)
      ]
    }))
  }
  handleBulletChange(e) {
    const idStr = e.target.id;
    const firstDash = idStr.indexOf('-');
    const expArrId = idStr.slice(0,firstDash);
    const bulletArrInd = idStr.slice(-1);
    const expArrInd = this.idToIndex(this.state.experience, expArrId);
    let stateCopy = Object.assign({}, this.state)
    stateCopy.experience[expArrInd].liveInfo.bullets[bulletArrInd] = e.target.value
    this.setState(stateCopy)
  }

  // EDUCATION EDIT, ADD, DELETE, SUBMIT

  handleEducationEdit(e) {
    const id = e.target.id.replace('-edit', '')
    console.log(e.target.id)
    const index = this.idToIndex(this.state.education, id)
    this.setState(prevState => ({
      education: [
        ...prevState.education.slice(0, index),
        Object.assign({}, this.state.education[index], {isInFormMode: !this.state.education[index].isInFormMode}),
        ...prevState.education.slice(index+1)
      ]
    }))
  }
  handleEducationSubmit(e) {
    e.preventDefault();
    const id = e.target.id.replace('-submit', '')
    const index = this.idToIndex(this.state.education, id)
    this.setState(prevState => ({
      education: [
        ...prevState.education.slice(0, index),
        {
          id: prevState.education[index].id,
          isInFormMode: !prevState.education[index].isInFormMode,
          liveInfo: {
            degree: '',
            institution: '',
            start: '',
            end: '',
            location: '',
            gpa: '',
          },
          savedInfo: {
            degree: prevState.education[index].liveInfo.degree ? prevState.education[index].liveInfo.degree : prevState.education[index].savedInfo.degree,
            institution: prevState.education[index].liveInfo.institution ? prevState.education[index].liveInfo.institution : prevState.education[index].savedInfo.institution,
            start: prevState.education[index].liveInfo.start ? prevState.education[index].liveInfo.start : prevState.education[index].savedInfo.start,
            end: prevState.education[index].liveInfo.end ? prevState.education[index].liveInfo.end : prevState.education[index].savedInfo.end,
            location: prevState.education[index].liveInfo.location ? prevState.education[index].liveInfo.location : prevState.education[index].savedInfo.location,
            gpa: prevState.education[index].liveInfo.gpa ? prevState.education[index].liveInfo.gpa : prevState.education[index].savedInfo.gpa,
          }
        },
        ...prevState.education.slice(index+1)
      ]
    }))
  }
  handleAddEducation() {
    this.setState(prevState => ({
      education: [
        ...prevState.education,
        this.returnNewEducation()
      ]
    }))
  }
  handleDeleteEducation(e) {
    if (this.state.education.length > 1) {
      const id = e.target.id.replace('-delete', '')
      const index = this.idToIndex(this.state.education, id)
      this.setState(prevState => ({
        education: [
          ...prevState.education.slice(0, index),
          ...prevState.education.slice(index + 1)
        ]
      }))
    }
  }
  // EDUCATION FORM HANDLERS
  handleDegreeChange(e) {
    const id = e.target.id.replace('-degree', '')
    const index = this.idToIndex(this.state.education, id)
    this.setState(prevState => ({
      education: [
        ...prevState.education.slice(0, index),
        Object.assign({}, this.state.education[index], {liveInfo: {
          ...prevState.education[index].liveInfo,
          degree: e.target.value,
        }}),
        ...prevState.education.slice(index + 1)
      ]
    }))
  } 
  handleInstitutionChange(e) { 
    const id = e.target.id.replace('-institution', '')
    const index = this.idToIndex(this.state.education, id)
    this.setState(prevState => ({
      education: [
        ...prevState.education.slice(0, index),
        Object.assign({}, this.state.education[index], {liveInfo: {
          ...prevState.education[index].liveInfo,
          institution: e.target.value,
        }}),
        ...prevState.education.slice(index + 1)
      ]
    }))
  } 
  handleEdStartChange(e) {
    const id = e.target.id.replace('-start', '')
    const index = this.idToIndex(this.state.education, id)
    this.setState(prevState => ({
      education: [
        ...prevState.education.slice(0, index),
        Object.assign({}, this.state.education[index], {liveInfo: {
          ...prevState.education[index].liveInfo,
          start: e.target.value,
        }}),
        ...prevState.education.slice(index + 1)
      ]
    }))
  } 
  handleEdEndChange(e) {
    const id = e.target.id.replace('-end', '')
    const index = this.idToIndex(this.state.education, id)
    this.setState(prevState => ({
      education: [
        ...prevState.education.slice(0, index),
        Object.assign({}, this.state.education[index], {liveInfo: {
          ...prevState.education[index].liveInfo,
          end: e.target.value,
        }}),
        ...prevState.education.slice(index + 1)
      ]
    }))
  } 
  handleEdLocationChange(e) {
    const id = e.target.id.replace('-location', '')
    const index = this.idToIndex(this.state.education, id)
    this.setState(prevState => ({
      education: [
        ...prevState.education.slice(0, index),
        Object.assign({}, this.state.education[index], {liveInfo: {
          ...prevState.education[index].liveInfo,
          location: e.target.value,
        }}),
        ...prevState.education.slice(index + 1)
      ]
    }))
  } 
  handleGpaChange(e) {
    const id = e.target.id.replace('-gpa', '')
    const index = this.idToIndex(this.state.education, id)
    this.setState(prevState => ({
      education: [
        ...prevState.education.slice(0, index),
        Object.assign({}, this.state.education[index], {liveInfo: {
          ...prevState.education[index].liveInfo,
          gpa: e.target.value,
        }}),
        ...prevState.education.slice(index + 1)
      ]
    }))
  }
  


  render() {
    return (
      <div>
        <Header />
        <Hero />
        <main>
          <div className="container">
            <div className="row">
              <div className="col-lg">
                <h1 className="text-muted">Contact</h1>
                <Contact contact={this.state.contact} 
                handleContactSubmit={this.handleContactSubmit} 
                handleContactEdit={this.handleContactEdit}
                handleNameChange={this.handleNameChange}
                handleEmailChange={this.handleEmailChange}
                handlePhoneChange={this.handlePhoneChange}
                handleAddressChange={this.handleAddressChange}/>
              </div>
              <div className="col-lg">
                <h1 className="text-muted">Experience</h1>
                {this.state.experience.map(exp => (
                  <Experience experience={exp}
                  key={exp.id}
                  handlePositionChange={this.handlePositionChange} 
                  handleEmployerChange={this.handleEmployerChange} 
                  handleExpStartChange={this.handleExpStartChange} 
                  handleExpEndChange={this.handleExpEndChange} 
                  handleExpLocationChange={this.handleExpLocationChange} 
                  handleBulletChange={this.handleBulletChange}
                  handleDeleteExperience={this.handleDeleteExperience}
                  handleExperienceSubmit={this.handleExperienceSubmit} 
                  handleExperienceEdit={this.handleExperienceEdit} />
                ))}
                <div className="plus-button-wrapper">
                <div className="btn btn-outline-primary plus-button" onClick={this.handleAddExperience}><FontAwesomeIcon icon={faPlusSquare} size="4x"/></div>
                </div>
              </div>
              <div className="col-lg">
                <h1 className="text-muted">Education</h1>
                {this.state.education.map(ed => (
                  <Education education={ed}
                  key={ed.id}
                  handleDegreeChange={this.handleDegreeChange} 
                  handleInstitutionChange={this.handleInstitutionChange} 
                  handleEdStartChange={this.handleEdStartChange} 
                  handleEdEndChange={this.handleEdEndChange} 
                  handleEdLocationChange={this.handleEdLocationChange} 
                  handleGpaChange={this.handleGpaChange} 
                  handleDeleteEducation={this.handleDeleteEducation} 
                  handleEducationSubmit={this.handleEducationSubmit} 
                  handleEducationEdit={this.handleEducationEdit}/> 
                ))}
                <div className="plus-button-wrapper">
                <button className="btn btn-outline-primary plus-button" onClick={this.handleAddEducation}><FontAwesomeIcon icon={faPlusSquare} size="4x"/></button>
                </div>
              </div>
            </div>
          </div>
        </main>
        </div>
    )
  }
  
}

export default App;