import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Blog  = () => {
  return (
    <div className={styles.mainontainer}>
      <Link href="/blog/testId" className={styles.container}>
       <div className={styles.imgContainer}>
          <Image
          className={styles.img}
          src="https://images.pexels.com/photos/673649/pexels-photo-673649.jpeg?auto=compress&cs=tinysrgb&w=1600"
          width={400}
          height={250}
          alt=""
          />
       </div>
       <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
           <p className={styles.desc}>Desc</p>
       </div>
       </Link>
      <Link href="/blog/testId" className={styles.container}>
       <div className={styles.imgContainer}>
          <Image
          className={styles.img}
          src="https://images.pexels.com/photos/673649/pexels-photo-673649.jpeg?auto=compress&cs=tinysrgb&w=1600"
          width={400}
          height={250}
          alt=""
          />
       </div>
       <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
           <p className={styles.desc}>Desc</p>
       </div>
       </Link>
      <Link href="/blog/testId" className={styles.container}>
       <div className={styles.imgContainer}>
          <Image
          className={styles.img}
          src="https://images.pexels.com/photos/673649/pexels-photo-673649.jpeg?auto=compress&cs=tinysrgb&w=1600"
          width={400}
          height={250}
          alt=""
          />
       </div>
       <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
           <p className={styles.desc}>Desc</p>
       </div>
       </Link>

    </div>
  )
}

export default Blog