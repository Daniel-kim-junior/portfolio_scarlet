import App from '../src/App';
test("테스트 테스트", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  })
  const main = document.createElement('main');
  main.className = "App";
  const app = new App(main);
  const newNode = document.createElement('main');
  newNode.className = "App";

  expect(app).toEqual(newNode);

})