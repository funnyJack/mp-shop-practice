const { request } = require("../utils/request")
const {baseUrl,banner,goods,hotSearch,search} = require("../api/base")

function getBanner(data){
  return request(baseUrl+banner,"GET",data)
}

function getGoods(data){
  return request(baseUrl + goods,"GET",data)
}

/**
 * hot search keywords
 */
function getHotSearch(data){
  return request(baseUrl + hotSearch,"GET",data)
}

/**
* search 
*/
function getSearch(data){
  return request(baseUrl + search,"GET",data)
}

module.exports = {
  getBanner,
  getGoods,
  getHotSearch,
  getSearch
}