/**
 * Created by 9413 on 2018/11/1.
 */

import ajax from './ajax'

//注册页面发送得请求
export const reqRegister = data => ajax('/register',data,'POST');

export const reqLogin = data =>ajax('/login',data,'POST');
//  请求更新用户数据请求
export const reqUpdateUserInfo = data => ajax('/update', data, 'POST');
