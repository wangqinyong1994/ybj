import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import BookingForm from '@/components/BookingForm'
import { services, siteConfig } from '@/data'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.id === slug)
  
  if (!service) {
    return {
      title: '服务未找到',
    }
  }

  return {
    title: `${service.name}_专业服务_${siteConfig.name}`,
    description: `${service.description} 预约热线：${siteConfig.phone}`,
    keywords: `${service.name},居家服务,保洁服务`,
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = services.find((s) => s.id === slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="text-6xl mb-4">{service.icon}</div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{service.name}</h1>
              <p className="text-xl text-green-100 mb-8">{service.shortDesc}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors"
                >
                  立即咨询
                </a>
                <a
                  href="#booking"
                  className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-colors"
                >
                  在线预约
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Anchor Nav */}
        <nav className="sticky top-16 bg-white border-b shadow-sm z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto py-3 space-x-6 text-sm">
              <a href="#intro" className="text-text-primary hover:text-primary whitespace-nowrap">服务介绍</a>
              <a href="#process" className="text-text-primary hover:text-primary whitespace-nowrap">服务流程</a>
              <a href="#features" className="text-text-primary hover:text-primary whitespace-nowrap">服务内容</a>
              <a href="#promise" className="text-text-primary hover:text-primary whitespace-nowrap">服务承诺</a>
              <a href="#cases" className="text-text-primary hover:text-primary whitespace-nowrap">案例展示</a>
              <a href="#reviews" className="text-text-primary hover:text-primary whitespace-nowrap">用户评价</a>
              <a href="#faq" className="text-text-primary hover:text-primary whitespace-nowrap">常见问题</a>
            </div>
          </div>
        </nav>

        {/* Service Intro */}
        <section id="intro" className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-text-primary mb-6">服务介绍</h2>
                <p className="text-text-secondary mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-4">
                  <p className="font-medium text-text-primary">服务内容：</p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-text-secondary">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-6xl">{service.icon}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section id="process" className="py-12 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">服务流程</h2>
            <div className="grid sm:grid-cols-5 gap-6">
              {service.process.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-text-secondary">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section id="features" className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">服务范围</h2>
            <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {['客厅', '卧室', '厨房', '卫生间', '阳台', '其他区域'].map((area) => (
                <div key={area} className="bg-gray-50 rounded-lg p-4 text-center">
                  <span className="text-2xl mb-2 block">
                    {area === '客厅' && '🛋️'}
                    {area === '卧室' && '🛏️'}
                    {area === '厨房' && '🍳'}
                    {area === '卫生间' && '🚿'}
                    {area === '阳台' && '🌿'}
                    {area === '其他区域' && '🏠'}
                  </span>
                  <p className="font-medium text-text-primary">{area}</p>
                  <p className="text-sm text-text-secondary">清洁</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Promise */}
        <section id="promise" className="py-12 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">服务承诺</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: '7天无理由返工', desc: '服务不满意7天内免费返工' },
                { title: '价格透明无隐形消费', desc: '明码标价，绝无额外收费' },
                { title: '专业保险保障', desc: '服务过程有保险，放心无忧' },
                { title: '环保材料无害', desc: '使用环保清洁剂，对家人无害' },
                { title: '标准化流程', desc: '专业培训，标准化作业流程' },
                { title: '质量验收合格再付款', desc: '验收满意后付款，无后顾之忧' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-sm">
                  <span className="text-primary text-xl">✓</span>
                  <h3 className="font-bold text-text-primary mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">服务视频</h2>
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">▶</span>
                </div>
                <p>{service.name}服务流程演示</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cases */}
        <section id="cases" className="py-12 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">案例展示</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="grid grid-cols-2">
                    <div className="aspect-square bg-gray-100 flex items-center justify-center text-sm text-text-secondary">
                      清洁前
                    </div>
                    <div className="aspect-square bg-gray-200 flex items-center justify-center text-sm text-text-secondary">
                      清洁后
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-medium text-text-primary">XX小区 {100 + i * 20}㎡</p>
                    <p className="text-sm text-text-secondary">{service.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-12 lg:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">用户评价</h2>
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{'张李王陈'[i]}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-text-primary">{'张先生李女士'[i]}</span>
                        <span className="text-xs text-text-secondary">微信客户反馈</span>
                      </div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, j) => (
                          <span key={j} className="text-yellow-400">★</span>
                        ))}
                      </div>
                      <p className="text-text-secondary text-sm">
                        "{service.name}效果非常满意，师傅很专业，服务态度也很好，强烈推荐！"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-12 lg:py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">常见问题</h2>
            <div className="space-y-4">
              {service.faq.map((item, idx) => (
                <details key={idx} className="bg-white rounded-lg shadow-sm group">
                  <summary className="p-4 cursor-pointer font-medium text-text-primary flex items-center justify-between">
                    <span>Q: {item.q}</span>
                    <svg className="w-5 h-5 text-text-secondary group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Price Notice */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-text-primary mb-4">价格说明</h3>
              <p className="text-text-secondary mb-6">
                根据房屋面积、装修程度、清洁项目综合定价<br />
                免费上门勘察，出具详细报价单后再确认服务
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium transition-colors"
                >
                  立即咨询
                </a>
                <a
                  href="#booking"
                  className="border border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-full font-medium transition-colors"
                >
                  在线预约
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section id="booking" className="py-12 lg:py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-text-primary mb-4">在线预约</h2>
              <p className="text-text-secondary">填写以下信息，我们会尽快与您联系</p>
            </div>
            <BookingForm defaultService={slug} />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
