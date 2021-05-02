import React, { Component } from 'react';
import uniqid from 'uniqid';
import Footer from './components/Footer'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'


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

    this.setExperienceFormMode = this.setExperienceFormMode.bind(this);
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
      }), () => console.table(this.state))
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
    }), () => console.table(this.state))
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
    }), () => console.table(this.state))
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
    }), () => console.table(this.state))
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
    }), () => console.table(this.state))
  }
  

  // Experience EDIT, ADD, DELETE, SUBMIT
  // CONSOLIDATE THE FOLLOWING 2!
  setExperienceFormMode(id) {
    const index = this.idToIndex(this.state.experience, id)
    this.setState(prevState => ({
      experience: [
        ...prevState.experience.slice(0, index),
        Object.assign({}, this.state.experience[index], {isInFormMode: !this.state.experience[index].isInFormMode}),
        ...prevState.experience.slice(index+1)
      ]
    }))    
  }
  handleExperienceEdit(e) {
    this.setExperienceFormMode(e.target.id);
  }
  handleExperienceSubmit(e) {
    e.preventDefault();
    const index = this.idToIndex(this.state.experience, e.target.id)
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
    }), () => console.log(this.state.experience))
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
      const id = e.target.classList[0]
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
    }), () => console.log(this.state.experience[index]))
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
    }), () => console.log(this.state.experience[index]))
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
    }), () => console.log(this.state.experience[index]))
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
    }), () => console.log(this.state.experience[index]))
  }
  handleExpLocationChange(e) {
    const id = e.target.id.replace('-location','')
    console.log(this.state)
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
    }), () => console.log(this.state.experience[index]))
  }
  // format of key = (uniqid)-bullet-0
  // prop as key, make id as well…?
  handleBulletChange(e) {
    const idStr = e.target.id;
    const firstDash = idStr.indexOf('-');
    const expArrId = idStr.slice(0,firstDash);
    const bulletArrInd = idStr.slice(-1);
    const expArrInd = this.idToIndex(this.state.experience, expArrId);
    let stateCopy = Object.assign({}, this.state)
    stateCopy.experience[expArrInd].liveInfo.bullets[bulletArrInd] = e.target.value
    this.setState(stateCopy, () => console.log(this.state))
  }

  // EDUCATION EDIT, ADD, DELETE, SUBMIT
  handleEducationEdit(e) {
    const id = e.target.id
    const index = this.idToIndex(this.state.education, id)
    this.setState(prevState => ({
      education: [
        ...prevState.education.slice(0, index),
        Object.assign({}, this.state.education[index], {isInFormMode: !this.state.education[index].isInFormMode}),
        ...prevState.experience.slice(index+1)
      ]
    }))
  }
  handleEducationSubmit(e) {
    e.preventDefault();
    const index = this.idToIndex(this.state.education, e.target.id)
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
    }), () => console.log(this.state.education))
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
      const id = e.target.classList[0]
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
    }), () => console.log(this.state.education[index]))
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
    }), () => console.log(this.state.education[index]))
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
    }), () => console.log(this.state.education[index]))
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
    }), () => console.log(this.state.education[index]))
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
    }), () => console.log(this.state.education[index]))
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
    }), () => console.log(this.state.education[index]))
  }
  


  render() {
    return (
      <div className="d-flex flex-column h-100">
        <main className="flex-shrink-0">
          <div className="container">
            <h1 className="text-muted">Contact</h1>
            <Contact contact={this.state.contact} 
            handleContactSubmit={this.handleContactSubmit} 
            handleContactEdit={this.handleContactEdit}
            handleNameChange={this.handleNameChange}
            handleEmailChange={this.handleEmailChange}
            handlePhoneChange={this.handlePhoneChange}
            handleAddressChange={this.handleAddressChange}/>
            <h1 className="text-muted">Experience</h1>
            {this.state.experience.map(exp => (
              <Experience experience={exp}
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
            <button className="btn btn-primary btn-top-margin" onClick={this.handleAddExperience}>Add</button>
            <h1 className="text-muted">Education</h1>
            {this.state.education.map(ed => (
              <Education education={ed}
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
            <button className="btn btn-primary btn-top-margin" onClick={this.handleAddEducation}>Add</button>

          </div>
        </main>
        <Footer />
        </div>
    )
  }
  
}

export default App;