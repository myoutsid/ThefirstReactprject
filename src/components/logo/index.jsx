/**
 * Created by 9413 on 2018/10/31.
 */
import React, {Component} from 'react';
import logo from './logo.png';

import './index.less';

class Logo extends Component {
  render () {
    return (
      <div className="logo-container">
        <img className="logo-img" src={logo} alt="logo"/>
      </div>
    )
  }
}

export default Logo;