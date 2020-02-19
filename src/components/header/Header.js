import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Header.css';

const Header = () => {
  const time = 2000;
  const props = useSpring({ opacity: 1,
    config: { duration: time },
    from: { opacity: 0 } });
  return (
    <header className={styles.Header}>
      <animated.h1 style={props}>Maeve Griffin</animated.h1>
      
      <div>
        <p>I am a full stack Javascript developer with an emphasis on the MERN stack. I like focused team environments centered around collaboration and user experience.</p>
        <p>projects</p>
        <p>contact</p>
      </div>
    </header>
  );
};

export default Header;
