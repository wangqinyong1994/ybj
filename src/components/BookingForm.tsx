'use client'

import { useState } from 'react'
import { services, siteConfig } from '@/data'

interface BookingFormProps {
  defaultService?: string
  compact?: boolean
}

export default function BookingForm({ defaultService = '', compact = false }: BookingFormProps) {
  const [formData, setFormData] = useState({
    serviceType: defaultService,
    name: '',
    phone: '',
    address: '',
    area: '',
    date: '',
    remark: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // 模拟提交 - 实际项目中替换为真实的API调用
    // 这里可以将数据发送到邮箱或微信
    console.log('预约数据:', formData)

    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 1000))

    setSubmitting(false)
    setSubmitted(true)

    // 3秒后重置
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        serviceType: defaultService,
        name: '',
        phone: '',
        address: '',
        area: '',
        date: '',
        remark: '',
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-lg font-bold text-green-800 mb-2">预约成功！</h3>
        <p className="text-green-600 text-sm">
          我们的工作人员将在24小时内与您联系确认
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${compact ? '' : 'bg-white rounded-lg shadow-sm p-6'}`}>
      {!compact && <h3 className="text-lg font-bold text-text-primary mb-4">快速预约</h3>}

      <div className={`grid gap-4 ${compact ? '' : 'md:grid-cols-2'}`}>
        {/* 服务类型 */}
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">
            服务类型 <span className="text-red-500">*</span>
          </label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
          >
            <option value="">请选择服务类型</option>
            {services.map(service => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        {/* 姓名 */}
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">
            您的姓名 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="请输入姓名"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
          />
        </div>

        {/* 电话 */}
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">
            联系电话 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="请输入手机号"
            pattern="^1[3-9]\d{9}$"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
          />
        </div>

        {/* 地址 */}
        <div className={compact ? 'md:col-span-2' : ''}>
          <label className="block text-sm font-medium text-text-secondary mb-1">
            服务地址 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="请输入详细地址"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
          />
        </div>

        {/* 面积 */}
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">
            房屋面积
          </label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="请输入面积（㎡）"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
          />
        </div>

        {/* 预约时间 */}
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1">
            预约时间
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
          />
        </div>

        {/* 备注 */}
        <div className={compact ? 'md:col-span-2' : 'md:col-span-2'}>
          <label className="block text-sm font-medium text-text-secondary mb-1">
            备注说明
          </label>
          <textarea
            name="remark"
            value={formData.remark}
            onChange={handleChange}
            rows={3}
            placeholder="如有特殊需求请备注"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white py-3 rounded-lg font-medium transition-colors"
      >
        {submitting ? '提交中...' : '提交预约'}
      </button>

      <p className="text-xs text-text-secondary text-center">
        提交后，我们的工作人员将在24小时内联系您确认
      </p>
    </form>
  )
}
