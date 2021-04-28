import React, { Component } from 'react';

class Experience extends Component {
    constructor(props) {
        super (props)
    }

    render() {
        
        if (this.props.experience.isInFormMode) {
            return (
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="e.g. Jane Doe" 
                        onChange={this.props.handleNameChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="e.g. janedoe@gmail.com" 
                        onChange={this.props.handleEmailChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" 
                        className="form-control" 
                        id="phone" 
                        placeholder="e.g. (111) 111 1111" 
                        onChange={this.props.handlePhoneChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" 
                        className="form-control" 
                        id="address" 
                        placeholder="e.g. 111 Fairfax Ln. Beverly Hills, CA 90210" 
                        onChange={this.props.handleAddressChange}></input>
                    </div>
                    <button type="submit" 
                    id={this.props.experience.id} 
                    className="btn btn-primary btn-top-margin" 
                    onClick={this.props.handleExperienceSubmit}>Submit</button>
                </form>
            )
        } else {
            return (
                <button id={this.props.experience.id} 
                className="btn btn-primary" 
                onClick={this.props.handleExperienceEdit}>Edit</button>
            )
        }
        
    }
}

export default Experience