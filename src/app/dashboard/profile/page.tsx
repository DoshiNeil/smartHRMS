"use client"

import PersonalDetails from './PersonalDetails';
import ProfileHeaderSection from './ProfileHeaderSection';

export default function ProfilePage() {
  return (
    <>
      <ProfileHeaderSection />
      {/** tabs **/}
      <PersonalDetails />
    </>
  );
}
