import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super (props)
    }

    render() {
        return (
            <footer className="footer mt-auto py-3 bg-light">
                <div className="container">
                    <span className='text-muted'><a href="https://www.github.com/ndmekala/cvapp">Repository</a>
                    <br/>
                    <a href="https://www.meka.la">Portfolio</a></span>
                </div>
            </footer>
        )
    }
}

export default Footer