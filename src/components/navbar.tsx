import React from "react"
import Link from "next/link"
import Container from "./ui/container"
import MainNav from "@/components/mainnav"
import getCategories from "@/actions/get-categories"
import NavbarActions from "./navbaractions"


export const revalidate = 0;

export const Navbar = async()=>{

    const categories = await getCategories();

    return(
        <div className="border-b">
            <Container>
                <div
                className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center"
                >
                    <Link href="/" className="ml-4 lg:ml-0 gap-x-2">
                    <p className="font-bold text-xl">CozyCart Store</p>
                    </Link>
                    <MainNav data={categories}/>
                    <NavbarActions/>
                    
                    
                </div>
              
            </Container>
        </div>
    )
}
