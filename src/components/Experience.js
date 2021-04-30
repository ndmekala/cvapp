import React, { Component } from 'react';
import Bullets from './Bullets'

class Experience extends Component {
    constructor(props) {
        super (props)
    }

    render() {
        
        if (this.props.experience.isInFormMode) {
            return (
                <div>
                    <form>
                    <div className="form-group">
                        <label htmlFor={this.props.experience.id + "-position"}>Position</label>
                        <input type="text" 
                        className="form-control" 
                        id={this.props.experience.id + "-position"}
                        placeholder={this.props.experience.savedInfo.position ? this.props.experience.savedInfo.position : "e.g. Junior Developer" }
                        onChange={this.props.handlePositionChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor={this.props.experience.id + "-employer"}>Employer</label>
                        <input type="text" 
                        className="form-control" 
                        id={this.props.experience.id + "-employer"}
                        placeholder={this.props.experience.savedInfo.employer ? this.props.experience.savedInfo.employer : "e.g. Mozilla Corporation"}
                        onChange={this.props.handleEmployerChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor={this.props.experience.id + "-location"}>Location</label>
                        <input type="text" 
                        className="form-control" 
                        id={this.props.experience.id + "-location"}
                        placeholder={this.props.experience.savedInfo.location ? this.props.experience.savedInfo.location : "e.g. San Francisco, CA"}
                        onChange={this.props.handleExpLocationChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor={this.props.experience.id + "-start"}>Start Date</label>
                        <input type="text" 
                        className="form-control" 
                        id={this.props.experience.id + "-start"}
                        placeholder={this.props.experience.savedInfo.start ? this.props.experience.savedInfo.start : "e.g. May 2015"}
                        onChange={this.props.handleExpStartChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor={this.props.experience.id + "-end"}>End Date</label>
                        <input type="text" 
                        className="form-control" 
                        id={this.props.experience.id + "-end"}
                        placeholder={this.props.experience.savedInfo.end ? this.props.experience.savedInfo.end : "e.g. Jan 2019"}
                        onChange={this.props.handleExpEndChange}></input>
                    </div>
                    <Bullets />
                    <button type="submit" 
                    id={this.props.experience.id} 
                    className="btn btn-primary btn-top-margin"
                    onClick={this.props.handleExperienceSubmit}>Submit</button>
                </form>
                <button className={this.props.experience.id + " btn btn-primary btn-top-margin"} 
                onClick={this.props.handleDeleteExperience}>Delete Experience</button>
                </div>
                
            )
        } else {
            return (
                <div>
                    <h2>{this.props.experience.savedInfo.position}</h2>
                    <p className="para-nospacing">{this.props.experience.savedInfo.employer}</p>
                    <p className="para-nospacing">{this.props.experience.savedInfo.start}</p>
                    <p>{this.props.experience.savedInfo.end}</p>
                    <button id={this.props.experience.id} 
                    className="btn btn-primary" 
                    onClick={this.props.handleExperienceEdit}>Edit</button>
                </div>
                
            )
        }
        
    }
}

export default Experience