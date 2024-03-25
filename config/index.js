export default {
  testing: {
    baseUrl: 'http://localhost:8888/manage-api/v1' // 测试接口域名
  },
  development: {
    baseUrl: '/manage-api/v1' // 测试接口域名
  },
  release: {
    baseUrl: '/manage-api/v1' // 正式接口域名
  }
}