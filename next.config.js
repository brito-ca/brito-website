/** @type {import('next').NextConfig} */

const env = {
    API_USER: process.env.API_USER,
    API_PWD: process.env.API_PWD,
}

const nextConfig = {
    env,
    reactStrictMode: true,
}

module.exports = () => nextConfig
