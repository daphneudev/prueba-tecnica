import { UsersTable } from "@/components/ui/users/table";
import { usersService, REQRES_ENDPOINTS } from "../helpers/axios-instance";
import { UsersResponse } from "@/lib/definitions";
import Header from "@/components/ui/header";

export default async function Page() {
  const response = await usersService.get(REQRES_ENDPOINTS.users + "1");
  const users: UsersResponse = response.data;

  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-xl text-semibold text-center">Lista de usuarios</h1>

        <UsersTable users={users.data} />
      </div>
    </>
  );
}
