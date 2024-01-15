import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://t4.ftcdn.net/jpg/03/75/35/97/240_F_375359784_AEa8umAFkjPiiSENcl3virovnf0JUWdU.jpg" alt="" fill className={styles.img}/>
          <span className={styles.date}>01.01.2024</span>
        </div>
        
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Desc</p>
        <Link className={styles.link} href="/blog/1">READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard