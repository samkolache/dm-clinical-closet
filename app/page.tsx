import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
          <div className="flex flex-col md:flex-row mb-6 md:mb-12 items-center justify-center gap-6 md:gap-4">
            <ProductCard imageSrc="/basic-sweatshirt_standardized.jpg" title="Howard Dental Sweatshirt (black)" price={45} />
            <ProductCard imageSrc="/hu-sweatshirt_standardized.jpg" title="Howard Dental Sweatshirt (blue)" price={45} />
            <ProductCard imageSrc="/nice-sweatshirt_standardized.jpg" title="Howard Dental Sweatshirt (EMBROIDERED)" price={55} />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            <ProductCard imageSrc="/bull-hoodie_standardized.jpg" title="Howard Dental Bison Hoodie (black)" price={55} />
            <ProductCard imageSrc="/tooth-hoodie_standardized.jpg" title="Howard Dental Tooth Hoodie (grey)" price={55} />
          </div>
        </div>
      </main>
    </>
  );
}
