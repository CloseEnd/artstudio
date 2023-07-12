import Link from "next/link";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import styles from "./Postpage.module.scss";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { RichText } from "../../../../components/Richtext/RichText";
import RelatedPosts from "@/components/RelatedPosts/RelatedPosts";
import Comments from "@/components/comments/Comments";

export const revalidate = 30;

export async function generateMetadata({ params: { slug } }, parent) {
  const query = groq`
  *[_type == "post" && slug.current == $slug][0]
  `;
  const post = await client.fetch(query, { slug });
  return {
    title: slug,
    description: post.description,
  };
}

const Post = async ({ params: { slug } }) => {
  const query = groq`
  *[_type == "post" && slug.current == $slug][0]
  {
      ...,
      author->,
      categories[]->
  }
  `;
  const post = await client.fetch(query, { slug });

  const query2 = groq`
  *[_type == "post"]{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
  `;
  const posts = await client.fetch(query2);
  const latestPosts = posts.filter((post) => post.slug.current !== slug);

  const query3 = groq`
  *[_type == "comment" && approved == true]
  `;
  const comments = await client.fetch(query3);
  return (
    <div className={styles.main}>
      <main className={styles.container}>
        <div className={styles.blog}>
          <p className={styles.date}>
            {new Date(post._createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <h1>{post.title}</h1>
          <div className={styles.imagebox}>
            <Image
              src={urlForImage(post.mainImage).url()}
              className={styles.bgimg}
              width={1000}
              height={400}
              alt="image"
            />
          </div>
          <article>
            <PortableText value={post.body} components={RichText} />
          </article>
          <Comments postId={post._id} comments={comments} />
        </div>
        <div className={styles.relatedposts}>
          <div className={styles.author}>
            <h1>About me</h1>
            <Image
              src={urlForImage(post.author.image).url()}
              alt={post.author.name}
              width={1000}
              height={500}
            />
            <p>
              <PortableText value={post.author.bio[0]} components={RichText} />
            </p>
            <Link href={"/About"}>
              <p>Read more</p>
            </Link>
          </div>
          <h1>Latest Posts</h1>
          <div className={styles.postscontainer}>
            {latestPosts.map((post, i) => {
              if (i < 4) {
                return <RelatedPosts key={post._id} post={post} />;
              }
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Post;
