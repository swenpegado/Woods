import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    id: "tables",
    name: "Tables",
    description: "Dining tables, coffee tables, and side tables",
    image: "/images/t2.jpg", // Update this
    productCount: 12,
  },
  {
    id: "desks",
    name: "shelfs",
    description: "Office desks, writing desks, and workstations",
    image: "/images/t5.jpg", // Update this
    productCount: 8,
  },
  {
    id: "chairs",
    name: "Chairs",
    description: "Dining chairs, office chairs, and accent chairs",
    image: "/images/b3.jpg", // Update this
    productCount: 15,
  },
  {
    id: "cabinets",
    name: "Cabinets",
    description: "Storage cabinets, wardrobes, and display units",
    image: "/images/s1.jpg", // Update this
    productCount: 10,
  },
  {
    id: "beds",
    name: "Beds",
    description: "Bed frames, headboards, and bedroom sets",
    image: "/images/b2.jpg", // Update this
    productCount: 6,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              WoodCraft
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Handcrafted Wooden Furniture</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover our collection of premium wooden furniture, crafted with precision and designed for modern living.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/${category.id}`}
                className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-3">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{category.productCount} products</span>
                    <span className="text-sm font-medium text-gray-900 group-hover:text-gray-600">
                      View Collection →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">WoodCraft</h3>
            <p className="text-gray-600 mb-4">Premium wooden furniture for your home and office</p>
            <p className="text-sm text-gray-500">© 2024 WoodCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
