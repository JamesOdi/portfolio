import { socialIcons } from '@/lib/clientUtils';
import { RiMailLine, RiHome4Line, RiPhoneLine } from '@remixicon/react';
import Column from './Column';
import Row from './Row';

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  const emailAddress = process.env.NEXT_PUBLIC_MY_EMAIL_ADDRESS;
  const phoneNumber = process.env.NEXT_PUBLIC_MY_PHONE_NUMBER;
  return (
    <div className='px-4 xl:px-0'>
      <Row
        id='contact'
        className='max-w-6xl mx-auto justify-center mt-12 rounded-lg p-4 lg:p-8 shadow-lg'
      >
        <Column className='text-center space-y-4'>
          <h2 className='text-2xl font-bold'>Contact Me</h2>

          <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6'>
            <div className='flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md'>
              <RiMailLine className='text-blue-500 text-2xl' />
              <a
                href={`mailto:${emailAddress}`}
                className='text-gray-700 hover:text-blue-600 transition'
              >
                {emailAddress}
              </a>
            </div>

            <div className='flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md'>
              <RiHome4Line className='text-green-500 text-2xl' />
              <a
                href={process.env.NEXT_PUBLIC_LOCATION_URL}
                target='_blank'
                className='text-gray-700 hover:text-green-600 transition'
              >
                {process.env.NEXT_PUBLIC_MY_LOCATION}
              </a>
            </div>

            <div className='flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md'>
              <RiPhoneLine className='text-red-500 text-2xl' />
              <a
                href={`tel:${phoneNumber}`}
                className='text-gray-700 hover:text-red-600 transition'
              >
                {phoneNumber}
              </a>
            </div>
          </div>
        </Column>
      </Row>
      <footer
        id='footer'
        className='relative mx-auto flex max-w-6xl flex-wrap pt-4'
      >
        {/* Vertical Lines */}
        <div className='pointer-events-none inset-0'>
          {/* Left */}
          <div
            className='absolute inset-y-0 my-[-5rem] w-px'
            style={{
              maskImage: 'linear-gradient(transparent, white 5rem)',
            }}
          >
            <svg className='h-full w-full' preserveAspectRatio='none'>
              <line
                x1='0'
                y1='0'
                x2='0'
                y2='100%'
                className='stroke-gray-300'
                strokeWidth='2'
                strokeDasharray='3 3'
              />
            </svg>
          </div>

          {/* Right */}
          <div
            className='absolute inset-y-0 right-0 my-[-5rem] w-px'
            style={{
              maskImage: 'linear-gradient(transparent, white 5rem)',
            }}
          >
            <svg className='h-full w-full' preserveAspectRatio='none'>
              <line
                x1='0'
                y1='0'
                x2='0'
                y2='100%'
                className='stroke-gray-300'
                strokeWidth='2'
                strokeDasharray='3 3'
              />
            </svg>
          </div>
        </div>
        <svg
          className='mb-10 h-20 w-full border-y border-dashed border-gray-300 stroke-gray-300'
          style={{
            maskImage:
              'linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)',
          }}
        >
          <defs>
            <pattern
              id='diagonal-footer-pattern'
              patternUnits='userSpaceOnUse'
              width='64'
              height='64'
            >
              {Array.from({ length: 17 }, (_, i) => {
                const offset = i * 8;
                return (
                  <path
                    key={i}
                    d={`M${-106 + offset} 110L${22 + offset} -18`}
                    stroke=''
                    strokeWidth='1'
                  />
                );
              })}
            </pattern>
          </defs>
          <rect
            stroke='none'
            width='100%'
            height='100%'
            fill='url(#diagonal-footer-pattern)'
          />
        </svg>
        <div className='flex w-full justify-center items-center flex-col'>
          <div className='mt-4 flex items-center'>
            {socialIcons
              .filter(({ href }) => Boolean(href))
              .map(({ href, icon }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target='_blank'
                  className='rounded-sm p-2 text-white transition-colors duration-200 hover:bg-white/80 hover:text-gray-900'
                >
                  {icon}
                </a>
              ))}
          </div>
          <div className='text-sm text-white'>
            &copy; {CURRENT_YEAR} James Odike
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
