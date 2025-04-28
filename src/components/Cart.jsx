import { useNavigate } from "react-router-dom"
import { Toaster, toast } from "sonner"
import { motion } from "framer-motion"

const products = [
  {
    id: 1,
    name: "Solar Basic Purifier",
    features: ["Residential use", "Direct solar power", "50L daily capacity", "Compact design"],
    price: 599,
    image: "/lovable-uploads/47505f5b-0fb7-49fe-a721-bf32e981ffea.png",
  },
  {
    id: 2,
    name: "Solar Pro Filtration",
    features: ["Community-scale system", "UV sterilization", "200L daily capacity", "Advanced filtration"],
    price: 1299,
    image: "/lovable-uploads/47505f5b-0fb7-49fe-a721-bf32e981ffea.png",
  },
  {
    id: 3,
    name: "Solar Max Purifier",
    features: ["Industrial-grade", "Multiple filtration stages", "500L daily capacity", "Heavy-duty construction"],
    price: 2499,
    image: "/lovable-uploads/47505f5b-0fb7-49fe-a721-bf32e981ffea.png",
  },
  {
    id: 4,
    name: "Solar Ultra System",
    features: ["Smart monitoring", "High-performance", "300L daily capacity", "Energy-efficient"],
    price: 1899,
    image: "/lovable-uploads/47505f5b-0fb7-49fe-a721-bf32e981ffea.png",
  },
  {
    id: 5,
    name: "Solar Compact Plus",
    features: ["Space-efficient design", "Ideal for small homes", "100L daily capacity", "Easy installation"],
    price: 899,
    image: "/lovable-uploads/47505f5b-0fb7-49fe-a721-bf32e981ffea.png",
  },
  {
    id: 6,
    name: "Solar Enterprise",
    features: ["Enterprise-grade solution", "Advanced filtration", "1000L daily capacity", "Scalable system"],
    price: 3499,
    image: "/lovable-uploads/47505f5b-0fb7-49fe-a721-bf32e981ffea.png",
  },
]

const ProductCard = ({ product }) => {
  const addToCart = () => {
    toast.success(`Added ${product.name} to cart!`)
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-[#E6EEF2] to-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border border-[#064469]/20"
    >
      <div className="relative">
        <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
        <div className="absolute top-0 right-0 bg-[#064469] text-white px-3 py-1 rounded-bl-lg font-semibold">
          ${product.price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#064469] mb-3">{product.name}</h3>
        <ul className="space-y-2 mb-4">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center text-[#3A5A6D]">
              <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <button
          onClick={addToCart}
          className="w-full bg-[#064469] text-white px-4 py-2 rounded-lg hover:bg-[#0A5B8A] transition-colors duration-200 font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  )
}

const Cart = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6EEF2] via-white to-[#E6EEF2]/30 pt-24 px-6 py-12">
      <Toaster position="top-center" richColors />
      <div className="max-w-[90rem] mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#064469] to-[#0A5B8A] mb-6"
          >
            Solar Water Purification Systems
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-[#064469] max-w-3xl mx-auto leading-relaxed"
          >
            Discover our range of advanced solar-powered water purification solutions
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Cart

