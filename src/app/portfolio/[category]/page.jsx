import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'
const Category = ({params}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
           <p className={styles.desc}>Desc</p>
           <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
          className={styles.img}
          src="https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg?auto=compress&cs=tinysrgb&w=1600"
          fill={true}
          alt=""
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
           <p className={styles.desc}>Desc</p>
           <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
          className={styles.img}
          src="https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg?auto=compress&cs=tinysrgb&w=1600"
          fill={true}
          alt=""
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
           <p className={styles.desc}>Desc</p>
           <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
          className={styles.img}
          src="https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg?auto=compress&cs=tinysrgb&w=1600"
          fill={true}
          alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Category