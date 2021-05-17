import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

class Education extends Component {
  render() {
    if (this.props.education.isInFormMode) {
      return (
        <div className="bottom-border">
          <form>
            <div className="form-group">
              <label htmlFor={this.props.education.id + "-degree"}>
                Degree
              </label>
              <input
                type="text"
                className="form-control"
                id={this.props.education.id + "-degree"}
                placeholder={
                  this.props.education.savedInfo.degree
                    ? this.props.education.savedInfo.degree
                    : "e.g. B.S. Computer Science"
                }
                onChange={this.props.handleEducationChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor={this.props.education.id + "-institution"}>
                Institution
              </label>
              <input
                type="text"
                className="form-control"
                id={this.props.education.id + "-institution"}
                placeholder={
                  this.props.education.savedInfo.institution
                    ? this.props.education.savedInfo.institution
                    : "e.g. University of California Berkeley"
                }
                onChange={this.props.handleEducationChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor={this.props.education.id + "-location"}>
                Location
              </label>
              <input
                type="text"
                className="form-control"
                id={this.props.education.id + "-location"}
                placeholder={
                  this.props.education.savedInfo.location
                    ? this.props.education.savedInfo.location
                    : "e.g. Berkeley, CA"
                }
                onChange={this.props.handleEducationChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor={this.props.education.id + "-gpa"}>GPA</label>
              <input
                type="text"
                className="form-control"
                id={this.props.education.id + "-gpa"}
                placeholder={
                  this.props.education.savedInfo.gpa
                    ? this.props.education.savedInfo.gpa
                    : "e.g. 3.93"
                }
                onChange={this.props.handleEducationChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor={this.props.education.id + "-start"}>Start</label>
              <input
                type="text"
                className="form-control"
                id={this.props.education.id + "-start"}
                placeholder={
                  this.props.education.savedInfo.start
                    ? this.props.education.savedInfo.start
                    : "e.g. 2016"
                }
                onChange={this.props.handleEducationChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor={this.props.education.id + "-end"}>End</label>
              <input
                type="text"
                className="form-control"
                id={this.props.education.id + "-end"}
                placeholder={
                  this.props.education.savedInfo.end
                    ? this.props.education.savedInfo.end
                    : "e.g. 2020"
                }
                onChange={this.props.handleEducationChange}
              ></input>
            </div>
            <div className="button-wrapper">
              <button
                type="submit"
                className="btn btn-outline-success btn-margin-right btn-margin"
                id={this.props.education.id + "-submit"}
                onClick={this.props.handleEducationSubmit}
              >
                <FontAwesomeIcon icon={faCheckSquare} />
              </button>
              <button
                className="btn btn-outline-danger btn-margin"
                id={this.props.education.id + "-delete"}
                onClick={this.props.handleDeleteEducation}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="bottom-border">
          <h2>{this.props.education.savedInfo.degree}</h2>
          <p className="para-nospacing">
            {this.props.education.savedInfo.institution}
          </p>
          <p className="para-nospacing">
            {this.props.education.savedInfo.location}
          </p>
          <p className="para-nospacing">{this.props.education.savedInfo.gpa}</p>
          <p className="para-nospacing">
            {this.props.education.savedInfo.start}–
            {this.props.education.savedInfo.end}
          </p>
          <div className="button-wrapper">
            <button
              className="btn btn-outline-primary btn-margin"
              id={this.props.education.id + "-edit"}
              onClick={this.props.handleEducationEdit}
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>
        </div>
      );
    }
  }
}

export default Education;
