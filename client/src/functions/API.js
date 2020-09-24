const baseUrl = 'http://localhost:3001'

class API{
    static sendPost(endpoint, body){
      let payload = {...this.postData, body: JSON.stringify(body)}
      return this.handleResponse(fetch(baseUrl+'/'+endpoint, payload))
    }
  
    static sendSecure(auth, endpoint, body){
      let payload = {...this.postData, body: JSON.stringify(body)}
      payload.headers.auth = auth
      return this.handleResponse(fetch(baseUrl+'/'+endpoint, payload))
    }  
  
    static handleResponse(promise){
      return promise
        .then(response => {
            if(response.status === 500) throw Error('Server Error please try again')
            return response.json()
        })
        .then((body) => {
          console.log(body)
          if(body.error) throw Error(body.error)
          return body
        })
    }
  }
  
  API.postData = {
     method: "POST",
     headers:{
       accept: "application/json",
       "Content-type": "application/json",
     }
  }

  
  API.subscriptions = [];
  
  export default API;
