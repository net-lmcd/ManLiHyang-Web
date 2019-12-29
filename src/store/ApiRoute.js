import axios from 'axios'


export class ApiRoute {
  constructor(object) {
    this.url = object.url || null
    this.path = object.path || ''
    this.method = object.method || 'get'
    this.params = object.params || {}
    this.data = object.data || {}
    this.model = object.model
    this.headers = object.headers || {}
    this.responseType = object.responseType || null
  }

  asURLRequest() {
    let CancelToken = axios.CancelToken
    let options = {
      method: this.method,
      url: this.url ? this.url : `${process.env.REACT_APP_URL}${this.path}`,
      params: this.params,
      data: this.data,
      timeout: 20000,
      headers: this.headers,
      responseType : this.responseType,
      cancel: new CancelToken((c) => {
        this.cancel = c
      })
    }
    console.log(options)
    console.log('[Request]: ' + JSON.stringify(this, null, 2))
    return axios(options)
  }

  async request() {
    console.log('-----------------------------------------------------')
    try {
      const response = await this.asURLRequest()
      return console.log('response',response)
    }
    catch (error) {
      if (error.response && error.response.status === 401) { // unAuthorized
        console.log('401 error',error)
      }
      throw error
    }
  }
}



// const successHandler = (model, response) => {
//   let ret
//   const ResponseModel = models[model]
//   try {
//     if (ResponseModel) {
//       ret = {status: response.status, result: new ResponseModel(response.data)}
//       console.log(response.data)
//     }
//     else {
//       console.log('[Response Data]: ')
//       console.log(response.status, response.data)
//       ret = {status: response.status, result: response.data}
//     }
//   }
//   catch (parseError) {
//     console.log('[ParseError]: ' + parseError)
//     console.log(response.data)
//   }
//   console.log('-----------------------------------------------------')
//   return ret
// }
//
// const errorHandler = (err) => {
//   let ret
//   try {
//     console.log('[Error]: ' + JSON.stringify(err.response.data, null, 2))
//     ret = new Error(err.response.status, err.response.data)
//   }
//   catch (parseError) {
//     console.log('[ParseError]: ' + err)
//     ret = {status: 400, errorMessage: err}
//   }
//   console.log('-----------------------------------------------------')
//
//   return ret
// }


