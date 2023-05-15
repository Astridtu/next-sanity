import { getProjects } from "@/sanity/sanity-utils";
import type { GetStaticProps } from "next";
import type { Project } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";

type Props = {
  projects: Project[];
};

export default function Home({ projects }: Props) {
  return (
    <div>
      <h1 className="text-7xl font-extrabold">Hello this is <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Mongolia</span>!</h1>
      <p className = "mt-3 text-xl text-gray-600">Let's travel to Mongolian beautiful places
      </p>
      <h2 className = "mt-24 font-extrabold text-gray-700 text-3x1">Places</h2>
      <div className = "mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Link 
        href={`/projects/${project.slug}`}
        key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
          {project.image && (
            <Image
            src={project.image}
            alt = {project}
            width ={750}
            height = {300}
            className = "object-cover rounded-lg border border-gray-500"
            />
          )}
        <div className="mt-2 font-extrabold bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">{project.name}</div>
          </Link>
      ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
  };
};
