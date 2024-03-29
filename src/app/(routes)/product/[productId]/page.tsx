import getProduct from "@/actions/get-single-product"
import getProducts from "@/actions/get-products"
import Container from "@/components/ui/container"
import ProductList from "@/components/productlist"
import Gallery from "@/components/gallery/index"
import Info from "@/components/info"

interface ProductPageProps {
    params:{
        productId:string
    }
}

const ProductPage:React.FC<ProductPageProps> = async({params}) => {
   
    const product=await getProduct(params.productId);
    const suggestedProducts = await getProducts({
        categoryId: product?.category?.id
        
    })
    return(
        <div className="bg-white dark:bg-black">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:item-start lg:gap-x-8">
                        <Gallery images={product.images}/>
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                           <Info data={product}/>

                        </div>
                    </div>

                    <hr className="my-10"/>
                        <ProductList title="Suggested Products" items={suggestedProducts}/> 
                </div>



            </Container>
             <h1>Product Page</h1>
        </div>
   ) 
}
export default ProductPage;