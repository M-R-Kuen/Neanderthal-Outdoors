import axios from "axios";
//const API_PUBLIC = process.env.NEXT_PUBLIC_API_URL;
const API_PUBLIC = "https://neanderthal-outdoors.onrender.com";
export async function fetchOrders(token: string) {
  try {
    const response = await axios.get(`${API_PUBLIC}/users/orders`, {
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al cargar las órdenes:", error);
  }
}
