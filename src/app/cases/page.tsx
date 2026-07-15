'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { cases, services, siteConfig } from '@/data'

export default function CasesPage() {
  const [selectedType, setSelectedType] = useState('all')
  const [selectedArea, setSelectedArea] = useState('all')
  const [selectedCase, setSelectedCase] = useState<typeof cases[0] | null>(null)

  const filteredCases = cases.filter((c) => {
    if (selectedType !== 'all' && c.type !== selectedType) return false
    if (selectedArea !== 'all') {
      if (selectedArea === 'small' && c.area >= 90) return false
      if (selectedArea === 'medium' && (c.area < 90 || c.area >= 120)) return false
      if (selectedArea === 'large' && (c.area < 120 || c.area >= 150)) return false
      if (selectedArea === 'xlarge' && c.area < 150) return false
    }
    return true
  })

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">服务案例</h1>
            <p className="text-xl text-green-100">真实案例，品质见证</p>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-white border-b sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-4">
              {/* Service Type Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-secondary">服务类型：</span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedType('all')}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedType === 'all'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-text-primary hover:bg-gray-200'
                    }`}
                  >
                    全部
                  </button>
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedType(s.id)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedType === s.id
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-text-primary hover:bg-gray-200'
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-secondary">面积范围：</span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'all', label: '全部' },
                    { id: 'small', label: '<90㎡' },
                    { id: 'medium', label: '90-120㎡' },
                    { id: 'large', label: '120-150㎡' },
                    { id: 'xlarge', label: '>150㎡' },
                  ].map((a) => (
                    <button
                      key={a.id}
                      onClick={() => setSelectedArea(a.id)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedArea === a.id
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-text-primary hover:bg-gray-200'
                      }`}
                    >
                      {a.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Tabs */}
            <div className="flex overflow-x-auto gap-4 mb-8 pb-2">
              {[
                { id: 'all', name: '全部' },
                ...services.map((s) => ({ id: s.id, name: s.name })),
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedType(cat.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedType === cat.id
                      ? 'bg-primary text-white'
                      : 'bg-white text-text-primary hover:bg-gray-50'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Cases */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedCase(item)}
                >
                  <div className="grid grid-cols-2">
                    <div className="aspect-square bg-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-3xl block mb-2">📷</span>
                        <span className="text-xs text-text-secondary">清洁前</span>
                      </div>
                    </div>
                    <div className="aspect-square bg-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-3xl block mb-2">✨</span>
                        <span className="text-xs text-text-secondary">清洁后</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {item.typeName}
                      </span>
                      <span className="text-xs text-text-secondary">{item.date}</span>
                    </div>
                    <h3 className="font-medium text-text-primary mb-1">{item.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-text-secondary">
                      <span>{item.area}㎡</span>
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCases.length === 0 && (
              <div className="text-center py-12 text-text-secondary">
                暂无符合条件的案例
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold mb-4">需要专业服务？</h3>
            <p className="text-green-100 mb-6">免费上门勘察，出具详细报价单后再确认服务</p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors"
            >
              📞 {siteConfig.phone}
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />

      {/* Case Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSelectedCase(null)}
          />
          <div className="relative bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
            >
              ✕
            </button>

            <div className="p-6">
              {/* Images */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl block mb-2">📷</span>
                    <span className="text-sm text-text-secondary">清洁前</span>
                  </div>
                </div>
                <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl block mb-2">✨</span>
                    <span className="text-sm text-text-secondary">清洁后</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-4">
                <div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {selectedCase.typeName}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-text-primary">{selectedCase.title}</h2>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-text-secondary">项目地址：</span>
                    <span className="text-text-primary">{selectedCase.location}</span>
                  </div>
                  <div>
                    <span className="text-text-secondary">房屋面积：</span>
                    <span className="text-text-primary">{selectedCase.area}㎡</span>
                  </div>
                  <div>
                    <span className="text-text-secondary">服务时间：</span>
                    <span className="text-text-primary">{selectedCase.date}</span>
                  </div>
                  <div>
                    <span className="text-text-secondary">服务时长：</span>
                    <span className="text-text-primary">{selectedCase.duration}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-text-primary mb-2">服务内容</h3>
                  <p className="text-sm text-text-secondary">{selectedCase.description}</p>
                </div>

                {selectedCase.review && (
                  <div className="bg-gray-50 rounded p-4">
                    <p className="text-sm text-text-secondary mb-2">客户评价：</p>
                    <p className="text-text-primary">"{selectedCase.review}"</p>
                  </div>
                )}

                <div className="pt-4 border-t">
                  <a
                    href={`/service/${selectedCase.type}`}
                    className="block w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-medium text-center transition-colors"
                  >
                    立即预约同款服务
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
