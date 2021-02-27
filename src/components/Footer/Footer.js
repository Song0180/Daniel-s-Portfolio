import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <h3 className="footer-subscription-heading">
                    Please stay connected with me!
                </h3>
                <p className="footer-subscription-text">
                    Looking forward to our joint career path in the future.
                </p>
                <div className="input-areas">
                        <Button buttonStyle="btn--outline" path="/linkedin">Connect</Button>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Quick Navigation</h2>
                        <Link to="/Daniel-s-Portfolio/home">Home</Link>
                        <Link to="/Daniel-s-Portfolio/about">About Me</Link>
                        <Link to="/Daniel-s-Portfolio/portfolio">Portfolio</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact</h2>
                        <p>Email: syyylmdzz@gmail.com</p>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            Daniel Song Yu
                            <i className="fab fa-type3" />
                        </Link>
                    </div>
                    <small className="website-rights"> Daniel Song Yu ©2021</small>
                    <div className="social-icons">
                        <Link
                            className="social-icon-link linkedin"
                            to="/linkedin"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link
                            className="social-icon-link github"
                            to="/github"
                            target="_blank"
                            aria-label="GitHub"
                        >
                            <i className="fab fa-github"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
