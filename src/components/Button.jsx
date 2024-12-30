import React from 'react'

const Button = ({ styles }) => {
  return (
    <a
      href="https://testnet.freee.xyz/collect/abst:0xD15731eCaC68883b20A5f6658364B897f1Cfd459"
      target="_blank"
      rel="noopener noreferrer"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] flex items-center justify-center`}
    >
      Mint on Abstract
    </a>
  )
}

export default Button
