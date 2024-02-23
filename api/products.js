import axios from 'axios';
import {BASE_URL} from '../constants';

//add a new product
export const GetProduct = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/products`);
    return response.data;
  } catch (error) {
    return error.messgae;
  }
};

// get a product by id
export async function GetProductById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/api/products/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
}
