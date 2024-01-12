import axios from "axios";
import {  Category } from "../lib/types";

const URL  = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategory = async(id:string): Promise<Category> => {
    console.log("URL", `${URL}/id`)
    const res = await axios.get(`${URL}/${id}`)
    console.log(res)
    return res.data; 
}

export default getCategory;