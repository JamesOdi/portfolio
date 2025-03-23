'use client';

import useScroll from '@/lib/useScroll';
import { cx } from '@/lib/utils';
import { RiCloseFill, RiMenuFill } from '@remixicon/react';
import Link from 'next/link';
import React from 'react';
import { Button } from './Button';
import Image from 'next/image';

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(15);

  const navLinks = [
    {
      title: 'About Me',
      href: '#about',
    },
    {
      title: 'Skills',
      href: '#skills',
    },
    {
      title: 'Portfolio',
      href: '#portfolio',
    },
  ];

  return (
    <header
      className={cx(
        'fixed inset-x-4 top-4 z-50 mx-auto flex max-w-6xl justify-center rounded-lg border border-transparent px-3 py-3 transition duration-300',
        scrolled || open
          ? 'border-gray-200/50 bg-[#121212]/80 shadow-2xl shadow-black/5 backdrop-blur-sm'
          : 'bg-white/0'
      )}
    >
      <div className='w-full md:my-auto'>
        <div className='relative flex items-center justify-between'>
          <Link
            href='#about'
            aria-label='Home'
            className='flex items-center gap-2'
          >
            <Image src='/images/J.png' alt='My Logo' width={24} height={24} />
            <b>James Odike</b>
          </Link>
          <nav className='hidden sm:block md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform'>
            <div className='flex items-center gap-10 font-medium'>
              {navLinks.map(({ title, href }) => (
                <Link
                  key={title}
                  href={href}
                  aria-label={title}
                  className='px-2 py-1 hover:font-bold'
                >
                  <span className='sr-only'>{title}</span>
                  {title}
                </Link>
              ))}
            </div>
          </nav>
          <Link href='#contact'>
            <Button
              variant='secondary'
              className='hidden h-10 font-semibold sm:block'
            >
              Contact Me
            </Button>
          </Link>
          <Button
            onClick={() => setOpen(!open)}
            variant='secondary'
            className='p-1.5 sm:hidden border-0'
            aria-label={open ? 'CloseNavigation Menu' : 'Open Navigation Menu'}
          >
            {!open ? (
              <RiMenuFill className='size-6 shrink-0' aria-hidden />
            ) : (
              <RiCloseFill className='size-6 shrink-0' aria-hidden />
            )}
          </Button>
        </div>
        <nav
          className={cx(
            'mt-6 flex flex-col gap-6 text-lg ease-in-out will-change-transform sm:hidden',
            open ? '' : 'hidden'
          )}
        >
          <ul className='space-y-4 font-medium w-full'>
            {navLinks.map(({ title, href }) => (
              <li onClick={() => setOpen(false)} key={href}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
          <Link href='#contact' className='w-full'>
            <Button variant='destructive' className='text-lg'>
              Contact Me
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
