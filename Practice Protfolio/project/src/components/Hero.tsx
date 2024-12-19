import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Jane Smith
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Developer & Software Engineer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              I craft beautiful, user-friendly applications with modern technologies.
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <SocialLink href="https://github.com" icon={<Github />} label="GitHub" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="mailto:jane@example.com" icon={<Mail />} label="Email" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mt-12 md:mt-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-3xl opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=500"
                alt="Jane Smith"
                className="relative rounded-full w-64 h-64 md:w-96 md:h-96 object-cover mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}