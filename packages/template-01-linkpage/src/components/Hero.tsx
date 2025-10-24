import React from 'react'
import { Button } from '@speedtech-templates/ui'
import { siteConfig } from '@/content/site.config'

export default function Hero() {
  const { hero } = siteConfig
  return (
    <section className="min-h-[60vh] grid place-items-center text-center p-6">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold">{hero.title}</h1>
        <p className="mt-3 opacity-80">{hero.subtitle}</p>
        <div className="grid gap-3 mt-6">
          {hero.links.map((l, i) => (
            <Button key={i} onClick={() => location.assign(l.href)}>{l.label}</Button>
          ))}
        </div>
      </div>
    </section>
  )
}
