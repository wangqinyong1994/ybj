import Link from 'next/link'
import { siteConfig, services } from '@/data'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🏠</span>
              <span className="font-bold text-lg">{siteConfig.name}</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              专业新房开荒、深度保洁、甲醛治理服务
            </p>
            <p className="text-gray-400 text-sm">
              让家焕然一新
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">服务项目</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/service/${service.id}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cases" className="text-gray-400 hover:text-white transition-colors text-sm">
                  服务案例
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  保洁知识
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <a href={`tel:${siteConfig.phone}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span>💬</span>
                <span className="text-gray-400 text-sm">扫码加微信</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>📍</span>
                <span className="text-gray-400 text-sm">{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2024 {siteConfig.name} 版权所有</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">
                隐私政策
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                服务条款
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
