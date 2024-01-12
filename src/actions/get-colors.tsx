import axios from "axios";
import { Color } from "../lib/types";

const URL  = `${process.env.NEXT_PUBLIC_API_URL}/colors`

const getColors = async(): Promise<Color[]> => {
    console.log("URL", URL)
    const res = await axios.get(URL)
    // console.log(res)
    return res.data; 
}

export default getColors;