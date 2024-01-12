import axios from "axios";
import { Category } from "../lib/types";

const URL  = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategories = async(): Promise<Category[]> => {
    console.log("URL", URL)
    const res = await axios.get(URL)
    // console.log(res)
    return res.data; 
}

export default getCategories;