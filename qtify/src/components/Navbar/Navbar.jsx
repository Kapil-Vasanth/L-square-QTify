import * as React from 'react';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/Searchbar';
import Button from '../Button/Button'
import styles from './navbar.module.css'

export default function Navbar() {
  
  return (
    <nav className={styles.navbar}>
      <Logo />
      <SearchBar />
      <Button />
    </nav>
  );
}
