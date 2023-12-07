import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/logo.png';
import classes from './mainHeader.module.css';
import { NavLink } from './NavLink';

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
            <NavLink path='/meals'>Browse meals</NavLink>
          </li>
          <li>
            <NavLink path='/community'>Foodies community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
