import styles from "../../../components/blogs/Blogs.module.scss";
import Image from "next/image";
import Link from "next/link";
import nextsvg from "../../../public/next.svg";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";

const Blogs = async () => {
  const query = groq`
  *[_type == "post"] | order(_createdAt desc)
  `;
  const posts = await client.fetch(query);
  if (!posts.length) {
    return (
      <div className={styles.blogcontainer}>
        <h1>No blogs currently available.</h1>
        <Link href="/shop">
          <button>Explore shop items</button>
        </Link>
      </div>
    );
  }
  return (
    <div className={styles.blogcontainer}>
      <h1>Blog</h1>
      <h2>All my blog posts.</h2>
      <div className={styles.blogs}>
        {posts.map((post, _i) => (
          <Link
            className={styles.blog}
            href={`/Blog/${post.slug.current}`}
            key={post._id}
          >
            <div>
              <Image
                src={urlForImage(post.mainImage).url()}
                alt="image"
                width={1000}
                height={1000}
              />
              <div className={styles.info}>
                <p>{post.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
