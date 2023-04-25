import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth"


export default async function Home() {  
  const session = await getServerSession(authOptions);
  console.log(session);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world</h1>
      <pre>{JSON.stringify(session)}</pre>
    </main>
  )
}
