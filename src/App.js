import React, { Component } from 'react';
import './App.css';
import { Menu, Layout, Row, Col, Button, Divider, Table, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Footer } = Layout;


class App extends Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="/">Action 一 {record.name}</a>
          <Divider type="vertical" />
          <a href="/">Delete</a>
          <Divider type="vertical" />
          <a href="/" className="ant-dropdown-link">
            More actions <Icon type="down" />
          </a>
        </span>
      ),
    }];
    const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }];
    return (
      <div className="App">
        <Layout>
          
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="mail">
                <Icon type="mail" />Navigation One
              </Menu.Item>
              <Menu.Item key="app" disabled>
                <Icon type="appstore" />Navigation Two
              </Menu.Item>
              <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
              </Menu.Item>
            </Menu>
          
          
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">
                  <h3>Ant Design</h3>
                  <Button type="primary">Primary</Button>
                  <Divider />
                  <Button>Default</Button>
                  <Divider />
                  <Button type="dashed">Dashed</Button>
                  <Divider />
                  <Button type="danger">Danger, Will Robinson</Button>
                </div>
              </Col>
              <Col className="gutter-row" span={18}>
                <div className="gutter-box">
                  <h1>Customer information</h1>
                  <Table columns={columns} dataSource={data} />
                </div>
              </Col>
            </Row>
          
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
