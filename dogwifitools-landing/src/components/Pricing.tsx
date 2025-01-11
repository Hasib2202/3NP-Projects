import { useState } from 'react'

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-[#1F1F3B]/50 backdrop-blur-sm rounded-2xl overflow-hidden">
      <button 
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        <svg 
          className={`w-6 h-6 text-white/60 transition-transform ${isOpen ? 'rotate-45' : ''}`} 
          viewBox="0 0 24 24" 
          fill="none"
        >
          <path d="M12 6L12 18M18 12L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-white/60">
          {answer}
        </div>
      )}
    </div>
  )
}

const Pricing = () => {
  const faqs = [
    {
      question: "What is DogWifTools?",
      answer: "DogWifTools is a comprehensive suite of tools designed for Solana token development and management. It includes features like bundling, volume management, comment automation, and more to help you launch and maintain successful tokens."
    },
    {
      question: "How can I get started with DogWifTools?",
      answer: "Getting started is easy! Simply purchase a lifetime license, join our Discord community, and you'll receive immediate access to all our tools. We provide detailed documentation and community support to help you get up and running quickly."
    },
    {
      question: "What operating system does DogWifTools support?",
      answer: "DogWifTools is compatible with Windows, macOS, and Linux operating systems. Our tools are built with cross-platform compatibility in mind to ensure a seamless experience regardless of your preferred OS."
    }
  ]

  return (
    <section id="pricing" className="min-h-screen py-32 relative">
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
        {/* App Icon and Title */}
        

        {/* Pricing Card */}
        <div className="max-w-[440px] mx-auto">
          <div className="bg-[#1F1F3B]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/[0.05]">
            {/* Card Header */}
            <div className="text-center mb-8">
              <div className="text-sm text-white/60 mb-4">DogWifiTools 1.0</div>
              <div className="text-[56px] font-medium leading-none mb-4">15 SOL</div>
              <div className="inline-block bg-[#2A2A45] rounded-full px-4 py-1 text-sm">
                Lifetime
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                </svg>
                <span>Bundler</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                </svg>
                <span>Volume Tools</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                </svg>
                <span>Comment Bot</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                </svg>
                <span>Bump It</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                </svg>
                <span>+ Much More</span>
              </div>
            </div>

            {/* Purchase Button */}
            <a
              href="#"
              className="block w-full bg-white/10 hover:bg-white/20 text-center py-3 rounded-xl transition-colors"
            >
              <span className="mr-2">Purchase Today</span>
              <span className="text-white/60">→</span>
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-32">
          {/* Discord Button */}
          <div className="flex justify-center mb-16">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#1F1F3B] hover:bg-[#2A2A45] rounded-full px-6 py-2 transition-colors"
            >
              <span className="text-base font-medium">Join The Discord</span>
              <span className="text-xs">→</span>
            </a>
          </div>

          {/* FAQ Title */}
          <div className="text-center mb-16">
            <h2 className="text-[56px] leading-[1.1] font-medium tracking-[-0.02em]">
              Frequently <span className="text-white/40">asked</span>
              <br />
              <span className="text-white/40">questions</span>
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="max-w-[800px] mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="mt-32 text-center">
          {/* App Icon */}
          <div className="mb-16">
            <img 
              src="https://framerusercontent.com/images/wMt5OWXO8hocHErDwq14YWPnL4.png?scale-down-to=512" 
              alt="DogWifiTools App" 
              className="w-32 h-32 mx-auto rounded-[28px] shadow-2xl"
            />
          </div>

          {/* Heading */}
          <h2 className="text-[56px] leading-[1.1] font-medium tracking-[-0.02em] mb-8">
            Elevate your <span className="text-white/40">launches to</span>
            <br />
            <span className="text-white/40">the next level</span>
          </h2>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl hover:bg-white/90 transition-colors"
            >
              <span className="font-medium">Purchase Today</span>
              <span className="text-black/60">→</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-xl hover:bg-white/[0.15] transition-colors"
            >
              <span>Watch Video</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="absolute left-0 top-1/2 w-[800px] h-[600px] bg-[#0051FF]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute right-0 top-1/2 w-[800px] h-[600px] bg-[#7A3EF8]/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </section>
  )
}

export default Pricing
