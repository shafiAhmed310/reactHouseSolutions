import React, { Component } from 'react';
import './VendorLogin.css';

class VendorLogin extends Component {
    render() {
        return (
            <div className="container">
                <div className="LoginBlock">
                <div className="bgImg">
                    <img src={'assets/images/home.jpg'} />
                </div>
              <div className="FormBlock">
                    <h3>Vendor Login</h3>
                    
                    <form>
                        
                        <input type="email" placeholder="User Name"  />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Login</button>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}

export default VendorLogin;