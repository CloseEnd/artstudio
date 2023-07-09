import styles from "./About.module.scss";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { RichText } from "../../../components/Richtext/RichText";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

const About = async () => {
  const query = groq`
    *[_type == "author"]
    `;
  const aboutme = await client.fetch(query);
  return (
    <div className={styles.aboutme}>
      <div className={styles.txt}>
        <h1>ABOUT ME</h1>
        <p>
          <PortableText value={aboutme[0].bio} components={RichText} />
        </p>
      </div>
      <div className={styles.img}>
        <Image
          src={urlForImage(aboutme[0].image).url()}
          width={1000}
          height={500}
        />
      </div>
    </div>
  );
};

export default About;
