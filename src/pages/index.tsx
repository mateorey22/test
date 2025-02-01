import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Features from '../components/Features'

export default function Home() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Transform Documents into
                <span className="text-primary"> AI-Ready Data</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                An advanced document processing framework that converts various formats into structured, AI-ready data with emphasis on accuracy and format preservation.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#features"
                  className="rounded-md bg-primary px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary/90"
                >
                  Get Started
                </a>
                <a
                  href="/docs"
                  className="text-lg font-semibold leading-6 text-gray-900"
                >
                  Documentation <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <Features />

        {/* Technical Overview Section */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Built with Modern Technologies
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Powered by industry-leading technologies and best practices
              </p>
              <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="flex flex-col items-center">
                  <div className="text-primary text-lg font-semibold">Python 3.8+</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-primary text-lg font-semibold">PyTorch & TensorFlow</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-primary text-lg font-semibold">Hugging Face</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-primary text-lg font-semibold">spaCy NLP</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  )
} 