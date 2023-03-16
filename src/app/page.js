import { Inter } from 'next/font/google'
import Layout from '../../components/layout'
import ProductItem from '../../components/productItem'
import data from '../../utilities/data'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Layout title="Home page">
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 w-full mx-auto'>
          {data.products.map((product) =>
          <ProductItem product={product} key={product.slug}></ProductItem>
          )}
        </div>
      </Layout>
    </div>
  )
}
