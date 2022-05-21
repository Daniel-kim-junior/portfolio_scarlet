/**
 * @jest-environment jsdom
 */
import jsdom from 'jsdom';
import fs from 'fs';

const DEFAULT_HTML = '<!DOCTYPE html><html><head></head><body></body></html>';
const dom = new jsdom.JSDOM(DEFAULT_HTML).window.document;

dom.body.innerHTML = '<main class="App"></main>'
test("테스트 테스트", () => {

 
  const setMain = dom.querySelector('main');
  expect(setMain).toBeDefined();

})