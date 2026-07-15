import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { blogs, blogCategories, siteConfig } from '@/data'

export const metadata: Metadata = {
  title: `保洁知识_清洁技巧_${siteConfig.name}`,
  description: `专业保洁知识分享，新房开荒技巧、日常清洁方法、甲醛治理科普，让您轻松掌握清洁技巧。`,
  keywords: '保洁知识,清洁技巧,除甲醛知识,新房开荒,深度保洁',
}

export default function BlogPage() {
  const featuredBlog = blogs.find((b) => b.featured)
  const regularBlogs = blogs.filter((b) => !b.featured)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">保洁知识</h1>
            <p className="text-xl text-green-100">专业分享，让清洁更简单</p>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex overflow-x-auto gap-3">
              {blogCategories.map((cat) => (
                <button
                  key={cat.id}
                  className="px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-gray-100 text-text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured Blog */}
            {featuredBlog && (
              <div className="mb-12">
                <Link
                  href={`/blog/${featuredBlog.slug}`}
                  className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="aspect-video md:aspect-auto bg-gray-100 flex items-center justify-center">
                      <span className="text-6xl">📰</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-accent text-white text-xs px-2 py-1 rounded">置顶</span>
                        <span className="text-xs text-text-secondary">{featuredBlog.categoryName}</span>
                      </div>
                      <h2 className="text-xl font-bold text-text-primary mb-3">{featuredBlog.title}</h2>
                      <p className="text-text-secondary mb-4 line-clamp-3">{featuredBlog.summary}</p>
                      <div className="flex items-center gap-4 text-sm text-text-secondary">
                        <span>{featuredBlog.date}</span>
                        <span>阅读 {featuredBlog.views}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Blog List */}
            <div className="space-y-6">
              {regularBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="block bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-6">
                    <div className="hidden sm:block w-48 h-32 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                      <span className="text-4xl">📰</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {blog.categoryName}
                        </span>
                        <span className="text-xs text-text-secondary">{blog.date}</span>
                        <span className="text-xs text-text-secondary">阅读 {blog.views}</span>
                      </div>
                      <h3 className="text-lg font-bold text-text-primary mb-2 hover:text-primary transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-text-secondary line-clamp-2">{blog.summary}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full transition-colors">
                加载更多
              </button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold mb-4">需要专业服务？</h3>
            <p className="text-green-100 mb-6">我们提供专业的保洁服务，免费上门勘察报价！</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors"
              >
                立即咨询
              </a>
              <Link
                href="/contact"
                className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-colors"
              >
                在线预约
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
