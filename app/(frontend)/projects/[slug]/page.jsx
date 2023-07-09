import styles from "./Project.module.scss";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

const Page = async ({ params: { slug } }) => {
  const query = groq`
  *[_type == "projects" && slug.current == $slug][0]
  `;

  const project = await client.fetch(query, { slug });
  return (
    <div className={styles.container}>
      <Image
        src={urlForImage(project.image).url()}
        alt={project.name}
        width={1000}
        height={500}
      />
      <div className={styles.txt}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Page;
