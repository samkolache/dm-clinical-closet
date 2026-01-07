import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

interface ProductPageProps {
  params: Promise<{
    name: string;
  }>;
}

// Product data mapping
const productData: { [key: string]: { imageSrc: string; title: string; price: number; description: string } } = {
  'howard-dental-sweatshirt-black': {
    imageSrc: '/basic-sweatshirt_standardized.jpg',
    title: 'Howard Dental Sweatshirt (black)',
    price: 45,
    description: 'Classic black sweatshirt featuring the Howard Dental logo. Perfect for everyday wear and showing your school spirit.'
  },
  'howard-dental-sweatshirt-blue': {
    imageSrc: '/hu-sweatshirt_standardized.jpg',
    title: 'Howard Dental Sweatshirt (blue)',
    price: 45,
    description: 'Vibrant blue sweatshirt with Howard Dental branding. Comfortable and stylish for any occasion.'
  },
  'howard-dental-sweatshirt-embroidered': {
    imageSrc: '/nice-sweatshirt_standardized.jpg',
    title: 'Howard Dental Sweatshirt (EMBROIDERED)',
    price: 55,
    description: 'Premium sweatshirt featuring high-quality embroidered Howard Dental logo. Elevated style with superior craftsmanship.'
  },
  'howard-dental-bison-hoodie-black': {
    imageSrc: '/bull-hoodie_standardized.jpg',
    title: 'Howard Dental Bison Hoodie (black)',
    price: 55,
    description: 'Bold black hoodie featuring the iconic Howard Bison mascot. Stay warm while representing Howard Dental.'
  },
  'howard-dental-tooth-hoodie-grey': {
    imageSrc: '/tooth-hoodie_standardized.jpg',
    title: 'Howard Dental Tooth Hoodie (grey)',
    price: 55,
    description: 'Unique grey hoodie with creative tooth design. Perfect for dental students and professionals.'
  }
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { name } = await params;
  const product = productData[name];

  // If product not found, show error message
  if (!product) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
              <Link href="/" className="text-blue-600 hover:underline">
                Return to Home
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back to products link */}
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 mb-8 inline-block">
            ← Back to Products
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            {/* Product Image */}
            <div className="flex items-start justify-center">
              <div className="w-full max-w-[550px] bg-slate-200 rounded-lg overflow-hidden">
                <Image
                  src={product.imageSrc}
                  alt={product.title}
                  width={550}
                  height={550}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-start space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.title}</h1>
                <p className="text-2xl font-semibold text-gray-700">${product.price}</p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Description</h2>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
                <p className="text-gray-600 font-bold underline leading-relaxed">Online payment is not available yet. If you would like to purchase, contact Dawson or Malik with your size and order. Payments accepted include Zelle, Venmo, Cashapp, or Cash</p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Product Details</h2>
                <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                  <div className="w-2/3 md:w-full md:max-w-[300px] bg-slate-200 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src="/plush-int.jpg"
                      alt="Interior plush detail"
                      width={300}
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="text-gray-600 leading-relaxed">Comfy, plush interior is available with all merch</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

