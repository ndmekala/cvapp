import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super (props)
    }


// degree: '',
// institution: '',
// start: '',
// end: '',
// location: '',
// gpa: ''

    render() {
        
        if (this.props.education.isInFormMode) {
            return (
                <div>
                    <form>
                        <div className="form=group">
                            <label htmlFor={this.props.education.id + "-degree"}>Degree</label>
                            <input type="text" 
                            className="form-control" 
                            id={this.props.education.id + "-degree"}
                            placeholder={this.props.education.savedInfo.degree ? this.props.education.savedInfo.degree : "e.g. B.S. Computer Science" }
                            onChange={this.props.handleDegreeChange}></input>
                        </div>
                        <div className="form=group">
                            <label htmlFor={this.props.education.id + "-institution"}>Institution</label>
                            <input type="text" 
                            className="form-control" 
                            id={this.props.education.id + "-institution"}
                            placeholder={this.props.education.savedInfo.institution ? this.props.education.savedInfo.institution : "e.g. University of California Berkeley" }
                            onChange={this.props.handleInstitutionChange}></input>
                        </div>
                        <div className="form=group">
                            <label htmlFor={this.props.education.id + "-start"}>Start</label>
                            <input type="text" 
                            className="form-control" 
                            id={this.props.education.id + "-start"}
                            placeholder={this.props.education.savedInfo.start ? this.props.education.savedInfo.start : "e.g. 2016" }
                            onChange={this.props.handleEdStartChange}></input>
                        </div>
                        <div className="form=group">
                            <label htmlFor={this.props.education.id + "-end"}>End</label>
                            <input type="text" 
                            className="form-control" 
                            id={this.props.education.id + "-end"}
                            placeholder={this.props.education.savedInfo.end ? this.props.education.savedInfo.end : "e.g. 2020" }
                            onChange={this.props.handleEdEndChange}></input>
                        </div>
                        <div className="form=group">
                            <label htmlFor={this.props.education.id + "-location"}>Location</label>
                            <input type="text" 
                            className="form-control" 
                            id={this.props.education.id + "-location"}
                            placeholder={this.props.education.savedInfo.location ? this.props.education.savedInfo.location : "e.g. Berkely, CA" }
                            onChange={this.props.handleEdLocationChange}></input>
                        </div>
                        <div className="form=group">
                            <label htmlFor={this.props.education.id + "-gpa"}>GPA</label>
                            <input type="text" 
                            className="form-control" 
                            id={this.props.education.id + "-gpa"}
                            placeholder={this.props.education.savedInfo.gpa ? this.props.education.savedInfo.gpa : "e.g. 3.93" }
                            onChange={this.props.handleGpaChange}></input>
                        </div>
                    <button type="submit" 
                    id={this.props.education.id}
                    className="btn btn-primary btn-top-margin" 
                    onClick={this.props.handleEducationSubmit}>Submit</button>
                </form>
                <button className={this.props.education.id + " btn btn-primary btn-top-margin"} 
                onClick={this.props.handleDeleteEducation}>Delete</button> 
                </div>
            )
        } else {
            return (
                <div>
                    <h2>{this.props.education.savedInfo.degree}</h2>
                    <p className="para-nospacing">{this.props.education.savedInfo.institution}</p>
                    <p className="para-nospacing">{this.props.education.savedInfo.start}</p>
                    <p className="para-nospacing">{this.props.education.savedInfo.end}</p>
                    <p className="para-nospacing">{this.props.education.savedInfo.location}</p>
                    <p className="para-nospacing">{this.props.education.savedInfo.gpa}</p>
                    <button className="btn btn-primary" 
                    id={this.props.education.id}
                    onClick={this.props.handleEducationEdit}>Edit</button>
                </div>
                
            )
        }
        
    }
}

export default Education