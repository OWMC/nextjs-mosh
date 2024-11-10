'use client';

import Link from 'next/link';
import Image from "next/image";
import React from 'react';
import globeimg from '../../public/globe.svg';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const NavBar = () => {

  const currentPath = usePathname();

  const links = [
    {label: 'Dashboard', href: '/'},
    {label: 'Issues', href: '/issues'},
    {label: 'Blog', href: '/blog'},
    {label: 'Users', href: '/users'}
  ];

  return (
    <nav className='flex space-x-4 border-b mb-4 px-4 h-10 items-center'>
        <Link href="/">
          <Image
              aria-hidden
              src={globeimg}
              alt="Globe icon"
              width={16}
              height={16}
            />
        </Link>
        <ul className='flex space-x-4'>
            {links.map(link => <Link 
                key={link.href}
                className={classNames({
                  'text-zinc-900' : link.href === currentPath,
                  'text-zinc-500': link.href !== currentPath,
                  'hover:text-zinc-800 transition-colors': true
                })}
                href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default NavBar