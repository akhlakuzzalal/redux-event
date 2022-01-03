import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <main className="section-p">
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-2">
                            <div className="left-menu">
                                <ul className="deshboard-menu">
                                    <li>
                                    <Link to={``}><span className="dash-icon" title="Dashboard"></span> <span className="desh-text">Dashboard</span></Link>
                                    </li>
                                    <li>
                                    <Button className="logout-btn"><span className="dash-icon"></span> <span className="desh-text">Logout</span></Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-9 col-10">
                            
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Dashboard;