/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = () => {
    const env = {
        API_USER: process.env.API_USER,
        API_PWD: process.env.API_PWD,
    }

    return {
        env,
        nextConfig,
    }
}
