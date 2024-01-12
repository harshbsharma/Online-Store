"use client"

import { Product } from "@/lib/types"
import Currency from "./ui/currency"
import {Button} from "./ui/Button"
import { ShoppingCart } from "lucide-react"
import useCart from "@/hooks/use-cart"
import { on } from "stream"

interface InfoProps{
    data:Product
}
const Info:React.FC<InfoProps> = ({data}) => {
    const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  })

  return (
    <div>
        <h1 className="text-3xl font-bold dark:text-white text-gray-900">{data.name}</h1>
        <div className="mt-3 flex items-end justify-between">
            <p className="text-2xl text-gray-900">
            <div className="font-semibold text-gray-900 dark:text-white">
                {formatter.format(Number(data?.price))}
            </div>  

            </p>
        </div>
            <hr className="my-4"/>
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4 " >
                    <h3 className="font-semibold dark:text-white text-black">Size:</h3>
                    <div >
                        {data?.size?.name}
                    </div>

                </div>

                <div className="flex items-center gap-x-4 " >
                    <h3 className="font-semibold dark:text-white text-black">Color:</h3>
                    <div className="h-6 w-6 rounded-full border border-gray-600" 
                    style={{backgroundColor:data?.color?.value}}/>
                 </div>

            </div>
            <div className="mt-10 flex items-center gap-x-3">
                    <Button onClick={onAddToCart} className="flex items-center gap-x-2">
                        Add To Cart
                        <ShoppingCart/>
                    </Button>

            </div>        
    </div>
  )
}

export default Info