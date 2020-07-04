import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
              <a href="/" ><HomeOutlined style={{ color: '#183a16', fontSize: 30}} /></a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu