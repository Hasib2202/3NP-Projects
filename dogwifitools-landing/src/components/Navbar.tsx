import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50">
      <div className="bg-[#1F1F3B]/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between lg:justify-center">
            {/* Logo */}
            <div className="lg:absolute lg:left-6 flex items-center gap-2">
              <img src="https://framerusercontent.com/images/YPbwseXgshxgxRkYKPZVujNrZY.png" alt="DogWifiTools" className="h-6" />
              {/* <span className="text-white/90 text-lg">DogWifiTools</span> */}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {!isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-white/90 hover:text-white transition-colors">Home</a>
              <a href="#features" className="text-white/90 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-white/90 hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="text-white/90 hover:text-white transition-colors">Faq</a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden pt-4 pb-2">
              <div className="flex flex-col items-center gap-4">
                <a href="#" className="text-white/90 hover:text-white transition-colors">Home</a>
                <a href="#features" className="text-white/90 hover:text-white transition-colors">Features</a>
                <a href="#pricing" className="text-white/90 hover:text-white transition-colors">Pricing</a>
                <a href="#faq" className="text-white/90 hover:text-white transition-colors">Faq</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
