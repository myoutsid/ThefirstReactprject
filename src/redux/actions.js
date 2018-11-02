/*
  action creators模块：用来创建action对象的工厂函数模块
    - 同步action creator： 返回值是action对象
    - 异步action creator： 返回值是一个回调函数
 */

import {reqLogin, reqRegister, reqUpdateUserInfo} from '../api';
import {ERR_MSG, AUTH_SUCCESS, UPDATE_USER, RESET_USER} from './action-types';
//注册成功
export const authSuccess = user => ({type: AUTH_SUCCESS, data: user});
//注册失败
export const errMsg = msg => ({type: ERR_MSG, data: msg});
//更新成功
export const updateUser = user => ({type: UPDATE_USER, data: user});
//更新失败
export const resetUser = msg => ({type: RESET_USER, data: msg});

//注册的异步action
export const register =data => {
  const {username, password, rePassword, type} = data

  if (!username) {
    return errMsg({username, password, msg: '请输入用户名'});

  } else if (!password) {
    return errMsg({username, password, msg: '请输入密码'});

  } else if (password !== rePassword) {
    return errMsg({username, password, msg: '两次密码输入不一致，请重新输入'});

  } else if (!type) {
    return errMsg({username, password, msg: '请选择账号类型'});

  }

  //异步方法
  return dispatch => {

    reqRegister(data)
      .then(res => {
        const result = res.data
        if (result.code === 0) {
          dispatch(authSuccess(result.data));  // result.data响应信息中的用户信息

        } else {
          dispatch(errMsg({msg: result.msg, username: data.username, type: data.type}));
        }
      })
      .catch(err => {
        //  请求/注册 失败
        dispatch(errMsg({msg: '网络不稳定，请重新试试~', username: data.username, type: data.type}));

      })


  }


}

  export const updateUserInfo = data =>{
    const {header, post, company, salary, info} = data;
    if (!header) {
      return resetUser({msg: '请选择头像'});
    } else if (!post) {
      return resetUser({msg: '请输入招聘职位'});
    } else if (!company) {
      return resetUser({msg: '请输入公司名称'});
    } else if (!salary) {
      return resetUser({msg: '请输入薪资范围'});
    } else if (!info) {
      return resetUser({msg: '请输入公司简介'});
    }


    return dispatch=>{
      reqUpdateUserInfo(data)
        .then(res =>{
          if (result.code === 0) {
            //注册成功
            dispatch(updateUser(result.data));
          }else {
            dispatch(resetUser({msg: result.msg}));


          }
        })
        .catch(err=>{
          // 注册/请求 失败
          dispatch(resetUser({msg: '网络不稳定，请重新试试~'}));

    })

    }
  }



