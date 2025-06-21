import Link from 'next/link';
import HeroSection from '@/components/hero-section';
import ProductCard from '@/components/product-card';
import Sidebar from '@/components/sidebar';
import path from 'path';
import fs from 'fs/promises';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  image: string;
}


export default async function Products() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'products.json');
  const file = await fs.readFile(filePath, 'utf-8');
  const products: Product[] = JSON.parse(file);

  return (
    <div className="w-full">
      {/* <div className="h-screen">

        <div className="w-[23%]">
          <ProductCard/>
        </div>
      </div> */}
      
      <div className="flex w-full">
        <div className="w-[20%] m-8">
          <Sidebar/>
        </div>

        <div className="flex flex-wrap justify-between gap-3 m-8">
          
          {

              products.map((product: any) => (
                  <div
                      key={product.id}
                      className={`w-full sm:w-[49%] md:w-[32%] xl:w-[24%]`}
                  >
                      <ProductCard name={product.name} image={product.image} price={product.price}/>
                  </div>
              ))

          }
        </div>
      </div>
      
      {/* <FeatureSection/> */}
      {/* Hero Section */}

      

      {/* Impact Stats */}
      <section className="bg-gradient-to-r from-dna-blue to-dna-green text-white rounded-xl p-8 mb-16 mx-4 my-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-4xl font-bold mb-2">5,000+</h4>
            <p>Volunteers Engaged</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold mb-2">10,000kg</h4>
            <p>Waste Collected</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold mb-2">100+</h4>
            <p>Beach Cleanup Drives</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
          Join our community of environmental stewards and help protect our coastal ecosystems
        </p>
        <Link
          href="/auth/register"
          className="inline-block bg-gradient-to-r from-dna-blue to-dna-green hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold my-4"
        >
          Get Started Today
        </Link>
      </section>
    </div>
  )
}

