import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { companyInfo, promises, siteConfig } from '@/data'

export const metadata: Metadata = {
  title: `关于我们_${siteConfig.name}`,
  description: `${companyInfo.name}专注新房开荒、深度保洁、甲醛治理多年，服务超5000户家庭，好评率99%。`,
  keywords: '保洁公司,家政服务,新房开荒,深度保洁,甲醛治理',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">关于我们</h1>
            <p className="text-xl text-green-100">专业、诚信、品质</p>
          </div>
        </section>

        {/* Company Intro */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-text-primary mb-6">公司简介</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {companyInfo.description}
                </p>
                <p className="text-text-secondary leading-relaxed">
                  我们秉承"专业、诚信、品质"的服务理念，为客户提供高品质的居家服务。所有服务人员均经过专业培训，持证上岗，使用环保清洁材料，确保服务过程安全无害。
                </p>
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-6xl">🏢</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 lg:py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {companyInfo.advantages.map((adv, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold mb-2">{adv.value}</div>
                  <div className="text-green-100">{adv.title}</div>
                  <div className="text-sm text-green-200 mt-1">{adv.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">我们的优势</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '👥', title: '专业团队', desc: '全员培训上岗' },
                { icon: '⚡', title: '高效服务', desc: '准时到达不拖延' },
                { icon: '🌿', title: '环保材料', desc: '安全无害放心' },
                { icon: '🛡️', title: '保障体系', desc: '完善售后服务' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">资质证书</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {companyInfo.certificates.map((cert, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="aspect-[3/4] bg-gray-100 rounded mb-3 flex items-center justify-center">
                    <span className="text-4xl">📜</span>
                  </div>
                  <p className="text-sm text-text-primary font-medium">{cert.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promises */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">服务承诺</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {promises.map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-sm flex items-start gap-4">
                  <span className="text-primary text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold mb-4">联系我们</h3>
            <p className="text-green-100 mb-6">期待为您服务</p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors"
            >
              立即预约
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
