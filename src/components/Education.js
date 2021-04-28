import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super (props)
    }

    render() {
        
        if (this.props.isInFormMode) {
            return (
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="e.g. Jane Doe"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="e.g. janedoe@gmail.com"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" className="form-control" id="phone" placeholder="e.g. (111) 111 1111"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="e.g. 111 Fairfax Ln. Beverly Hills, CA 90210 "></input>
                    </div>
                    <button type="submit" className="btn btn-primary btn-top-margin" onClick={this.props.handleContactSubmit}>Submit</button>
                </form>
            )
        } else {
            return (
                <button className="btn btn-primary" onClick={this.props.handleEducationEdit}>Edit</button>
            )
        }
        
    }
}

export default Education