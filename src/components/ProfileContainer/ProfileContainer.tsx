import React from 'react';
import MichaelPP from '../../assets/images/michael-pp.jpg'

const ProfileContainer = () => {
  return (
    <div className="profile">
      <div className="profile__img-container">
        <img src={MichaelPP} alt="Michael Ackerman profile picture" />
      </div>
      <h2>Michael Ackermann</h2>
    </div>
  );
};

export default ProfileContainer;
