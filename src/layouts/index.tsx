import React from 'react';
import { Link } from 'umi';

import styles from './index.css';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

// {menuData.map(menu => (
//     <Menu.Item key={`/${menu.route}`}>
//       <Link to={menu.route}>{menu.name}</Link>
//     </Menu.Item>
//   ))
// }

function BasicLayout(props: any) {
  return (
    <Layout>
      <Header>
        <div className={styles.logo}>
          <Link to="/">王者荣耀资料库</Link>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <Link to="hero">英雄</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="item">局内道具</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="summoner">召唤师技能</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Umi 入门教程 Created by xiaohuoni
      </Footer>
    </Layout>
  );
}

export default BasicLayout;
