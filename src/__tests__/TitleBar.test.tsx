import { cleanup, fireEvent } from '@testing-library/react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import TitleBar from './../components/TitleBar';

let container = null;
let prop_language:string = "";

beforeEach(() => {
  // conteiner の定義
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // 定義した container の除去
  unmountComponentAtNode(container);
  container.remove();
  container = null;

  cleanup;
});

// =============== snapshot test =================
it('タイトル画面が表示されていること', () => {
  // 言語切替用のダミー関数
  const updateLanguageSetting = (language: string) => {
    prop_language = language;
  };
  const component = renderer.create(<TitleBar hook={updateLanguageSetting("jp")} language={prop_language} />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

// ================ act tests ====================
it('日本語を選択している時、日本語用タイトル画像が表示されていること', () => {
  // 言語切替用のダミー関数
  const updateLanguageSetting = (language: string) => {
    prop_language = language;
  };
  act(() => {
    render(<TitleBar hook={updateLanguageSetting("jp")} language={prop_language} />, container);
  })
  // img タグの存在検証
  const displayedImgImage = document.querySelector("img");
  expect(displayedImgImage.alt).toBe("background");
  // source タグの存在検証
  const displayedSourceImage = document.querySelector("source");
  expect(displayedSourceImage.srcset).toBe("/assets/title_jp.webp");
});

// TODO: 以下のテストが通るよう、言語切替の仕組みを state のみを利用するよう修正する
//it('言語設定を英語に切り替えた時、英語用タイトル画像が表示されていること', async () => {
//  // 言語切替用のダミー関数
//  const updateLanguageSetting = (language: string) => {
//    prop_language = language;
//  };
//  // ダミーの変更イベント
//  const onChange = jest.fn( (props: string) => {
//    updateLanguageSetting(props);
//  });
//
//  act(() => {
//    render(<TitleBar hook={onChange} language={prop_language} />, container);
//  })
//
//  // ボタン押下イベントの発火
//  const en_button = document.querySelector("[data-testid=en-toggle]");
//  act(() => {
//    en_button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//  });
//
//  expect(onChange).toHaveBeenCalledTimes(1);
//
//  await new Promise(resolve => setTimeout(resolve, 300));
//
//  const displayedSourceImage = document.querySelector("source");
//  expect(displayedSourceImage.srcset).toBe("/assets/title_en.webp");
//});