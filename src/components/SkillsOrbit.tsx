import { RiCodeLine } from '@remixicon/react';
import { Orbit } from './Orbit';
import {
  PythonOutlined,
  DockerOutlined,
  JavaOutlined,
  JavaScriptOutlined,
  Html5Outlined,
} from '@ant-design/icons';

export default function SkillsOrbit() {
  const orbitItems = [
    {
      key: 'python',
      icon: (
        <PythonOutlined
          style={{
            fontSize: '30px',
            color: '#FFD43B',
          }}
        />
      ),
      ringColor: 'yellow', // ring color based on icon color
      delay: '4s',
    },
    {
      key: 'html5',
      icon: (
        <Html5Outlined
          style={{
            fontSize: '30px',
            color: 'orange',
          }}
        />
      ),
      ringColor: 'blue',
      delay: '1s',
    },
    {
      key: 'java',
      icon: (
        <JavaOutlined
          style={{
            fontSize: '30px',
            color: '#ed4337',
          }}
        />
      ),
      ringColor: 'red',
      delay: '6s',
    },
    {
      key: 'javascript',
      icon: (
        <JavaScriptOutlined
          style={{
            fontSize: '30px',
            color: 'yellow',
          }}
        />
      ),
      ringColor: 'yellow',
      delay: '2s',
    },
    {
      key: 'docker',
      icon: (
        <DockerOutlined
          style={{
            fontSize: '30px',
            color: '#0db7ed',
          }}
        />
      ),
      ringColor: 'blue',
      delay: '3s',
    },
  ];

  const orbitingObjects = orbitItems.map(({ key, icon }) => (
    <div key={key} className='relative flex items-center justify-center'>
      {/* Main Icon */}
      <div className='relative flex items-center justify-center bg-[#4B4B4D] rounded-full p-4'>
        <div className={`absolute size-16 rounded-full `} />
        {icon}
      </div>

      {/* Pulse Effect with Dynamic Ring Color */}
      {/* <div
        style={{ animationDelay: delay }}
        className={`absolute size-16 animate-[ping_7s_ease_infinite] rounded-full ring-2 ring-${ringColor}-500/50`}
      ></div> */}
    </div>
  ));

  return (
    <>
      <Orbit
        durationSeconds={40}
        radiusPx={120}
        keepUpright
        orbitingObjects={orbitingObjects} // ✅ Pass orbiting objects correctly
      >
        {/* Central Core */}
        <div className='relative flex h-48 w-48 items-center justify-center'>
          <div className='rounded-full p-1 ring-1 ring-black/10'>
            <div className='relative z-10 flex size-20 items-center justify-center rounded-full bg-white ring-1 shadow-[inset_0px_-15px_20px_rgba(0,0,0,0.1),0_7px_10px_0_rgba(0,0,0,0.15)] ring-black/20'>
              <RiCodeLine className='size-10 text-gray-800' />
            </div>
            <div className='absolute inset-12 animate-[spin_8s_linear_infinite] rounded-full bg-gradient-to-t from-transparent via-orange-400 to-transparent blur-lg' />
          </div>
        </div>
      </Orbit>
    </>
  );
}
