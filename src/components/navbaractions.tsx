"use client"

import { ShoppingBag } from "lucide-react";
import {Button} from "./ui/Button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

import { ThemeToggle } from "./theme-toggle"

const NavbarActions = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    },[])
    const router  = useRouter();
    const cart=useCart();

    if(!isMounted) return null; 

    return (
        <div className="relative ml-auto flex items-center gap-x-4">
           <Button
           onClick={()=>router.push("/cart")} 
           className="flex item-center rounded-full dark:bg-gray-700 bg-black px-4 py-2">
            <ShoppingBag
            size={20}
            color="white"
            />
            <span className="ml-2 text-sm font-medium text-white">
                {cart.items.length}
            </span>
           </Button>
          <ThemeToggle/>
        </div>
    )
}

export default NavbarActions;