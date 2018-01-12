import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class ModuleApiProvider {
//   url: string = 'http://operation-api.dev.jnfresh.cn';
     url: string = 'http://operation-api.freshjn.com';

  constructor(public http: Http) {
  }

  //设置传递参数的格式
  getParams(params){
    let paramObj = new URLSearchParams();
    for(let key in params){
      paramObj.set(key,params[key]);//携带参数的设置方法
    }
    return paramObj;
  }

  get(endpoint: string, params?: any, options?: RequestOptions) {
    if (!options) {
      options = new RequestOptions();
    }
    if (params) {
      let p = new URLSearchParams();
      for (let k in params) {
        p.set(k, params[k]);
      }

      options.search = !options.search && p || options.search;
    }

    return this.http.get(this.url + endpoint, options);
  }

  post(endpoint: string, params: any) {
    let headers = new Headers({'X-freshjn-Authorization': localStorage.getItem('Token')});
    let options = new RequestOptions({headers:headers});
    let body = this.getParams(params);
    return this.http.post(this.url + endpoint, body, options);
  }

  put(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + endpoint, body, options);
  }

  delete(endpoint: string, options?: RequestOptions) {
    return this.http.delete(this.url + endpoint, options);
  }

  patch(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + endpoint, body, options);
  }
}
