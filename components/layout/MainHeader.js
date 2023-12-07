import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/logo.png';
import classes from './mainHeader.module.css';

export const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link href='/' className={classes.logo}>
        <Image src={logoImg} alt='Logo image' priority />
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
