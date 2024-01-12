'use client'

import { Product } from "@/lib/types"
import Image from "next/image"
import IconButton from "./icon-button"
import { Expand,ShoppingCart } from "lucide-react"
import Currency from "./currency"
import { useRouter } from "next/navigation"
import { MouseEventHandler } from "react"
import usePreviewModal from "@/hooks/use-preview-modal"
import useCart from "@/hooks/use-cart"

interface ProductCardProps{
    data:Product
}
export const ProductCard:React.FC<ProductCardProps> = ({data}) => {
  
    const router = useRouter();
    const cart=useCart();
    const previewModal =usePreviewModal();
    const handleClick=()=>{
        router.push(`/product/${data.id}`)
    }

    const onPreview:MouseEventHandler<HTMLButtonElement>=(event)=>{
        event.stopPropagation();
        previewModal.onOpen(data)    
    }

    const onAddtoCart:MouseEventHandler<HTMLButtonElement>=(event)=>{
        event.stopPropagation();
        cart.addItem(data)
    }

    return (
    <div onClick={handleClick} className="dark:bg-zinc-400 bg-zinc-600 hover:scale-105 transition-all group cursor-pointer rounded-xl border p-3 space-y-4" >
        {/* Image */}
        <div className="aspect-square rounded-xl bg-gray-100 relative ">
            <Image
            src={data?.images?.[0]?.url}
            fill
            alt="image"
            className="aspect-square object-cover rounded-md"
            />
            <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5 ">
                <div className="flex gap-x-6 justify-center">
                    <IconButton
                    onClick={onPreview}
                    icon={<Expand size={20} className="text-gray-600"/>}
                    />
                    <IconButton
                    onClick={onAddtoCart}
                    icon={<ShoppingCart size={20} className="text-gray-600"/>}
                    />

                </div>
            </div>
        </div>
        {/* Info */}
        <div>
            <p className="font-semibold text-white dark:text-gray-900  text-lg">{data.name}</p>
            <p className="text-sm font-semibold dark:text-gray-600 text-white">{data.category?.name}</p>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
            <Currency value={data?.price}/>

        </div>
    </div>
  )
}
