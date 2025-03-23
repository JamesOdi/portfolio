'use client';

import { Button } from '@/components/Button';
import Column from '@/components/Column';
import Row from '@/components/Row';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  RiDownloadCloud2Line,
  RiSurveyLine,
  RiPenNibLine,
  RiCodeSSlashLine,
  RiGlobalLine,
  RiSmartphoneLine,
  RiExternalLinkLine,
} from '@remixicon/react';
import { socialIcons } from '@/lib/clientUtils';
import { Callout } from '@/components/Callout';
import { Badge } from '@/components/Badge';
import SkillsOrbit from '@/components/SkillsOrbit';
import Link from 'next/link';

export default function Home() {
  const numericData = [
    {
      title: 'Years of Experience',
      value: 4,
    },
    {
      title: 'Certificates',
      value: 2,
    },
    {
      title: 'Happy Clients',
      value: 15,
    },
  ];

  const workProcess: Array<
    Array<{
      icon: React.ReactElement;
      description: string;
      title: string;
      variant: 'default' | 'success' | 'warning' | 'neutral';
    }>
  > = [
    [
      {
        icon: <RiSurveyLine />,
        description:
          'I begin by researching and understanding the project goals, target audience, and market trends. This sets a solid foundation.',
        title: 'Research',
        variant: 'neutral',
      },
      {
        icon: <RiPenNibLine />,
        description:
          'After research, I move into the design phase where I create wireframes, prototypes, and finalize the visual aesthetics.',
        title: 'Design',
        variant: 'default',
      },
    ],
    [
      {
        icon: <RiCodeSSlashLine />,
        description:
          'In the development phase, I turn the design into functional code, integrating systems and making it fully interactive.',
        title: 'Develop',
        variant: 'warning',
      },
      {
        icon: <RiGlobalLine />,
        description:
          'Once the product is ready, I launch it, ensuring everything runs smoothly and continuously monitor its performance post-launch.',
        title: 'Launch',
        variant: 'success',
      },
    ],
  ];

  const projects = [
    {
      projectType: 'Mobile App',
      title: 'Manage My Weddings',
      icon: <RiSmartphoneLine />, // Use an appropriate icon
      link: process.env.NEXT_PUBLIC_MMW_URL,
      image: '/images/mmw.svg',
    },
    {
      projectType: 'Website',
      title: 'Coastal Babysitters',
      icon: <RiGlobalLine />, // Use another appropriate icon
      link: process.env.NEXT_PUBLIC_COASTAL_BABYSITTERS_URL,
      image: '/images/coastal_babysitters.png',
    },
    {
      projectType: 'Website',
      title: 'Huntsman Cloud',
      icon: <RiGlobalLine />, // Use another appropriate icon
      link: process.env.NEXT_PUBLIC_HUNTSMAN_URL,
      image: '/images/huntsman.png',
    },
    {
      projectType: 'Website',
      title: 'OakView',
      link: process.env.NEXT_PUBLIC_OAKVIEW_URL,
      image: '/images/oakview_logo.png',
    },
  ];

  const downloadCV = () => {
    const url = '/documents/James-Odike-Full Stack Developer.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'James-Odike-Full Stack Developer.pdf');
    link.click();
  };

  return (
    <div className='flex flex-col h-full items-center'>
      <main className='w-full lg:w-6xl flex-grow px-4 pt-32 pb-96'>
        <Row
          id='about'
          className='justify-between gap-6 flex-col-reverse lg:flex-row'
        >
          <Column className='mx-auto lg:w-1/2'>
            <Row className='mt-12  mx-auto lg:mx-0'>
              <h1 className='text-center lg:text-left'>
                Hello I&apos;m <br />
                James Odike
              </h1>
            </Row>
            <Row>
              <Column>
                <p>
                  I am a full-stack software engineer passionate about building
                  robust, scalable, and secure web applications. With 4+ years
                  of experience, I specialize in Vue.js, Next.js, Laravel,
                  TypeScript, PHP, SQL, and MongoDB, crafting seamless digital
                  experiences.
                </p>

                <ul className={'list-disc list-inside'}>
                  <li>
                    <b>Currently:</b> Full Stack Developer at FuturePoint
                    Systems Australia
                  </li>
                  <li>
                    <b>Previously:</b> Software Engineer Intern at NLNG, Android
                    Developer at Technoville Consulting
                  </li>
                  <li>
                    <b>Education:</b> Master&apos;s in IT (Griffith University),
                    B.Eng (Liaocheng University)
                  </li>
                </ul>
              </Column>
            </Row>
            <Row id='skills' className='mt-auto gap-2'>
              <div className='flex flex-wrap justify-center gap-4 mt-auto'>
                {numericData.map(({ title, value }) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <div className='w-40 p-4 text-center bg-white shadow-lg rounded-xl'>
                      <h2 className='text-xl font-bold text-gray-800'>
                        {value}
                      </h2>
                      <p className='text-sm text-gray-600'>{title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Row>
          </Column>

          <Column className='mx-auto w-full lg:w-1/2'>
            <Row className=''>
              <div className='relative w-[350px] h-[350px] lg:w-128 lg:h-128 flex items-center justify-center'>
                <Image
                  src='/images/profile.jpg'
                  alt='James Odike'
                  width={1655}
                  height={1655}
                  className='w-1/2 h-full shadow-lg rounded-full object-cover'
                />

                {[2, 3, 4].map((delay, index) => (
                  <div
                    key={index}
                    style={{
                      animationDelay: `${delay}s`,
                    }}
                    className='absolute size-full animate-[ping_6s_ease-in-out_infinite] w-1/2 rounded-full ring-2 ring-orange-500/20 opacity-50'
                  ></div>
                ))}
              </div>
            </Row>
          </Column>
        </Row>

        <Row className='flex-col lg:flex-row gap-12 bg-white/10 rounded-lg p-8 mt-32 shadow-lg'>
          {/* Left Column (Profile and Skills) */}
          <Column className=''>
            {/* Profile Image */}
            <div className='relative rounded-lg shadow-lg bg-gray-100 w-[200px] h-[200px] lg:w-80 lg:h-80 flex items-center justify-center mx-auto lg:mx-0'>
              <Image
                src='/images/profile.jpg'
                alt='James Odike'
                width={1655}
                height={1655}
                className='w-full h-full rounded-lg object-cover'
              />
              <Row className='absolute w-full' style={{ bottom: 0 }}>
                <div className='flex bg-[#121212] rounded-lg mx-auto mb-2 gap-2 items-center p-2'>
                  {socialIcons
                    .filter(({ href }) => Boolean(href))
                    .map(({ href, icon }, idx) => (
                      <motion.a
                        key={idx}
                        href={href}
                        target='_blank'
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: idx * 0.2,
                          duration: 0.5,
                          ease: 'easeOut',
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -10, 10, -10, 10, -10, 10, 0],
                          transition: { duration: 0.5, ease: 'easeInOut' },
                        }}
                        className='rounded-sm p-2 text-white transition-colors duration-200 hover:bg-white/80 hover:text-gray-900'
                      >
                        {icon}
                      </motion.a>
                    ))}
                </div>
              </Row>
            </div>
          </Column>

          {/* Right Column (SkillsOrbit) */}
          <Column className='lg:w-1/2 text-center items-center lg:items-start lg:text-left space-y-4 mt-8 lg:mt-0'>
            {/* Skills Section */}
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mt-8'>
              My Skills
            </h3>
            <p className='text-lg leading-relaxed'>
              I have experience working with a wide range of technologies,
              including
              <span className='font-semibold ml-1'>
                Vue.js, Next.js, TypeScript, Node.js, Express, MongoDB,
                PostgreSQL, PHP, Docker, CI/CD, Jest, Cypress, Git, and RESTful
                APIs
              </span>
              , and many more.
            </p>

            {/* Buttons Section */}
            <Row className='mt-6 gap-6 flex-col lg:flex-row max-w-full'>
              <Link href='#portfolio'>
                <Button className='px-4 lg:px-6 py-3 text-sm lg:text-lg font-medium shadow-lg hover:scale-105 transition-transform'>
                  Portfolio
                </Button>
              </Link>

              <Button
                variant='secondary'
                className='flex items-center gap-3 px-4 lg:px-6 py-3 text-sm lg:text-lg font-medium shadow-lg hover:scale-105 transition-transform'
                onClick={downloadCV}
              >
                Download CV <RiDownloadCloud2Line size={20} />
              </Button>
            </Row>
            <SkillsOrbit />
          </Column>
        </Row>

        <Row className='flex-col lg:flex-row gap-6 mt-24'>
          <Column className='w-full lg:w-1/2'>
            <h2 className='text-2xl font-bold'>Work Process</h2>
            <Row>
              I start by researching the project goals and audience to ensure a
              solid foundation for design. After finalizing wireframes and
              prototypes, I move into development, turning designs into
              functional, interactive code. This phase ensures everything is
              responsive and optimized for performance.
            </Row>
            <p>
              Once the project is developed, I focus on a smooth launch and
              monitor its performance. Post-launch, I continue to provide
              support, making necessary adjustments and optimizations to ensure
              long-term success.
            </p>
          </Column>
          <Column className='w-full lg:w-1/2'>
            {workProcess.map((row, idx) => {
              return (
                <Row className='gap-4 flex-col lg:flex-row' key={idx}>
                  {row.map(({ icon, description, title, variant }) => {
                    return (
                      <Column
                        className='flex flex-col items-center w-full lg:w-1/2'
                        key={title}
                      >
                        <Callout title={title} icon={icon} variant={variant}>
                          {description}
                        </Callout>
                      </Column>
                    );
                  })}
                </Row>
              );
            })}
          </Column>
        </Row>

        <Row
          id='portfolio'
          className='w-full justify-center mt-32 bg-white/10 rounded-lg p-4 lg:p-8 shadow-lg'
        >
          <Column className='text-center space-y-1'>
            <h2 className='text-2xl font-bold mt-4'>Portfolio</h2>
            <Row>
              <p className='text-sm px-0 lg:px-50 text-gray-400'>
                Explore some of my featured projects, showcasing web and mobile
                app development expertise.
              </p>
            </Row>

            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8'>
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className='w-full flex flex-col items-start cursor-pointer h-[400px] bg-gradient-to-b from-white/80 to-gray-100/90 rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-200'
                >
                  <div className='flex justify-center items-center w-full rounded-t-lg h-2/3 bg-gray-200/50 shadow-md transition-all duration-300 hover:shadow-xl'>
                    <Image
                      src={project.image}
                      quality={100}
                      width={300}
                      height={300}
                      alt={project.title}
                      className='p-2'
                    />
                  </div>

                  <div className='flex flex-col items-start px-4 py-3 gap-1 w-full'>
                    <Badge
                      variant={
                        project.projectType === 'Website' ? 'error' : 'neutral'
                      }
                      className='text-xs px-3 py-1 bg-red-500/80 text-white rounded-full'
                    >
                      {project.projectType}
                    </Badge>

                    <h2 className='text-lg font-semibold text-gray-700'>
                      {project.title}
                    </h2>

                    <a href={project.link || ''} target='_blank'>
                      <Button
                        variant='secondary'
                        className='text-gray-700 gap-3 border-gray-500/80 hover:border-gray-700 hover:text-black'
                      >
                        View Project <RiExternalLinkLine />
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Column>
        </Row>
      </main>
    </div>
  );
}
