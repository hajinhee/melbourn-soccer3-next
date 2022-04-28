import React from 'react';
import { connect } from 'react-redux';
import { Profile } from '@/components/user/Profile';
import { profile } from '@/modules/user/profile';

const ProfilePage = () => {
    
  return (
    <Profile/>
  );
};

export default connect(
  state => ({
    profileUser: state.profileUser
  }),
  {profile}
)(ProfilePage);