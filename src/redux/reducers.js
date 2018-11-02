/*
  reducers函数： 根据之前的状态和action来产生新的状态
 */

import {combineReducers} from 'redux';
import {ERR_MSG, AUTH_SUCCESS, RESET_USER, UPDATE_USER} from './action-types';
import getRedirectPath from '../utils'

 const initUserState = {
   username: '',
   type: '',
   msg: '',
   redirectTo: ''
 };


function user(preState = initUserState, action) {
  switch (action.type){
    case AUTH_SUCCESS :
      return {username: action.data.username, type: action.data.type, msg: '',
        redirectTo: getRedirectPath(action.data.type, action.data.header)}
    case ERR_MSG:
      // 在node中和浏览器端默认对象是不能使用... ，但是react脚手架项目，babel帮我让对象能够使用...
      return {...action.data};

  }

}

//如何暴露, 合并多个reducers函数
export default combineReducers({
  user
})