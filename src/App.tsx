import React from 'react';
import 'App.css';
import 'antd/dist/antd.min.css';
import { Row, Col, Layout } from 'antd';
import TitleBar from 'components/TitleBar'
import Thumbnail from 'components/Thumbnail'
import ProfileDescription from 'components/ProfileDescription'

function App() {

  const { Footer } = Layout;

  return (
    <div className="App">
      <TitleBar />
      <Row justify="center">
        <p className="profile-title">ABOUT ME</p>
      </Row>
      <Row>
        {/* TODO: タブレットサイズ以上の場合は横並びのレイアウトにする */}
        <Col xs={24} sm={24} md={24} lg={24} >
          <Thumbnail />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} >
          <ProfileDescription />
        </Col>
        <Layout>
          <Footer style={{ textAlign: 'center' }}>
            ©︎2022 <a href="https://twitter.com/home" rel="noopener noreferrer" target="_blank">@27ma4_ton10</a>
          </Footer>
      </Layout>
      </Row>
    </div>
  );
}

export default App;
