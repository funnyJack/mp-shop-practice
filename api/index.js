const { request } = require("../utils/request")
const {baseUrl,banner} = require("../api/base")

function getBanner(data){
  return request(baseUrl+banner,"GET",data)
}

module.exports = {
  getBanner
}