"use client";
import Link from "next/link";
import { Button } from "./button";

export default function Header() {
  function handleLogout() {
    document.cookie = "token=; path=/";
    window.location.href = "/login";
  }

  return (
    <header className="w-full p-4 bg-gray-700 text-white flex justify-between mb-4">
      <div className="flex gap-8">
        <Link href="/users">Usuarios</Link>
        <Link href="/posts">Publicaciones</Link>
      </div>
      <Button onClick={handleLogout}>Cerrar sesión</Button>
    </header>
  );
}
