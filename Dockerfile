# 使用 Node.js 14 镜像作为基础镜像
FROM node:18

# 设置工作目录
WORKDIR /app

# 将 package.json 和 package-lock.json 复制到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install

# 将所有文件复制到工作目录
COPY . .

# 构建 Next.js 应用
RUN npm run build

# 暴露 Next.js 应用的默认端口
EXPOSE 3000

# 运行 Next.js 应用
CMD ["npm", "start"]
