import styles from "./Blogs.module.scss";
import Image from "next/image";
import Link from "next/link";
import nextsvg from "../../public/next.svg";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";

const Blogs = async () => {
  const query = groq`
  *[_type == "post"] | order(_createdAt desc)
  `;
  const posts = await client.fetch(query);
  // console.log("====================================");
  // console.log(posts);
  // console.log("====================================");
  if (!posts.length) {
    return <></>;
  }
  return (
    <div className={styles.blogcontainer}>
      <h1>Blogs</h1>
      <h2>Latest post from my blog.</h2>
      <div className={styles.blogs}>
        {/* <div className={styles.blog}>
          <Image src={nextsvg} alt="image" />
          <p>20 may 2022</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            temporibus modi fugit dicta, non accusantium minima corrupti
            excepturi consequatur sapiente consectetur porro eaque explicabo ad
            rem, veniam ea? Iure, sint.
          </p>
          <Link href={""}>Read more</Link>
        </div> */}
        {posts
          .filter((post, i) => i < 3)
          .map((post, _i) => (
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
      <Link href={"/Blog"}>
        <button>More posts</button>
      </Link>
    </div>
  );
};

export default Blogs;
