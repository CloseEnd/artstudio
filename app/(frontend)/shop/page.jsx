import styles from "./Shop.module.scss";
import Image from "next/image";
import nextsvg from "../../../public/next.svg";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { groq } from "next-sanity";

export const revalidate = 30;

const Shop = async () => {
  const query = groq`
  *[_type == "shop"]
  `;
  const items = await client.fetch(query);
  return (
    <div className={styles.shop}>
      <h1>Shop</h1>
      <p>Latest projects and custom work that you can purchase or order.</p>
      <div className={styles.items}>
        {items.map((item, _i) => (
          <div className={styles.item} key={item._id}>
            <div className={styles.img}>
              <Image
                src={urlForImage(item.image).url()}
                alt="img"
                width={1000}
                height={1000}
              />
            </div>
            <div className={styles.info}>
              <h4>{item.title}</h4>
              <p>Ush {item.price}</p>
              <a href="#contact">
                <button>contact now</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
