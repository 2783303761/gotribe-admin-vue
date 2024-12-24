import request from '@/utils/request'

export function getProductList(params) {
  return request({
    url: '/api/product',
    method: 'get',
    params
  })
}

export function createProduct(data) {
  return request({
    url: '/api/product',
    method: 'post',
    data
  })
}

export function updateProduct(Id, data) {
  return request({
    url: '/api/product/' + Id,
    method: 'patch',
    data
  })
}

export function batchDeleteProduct(data) {
  return request({
    url: '/api/product',
    method: 'delete',
    data
  })
}

export function getProductDetail(Id) {
  return request({
    url: '/api/product/' + Id,
    method: 'get'
  })
}
