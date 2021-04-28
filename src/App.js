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
      // No. isInFormMode should just be part of each one. edit indivudally.
      experience: [
        {
          id: uniqid(),
          isInFormMode: true,
          liveInfo: {
            position: '',
            employer: '',
            start: '',
            end: '',
            bullets: [],
          },
          savedInfo: {
            position: '',
            employer: '',
            start: '',
            end: '',
            bullets: [],
          }
        },
      ],
      experience2: {

        isInFormMode: true,
        experienceArray: [
          {

          },
        ],
      },
      education: {
        isInFormMode: true,
        educationArray: [
          {

          },
        ],
      },
    }

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
    this.setEducationFormMode = this.setEducationFormMode.bind(this);
    this.handleEducationSubmit = this.handleEducationSubmit.bind(this);
    this.handleEducationEdit = this.handleEducationEdit.bind(this);

  }
  idToObjectInArray(array, id){
    let arr = array.forEach(obj => obj.id === id);
    // return the array or location in array??
    return arr[0];
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
  // how to make 
  setExperienceFormMode(id) {
    this.state.experience.isInFormMode ? this.setState({experience: {isInFormMode: 0}}) : this.setState({experience: {isInFormMode: 1}})
  }
  handleExperienceEdit(e) {
    this.setExperienceFormMode();
    // these will make use of this.idToObjectInArray(id[from e], this.state.experience)
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

            {/* {[1,2].map(item => (<Contact isInFormMode={this.state.contact.isInFormMode}
            handleContactSubmit={this.handleContactSubmit} 
            handleContactEdit={this.handleContactEdit}/>))} */}
            
            <h1 className="text-muted">Experience</h1>
            {this.state.experience.map(exp => (
              <Experience experience={exp}
              handleExperienceSubmit={this.handleExperienceSubmit} 
              handleExperienceEdit={this.handleExperienceEdit} />
            ))}
            <h1 className="text-muted">Education</h1>
            <Education isInFormMode={this.state.education.isInFormMode} 
            handleEducationSubmit={this.handleEducationSubmit} 
            handleEducationEdit={this.handleEducationEdit}/>
          </div>
        </main>
        <Footer />
        </div>
    )
  }
  
}

export default App;
