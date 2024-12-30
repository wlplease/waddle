import React from 'react';
import { twitter } from '../assets';
import styles from '../style';

const Navbar = () => {
  return (
    <nav className={`${styles.flexBetween} w-full py-6`}>
      <div className="flex-1">
        <h1 className="font-poppins font-bold text-[24px] text-white">WaddleAI</h1>
      </div>
      <ul className="list-none flex flex-row justify-end items-center flex-1 space-x-8">
        <li className="text-white font-poppins text-[16px] cursor-pointer hover:text-secondary">
          <a href="https://abs.xyz" target="_blank" rel="noopener noreferrer">
            Abstract
          </a>
        </li>
        <li className="text-white font-poppins text-[16px] cursor-pointer hover:text-secondary">
          <a href="https://portal.testnet.abs.xyz/bridge/" target="_blank" rel="noopener noreferrer">
            Testnet Bridge
          </a>
        </li>
        <li className="text-white font-poppins text-[16px] cursor-pointer hover:text-secondary">
          <a
            href="https://testnet.freee.xyz/collect/abst:0xD15731eCaC68883b20A5f6658364B897f1Cfd459"
            target="_blank"
            rel="noopener noreferrer"
          >
            NFT Mint
          </a>
        </li>
        <li className="cursor-pointer">
          <a href="https://x.com/nullbeacon" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="twitter" className="w-[24px] h-[24px] object-contain" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
