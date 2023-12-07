import Link from 'next/link';

import logoImg from '@/assets/logo.png';
import classes from './mainHeader.module.css';

export const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link href='/' className={classes.logo}>
        <img src={logoImg.src} alt='Logo image' />
        Next level food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href='/meals'>Browse meals</Link>
          </li>
          <li>
            <Link href='/community'>Foodies community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
