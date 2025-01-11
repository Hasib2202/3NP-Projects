import { ChartBarIcon, CogIcon, LockClosedIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Analytics',
    description: 'Real-time tracking of your token performance with detailed market insights.',
    icon: ChartBarIcon,
  },
  {
    name: 'Security',
    description: 'Enterprise-grade protection for your assets and transactions.',
    icon: LockClosedIcon,
  },
  {
    name: 'Community',
    description: 'Build and manage your community with powerful engagement tools.',
    icon: CogIcon,
  },
  {
    name: 'Supply',
    description: 'Control and optimize your token supply with advanced tools.',
    icon: RocketLaunchIcon,
  },
]

const Features = () => {
  return (
    <section id="features" className="min-h-screen py-32 relative">
      {/* Discord Button */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-white/[0.07] hover:bg-white/[0.12] rounded-full px-4 py-1.5 transition-colors"
        >
          <span className="text-sm font-medium">Join The Discord</span>
          <span className="text-xs">→</span>
        </a>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[1000px] mx-auto mb-20">
          <h2 className="text-[56px] leading-[1.1] font-medium tracking-[-0.02em]">
            Key Features{" "}
            <span className="text-white/40">
              That Will Elevate Your Launches
            </span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {/* Volume */}
          <div className="bg-[#1F1F3B]/50 backdrop-blur-sm rounded-2xl p-8 text-center group hover:bg-[#1F1F3B]/70 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 bg-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M8 5.07L9.57 6.64L6.414 9.793L7.828 11.207L11 8.036L12.57 9.607L9.414 12.764L10.828 14.178L14 11.006L15.57 12.576L12.414 15.732L13.828 17.146L17 13.975L18.57 15.545L15.414 18.7L16.828 20.114L21.657 15.286C22.048 14.895 22.048 14.264 21.657 13.873L10.127 2.343C9.736 1.952 9.105 1.952 8.714 2.343L3.886 7.171L5.3 8.585L8 5.07Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Volume</h3>
            <p className="text-white/60 text-sm">
              Ensure consistent volume and maximize your token's potential with advanced automated processes.
            </p>
          </div>

          {/* Bundler */}
          <div className="bg-[#1F1F3B]/50 backdrop-blur-sm rounded-2xl p-8 text-center group hover:bg-[#1F1F3B]/70 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 bg-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                <path d="M2 17L12 22L22 17" fill="currentColor"/>
                <path d="M2 12L12 17L22 12" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Bundler</h3>
            <p className="text-white/60 text-sm">
              Securely purchase token supply across multiple sub-wallets at launch without triggering flags on trading platforms.
            </p>
          </div>

          {/* Comment */}
          <div className="bg-[#1F1F3B]/50 backdrop-blur-sm rounded-2xl p-8 text-center group hover:bg-[#1F1F3B]/70 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 bg-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Comment</h3>
            <p className="text-white/60 text-sm">
              Post custom comments on any pump.fun token's page to boost visibility and engagement.
            </p>
          </div>

          {/* Bump It */}
          <div className="bg-[#1F1F3B]/50 backdrop-blur-sm rounded-2xl p-8 text-center group hover:bg-[#1F1F3B]/70 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 bg-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 20L4 12L12 4L13.425 5.425L7.825 11.025H20V12.975H7.825L13.425 18.575L12 20Z" fill="currentColor" transform="rotate(90 12 12)"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Bump It</h3>
            <p className="text-white/60 text-sm">
              Boost your token to the top, simulating high activity to keep it trending on Pump.fun with minimal cost.
            </p>
          </div>
        </div>

        {/* Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Launch Interface */}
          <div className="bg-[#1F1F3B]/50 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium mb-4">Launch Your Token with Ease</h3>
              <p className="text-white/60">
                Ensure multiple wallet buys.<br />
                Prevent snipers from buying<br />
                before you.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/launch-interface.png" 
                alt="Launch Interface" 
                className="w-full rounded-xl shadow-2xl border border-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>

          {/* Volume Interface */}
          <div className="bg-[#1F1F3B]/50 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium mb-4">Boost Your Token's Volume in Multiple Ways</h3>
              <p className="text-white/60">
                Automate volume, micro-buys,<br />
                bumps, and more—everything to<br />
                keep your token active.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/volume-interface.png" 
                alt="Volume Interface" 
                className="w-full rounded-xl shadow-2xl border border-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>

          {/* GUI Features */}
          <div className="bg-[#1F1F3B]/50 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium mb-4">GUI Focused on User Experience</h3>
              <p className="text-white/60">
                Our intuitive layout make it<br />
                incredibly easy to use.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-16">
              <div className="w-20 h-20 mx-auto bg-[#2A2A45] rounded-full flex items-center justify-center group hover:scale-110 transition-transform">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M14.06 9L15 7.94L16.06 9L15 10.06L14.06 9ZM9 14.06L7.94 15L9 16.06L10.06 15L9 14.06ZM7.94 9L9 7.94L10.06 9L9 10.06L7.94 9ZM15 14.06L14.06 15L15 16.06L16.06 15L15 14.06ZM12 8L13.59 6.41L15.17 8L13.59 9.59L12 8ZM8 12L6.41 13.59L8 15.17L9.59 13.59L8 12ZM12 16L13.59 14.41L15.17 16L13.59 17.59L12 16Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="w-20 h-20 mx-auto bg-[#2A2A45] rounded-full flex items-center justify-center group hover:scale-110 transition-transform">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                </svg>
              </div>
              <div className="w-20 h-20 mx-auto bg-[#2A2A45] rounded-full flex items-center justify-center group hover:scale-110 transition-transform">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" fill="currentColor"/>
                </svg>
              </div>
              <div className="w-20 h-20 mx-auto bg-[#2A2A45] rounded-full flex items-center justify-center group hover:scale-110 transition-transform">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 mb-32">
          {/* Bubble Map Detection */}
          <div className="bg-[#1F1F3B]/50 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium mb-4">Bypass Bubble Map Detection Seamlessly</h3>
              <p className="text-white/60">
                Prevent wallets from being<br />
                detected on bubble maps.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/bubble-map.png" 
                alt="Bubble Map Interface" 
                className="w-full rounded-xl shadow-2xl border border-white/10 max-w-[320px] mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>

          {/* Pump.Fun to Raydium */}
          <div className="bg-[#1F1F3B]/50 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium mb-4">Pump.Fun to Raydium</h3>
              <p className="text-white/60">
                Easily manage your token's transition to<br />
                Raydium
              </p>
            </div>
            <div className="relative">
              <img 
                src="/raydium-chart.png" 
                alt="Raydium Chart Interface" 
                className="w-full rounded-xl shadow-2xl border border-white/10 max-w-[480px] mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Integrations Section */}
        <div className="relative py-32">
          {/* Discord Button */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#1F1F3B] hover:bg-[#2A2A45] rounded-full px-6 py-2 transition-colors"
            >
              <span className="text-base font-medium">Join The Discord</span>
              <span className="text-xs">→</span>
            </a>
          </div>

          {/* Heading */}
          <div className="text-center mb-24">
            <h2 className="text-[56px] leading-[1.1] font-medium tracking-[-0.02em]">
              Integrations for <span className="text-white/40">everything</span>
              <br />
              <span className="text-white/40">Solana</span>
            </h2>
          </div>

          {/* Integration Icons Circle */}
          <div className="relative w-[600px] h-[600px] mx-auto">
            {/* Center Icon */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#1F1F3B] rounded-full flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
              </svg>
            </div>

            {/* Orbit Circle */}
            <div className="absolute inset-0 border-2 border-[#1F1F3B] rounded-full"></div>

            {/* Integration Icons */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-[#1F1F3B] rounded-full flex items-center justify-center">
                <img src="/integrations/raydium.svg" alt="Raydium" className="w-8 h-8" />
              </div>
            </div>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-[#1F1F3B] rounded-full flex items-center justify-center">
                <img src="/integrations/solana.svg" alt="Solana" className="w-8 h-8" />
              </div>
            </div>
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
              <div className="w-16 h-16 bg-[#1F1F3B] rounded-full flex items-center justify-center">
                <img src="/integrations/birdeye.svg" alt="Birdeye" className="w-8 h-8" />
              </div>
            </div>
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-[#1F1F3B] rounded-full flex items-center justify-center">
                <img src="/integrations/jupiter.svg" alt="Jupiter" className="w-8 h-8" />
              </div>
            </div>
            <div className="absolute left-[15%] top-[15%] -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-[#1F1F3B] rounded-full flex items-center justify-center">
                <img src="/integrations/phantom.svg" alt="Phantom" className="w-8 h-8" />
              </div>
            </div>
            <div className="absolute right-[15%] top-[15%] translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-[#1F1F3B] rounded-full flex items-center justify-center">
                <img src="/integrations/dexscreener.svg" alt="DexScreener" className="w-8 h-8" />
              </div>
            </div>
            <div className="absolute right-[15%] bottom-[15%] translate-x-1/2 translate-y-1/2">
              <div className="w-16 h-16 bg-[#1F1F3B] rounded-full flex items-center justify-center">
                <img src="/integrations/tensor.svg" alt="Tensor" className="w-8 h-8" />
              </div>
            </div>
            <div className="absolute left-[15%] bottom-[15%] -translate-x-1/2 translate-y-1/2">
              <div className="w-16 h-16 bg-[#1F1F3B] rounded-full flex items-center justify-center">
                <img src="/integrations/pumpfun.svg" alt="Pump.fun" className="w-8 h-8" />
              </div>
            </div>

            {/* Animated Dot */}
            <div className="absolute right-[30%] bottom-[20%] w-2 h-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute inset-0 animate-ping bg-white rounded-full"></div>
              <div className="absolute top-1/2 left-full h-px w-16 bg-gradient-to-r from-white to-transparent ml-2"></div>
            </div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-20"></div>
          <div className="absolute left-0 top-1/2 w-[800px] h-[600px] bg-[#0051FF]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute right-0 top-1/2 w-[800px] h-[600px] bg-[#7A3EF8]/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </section>
  )
}

export default Features
