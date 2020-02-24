import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'




class Header extends Component {
     
    render() {
        return (
            
                <div fluid className='masthead' >

                    <div className='container'>
                        <div className='row'>
                            <div className='col' id='welcome'>
                                <h2 className='welcome'>Munzi Mocha</h2>
                                <p>an experience worth sharing..</p>
                            </div>
                        </div>
                    </div>

                </div>
                
            
        )
    }



}

export default Header;