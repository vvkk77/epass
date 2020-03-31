import PropTypes from 'prop-types';
import React from 'react';
import './header.scss';
import Logo from '../images/logo.png';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
    <div className="container">
        <nav
            className="navbar epass-nav is-flex"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src={Logo} alt="EPass Logo" />
                </a>
            </div>

            <div className="navbar-menu-items">
                <div className="navbar-item">
                    <span className="page-link has-text-weight-semibold">
                        About
                    </span>
                    <Link
                        to="/team"
                        className="page-link has-text-weight-semibold"
                        activeClassName="active-page-link has-text-primary"
                    >
                        Team
                    </Link>
                </div>
            </div>
        </nav>
    </div>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
