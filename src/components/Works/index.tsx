import React from 'react';
import './index.css';
import { Work } from 'commonData';

type Props = {
  works: Work[];
  language: string;
}

function Works(props: Props) {

  const { works, language } = props;

  return (
    <div className="works">
      <p className="work-title">WORKS</p>
      <div className="work-area">
        {works.map((work, index) => {
          const { image, title, url } = work;
          return (
            <div className="work">
              <picture className="work-thumbnail" data-testid="work-thumbnail">
                <source type="image/webp" srcSet={`${process.env.PUBLIC_URL + image.webp}`} ></source>
                <img src={`${process.env.PUBLIC_URL + image.others}`} alt="thumbnail" />
              </picture>
              <p data-testid="work-description-title">{language === "jp" ? title.jp : title.en}</p>
              <a className="link-button" href={url} rel="noopener noreferrer" target="_blank">{language === "jp" ? "Webサイトへ行ってみる" : "Go website"}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Works;
