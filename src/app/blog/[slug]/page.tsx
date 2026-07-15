import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { blogs, siteConfig } from '@/data'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const blog = blogs.find((b) => b.slug === slug)
  
  if (!blog) {
    return { title: '文章未找到' }
  }

  return {
    title: `${blog.title}_${siteConfig.name}`,
    description: blog.summary,
    keywords: `${blog.categoryName},保洁知识,${siteConfig.name}`,
  }
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params
  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) {
    notFound()
  }

  // Get related blogs (same category, excluding current)
  const relatedBlogs = blogs
    .filter((b) => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3)

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <Link href="/" className="hover:text-primary">首页</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary">保洁知识</Link>
              <span>/</span>
              <Link href={`/blog?category=${blog.category}`} className="hover:text-primary">
                {blog.categoryName}
              </Link>
            </div>
          </div>
        </div>

        {/* Article */}
        <article className="py-12 lg:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <header className="mb-8 pb-8 border-b">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded">
                  {blog.categoryName}
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                {blog.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-text-secondary">
                <span>{blog.date}</span>
                <span>阅读 {blog.views}</span>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-text-secondary leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br />').replace(/## /g, '<h2 class="text-2xl font-bold text-text-primary mt-8 mb-4">').replace(/### /g, '<h3 class="text-xl font-bold text-text-primary mt-6 mb-3">').replace(/- \*\*/g, '<li class="mt-2"><strong>').replace(/\*\*/g, '</strong>').replace(/\n\n/g, '</p><p class="mb-4">').replace(/<li/g, '</p><ul class="list-disc pl-6 mb-4"><li').replace(/<\/li>\n/g, '</li></ul><p class="mb-4">').replace(/\|/g, ' | ') }}
              />
            </div>

            {/* Tags */}
            <div className="mt-8 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-text-secondary">相关标签：</span>
                <span className="bg-gray-100 text-text-primary text-sm px-3 py-1 rounded hover:bg-gray-200 cursor-pointer">
                  {blog.categoryName}
                </span>
                <span className="bg-gray-100 text-text-primary text-sm px-3 py-1 rounded hover:bg-gray-200 cursor-pointer">
                  保洁知识
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <section className="py-12 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-bold text-text-primary mb-6">相关文章</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {relatedBlogs.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.slug}`}
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-medium text-text-primary mb-2 line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-text-secondary">{related.date}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-12 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold mb-4">需要专业服务？</h3>
            <p className="text-green-100 mb-6">
              我们提供专业的新房开荒、深度保洁、甲醛治理服务，免费上门勘察报价！
            </p>
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
