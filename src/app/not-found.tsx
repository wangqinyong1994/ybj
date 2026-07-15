import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/data'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center bg-background">
        <div className="text-center px-4">
          <div className="text-8xl mb-6">🔍</div>
          <h1 className="text-4xl font-bold text-text-primary mb-4">页面未找到</h1>
          <p className="text-text-secondary mb-8">抱歉，您访问的页面不存在</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              返回首页
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="border border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-full font-medium transition-colors"
            >
              电话咨询
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
