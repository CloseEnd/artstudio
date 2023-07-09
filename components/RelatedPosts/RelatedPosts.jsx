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
      <p>{post.title}</p>
    </Link>
  );
};

export default RelatedPosts;
