import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroImage from '../images/hero.png';
import ApproverDashboardImage from '../images/approver-dashboard.png';
import ApplicantDashboardImage from '../images/applicant-dashboard.png';
import PassVerifiedImage from '../images/pass-verified.png';
import ChoosePassImage from '../images/choose-pass.png';
import OpenSourceImage from '../images/open-source.png';

const POINTS = [
    [
        'Works for organizations and individuals',
        'Multiple kinds of passes supported',
        'Receive a pass in 3 steps!',
    ],
    [
        'Issue passes in one click',
        'Verification app to prevent frauds',
        'Simplify issuance via auto-approvals',
    ],
    [
        'MIT licensed: Adopt, customize, extend',
        'Deploy on premise or on the cloud',
        'Free forever',
    ],
];

const IndexPage = () => (
    <Layout>
        <SEO title="EPass" />
        <div className="homepage-container">
            <div className="container">
                <section className="hero-container">
                    <p className="title is-2 is-spaced">
                        Issue and Verify <br /> commuter passes
                    </p>
                    <p className="subtitle">
                        ePass is a simple, easy to use pass management system
                        which can aid the government in managing curfews
                        digitally
                    </p>
                    <img src={HeroImage} alt="hero background" />
                    <br />
                    <button className="button is-primary is-medium">
                        Request demo
                    </button>
                    <br />
                    <button className="button is-primary is-outlined is-medium github-btn">
                        View on Github
                    </button>
                </section>
            </div>

            <section className="container page-section">
                <div className="columns">
                    <div className="column">
                        <div className="bullet-point is-visible-mobile">
                            <span>1</span>
                        </div>
                        <div></div>
                        <div className="section-image">
                            <img
                                className="dashboard-image"
                                src={ApplicantDashboardImage}
                                alt="hero background"
                            />

                            <img
                                className="phone-image"
                                src={ChoosePassImage}
                                alt="hero background"
                            />
                        </div>
                    </div>
                    <div className="column points-container">
                        <div className="bullet-point is-hidden-mobile">
                            <span>1</span>
                        </div>
                        <p className="title is-4">
                            Easy to use applicant system
                        </p>

                        <div className="points-list">
                            {POINTS[0].map((point, i) => (
                                <div key={i} className="point">
                                    <span className="is-size-4 icon has-text-success">
                                        <i className="mdi mdi-check"></i>
                                    </span>
                                    <span className="subtitle is-6">
                                        {point}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="container page-section">
                <div className="columns">
                    <div className="column points-container">
                        <div className="bullet-point is-hidden-mobile">
                            <span>2</span>
                        </div>

                        <p className="title is-4">Governance made simple</p>
                        <div className="points-list">
                            {POINTS[1].map((point, i) => (
                                <div key={i} className="point">
                                    <span className="is-size-4 icon has-text-success">
                                        <i className="mdi mdi-check"></i>
                                    </span>
                                    <span className="subtitle is-6">
                                        {point}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="column">
                        <div className="bullet-point is-visible-mobile">
                            <span>2</span>
                        </div>
                        <div></div>

                        <div className="section-image has-text-right">
                            <img
                                className="dashboard-image"
                                src={ApproverDashboardImage}
                                alt="hero background"
                            />

                            <img
                                className="phone-image right"
                                src={PassVerifiedImage}
                                alt="hero background"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container page-section">
                <div className="columns">
                    <div className="column">
                        <div className="bullet-point is-visible-mobile">
                            <span>3</span>
                        </div>
                        <div></div>

                        <div className="section-image">
                            <img
                                className="dashboard-image"
                                src={OpenSourceImage}
                                alt="hero background"
                            />
                        </div>
                    </div>
                    <div className="column points-container">
                        <div className="bullet-point is-hidden-mobile">
                            <span>3</span>
                        </div>
                        <p className="title is-4">
                            Utilize the power of open source
                        </p>
                        <div className="points-list">
                            {POINTS[2].map((point, i) => (
                                <div key={i} className="point">
                                    <span className="is-size-4 icon has-text-success">
                                        <i className="mdi mdi-check"></i>
                                    </span>
                                    <span className="subtitle is-6">
                                        {point}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <br></br>

            <section className="container is-fluid checkout-container">
                <div className="title"> Check out ePass </div>
                <button className="button is-primary is-medium">
                    Request demo
                </button>
                <br />
                <button className="button is-primary is-outlined is-medium github-btn">
                    View on Github
                </button>
            </section>
        </div>
    </Layout>
);

export default IndexPage;
