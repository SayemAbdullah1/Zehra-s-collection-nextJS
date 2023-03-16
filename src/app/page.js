import { Inter } from 'next/font/google'
import Layout from '../../components/layout'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Layout title="Home page">Home Page</Layout>
    </div>
  )
}
