import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import styles from "./RelatedPosts.module.scss";
import Link from "next/link";

const RelatedPosts = ({ post }) => {
  return (
    <Link href={`/Blog/${post.slug.current}`} className={styles.container}>
      <Image
        src={urlForImage(post.mainImage).url()}
        width={1000}
        height={250}
        alt={post.title}
      />
      <div className={styles.txt}>
        <p className={styles.title}>{post.title}</p>
        <p className={styles.date}>
          {new Date(post._createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </Link>
  );
};

export default RelatedPosts;
