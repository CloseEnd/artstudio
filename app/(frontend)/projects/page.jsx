import styles from "../../../components/projects/Projects.module.scss";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const Projects = async () => {
  const query = groq`*[_type == "projects"]`;
  const projects = await client.fetch(query);
  const projectsHalf = Math.ceil(projects.length / 2);
  //   console.log("====================================");
  //   console.log(projects);
  //   console.log("====================================");
  return (
    <div className={styles.projects}>
      <h1>Projects and designs</h1>
      <ArrowDownIcon />
      <div className={styles.images}>
        <div className={styles.firsthalf}>
          {projects.slice(0, projectsHalf).map((project) => (
            <div key={project._id} className={styles.linkcontainer}>
              <Link href={`/projects/${project.slug.current}`}>
                <Image
                  src={urlForImage(project.image).url()}
                  alt={project.name}
                  width={1000}
                  height={500}
                />
                <div className={styles.projectdetails}>
                  <p>{project.name}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.secondhalf}>
          {projects.slice(projectsHalf, projects.length).map((project) => (
            <div key={project._id} className={styles.linkcontainer}>
              <Link href={`/projects/${project.slug.current}`}>
                <Image
                  src={urlForImage(project.image).url()}
                  alt={project.name}
                  width={1000}
                  height={500}
                />
                <div className={styles.projectdetails}>
                  <p>{project.name}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
