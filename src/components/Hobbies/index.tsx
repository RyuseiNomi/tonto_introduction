import React from 'react';
import { GiConsoleController, GiBattleGear } from 'react-icons/gi';
import { MdLibraryMusic, MdLocalCafe } from 'react-icons/md';
import { Row, Col } from 'antd';
import './index.css';
import { Hobby } from 'commonData';

type Props = {
  hobbies: Hobby[];
  language: string;
};

type WrapperProps = {
  title: string;
}

function Hobbies(props: Props) {

  const { hobbies, language } = props;

  return (
    <div className="hobbies">
      <Row>
        { hobbies.map( (hobby, index) => {
          const { title, description } = hobby;
          return (
            <Col className="hobby" xs={24} sm={12} md={12} lg={12} >
              <IconWrapper title={title.jp} />
              <p className="hobby-title">{language === "jp" ? title.jp : title.en}</p>
              <p className="hobby-description">{language === "jp" ? description.jp : description.en}</p>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

// 趣味ごとにアイコンを出し分けるためのラッパー
// 現状は日本語タイトルを基に判定をしている
function IconWrapper(props: WrapperProps) {

  const { title } = props;

  if (title === "マリオカート8DX") {
    return (
      <GiConsoleController size="8em" className="hobby-icon" />
    );
  } else if (title === "ポケモン") {
    return (
      <GiBattleGear size="8em" className="hobby-icon" />
    );
  } else if (title === "EUROBEAT") {
    return (
      <MdLibraryMusic size="8em" className="hobby-icon" />
    );
  } else if (title === "コーヒー") {
    return (
      <MdLocalCafe size="8em" className="hobby-icon" />
    );
  } else {
    // どの趣味にも当てはまらなかった場合にはコーヒーアイコンを返す
    return (
      <MdLocalCafe size="8em" className="hobby-icon" />
    );
  }
}

export default Hobbies;
