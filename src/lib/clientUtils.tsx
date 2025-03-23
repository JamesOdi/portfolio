import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from '@remixicon/react';

export const socialIcons = [
  {
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL || '',
    icon: <RiLinkedinFill className='size-5' />,
  },
  {
    href: process.env.NEXT_PUBLIC_GITHUB_URL || '',
    icon: <RiGithubFill className='size-5' />,
  },
  {
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
    icon: <RiInstagramFill className='size-5' />,
  },
  {
    href: process.env.NEXT_PUBLIC_X_URL || '',
    icon: <RiTwitterXFill className='size-5' />,
  },
];
