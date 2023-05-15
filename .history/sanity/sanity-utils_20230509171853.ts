export async function getProject(){
  const client = createClient({
    projectId: "lyzo7wam",
    dataset : "production",
    apiVersion : "2023-05-04",
  });
  return client.fetch(
    groq '*[_type == "project"]*'{
      
    }
  )
}