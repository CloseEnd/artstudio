import styles from "./Projects.module.scss";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const Projects = async () => {
  const query = groq`*[_type == "projects"] | order(_createdAt desc) `;
  const projects = await client.fetch(query);
  const projects2 = projects.filter((project, i) => i < 4);
  const projectsHalf = Math.ceil(projects2.length / 2);

  return (
    <div className={styles.projects}>
      <h1>Projects and designs</h1>
      <ArrowDownIcon />
      <div className={styles.images}>
        <div className={styles.firsthalf}>
          {projects2.slice(0, projectsHalf).map((project) => (
            <div
              key={project._id}
              className={`animate__animated animate__backInLeft ${styles.linkcontainer}`}
            >
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
          {projects2.slice(projectsHalf, projects.length).map((project) => (
            <div
              className={`animate__animated animate__backInRight ${styles.linkcontainer}`}
              key={project._id}
            >
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
      <Link href={"/projects"}>
        <button>View all projects</button>
      </Link>
    </div>
  );
};

export default Projects;
