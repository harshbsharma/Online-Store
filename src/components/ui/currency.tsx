"use client"

import { useEffect,useState } from "react"

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  })

interface CurrencyProps{
    value:string | number

}


const Currency:React.FC<CurrencyProps> = ({value}) => {
    const [mounted,setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[])

    if(!mounted) return null

    return (
    <div className="font-semibold dark:text-gray-900 text-white">
        {formatter.format(Number(value))}
    </div>
  )
}

export default Currency