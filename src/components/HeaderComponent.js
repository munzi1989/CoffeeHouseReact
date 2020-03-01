import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as FontAwesome from 'react-icons/lib/fa';




class Header extends Component {

    render() {
        return (

            <div fluid className='masthead' >

                <div className='container'>
                    <div className='row' style={{color: 'white'}}>
                        <div className='col'>
                           
                            
                            <p><FontAwesome.FaHourglass1 color='white' size={15} style={{ margin: 5 }} />Open from 5am-5pm daily!</p>
                        
                        </div>
                        <div className='col'>
                           
                            <p><FontAwesome.FaMap color='white' size={15} style={{margin:5}} />  123 Rainbow Rd, Kansas City, Mo, 64133</p>
                            
                        </div>
                        <div className='col'>
                            
                            <p> <FontAwesome.FaPhone color='white' size={15} style={{ margin: 5 }} />816-555-1234</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col' id='welcome'>
                            <h1 className='welcome'>Munzi Mocha</h1>
                            <p>an experience worth sharing..</p>

                        </div>
                    </div>
                </div>

            </div>


        )
    }



}

export default Header;