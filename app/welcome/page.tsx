'use client';

import { sx } from '@/lib/utils';
import styles from './style.module.css';
import Image from 'next/image';
import logo from '../../public/normal-logo.png';
import backgroupImage from '../../public/chatbot_vector_1.png';
import { useContext } from 'react';
import { AppContext } from '@/providers/AppProvider';

const WelComePage = () => {
  const { setFirstTimeVisit } = useContext(AppContext);
  return (
    <div
      className={sx(
        `relative bg-gradient-to-r from-fuchsia-300 to-purple-300 h-screen text-white overflow-hidden w-full flex justify-center items-center`,
        styles.mainGradientBg,
      )}
    >
      <Image src={backgroupImage} width={500} height={320} alt="backgroupImage"/>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <Image src={logo} width={200} height={undefined} alt="logo"/>
        <h1 className="text-5xl font-bold leading-tight mb-4 bg-gradient-8 bg-clip-text text-transparent">
          Welcome to RAG AI Chat
        </h1>
        <a
          href="/conversation"
          className={sx(
            "text-white border-white scale-100 hover:border-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg",
            `${styles.mainGradientBtn}`,
            "bg-gradient-7"
          )}
          onClick={() => setFirstTimeVisit(true)}
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default WelComePage;
