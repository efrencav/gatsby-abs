import { Link } from 'gatsby';
import React from 'react';

const FooterBottom = () => {
    return (
        <div className="copyright-area">
            <div className="container">
                <div className="copyright-bg">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="copyright">
                                <span>Copyright ©2024 Abstract Creative. All Rights Reserved</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="privacy-text text-center text-md-end">
                                <ul>
                                    <li>
                                        <Link to="/terms-and-conditions">Terms & Condition</Link>
                                        <Link to="/privacy-policy">Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;
