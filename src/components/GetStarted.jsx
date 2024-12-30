import React from 'react';
import styles from '../style';

const GetStarted = () => {
  return (
    <a
      href="https://testnet.freee.xyz/collect/abst:0xD15731eCaC68883b20A5f6658364B897f1Cfd459"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </a>
  );
};

export default GetStarted;
