import React from 'react';

const GithubCards = ({img, name, username, location, profile_url, followers, following, bio}) => {
    return (
        <div className="card">
            <img src={img} alt='github profile avatar'/>
            <div className="card-info">
                <h3 className="name">{name}</h3>
                <p className="username">{username}</p>
                <p>Location: {location}</p>
                <p>Profile:
                        <a href={profile_url}>{profile_url}</a>
                        </p>
                <p>Followers: {followers}</p>
                <p>Following: {following}</p>
                <p>Bio: {bio}</p>
            </div>
        </div>
    );
};

export default GithubCards;