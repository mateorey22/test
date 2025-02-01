import { motion } from 'framer-motion'
import { 
  DocumentTextIcon, 
  CpuChipIcon, 
  ServerIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Document Processing',
    description: 'Multi-format support with intelligent parsing, hierarchical structure preservation, and advanced metadata extraction.',
    icon: DocumentTextIcon,
  },
  {
    name: 'AI Capabilities',
    description: 'ML-ready data output formats, NER, document classification, semantic analysis, and text summarization.',
    icon: CpuChipIcon,
  },
  {
    name: 'System Architecture',
    description: 'Modular component design with extensible plugin system, scalable processing engine, and asynchronous operations.',
    icon: ServerIcon,
  },
  {
    name: 'Security Measures',
    description: 'Comprehensive security with input validation, rate limiting, authentication, and secure file handling.',
    icon: ShieldCheckIcon,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Features
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Everything you need to process and transform documents into AI-ready data
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="ml-16">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 