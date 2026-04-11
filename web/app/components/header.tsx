"use client";

import { signOut } from "next-auth/react";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b p-4">
      <h1 className="font-semibold">TestBoard</h1>

      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="text-sm"
      >
        Logout
      </button>
    </header>
  );
}