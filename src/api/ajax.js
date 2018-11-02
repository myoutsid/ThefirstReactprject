/**
 * Created by 9413 on 2018/11/1.
 */
import axios from 'axios';


export default function ajax(url,data,type='get'){

let querystring = '';

    if(data){
      Object.keys(data).forEach(key=>{
        //把每一个属性携带得值赋给value
        const value = data[key];

        querystring += key+'='+value+'&';

        querystring =  querystring.substring(0,querystring.length - 1);
      })
    }
    if(type.toUpperCase() === 'GET'){
      url += '?'+querystring

      return axios.get(url)
    }else {
    //发送post请求
      return axios.post(url,querystring, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      )

    }


}