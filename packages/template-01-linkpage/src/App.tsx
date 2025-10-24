import React from 'react'
import Hero from '@/components/Hero'
import { siteConfig } from '@/content/site.config'

export default function App() {
  React.useEffect(() => {
    document.title = siteConfig.seo.title
    const m = document.querySelector('meta[name="description"]') ?? (() => {
      const el = document.createElement('meta'); el.setAttribute('name','description'); document.head.appendChild(el); return el
    })()
    m.setAttribute('content', siteConfig.seo.description)
  }, [])
  return <main className="min-h-screen"><Hero /></main>
}

