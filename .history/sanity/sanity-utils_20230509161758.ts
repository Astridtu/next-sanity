import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import clientConfig from "./client-config";
export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "lyzo7wam",
    dataset : "production",
    apiVersion : "2023-05-04",
  })
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  )
}