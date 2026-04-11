import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Header from "@/app/components/header";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-semibold">TestBoard</h1>
        <p className="text-sm text-muted-foreground">
          Welcome, {session.user?.name ?? session.user?.email}
        </p>
      </main>
    </>
  );
} 