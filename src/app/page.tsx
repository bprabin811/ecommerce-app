import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto py-8">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to Our Modern E-commerce Store
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Discover amazing products at great prices. Start shopping now!
            </p>
            <Link href="/products">
              <Button className="mt-4" size="lg">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
