import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section className='section-sp section-bg'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title mb-40">
                            <h3 className='text-center'>Contact</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 offset-md-2">
                        <div className="contact-form">
                            <form>
                                <input type="text" placeholder='Name'/>
                                <input type="email" placeholder='Email'/>
                                <textarea cols="30" rows="10" placeholder='Massage'></textarea>
                                <input type="submit" value="Send" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;