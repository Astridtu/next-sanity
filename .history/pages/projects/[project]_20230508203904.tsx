import { getProject } from "@/sanity/sanity-utils";
import type { GetServerSideProps } from "next";
import type { Project } from "@/types/Project";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
type Props = {
  project: Project;
};

export default function Project({ project }: Props) {
  return <div>
    <header className="flex items-center justify-between">
    <h1 className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{project.name}</h1>


    <a 
    href = {project.url} 
    title="View Project" 
    target="_blank" 
    /// <reference path="noopener noreferrer" />
    className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-green-500 hover:text-green-100 transition"
    >
        Watch Video
    </a>
    </header>
    <div className="text-lg text-gray-700 mt-5"><PortableText value = {project.content}/></div>
    <Image
    src = {project.image}
    alt = {project.name}
    width = {1920}
    height = {1080}
    className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
    />
    </div>;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  const slug = params?.project as string;
  const project = await getProject(slug);

  return {
    props: {
      project,
    },
  };
};