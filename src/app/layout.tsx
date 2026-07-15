import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '新房开荒_深度保洁_甲醛治理_优保洁居家服务',
  description: '专业提供新房开荒、深度保洁、甲醛治理服务，品质保障，价格透明，预约热线：400-XXX-XXXX',
  keywords: '新房开荒,深度保洁,甲醛治理,保洁公司,家政服务',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
