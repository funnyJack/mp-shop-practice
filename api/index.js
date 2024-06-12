const { request } = require("../utils/request")
const {baseUrl,banner,goods} = require("../api/base")

function getBanner(data){
  return request(baseUrl+banner,"GET",data)
}

function getGoods(data){
  return request(baseUrl + goods,"GET",data)
}

module.exports = {
  getBanner,
  getGoods
}