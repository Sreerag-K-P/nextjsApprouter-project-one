import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const BlogPost = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <div className={styles.info}>
        <h1 className={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ut voluptate nemo obcaecati animi, odio ipsum delectus, 
          aliquam vitae reprehenderit quidem distinctio! Commodi 
          debitis nemo saepe esse sed natus totam tempora.
        </p>
        <div className={styles.author}>
          <Image
            src="https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            width={40}
            height={40}
            className={styles.avatar}
          />
          <span className={styles.username}>Joshua carlton</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          fill={true}
          className={styles.image}
        />
      </div>
    </div>
    <div className={styles.content}>
      <p className={styles.text}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat 
           ipsum error autem tenetur, illo, quam deleniti, itaque sed similique 
           ad obcaecati libero aspernatur amet! Dolorum odit quo eos aut vero id 
           quasi fugiat eius est blanditiis consequatur ad dolorem quibusdam exp
           licabo 
           incidunt, impedit non earum aliquam ipsum suscipit! Necessitatibus adi
           pisci 
           quisquam recusandae dicta facilis fugiat repellendus nobis ullam quia 
           aliquid reprehenderit veritatis, voluptatum placeat natus! Sequi, quis
           quam explicabo dolorum inventore repellendus accusantium ratione dolores
            eos error, porro aut a, distinctio eum optio earum temporibus nisi. Adip
            isci amet excepturi blanditiis eveniet vel recusandae quam quis sit, tene
            tur voluptates et fugiat consequatur pariatur quidem tempora repudiandae 
            minus molestias illo, fugit, iste velit nam incidunt architecto. Tempora
           quia dolore officiis error amet 
           nisi aliquid explicabo, corrupti provident eligendi voluptates 
           voluptas laudantium adipisci voluptatum ipsa excepturi sint iste 
           cumque quae eveniet modi? Est quis corrupti dolore qui ea accusamus totam sunt omnis tempora! Quas.
      </p>
    </div>
  </div>
  )
}

export default BlogPost