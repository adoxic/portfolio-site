import React from 'react';
import styles from './Header.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>Maeve Griffin</h1>
      
      <div>
        <p>small bio, full stack software developer with work history in fashion and textile design</p>
        <p>projects</p>
        <p>contact</p>
      </div>
    </header>
  );
};

export default Header;
