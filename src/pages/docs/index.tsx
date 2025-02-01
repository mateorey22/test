import Layout from '../../components/Layout'
import Link from 'next/link'

const sections = [
  {
    title: 'Getting Started',
    items: [
      { name: 'Installation', href: '/docs/installation' },
      { name: 'Quick Start', href: '/docs/quick-start' },
      { name: 'Basic Concepts', href: '/docs/concepts' },
    ],
  },
  {
    title: 'Core Features',
    items: [
      { name: 'Document Processing', href: '/docs/document-processing' },
      { name: 'AI Capabilities', href: '/docs/ai-capabilities' },
      { name: 'System Architecture', href: '/docs/architecture' },
    ],
  },
  {
    title: 'Integration',
    items: [
      { name: 'API Reference', href: '/docs/api-reference' },
      { name: 'Security', href: '/docs/security' },
      { name: 'Performance', href: '/docs/performance' },
    ],
  },
]

export default function Documentation() {
  return (
    <Layout title="Documentation - Doc2AI">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Documentation</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Learn how to integrate and use Doc2AI in your projects.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {sections.map((section) => (
              <div key={section.title} className="flex flex-col">
                <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                <ul role="list" className="mt-4 space-y-3">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
} 