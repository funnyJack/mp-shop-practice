const { request } = require("../utils/request")
const {baseUrl,banner,goods,hotSearch,search,goodsDetails,cart,addCart,delCart,category} = require("../api/base")

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
/**
 * goods details
 */
function getGoodsDetails(data){
  return request(baseUrl + goodsDetails,"GET",data) 
}

/**
 * cart select
 */
function getCart(data){
  return request(baseUrl + cart,"GET",data) 
}

/**
* cart add
*/
function addGoodsCart(data){
  return request(baseUrl + addCart,"GET",data) 
}

/**
* cart del
*/
function delGoodsCart(data){
  return request(baseUrl + delCart,"GET",data) 
}

/**
 * category
 */
function getCategory(data){
  return request(baseUrl + category,"GET",data) 
}


module.exports = {
  getBanner,
  getGoods,
  getHotSearch,
  getSearch,
  getGoodsDetails,
  getCart,
  addGoodsCart,
  delGoodsCart,
  getCategory
}
