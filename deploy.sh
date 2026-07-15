#!/bin/bash

# 部署到 Vercel 脚本
# 使用方法: ./deploy.sh

echo "================================"
echo "  优保洁网站 - Vercel 部署脚本"
echo "================================"
echo ""

# 确保 Node 18
source ~/.nvm/nvm.sh
nvm use 18

# 检查是否已登录
echo "检查 Vercel 登录状态..."
if ! vercel whoami &> /dev/null; then
    echo ""
    echo "尚未登录 Vercel，请先登录："
    echo ""
    vercel login
fi

echo ""
echo "开始部署..."
echo ""

# 部署到生产环境
vercel --prod

echo ""
echo "部署完成！"
