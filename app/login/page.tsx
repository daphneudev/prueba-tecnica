"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Login } from "../actions/login";
import { useState } from "react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(event: any) {
    setIsLoading(true);

    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const token = await Login({
      body: { email: email as string, password: password as string },
    });
    setIsLoading(false);

    console.log(email);

    if (token) {
      // El primer usuario (id 1) es el único asignado como administrador
      const role = email === "george.bluth@reqres.in" ? "admin" : "user";

      document.cookie = `token=${token}; path=/;`;
      document.cookie = `role=${role}; path=/;`;

      window.location.href = "/posts";
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle>Iniciar sesión</CardTitle>
          <CardDescription>Ingresa tu email y contraseña</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input id="password" type="password" required />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2 mt-8">
            <Button type="submit" className="w-full" disabled={isLoading}>
              Entrar
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
