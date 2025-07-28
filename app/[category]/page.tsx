import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const categoryData = {
  tables: {
    name: "Table",
    description: "Elegant wooden tables for every space in your home",
    products: [
      {
        id: 1,
        name: "",
        
        price: "$899",
        image: "/images/t1.jpg", // Update this
        description: "Solid oak dining table with natural finish, seats 6 people comfortably.",
      },
      {
        id: 2,
        name: "Walnut Coffee Table",
        price: "$549",
        image: "/images/t6.jpg", // Update thisrun dev

        description: "Modern walnut coffee table with clean lines and storage shelf.",
      },
      {
        id: 3,
        name: "Pine Side Table",
        price: "$299",
        image: "/images/t3.jpg", // Update this
        description: "Compact pine side table with drawer, perfect for living rooms.",
      },
      {
        id: 4,
        name: "Mahogany Console Table",
        price: "$749",
        image: "/images/t4.jpg", // Update this
        description: "Elegant mahogany console table with carved details and storage.",
      },
    ],
  },
  desks: {
    name: "Desks",
    description: "Functional and stylish wooden desks for work and study",
    products: [
      {
        id: 1,
        name: "Executive Oak Desk",
        price: "$1299",
        image: "/images/products/executive-oak-desk.jpg", // Update this
        description: "Large oak executive desk with multiple drawers and cable management.",
      },
      {
        id: 2,
        name: "Writing Desk",
        price: "$649",
        image: "/images/products/writing-desk.jpg", // Update this
        description: "Minimalist writing desk with clean lines and ample workspace.",
      },
      {
        id: 3,
        name: "Standing Desk",
        price: "$899",
        image: "/images/products/standing-desk.jpg", // Update this
        description: "Adjustable wooden standing desk for healthy work habits.",
      },
    ],
  },
  chairs: {
    name: "Chairs",
    description: "Comfortable and durable wooden chairs for every occasion",
    products: [
      {
        id: 1,
        name: "Windsor Chair",
        price: "$349",
        image: "/images/products/windsor-chair.jpg", // Update this
        description: "Traditional Windsor chair with spindle back and comfortable seat.",
      },
      {
        id: 2,
        name: "Office Chair",
        price: "$599",
        image: "/images/products/office-chair.jpg", // Update this
        description: "Ergonomic wooden office chair with leather cushioning.",
      },
      {
        id: 3,
        name: "Dining Chair Set",
        price: "$799",
        image: "/images/products/dining-chair-set.jpg", // Update this
        description: "Set of 4 matching dining chairs with upholstered seats.",
      },
    ],
  },
  cabinets: {
    name: "Cabinets",
    description: "Versatile storage solutions crafted from premium wood",
    products: [
      {
        id: 1,
        name: "Kitchen Cabinet",
        price: "$1199",
        image: "/images/s1.jpg", // Update this
        description: "Spacious kitchen cabinet with adjustable shelves and soft-close doors.",
      },
      {
        id: 2,
        name: "Display Cabinet",
        price: "$849",
        image: "/images/s2.jpg", // Update this
        description: "Elegant display cabinet with glass doors and interior lighting.",
      },
      {
        id: 3,
        name: "Storage Cabinet",
        price: "$599",
        image: "/images/products/storage-cabinet.jpg", // Update this
        description: "Multi-purpose storage cabinet with multiple compartments.",
      },
    ],
  },
  beds: {
    name: "Beds",
    description: "Beautiful wooden bed frames for restful nights",
    products: [
      {
        id: 1,
        name: "King Size Bed Frame",
        price: "$1599",
        image: "/images/products/king-bed-frame.jpg", // Update this
        description: "Solid wood king size bed frame with upholstered headboard.",
      },
      {
        id: 2,
        name: "Platform Bed",
        price: "$899",
        image: "/images/products/platform-bed.jpg", // Update this
        description: "Modern platform bed with clean lines and built-in nightstands.",
      },
      {
        id: 3,
        name: "Bunk Bed",
        price: "$1299",
        image: "/images/products/bunk-bed.jpg", // Update this
        description: "Sturdy wooden bunk bed perfect for children's rooms.",
      },
    ],
  },
}

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categoryData[params.category as keyof typeof categoryData]

  if (!category) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

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

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Link>
        </div>
      </div>

      {/* Category Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{category.name}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{category.description}</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {category.products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 mt-16">
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
