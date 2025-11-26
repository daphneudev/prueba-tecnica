import { reqresService, REQRES_ENDPOINTS } from "../helpers/axios-instance";

export async function Login({
  body,
}: {
  body: { email: string; password: string };
}) {
  try {
    const response = await reqresService.post(REQRES_ENDPOINTS.login, body);
    return response.data.token;
  } catch (error: any) {
    if (error.response.status === 400) {
      alert("El usuario ingresado no existe");
    } else {
      alert("Error al iniciar sesión, intenta más tarde");
    }
  }
}
