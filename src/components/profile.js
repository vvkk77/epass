import React from 'react';
import linkedinLogo from '../images/logo-linkedin.png';

const Profile = ({ profile }) => {
    return (
        <div className="profile">
            <div className="box">
                <img
                    className="profile-image"
                    src={profile.image}
                    alt={profile.name}
                />
                <div className="title has-text-black">{profile.name}</div>
                <div className="subtitle has-text-black-bis">
                    {profile.position}
                </div>

                <a className="linkenIn-icon" href={profile.linkendIn}>
                    <img
                        width="24"
                        height="24"
                        src={linkedinLogo}
                        alt="LinkenIn"
                    />
                </a>
            </div>
        </div>
    );
};

export default Profile;
