import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import BookingForm from '@/components/BookingForm'
import { siteConfig } from '@/data'

export const metadata: Metadata = {
  title: `联系我们_在线预约_${siteConfig.name}`,
  description: `联系${siteConfig.name}，电话：${siteConfig.phone}，微信在线咨询，免费上门勘察报价。`,
  keywords: '联系方式,在线预约,保洁服务预约',
}

export default function ContactPage() {
  const faqs = [
    { q: '如何预约服务？', a: '您可以通过电话、微信或在线表单预约，我们的工作人员会在24小时内与您联系确认。' },
    { q: '服务范围是哪些区域？', a: '我们目前服务覆盖XX市及周边区域，具体可电话咨询。' },
    { q: '支持哪些支付方式？', a: '支持现金、微信、支付宝、银行转账等多种支付方式。' },
    { q: '对服务不满意怎么办？', a: '我们承诺7天内不满意免费返工，如有问题请及时联系我们处理。' },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">联系我们</h1>
            <p className="text-xl text-green-100">期待为您服务</p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-6">联系方式</h2>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary mb-1">服务热线</h3>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-primary text-xl font-bold hover:text-primary-dark"
                      >
                        {siteConfig.phone}
                      </a>
                      <p className="text-sm text-text-secondary mt-1">工作时间：{siteConfig.workTime}</p>
                    </div>
                  </div>

                  {/* WeChat */}
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary mb-1">微信咨询</h3>
                      <p className="text-text-secondary mb-2">扫码添加客服微信</p>
                      <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-3xl">📱</span>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary mb-1">公司地址</h3>
                      <p className="text-text-secondary">{siteConfig.address}</p>
                    </div>
                  </div>

                  {/* Work Time */}
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⏰</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary mb-1">营业时间</h3>
                      <p className="text-text-secondary">{siteConfig.workTime}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-6">在线预约</h2>
                <BookingForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-text-primary mb-6">公司位置</h2>
            <div className="aspect-[16/9] bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl block mb-4">🗺️</span>
                <p className="text-text-secondary">地图加载中...</p>
                <p className="text-sm text-text-secondary mt-2">{siteConfig.address}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">常见问题</h2>
            <div className="space-y-4">
              {faqs.map((item, idx) => (
                <details key={idx} className="bg-gray-50 rounded-lg group">
                  <summary className="p-4 cursor-pointer font-medium text-text-primary flex items-center justify-between">
                    <span>Q: {item.q}</span>
                    <svg
                      className="w-5 h-5 text-text-secondary group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-text-secondary">
                    <p className="pl-4 border-l-2 border-primary">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
