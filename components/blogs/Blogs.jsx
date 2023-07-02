import styles from "./Blogs.module.scss";
import Image from "next/image";
import Link from "next/link";
import nextsvg from "../../public/next.svg";

const Blogs = () => {
  return (
    <div className={styles.blogcontainer}>
      <h1>Blogs</h1>
      <h2>Latest post from my blog.</h2>
      <div className={styles.blogs}>
        <div className={styles.blog}>
          <Image src={nextsvg} alt="image" />
          <p>20 may 2022</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            temporibus modi fugit dicta, non accusantium minima corrupti
            excepturi consequatur sapiente consectetur porro eaque explicabo ad
            rem, veniam ea? Iure, sint.
          </p>
          <Link href={""}>Read more</Link>
        </div>
        <div className={styles.blog}>
          <Image src={nextsvg} alt="image" />
          <p>20 may 2022</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            temporibus modi fugit dicta, non accusantium minima corrupti
            excepturi consequatur sapiente consectetur porro eaque explicabo ad
            rem, veniam ea? Iure, sint.
          </p>
          <Link href={""}>Read more</Link>
        </div>
        <div className={styles.blog}>
          <Image src={nextsvg} alt="image" />
          <p>20 may 2022</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            temporibus modi fugit dicta, non accusantium minima corrupti
            excepturi consequatur sapiente consectetur porro eaque explicabo ad
            rem, veniam ea? Iure, sint.
          </p>
          <Link href={""}>Read more</Link>
        </div>
      </div>
      <Link href={"/"}>
        <button>More posts</button>
      </Link>
    </div>
  );
};

export default Blogs;
