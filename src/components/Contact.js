import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super (props)
    }

    render() {
        
        if (this.props.contact.isInFormMode) {
            return (
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" 
                        className="form-control" 
                        id="name" 
                        onChange={this.props.handleNameChange} 
                        placeholder={this.props.contact.savedInfo.name ? this.props.contact.savedInfo.name : 'e.g. Jane Doe'}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                        className="form-control" 
                        id="email" 
                        onChange={this.props.handleEmailChange} 
                        placeholder={this.props.contact.savedInfo.email ? this.props.contact.savedInfo.email : "e.g. janedoe@gmail.com"}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" 
                        className="form-control" 
                        id="phone" 
                        onChange={this.props.handlePhoneChange} 
                        placeholder={this.props.contact.savedInfo.phone ? this.props.contact.savedInfo.phone : "e.g. (111) 111 1111"}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" 
                        className="form-control" 
                        id="address" 
                        onChange={this.props.handleAddressChange} 
                        placeholder={this.props.contact.savedInfo.address ? this.props.contact.savedInfo.address : "e.g. 111 Fairfax Ln. Beverly Hills, CA 90210 "}></input>
                    </div>
                    <button type="submit" className="btn btn-primary btn-top-margin" onClick={this.props.handleContactSubmit}>Submit</button>
                </form>
            )
        } else {
            return (
                <div>
                    <h2>{this.props.contact.savedInfo.name}</h2>
                    <p className="para-nospacing">{this.props.contact.savedInfo.email}</p>
                    <p className="para-nospacing">{this.props.contact.savedInfo.phone}</p>
                    <p>{this.props.contact.savedInfo.address}</p>
                    <button className="btn btn-primary" onClick={this.props.handleContactEdit}>Edit</button>
                </div>
            )
        }
        
    }
}

export default Contact