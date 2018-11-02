/**
 * Created by 9413 on 2018/11/2.
 */
import React, {Component} from 'react';
import {Grid, List} from 'antd-mobile';

import PropTypes from 'prop-types';

class Headerselector extends Component {
  static propType = {
    setHeader: PropTypes.func.isRequired
  }

  state = {
    icon:null
  }
  setHeader = ({icon,text})=> {
    this.setState({
      icon
    })
    this.props.setHeader(text)
  }

  render () {
    const data = Array.from(new Array(20)).map((item, index) => ({
      //通过require将图片资源动态加载进来
      icon: require(`./avatars/头像${index + 1}.png`),
      text: `头像${index + 1}`,
    }));
    return (
      <List renderHeader={() => '请选择头像'}>
        <Grid data={data} columnNum={5} onClick={this.setHeader}/>
      </List>
    )
  }
}

export default Headerselector;