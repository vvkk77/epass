import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Team from '../data/team-list.js';
import Profile from '../components/profile';

const team = () => {
    return (
        <Layout>
            <SEO title="Team" />
            <div className="container">
                <div className="team-container">
                    <h3 className="title">Team</h3>
                    <div className="team-list">
                        {Team.list.map((profile, i) => (
                            <Profile key={i} profile={profile}></Profile>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default team;
