import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

class Contact extends Component {
    constructor(props) {
        super (props)
    }

    render() {
        
        if (this.props.contact.isInFormMode) {
            return (
                <div className="bottom-border">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" 
                            className="form-control" 
                            id="name" 
                            onChange={this.props.handleContactChange} 
                            placeholder={this.props.contact.savedInfo.name ? this.props.contact.savedInfo.name : 'e.g. Jane Doe'}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" 
                            className="form-control" 
                            id="email" 
                            onChange={this.props.handleContactChange} 
                            placeholder={this.props.contact.savedInfo.email ? this.props.contact.savedInfo.email : "e.g. janedoe@gmail.com"}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" 
                            className="form-control" 
                            id="phone" 
                            onChange={this.props.handleContactChange} 
                            placeholder={this.props.contact.savedInfo.phone ? this.props.contact.savedInfo.phone : "e.g. (111) 111 1111"}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" 
                            className="form-control" 
                            id="address" 
                            onChange={this.props.handleContactChange} 
                            placeholder={this.props.contact.savedInfo.address ? this.props.contact.savedInfo.address : "e.g. 111 Fairfax Ln. Beverly Hills, CA 90210 "}></input>
                        </div>
                        <div className="button-wrapper">
                            <button type="submit" onClick={this.props.handleContactSubmit} className="btn btn-outline-success btn-margin btn-margin"><FontAwesomeIcon icon={faCheckSquare} /></button>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="bottom-border">
                    <h2>{this.props.contact.savedInfo.name}</h2>
                    <p className="para-nospacing">{this.props.contact.savedInfo.email}</p>
                    <p className="para-nospacing">{this.props.contact.savedInfo.phone}</p>
                    <p>{this.props.contact.savedInfo.address}</p>
                    <div className="button-wrapper">
                        <button className="btn btn-outline-primary btn-margin" onClick={this.props.handleContactEdit}><FontAwesomeIcon icon={faEdit} /></button>
                    </div>
                </div>
            )
        }
        
    }
}

export default Contact