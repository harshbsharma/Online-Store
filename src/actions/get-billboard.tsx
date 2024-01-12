import axios from "axios";
import { Billboard, Category } from "../lib/types";

const URL  = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboards = async(id:string): Promise<Billboard> => {
    console.log("URL", `${URL}/id`)
    const res = await axios.get(`${URL}/${id}`)
    console.log(res)
    return res.data; 
}

export default getBillboards;