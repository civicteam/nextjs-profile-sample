import styles from '../styles/Home.module.css'
import React from 'react';
import { CivicProfile } from '@civic/profile'
import Image from 'next/image';

export default function Home() {
  const [profile, setProfile] = React.useState();

  const loadProfile = (e) => {
      e.preventDefault()
      CivicProfile.get(e.target.subject.value).then(setProfile);
  }

  return (
      <div className={styles.container}>
          <header className={styles.main}>
              <form onSubmit={loadProfile}>
                  Enter wallet address <input name="subject" type="text" placeholder="Subject"/>
                  <input type="submit"/>
              </form>
              {profile && <div>
                  <h1>{profile.name?.value}</h1>
                  <Image width={200} src={profile.image?.url} alt="profile"/>
              </div>}
          </header>
      </div>
  );
}
