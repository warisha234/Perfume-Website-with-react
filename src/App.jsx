import React, { useState } from "react";
import { motion } from "framer-motion"; 
import Swal from 'sweetalert2';
import hero from './assets/perfume hero.jpg'
import rosewood from './assets/Rosewood Bliss.png';
import citrus from './assets/citrus.jpg';
import woodland from './assets/woodland.jpg';
import rosewood2 from './assets/rosewood2.jpg';
import citrus2 from './assets/citrus2.jpg';
import woodland2 from './assets/woodland2.jpg';
import about from './assets/about sec.jpg'

export default function PerfumeLandingPage() {

  // ------------------ STATE ------------------
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");


  // ------------------ FUNCTIONS ------------------

  // SweetAlert for Newsletter
  const handleShopNow = () => {
    Swal.fire({
      title: 'Subscribed!',
      text: 'You will now receive exclusive offers.',
      icon: 'success',
      background: '#0a1620',
      color: '#ffffff',
      confirmButtonColor: '#e6c98b'
    });
  };

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    Swal.fire({
      title: `${product.name} added to cart!`,
      icon: 'success',
      background: '#0a1620',
      color: '#fff',
      confirmButtonColor: '#e6c98b'
    });
  };

  // Generate invoice as text file
  const generateInvoice = () => {
    if(cartItems.length === 0){
      Swal.fire({
        title: 'Cart is empty!',
        icon: 'warning',
        background: '#0a1620',
        color: '#fff',
        confirmButtonColor: '#e6c98b'
      });
      return;
    }
    let invoice = "Your Invoice:\n\n";
    cartItems.forEach((item, i) => {
      invoice += `${i + 1}. ${item.name} - $${item.price}\n`;
    });
    invoice += `\nTotal: $${cartItems.reduce((a,b) => a + b.price, 0)}\n`;

    const blob = new Blob([invoice], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "invoice.txt";
    link.click();
  };

  const productsData = [
  { name: "Rosewood Bliss", price: 50, img: rosewood },
  { name: "Citrus Zest", price: 90, img: citrus },
  { name: "Woodland Walk", price: 70, img: woodland },
  { name: "Rosewood Bliss", price: 80, img: rosewood2 },
  { name: "Citrus Zest", price: 70, img: citrus2 },
  { name: "Woodland Walk", price: 100, img: woodland2 },
];
const filteredProducts = productsData.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F2234] via-[#0f2a38] to-[#0a1620] text-white font-serif overflow-hidden">

      {/* ---------------- NAVBAR ---------------- */}
      <nav className="flex items-center justify-between px-10 py-6 fixed top-0 left-0 right-0 bg-[#0a1620]/80 backdrop-blur-md z-50">
        <h1 className="text-xl font-semibold">Perf</h1>
        <ul className="hidden md:flex gap-8 text-sm opacity-80">
          <li className="hover:text-[#e6c98b] hover:border-b-2 hover:border-[#e6c98b] transition-all duration-300 cursor-pointer text-yellow-200"><a href="#home">Home</a></li>
          <li className="hover:text-[#e6c98b] hover:border-b-2 hover:border-[#e6c98b] transition-all duration-300 cursor-pointer"> <a href="#shop">Shop</a></li>
          <li className="hover:text-[#e6c98b] hover:border-b-2 hover:border-[#e6c98b] transition-all duration-300 cursor-pointer"> <a href="#category">Category</a></li>
          <li className="hover:text-[#e6c98b] hover:border-b-2 hover:border-[#e6c98b] transition-all duration-300 cursor-pointer"> <a href="#about">About Us</a></li>
          <li className="hover:text-[#e6c98b] hover:border-b-2 hover:border-[#e6c98b] transition-all duration-300 cursor-pointer"> <a href="#contact">Contact Us</a></li>
        </ul>

        <div className="flex items-center gap-4 text-sm">
          <input
  type="text"
  placeholder="Search perfume..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="bg-transparent border-b border-[#e6c98b] px-2 py-1 text-sm outline-none placeholder:text-gray-300"
/>

          <span 
            className="border px-4 py-1 rounded-full hover:bg-[#2b5c73] transition-all duration-300 cursor-pointer"
            onClick={() => setCartOpen(!cartOpen)}
          >
            Cart ({cartItems.length})
          </span>
        </div>
      </nav>

      {/* ---------------- HERO SECTION ---------------- */}
      <motion.section 
        className="relative px-10 py-20 grid md:grid-cols-2 gap-10 items-center" id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute -top-20 -left-32 w-[500px] h-[500px] bg-[#1e4f63]/40 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-0 w-[420px] h-[420px] bg-[#2a6f88]/40 rounded-full blur-[140px]" />

        <motion.div
          className="relative z-10"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="hero-text hero-heading text-4xl md:text-5xl leading-tight">
            Fall in love with <br />
            Our Signature <br />
            <span className="text-[#e6c98b]">Perfumes</span>
          </h2>
          <p className="mt-4 text-2xl opacity-80 max-w-md">
            Discover new scent that <br />
            inspires you with our <br />
            wide selection of perfumes
          </p>
          <button className="mt-8 bg-[#1e3f50] hover:bg-[#2b5c73] px-8 py-3 rounded-full text-sm transition-all duration-300"> 
            SHOP NOW 
          </button>
          <div className="mt-10 flex gap-10 text-sm">
            <div>
              <p className="text-xl font-semibold text-yellow-200">90+</p>
              <p className="opacity-70">Perfume Brands</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-yellow-200">15M+</p>
              <p className="opacity-70">Perfume Sold</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e4f63]/50 to-[#0b1f2a] rounded-full blur-[120px]" />
          <img
            src={hero}
            alt="Perfume Hero"
            className="hero-image relative z-10 max-w-md"
          />
        </motion.div>
      </motion.section>

    
      
      {/* ---------------- PRODUCTS ---------------- */}
      <section className="px-10 py-20" id="category">
        <h3 className="text-center text-3xl mb-12 text-[#e6c98b]">
          Shop Our Wide Selection of Scents
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#102b3a] rounded-3xl p-6 text-center shadow-lg hover:scale-105 transition"
              >
                <img src={item.img} alt={item.name} className="h-40 w-full object-cover rounded-2xl mb-4" />
                <h4 className="text-lg">{item.name}</h4>
                <p className="text-[#e6c98b] mt-2">${item.price}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="mt-4 bg-[#e6c98b] text-[#0a1620] px-4 py-2 rounded-full"
                >
                  Add to Cart
                </button>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center opacity-70">
              No products found 😔
            </p>
          )}
        </div>
      </section>
    

      {/* ---------------- CART DASHBOARD ---------------- */}
      {cartOpen && (
        <div className="fixed top-20 right-10 w-80 bg-[#102b3a] p-6 rounded-3xl shadow-2xl z-50">
          <h4 className="text-lg text-[#e6c98b] mb-4">Your Cart</h4>
          {cartItems.length === 0 ? (
            <p className="text-sm opacity-80">No items in cart</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </div>
              ))}
              <div className="border-t border-[#e6c98b] pt-2 flex justify-between font-semibold">
                <span>Total:</span>
                <span>${cartItems.reduce((a,b) => a + b.price, 0)}</span>
              </div>
              <button
                onClick={() => generateInvoice()}
                className="w-full mt-4 bg-[#e6c98b] text-[#0a1620] px-4 py-2 rounded-full hover:opacity-90 transition-opacity duration-300"
              >
                Download Invoice
              </button>
            </div>
          )}
        </div>
      )}

      {/* ---------------- REVIEWS ---------------- */}
      <section className="px-10 py-20" id="shop">
        <h3 className="text-center text-3xl mb-12 text-[#e6c98b]">Customer Reviews</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {[1, 2, 3, 4].map((r, i) => (
            <motion.div
              key={r}
              className="bg-[#102b3a] rounded-3xl p-8 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <p className="mb-4">★★★★★</p>
              <p className="text-sm opacity-80">
                Absolutely love Rosewood Bliss. The scent is exquisite and lasts all day. Highly recommend!
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <motion.section
        className="px-10 py-20 bg-[#0b1f2a] relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }} id="about"
      >
        <h3 className="text-3xl text-center mb-12 text-[#e6c98b]">Our Story</h3>
        <div className="md:flex md:items-center md:gap-10">
          <div className="md:w-1/2">
            <p className="opacity-80 text-sm md:text-base">
              Inspired by the elegance of nature, our perfumes are crafted with passion and precision.
              Each scent tells a story and evokes memories that last a lifetime.
            </p>
            <button className="mt-6 bg-[#1e3f50] hover:bg-[#2b5c73] px-8 py-3 rounded-full text-sm transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 relative">
            <motion.img
              src={about}
              alt="Our Story"
              className="h-64 md:h-80 w-full object-cover rounded-3xl shadow-lg"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </div>
      </motion.section>

      {/* ---------------- WHY US ---------------- */}
      <section className="px-10 py-20 bg-[#102b3a]">
        <h3 className="text-3xl text-center mb-12 text-[#e6c98b]">Why Our Perfumes Stand Out</h3>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            {title: "Natural Ingredients", desc: "Only the finest natural extracts used."},
            {title: "Long-lasting Scent", desc: "Enjoy fragrance that lasts all day."},
            {title: "Eco-friendly", desc: "Sustainably sourced and cruelty-free."},
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#0b1f2a] p-8 rounded-3xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h4 className="text-xl mb-2 text-[#e6c98b]">{item.title}</h4>
              <p className="opacity-80 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- NEWSLETTER ---------------- */}
      <motion.section
        className="px-10 py-20 bg-[#1e3f50] text-center rounded-3xl mx-10 md:mx-20 mt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }} id="contact"
      >
        <h3 className="text-3xl mb-6 text-[#e6c98b]">Stay Updated</h3>
        <p className="opacity-80 mb-6 text-sm">
          Subscribe to get exclusive offers, news, and scent inspirations.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-full text-yellow-200 w-64"
          />
          <button onClick={handleShopNow} className="bg-[#e6c98b] px-6 py-2 rounded-full hover:opacity-90 transition-opacity duration-300">
            Subscribe
          </button>
        </div>
      </motion.section>

      {/* ---------------- FAQ ---------------- */}
      <section className="px-10 py-20 bg-[#0a1620]">
        <h3 className="text-3xl text-center mb-12 text-[#e6c98b]">FAQs</h3>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {q: "Are your perfumes cruelty-free?", a: "Yes! All our products are 100% cruelty-free."},
            {q: "Do you offer international shipping?", a: "Absolutely, we ship worldwide."},
            {q: "Can I return a perfume?", a: "Yes, within 14 days of purchase."},
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#102b3a] p-6 rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h4 className="text-lg text-[#e6c98b]">{item.q}</h4>
              <p className="opacity-80 mt-2 text-sm">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <motion.footer
        className="bg-[#0b1f2a] text-white px-10 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

          <div className="space-y-4">
            <div className="text-2xl font-bold">Perf</div>
            <p className="opacity-70 text-sm">
              Explore exquisite perfumes crafted with care and passion.
            </p>
          </div>

          <div className="space-y-4">
            <h5 className="text-[#e6c98b] font-semibold">Quick Links</h5>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-[#e6c98b] font-semibold">Follow Us</h5>
            <ul className="flex gap-4">
              <li>FB</li>
              <li>IG</li>
              <li>TW</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-[#e6c98b] font-semibold">Contact</h5>
            <p className="text-sm opacity-80">info@perf.com</p>
            <p className="text-sm opacity-80">+1 234 567 890</p>
          </div>

        </div>
        <p className="text-center text-sm opacity-50 mt-10">
          &copy; 2026 Perf. All rights reserved.
        </p>
      </motion.footer>

    </div>
  );
}
