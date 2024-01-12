import axios from "axios";
import { Product, Category } from "../lib/types";

const URL  = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProduct = async(id:string): Promise<Product> => {
    console.log("URL", `${URL}/id`)
    const res = await axios.get(`${URL}/${id}`)
    console.log(res)
    return res.data; 
}

export default getProduct;