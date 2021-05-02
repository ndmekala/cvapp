import React, { Component } from 'react';

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

                    {/* BULLETS */}
                    <div className="form-group">
                        <label htmlFor={this.props.experience.id + "-bullet-0"}>Bullet Point Description</label>
                        <input type="text" 
                        className="form-control" 
                        id={this.props.experience.id + "-bullet-0"}
                        placeholder={this.props.experience.savedInfo.bullets[0] ? this.props.experience.savedInfo.bullets[0] : "e.g. Increased application load times by 15%."}
                        onChange={this.props.handleBulletChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor={this.props.experience.id + "-bullet-1"}>Bullet Point Description</label>
                        <input type="text" 
                        className="form-control" 
                        id={this.props.experience.id + "-bullet-1"}
                        placeholder={this.props.experience.savedInfo.bullets[1] ? this.props.experience.savedInfo.bullets[1] : "e.g. Increased application load times by 15%."}
                        onChange={this.props.handleBulletChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor={this.props.experience.id + "-bullet-2"}>Bullet Point Description</label>
                        <input type="text" 
                        className="form-control" 
                        id={this.props.experience.id + "-bullet-2"}
                        placeholder={this.props.experience.savedInfo.bullets[2] ? this.props.experience.savedInfo.bullets[2] : "e.g. Increased application load times by 15%."}
                        onChange={this.props.handleBulletChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor={this.props.experience.id + "-bullet-3"}>Bullet Point Description</label>
                        <input type="text" 
                        className="form-control" 
                        id={this.props.experience.id + "-bullet-3"}
                        placeholder={this.props.experience.savedInfo.bullets[3] ? this.props.experience.savedInfo.bullets[3] : "e.g. Increased application load times by 15%."}
                        onChange={this.props.handleBulletChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor={this.props.experience.id + "-bullet-4"}>Bullet Point Description</label>
                        <input type="text" 
                        className="form-control" 
                        id={this.props.experience.id + "-bullet-4"}
                        placeholder={this.props.experience.savedInfo.bullets[4] ? this.props.experience.savedInfo.bullets[4] : "e.g. Increased application load times by 15%."}
                        onChange={this.props.handleBulletChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor={this.props.experience.id + "-bullet-5"}>Bullet Point Description</label>
                        <input type="text" 
                        className="form-control" 
                        id={this.props.experience.id + "-bullet-5"}
                        placeholder={this.props.experience.savedInfo.bullets[5] ? this.props.experience.savedInfo.bullets[5] : "e.g. Increased application load times by 15%."}
                        onChange={this.props.handleBulletChange}></input>
                    </div>
                    <button type="submit" 
                    id={this.props.experience.id} 
                    className="btn btn-primary btn-top-margin"
                    onClick={this.props.handleExperienceSubmit}>Submit</button>
                </form>
                <button className={this.props.experience.id + " btn btn-primary btn-top-margin"} 
                onClick={this.props.handleDeleteExperience}>Delete</button>
                </div>
                
            )
        } else {
            return (
                <div>
                    <h2>{this.props.experience.savedInfo.position}</h2>
                    <p className="para-nospacing">{this.props.experience.savedInfo.employer}</p>
                    <p>{this.props.experience.savedInfo.location}</p>
                    <p className="para-nospacing">{this.props.experience.savedInfo.start}</p>
                    <p>{this.props.experience.savedInfo.end}</p>
                    <ul>
                        {this.props.experience.savedInfo.bullets.filter(bullet => bullet).map(bullet => <li>{bullet}</li>)}
                    </ul>
                    <button id={this.props.experience.id} 
                    className="btn btn-primary" 
                    onClick={this.props.handleExperienceEdit}>Edit</button> 
                </div>
                
            )
        }
        
    }
}

export default Experience