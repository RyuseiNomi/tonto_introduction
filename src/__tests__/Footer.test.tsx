import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import Footer from './../components/Footer';

let container = null;
let root = null;
const sample_twitter_url = "http://sample_twitter_url.hoge";

beforeEach(() => {
  // container の定義
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  // 定義した container の除去
  root.unmount(container);
  container.remove();
  container = null;
});

// =============== snapshot test =================
it('Footer が表示されていること', () => {
  const component = renderer.create(<Footer twittr_url={sample_twitter_url} />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

// ================ act tests ====================
it('Footer に西暦と twitter id が表示されていること', () => {
  act(() => {
    root.render(<Footer twitter_url={sample_twitter_url} />);
  })

  const displayed = document.querySelector("[data-testid=footer]");
  expect(displayed.textContent).toBe("Privacy Policy©︎2022    @27ma4_ton10");
  console.log(displayed.textContent);
});
