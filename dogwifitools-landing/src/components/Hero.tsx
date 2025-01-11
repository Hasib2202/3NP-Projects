const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center">
      {/* Discord Button */}
      <div className="absolute top-32">
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-white/[0.07] hover:bg-white/[0.12] rounded-full px-4 py-1.5 transition-colors"
        >
          <span className="text-sm font-medium">Join The Discord</span>
          <span className="text-xs">→</span>
        </a>
      </div>

      {/* Main Content */}
      <div className="max-w-[1000px] mx-auto space-y-6">
        <h1 className="text-[72px] leading-[1.1] font-medium tracking-[-0.02em]">
          All-In-One{" "}
          <span className="text-white/40">
            Pump.fun
          </span>{" "}
          <br />
          Software
        </h1>
        
        <p className="text-lg text-white/60 max-w-[600px] mx-auto">
          Dominate on the blockchain with our custom Pump.fun solutions and modules for token developers.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 pt-8">
          <a
            href="#"
            className="bg-white hover:bg-white/90 text-black px-6 py-2.5 rounded-full inline-flex items-center gap-2 transition-all group"
          >
            <span>Purchase Today</span>
            <span className="text-black/60 group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
          <a
            href="#"
            className="bg-[#2A2A45] hover:bg-[#2A2A45]/80 px-6 py-2.5 rounded-full inline-flex items-center gap-2 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5 7C8.67157 7 8 7.67157 8 8.5V11.5C8 12.3284 8.67157 13 9.5 13C9.77081 13 10.0296 12.9224 10.25 12.7828L12.75 11.2828C13.4167 10.8395 13.4167 9.16051 12.75 8.71716L10.25 7.21716C10.0296 7.07764 9.77081 7 9.5 7Z" fill="currentColor"/>
            </svg>
            Watch Video
          </a>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1533] via-[#1F1F3B] to-[#1F1F3B]"></div>
        
        {/* Grid */}
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        
        {/* Stars */}
        <div className="star top-1/4 left-1/4" style={{ animationDelay: '0s' }}></div>
        <div className="star top-1/3 right-1/3" style={{ animationDelay: '1s' }}></div>
        <div className="star top-1/2 left-1/2" style={{ animationDelay: '2s' }}></div>
        <div className="star bottom-1/4 right-1/4" style={{ animationDelay: '3s' }}></div>
        <div className="star bottom-1/3 left-1/3" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute left-0 top-0 w-[800px] h-[600px] bg-[#0051FF]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute right-0 top-0 w-[800px] h-[600px] bg-[#7A3EF8]/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  )
}

export default Hero
