import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://www.looper.com/img/gallery/the-untold-truth-of-marvels-kate-bishop/l-intro-1607092068.jpg"
          alt="image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title: Hawkeye</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://static.tvtropes.org/pmwiki/pub/images/katebishopmcu.png"
            alt="image"
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.author}>Author</span>
            <span className={styles.detailValue}>Kate Bishop</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.author}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequatur eius repellat praesentium deserunt, repudiandae, provident amet cupiditate consequuntur quaerat eaque libero labore veritatis blanditiis optio? Nemo ab deserunt aliquid?</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
