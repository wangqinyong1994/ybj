'use client'

import { useState } from 'react'
import { siteConfig } from '@/data'

export default function FloatingButtons() {
  const [showPhone, setShowPhone] = useState(false)
  const [showWechat, setShowWechat] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* Phone Button */}
      <div className="relative">
        {showPhone && (
          <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg p-4 min-w-[160px]">
            <p className="text-sm text-text-secondary mb-1">服务热线</p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-lg font-bold text-primary hover:text-primary-dark"
            >
              {siteConfig.phone}
            </a>
          </div>
        )}
        <button
          className="w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          onMouseEnter={() => setShowPhone(true)}
          onMouseLeave={() => setShowPhone(false)}
          onClick={() => window.location.href = `tel:${siteConfig.phone}`}
          aria-label="电话咨询"
        >
          <span className="text-xl">📞</span>
        </button>
      </div>

      {/* WeChat Button */}
      <div className="relative">
        {showWechat && (
          <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg p-4">
            <p className="text-sm text-text-secondary mb-2 text-center">微信扫码咨询</p>
            <div className="w-32 h-32 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-4xl">📱</span>
            </div>
          </div>
        )}
        <button
          className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          onMouseEnter={() => setShowWechat(true)}
          onMouseLeave={() => setShowWechat(false)}
          aria-label="微信咨询"
        >
          <span className="text-xl">💬</span>
        </button>
      </div>
    </div>
  )
}
