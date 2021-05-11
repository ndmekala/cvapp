import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const App = () => {
	
	// FACTORY FUNCTIONS
	const contactGenerator = () => {
    return {
      isInFormMode: true,
      liveInfo: {name: '', email: '', phone: '', address: ''},
      savedInfo: {name: '', email: '', phone: '', address: ''},
    }
	};
	const experienceGenerator = () => {
    return {
      id: uniqid(),
      isInFormMode: true,
      liveInfo: {position: '', employer: '', start: '', end: '', location: '', bullets: ['', '', '', '', '', '']},
      savedInfo: {position: '', employer: '', start: '', end: '', location: '', bullets: ['', '', '', '', '', '']},
    }
	};
	const educationGenerator = () => {
    return {
      id: uniqid(),
      isInFormMode: true,
      liveInfo: {degree: '', institution: '', start: '', end: '', location: '', gpa: ''},
		  savedInfo: {degree: '', institution: '', start: '', end: '', location: '', gpa: ''},
    }
	};
	
	// SETTING STATE
	const [contact, setContact] = useState([contactGenerator()]);
	const [experience, setExperience] = useState([experienceGenerator()]);
	const [education, setEducation] = useState([educationGenerator()]);

	// CONTACT EDIT, SUBMIT, AND FORM HANDLER
	function handleContactEdit() {
		let stateCopy = contact;
		stateCopy[0].isInFormMode = !contact[0].isInFormMode;
		setContact([...stateCopy]);
	};
	function handleContactSubmit(e) {
		e.preventDefault();
		let stateCopy = contact;
    stateCopy[0].isInFormMode = !contact[0].isInFormMode;
		stateCopy[0].savedInfo = {
			name: contact[0].liveInfo.name ? contact[0].liveInfo.name : contact[0].savedInfo.name,
			email: contact[0].liveInfo.email ? contact[0].liveInfo.email : contact[0].savedInfo.email,
			phone: contact[0].liveInfo.phone ? contact[0].liveInfo.phone : contact[0].savedInfo.phone,
			address: contact[0].liveInfo.address ? contact[0].liveInfo.address : contact[0].savedInfo.address,
		}
    stateCopy[0].liveInfo = {name: '', email: '', phone: '', address: ''};
		setContact([...stateCopy]);
	}
	function handleContactChange(e) {
    let stateCopy = contact;
		stateCopy[0].liveInfo[e.target.id] = e.target.value;
		setContact([...stateCopy])
	}
	
	// EXPERIENCE EDIT, SUBMIT, ADD, DELETE, FORM HANDLER
	function handleExperienceEdit(e) {
		const id = e.target.id.replace('-edit', '')
		const i = experience.findIndex(element => element.id === id)
		let stateCopy = experience;
		stateCopy[i].isInFormMode = !experience[i].isInFormMode;
		setExperience([...stateCopy]);
	};
	function handleExperienceSubmit(e) {
		e.preventDefault();
		const id = e.target.id.replace('-submit', '')
		const i = experience.findIndex(element => element.id === id);
		let stateCopy = experience;
		stateCopy[i].isInFormMode = !experience[i].isInFormMode;
		stateCopy[i].savedInfo.position = experience[i].liveInfo.position ? experience[i].liveInfo.position : experience[i].savedInfo.position;
		stateCopy[i].savedInfo.employer = experience[i].liveInfo.employer ? experience[i].liveInfo.employer : experience[i].savedInfo.employer;
		stateCopy[i].savedInfo.start = experience[i].liveInfo.start ? experience[i].liveInfo.start : experience[i].savedInfo.start;
		stateCopy[i].savedInfo.end = experience[i].liveInfo.end ? experience[i].liveInfo.end : experience[i].savedInfo.end;
		stateCopy[i].savedInfo.location = experience[i].liveInfo.location ? experience[i].liveInfo.location : experience[i].savedInfo.location;
		stateCopy[i].savedInfo.bullets[0] = experience[i].liveInfo.bullets[0] ? experience[i].liveInfo.bullets[0] : experience[i].savedInfo.bullets[0];
		stateCopy[i].savedInfo.bullets[1] = experience[i].liveInfo.bullets[1] ? experience[i].liveInfo.bullets[1] : experience[i].savedInfo.bullets[1];
		stateCopy[i].savedInfo.bullets[2] = experience[i].liveInfo.bullets[2] ? experience[i].liveInfo.bullets[2] : experience[i].savedInfo.bullets[2];
		stateCopy[i].savedInfo.bullets[3] = experience[i].liveInfo.bullets[3] ? experience[i].liveInfo.bullets[3] : experience[i].savedInfo.bullets[3];
		stateCopy[i].savedInfo.bullets[4] = experience[i].liveInfo.bullets[4] ? experience[i].liveInfo.bullets[4] : experience[i].savedInfo.bullets[4];
		stateCopy[i].savedInfo.bullets[5] = experience[i].liveInfo.bullets[5] ? experience[i].liveInfo.bullets[5] : experience[i].savedInfo.bullets[5];
    stateCopy[i].liveInfo = {position: '', employer: '', start: '', end: '', location: '', bullets: ['', '', '', '', '', '']};
		console.log(stateCopy)
    setExperience([...stateCopy]);
	}
	function handleAddExperience() {
		let stateCopy = experience
		stateCopy.push(experienceGenerator())
    setExperience([...stateCopy]);
	};
	function handleDeleteExperience(e) {
    e.preventDefault()
		if (experience.length > 1) {
			const id = e.target.id.replace('-delete', '');
      let stateCopy = experience;
      stateCopy = experience.filter(exp => exp.id !== id)
      setExperience([...stateCopy]);
		}
	};
	function handleExpChange(e) {
		const id = e.target.id.slice(0, e.target.id.indexOf('-'));
		const key = e.target.id.slice(e.target.id.indexOf('-') + 1, e.target.id.length);
		const i = experience.findIndex(element => element.id === id);
		let stateCopy = experience;
		stateCopy[i].liveInfo[key] = e.target.value;
    setExperience([...stateCopy]);
	}
	function handleExpBulletChange(e) {
		const id = e.target.id.slice(0, e.target.id.indexOf('-'));
		const i = experience.findIndex(element => element.id === id);
		const j = e.target.id.slice(-1);
		let stateCopy = experience;
		stateCopy[i].liveInfo.bullets[j] = e.target.value
    setExperience([...stateCopy]);
	}
	
	// EDUCATION EDIT, SUBMIT, ADD, DELETE, FORM HANDLER
	function handleEducationEdit(e) {
    const id = e.target.id.replace('-edit', '')
    const i = education.findIndex(element => element.id === id)
		let stateCopy = education;
		stateCopy[i].isInFormMode = !education[i].isInFormMode;
		setEducation([...stateCopy]);
	};
	function handleEducationSubmit(e) {
		e.preventDefault();
		const id = e.target.id.replace('-submit', '')
		const i = education.findIndex(element => element.id === id);
		let stateCopy = education;
		stateCopy[i].isInFormMode = !education[i].isInFormMode;
		stateCopy[i].savedInfo = {
			degree: education[i].liveInfo.degree ? education[i].liveInfo.degree : education[i].savedInfo.degree,
			institution: education[i].liveInfo.institution ? education[i].liveInfo.institution : education[i].savedInfo.institution,
			start: education[i].liveInfo.start ? education[i].liveInfo.start : education[i].savedInfo.start,
			end: education[i].liveInfo.end ? education[i].liveInfo.end : education[i].savedInfo.end,
      location: education[i].liveInfo.location ? education[i].liveInfo.location : education[i].savedInfo.location,
			gpa: education[i].liveInfo.gpa ? education[i].liveInfo.gpa : education[i].savedInfo.gpa,
		}
    stateCopy[i].liveInfo = {degree: '', institution: '', start: '', end: '', location: '', gpa: ''};
    setEducation([...stateCopy])
	}
	function handleAddEducation() {
		let stateCopy = education
		stateCopy.push(educationGenerator())
		setEducation([...stateCopy])
	};
	function handleDeleteEducation(e) {
    e.preventDefault();
		if (education.length > 1) {
			const id = e.target.id.replace('-delete', '')
			let stateCopy = education;
      stateCopy = education.filter(exp => exp.id !== id)
      setEducation([...stateCopy]);
		}
	};
	function handleEducationChange(e) {
		const id = e.target.id.slice(0, e.target.id.indexOf('-'));
		const key = e.target.id.slice(e.target.id.indexOf('-') + 1, e.target.id.length);
		const i = education.findIndex(element => element.id === id);
		let stateCopy = education;
		stateCopy[i].liveInfo[key] = e.target.value;
		setEducation([...stateCopy]);
	};
	
	useEffect(() => {
		
	});
	
	return (
		<div>
			<Header />
			<Hero />
			<div className="container">
				<div className="row">
					<div className="col-lg">
						<h1 className="text-muted">Contact</h1>
						<Contact contact={contact[0]}
						handleContactSubmit={handleContactSubmit}
						handleContactEdit={handleContactEdit}
						handleContactChange={handleContactChange} />
					</div>
					<div className="col-lg">
						<h1 className="text-muted">Experience</h1>
						{experience.map(exp => (
							<Experience experience={exp}
							key={exp.id}
							handleExpChange={handleExpChange}
							handleExpBulletChange={handleExpBulletChange}
							handleDeleteExperience={handleDeleteExperience}
							handleExperienceSubmit={handleExperienceSubmit}
							handleExperienceEdit={handleExperienceEdit} />
							))}
						<div className="plus-button-wrapper">
						<button className="btn btn-outline-primary plus-button" onClick={handleAddExperience}><FontAwesomeIcon icon={faPlusSquare} size="4x"/></button>
						</div>
					</div>
					<div className="col-lg">
						<h1 className="text-muted">Education</h1>
						{education.map(ed => (
							<Education education={ed}
							key={ed.id}
							handleEducationChange={handleEducationChange}
							handleDeleteEducation={handleDeleteEducation}
							handleEducationSubmit={handleEducationSubmit}
							handleEducationEdit={handleEducationEdit} />
						))}
						<div className="plus-button-wrapper">
                		<button className="btn btn-outline-primary plus-button" onClick={handleAddEducation}><FontAwesomeIcon icon={faPlusSquare} size="4x"/></button>
                		</div>
					</div>
				</div>
			</div>
			<main>
			</main>
		</div>
		
	);
}

export default App;