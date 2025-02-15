import axios from "axios";
const API_PUBLIC = process.env.NEXT_PUBLIC_API_URL;
export async function fetchProducts() {
  try {
    const response = await axios.get(`${API_PUBLIC}/products`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products", error);
    return [];
  }
}

export const fetchCategoryNames = async () => {
  try {
    const response = await axios.get(`${API_PUBLIC}/products/categories/names`);
    console.log("Fetched category names:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching category names:", error);
    throw error;
  }
};
