import React from 'react';
import { Menu, Badge } from 'antd';
import { UploadOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/login" style={{ color: '#183a16', fontSize: 16 }}>Log In</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register" style={{ color: '#183a16', fontSize: 16 }}>Sign Up</a>
        </Menu.Item>
      </Menu>
    )
  }
  else if (user.userData && user.userData.role == 1) {
    return (
      <Menu mode={props.mode}>
        
        <Menu.Item>
          <a href="/2326774621865" style={{ color: '#183a16', fontSize: 16 }}>Orders</a>
        </Menu.Item> 
  
        <Menu.Item key="history">
          <a href="/history" style={{ color: '#183a16', fontSize: 16 }}>History</a>
        </Menu.Item>
  
        <Menu.Item key="upload">
          <a href="/product/upload" ><UploadOutlined style={{ color: '#183a16', fontSize: 30}}/></a>
        </Menu.Item>
  
        <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
          <Badge count={user.userData && user.userData.cart.length}>
            <a href="/user/cart" style={{ marginRight: -22 , color:'#667777'}}>
              <ShoppingCartOutlined style={{ color: '#183a16', fontSize: 30, marginBottom: 3 }}/>
            </a>
          </Badge>
        </Menu.Item>

        <Menu.Item key="logout">
          <a onClick={logoutHandler} style={{ color: 'red', fontSize: 16 }}>LogOut</a>
        </Menu.Item>
      </Menu>
    )
  }
  else {
    return (
      <Menu mode={props.mode}>

        <Menu.Item key="history">
          <a href="/history" style={{ color: '#183a16', fontSize: 16 }}>History</a>
        </Menu.Item>

        <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
          <Badge count={user.userData && user.userData.cart.length}>
            <a href="/user/cart" style={{ marginRight: -22 , color:'#667777'}}>
            <ShoppingCartOutlined style={{ color: '#183a16', fontSize: 30, marginBottom: 3 }}/>
            </a>
          </Badge>
        </Menu.Item>


        <Menu.Item key="logout">
          <a onClick={logoutHandler} style={{ color: 'red', fontSize: 16 }}>LogOut</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(RightMenu);