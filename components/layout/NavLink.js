'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './navLink.module.css';

export const NavLink = ({ path, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={pathname.startsWith(path) ? classes.active : undefined}
    >
      {children}
    </Link>
  );
};
