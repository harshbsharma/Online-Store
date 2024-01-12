import getBillboards from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import ProductList from '@/components/productlist';
import Container from '@/components/ui/container'
import Image from 'next/image'

export const revalidate = 0;


export default async function Home() {

  const products = await getProducts({isFeatured: true});
  const billboard  = await getBillboards('3e967c8f-dcc0-475b-a521-64c990d3ee66');
  return (
    <Container>
        <div className='space-y-10 pb-10'>
          <Billboard data={billboard} />
  
        <div className='flex flex-col gap-y-8 sm:px-6 lg:px-8'>
          <ProductList title="Featured Products" items={products}/>
        </div>
        </div>
    </Container>
  )
}
