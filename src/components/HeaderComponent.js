import React, { Component } from 'react';
import { Jumbotron} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'




class Header extends Component {
     

    render() {
        return (
            
                <Jumbotron fluid className='masthead' >

                    <div className='container'>
                        <div className='row'>
                            <div className='col' id='welcome'>
                                <h2 className='welcome'>Munzi Mocha</h2>
                                <p>an experience worth sharing..</p>
                            </div>
                            <div className='col newsletter' style={{ float: 'right' }}>
                                <form className='form-group float-right' style={{}}>
                                    <label htmlFor='emailInput'>Enter email address to receive our weekly newsletter! </label><br />
                                    <input id='emailInput' className='form-item input' type='text' placeholder='email@email.com'></input><br />
                                    <button type='submit' className='button'>Submit</button>
                                </form>
                            </div>


                        </div>
                    </div>

                </Jumbotron>
                
            
        )
    }



}

export default Header;