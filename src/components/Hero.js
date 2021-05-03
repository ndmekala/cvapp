import React, { Component } from 'react';

class Hero extends Component {
    constructor(props) {
        super (props)
    }

    render() {
        return (
            <div className="px-4 py-5 text-center" id="hero-background">
                    <h1 className="display-5 fw-bold hero-header">CV App</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Generate your CV by filling out your personal information, experiences, and education background below.</p>
                    </div>
            </div>
        )
    }
}

export default Hero