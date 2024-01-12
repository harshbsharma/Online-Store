import axios from "axios";
import { Size } from "../lib/types";

const URL  = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSizes = async(): Promise<Size[]> => {
    console.log("URL", URL)
    const res = await axios.get(URL)
    // console.log(res)
    return res.data; 
}

export default getSizes;