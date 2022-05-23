import { cleanup } from '@testing-library/react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import ProfileDescription from './../components/ProfileDescription';
import TitleBar from './../components/TitleBar'; // 言語設定切り替えイベント実装のため
import 'antd'; // モック作成のため

const sample_name = {jp: "テスト名前", en: "test-name"}
const sample_twitter_url = "sample-test-twitter-url"
const sample_description = {jp: "サンプル説明文", en: "sample-description"}
const sample_hobbies = {jp: "サンプル趣味", en: "sample-hobbies"}
const sample_sw_code = "0000-0000-0000-0000"
const sample_discord_id = "sample#0000"

// Row コンポーネントのモック
jest.mock("antd", () => {
  const antd = jest.requireActual("antd");

  const Row = () => {
    return <div data-testid="row"></div>
  };

  return {
    ...antd,
    Row
  };
});

let container = null;
beforeEach(() => {
  // container の定義
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
it('自己紹介文が表示されていること', () => {
  const component = renderer.create(<ProfileDescription name={sample_name} twitter_url={sample_twitter_url} description={sample_description} hobbies={sample_hobbies} switch_code={sample_sw_code} discord_id={sample_discord_id} language="jp" />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

// =============== act tests =================
it('名前とプロフィール文が表示されていること', () => {
  act(() => {
    render(<ProfileDescription
        name={sample_name}
        twitter_url={sample_twitter_url}
        description={sample_description}
        hobbies={sample_hobbies}
        switch_code={sample_sw_code}
        discord_id={sample_discord_id}
        language="jp"
      />, container);
  });
  expect(container.textContent).toBe("サンプル説明文サンプル趣味0000-0000-0000-0000sample#0000");
});