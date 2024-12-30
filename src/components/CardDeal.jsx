import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Discover WaddleAI insights <br className="sm:block hidden"/>in a few easy steps</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Dive into the world of Abstract blockchain and WaddleAI NFTs Learn how decentralized innovation can inspire creativity and build meaningful connections
        </p>
        <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt="abstract-card"
          className="w-[100%] h-[100%]"
        />
      </div>
    </section>
  )
}

export default CardDeal
