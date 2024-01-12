import {create} from 'zustand';
import { Product } from '@/lib/types';

interface PrewviewModalStore{
    isOpen:boolean
    data?:Product
    onOpen:(data:Product)=>void
    onClose:()=>void
}

const usePreviewModal= create<PrewviewModalStore>((set)=>({
    isOpen:false,
    data:undefined,
    onOpen:(data:Product)=>set({isOpen:true,data:data}),
    onClose:()=>set({isOpen:false,data:undefined})
}))

export default usePreviewModal;