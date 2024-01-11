import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="container-fluid" id='a'>
            <div className="row">
                {/* First Column */}
                <div className="col-md-6 col-lg-4 mb-3">
                    <div className="card h-100">
                        <div className="card-body">
                            {/* Header Section */}
                            <div className='h'>
                                <p className='N'>FREE</p>
                                <h1>$0/month</h1>
                            </div>
                            {/* Content Section */}
                            <div className='c'>
                                <p style={{ color: 'black' }}>&#10004;Single user</p>
                                <p>&#10004;50GB Storage</p>
                                <p>&#10004;Unlimited Public Projects</p>
                                <p>&#10004;Community Access</p>
                                <p>&#x2715;Unlimited Private Projects</p>
                                <p>&#x2715;Dedicated Phone Support</p>
                                <p>&#x2715;Free Subdomain</p>
                                <p>&#x2715;Monthly Status Reports</p>
                            </div>
                            {/* Button */}
                            <a href="#" className="btn" style={{ backgroundColor: 'rgb(48, 172, 255)', color: 'white' }}>Button</a>
                        </div>
                    </div>
                </div>

                {/* Second Column */}
                <div className="col-md-6 col-lg-4 mb-3">
                    <div className="card h-100">
                        <div className="card-body">
                            {/* Header Section */}
                            <div className='h'>
                                <p className='N'>PLUS</p>
                                <h1>$9/month</h1>
                            </div>
                            {/* Content Section */}
                            <div className='c'>
                                <p>&#10004;Single user</p>
                                <p>&#10004;50GB Storage</p>
                                <p>&#10004;Unlimited Public Projects</p>
                                <p>&#10004;Community Access</p>
                                <p style={{ whiteSpace: 'nowrap' }}>&#10004;Unlimited Private Projects</p>
                                <p style={{ whiteSpace: 'nowrap' }}>&#10004;Dedicated Phone Support</p>
                                <p>&#10004;Free Subdomain</p>
                                <p>&#x2715;Monthly Status Reports</p>
                            </div>
                            {/* Button */}
                            <a href="#" className="btn" style={{ backgroundColor: 'rgb(24, 137, 242)', color: 'white' }}>Button</a>
                        </div>
                    </div>
                </div>

                {/* Third Column */}
                <div className="col-md-6 col-lg-4 mb-3">
                    <div className="card h-100">
                        <div className="card-body">
                            {/* Header Section */}
                            <div className='h'>
                                <p className='N'>PRO</p>
                                <h1 style={{ whiteSpace: 'nowrap' }}>$49/month</h1>
                            </div>
                            {/* Content Section */}
                            <div className='c'>
                                <p>&#10004;Single user</p>
                                <p>&#10004;50GB Storage</p>
                                <p>&#10004;Unlimited Public Projects</p>
                                <p>&#10004;Community Access</p>
                                <p style={{ whiteSpace: 'nowrap' }}>&#10004;Unlimited Private Projects</p>
                                <p style={{ whiteSpace: 'nowrap' }}>&#10004;Dedicated Phone Support</p>
                                <p>&#10004;Free Subdomain</p>
                                <p>&#10004;Monthly Status Reports</p>
                            </div>
                            {/* Button */}
                            <a href="#" className="btn" style={{ backgroundColor: 'rgb(2, 102, 232)', color: 'white' }}>Button</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
