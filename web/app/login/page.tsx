import LoginForm from "./login-form";

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center px-6">
      <div className="w-full rounded-2xl border p-6 shadow-sm">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Login</h1>
          <p className="text-sm text-muted-foreground">
            Sign in with your credentials
          </p>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}