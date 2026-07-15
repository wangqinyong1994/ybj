import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import BookingForm from '@/components/BookingForm'
import { services, promises, serviceProcess, reviews, cases, siteConfig } from '@/data'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                🏠 让家焕然一新
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-green-100">
                专业新房开荒 · 深度保洁 · 甲醛治理
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors"
                >
                  立即预约
                </a>
                <Link
                  href="#services"
                  className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-colors"
                >
                  了解更多
                </Link>
              </div>
            </div>
          </div>
          {/* 波浪装饰 */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248,249,250)"/>
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">我们的服务</h2>
              <p className="text-text-secondary">专业团队，品质保障，让您省心放心</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{service.name}</h3>
                  <p className="text-text-secondary mb-4">{service.shortDesc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-text-secondary">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/service/${service.id}`}
                    className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                  >
                    了解详情
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">为什么选择我们</h2>
              <p className="text-text-secondary">专业、诚信、品质，是我们的服务承诺</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {promises.slice(0, 4).map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary">{item.icon}</span>
                  </div>
                  <h3 className="font-bold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">服务流程</h2>
              <p className="text-text-secondary">标准化流程，品质保障</p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-4">
              {serviceProcess.map((item, idx) => (
                <div key={idx} className="flex-1 text-center relative">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                  {idx < serviceProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-primary/30">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-primary/30 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Preview */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">真实案例</h2>
              <p className="text-text-secondary">品质看得见</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cases.slice(0, 4).map((item) => (
                <div key={item.id} className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <span className="text-4xl">📷</span>
                  </div>
                  <div className="p-4">
                    <p className="font-medium text-text-primary mb-1">{item.title}</p>
                    <p className="text-sm text-text-secondary">{item.typeName} · {item.area}㎡</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/cases"
                className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
              >
                查看更多案例
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">用户评价</h2>
              <p className="text-text-secondary">真实反馈，口碑见证</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {reviews.slice(0, 4).map((review) => (
                <div key={review.id} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{review.name[0]}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-text-primary">{review.name}</span>
                        <span className="text-xs text-text-secondary">{review.source}</span>
                      </div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-text-secondary text-sm">{review.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">快速预约</h2>
              <p className="text-text-secondary">留下您的信息，我们会尽快与您联系</p>
            </div>

            <BookingForm />
          </div>
        </section>

        {/* Contact Banner */}
        <section className="py-12 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">需要专业服务？</h3>
                <p className="text-green-100">免费上门勘察，出具详细报价单后再确认服务</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors text-center"
                >
                  📞 {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
