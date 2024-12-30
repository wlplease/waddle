import React from 'react';
import styles from '../style';
import { waddlemain } from '../assets';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className="flex flex-col justify-center items-center mb-8 w-full">
        <img
          src={waddlemain}
          alt="waddleai-logo"
          className="w-[200px] h-auto object-contain"
        />
        <p className={`${styles.paragraph} mt-4 text-center max-w-[400px]`}>
          Powered by WaddleAI and Abstract blockchain innovation
        </p>
        <div className="mt-4">
          <a
            href="https://abs.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline text-[16px]"
          >
            Visit Abstract
          </a>
          <br />
          <a
            href="https://portal.testnet.abs.xyz/bridge/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline text-[16px]"
          >
            Testnet Bridge
          </a>
          <br />
          <a
            href="https://testnet.freee.xyz/collect/abst:0xD15731eCaC68883b20A5f6658364B897f1Cfd459"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline text-[16px]"
          >
            Mint on Abstract
          </a>
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[16px] text-white">
          {currentYear} WaddleAI. All Rights Reserved.
        </p>
        <div className="mt-6">
          <a
            href="https://x.com/nullbeacon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline text-[16px]"
          >
            Follow us on Twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
