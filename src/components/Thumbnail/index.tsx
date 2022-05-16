import React from 'react';
import './index.css';
import { Row } from 'antd';  
import { TwitterOutlined } from '@ant-design/icons';

type Props = {
  name: {
    jp: string;
    en: string;
  }
  twitter_url: string;
  language: string;
}

function Thumbnail(props: Props) {

  const { name, twitter_url, language } = props;

  return (
    <div className="thumbnail-image">
      <picture>
        <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/thumbnail.webp`} ></source>
        <img src={`${process.env.PUBLIC_URL}/thumbnail.jpeg`} alt="thumbnail" />
      </picture>
      <Row justify="center">
        <p>{language === "jp" ? name.jp : name.en}</p>
        <a href={twitter_url} rel="noopener noreferrer" target="_blank"><TwitterOutlined /></a>
      </Row>
    </div>
  );
}

export default Thumbnail;
