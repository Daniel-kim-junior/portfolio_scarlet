import App from "./App";
// const isNull = (selector: string, scope = document) => {
//   return !!scope.querySelector(selector);
// }
const $ = (selector: string, scope = document): Element => scope.querySelector(selector)!;


const $app: Element = $('main');

new (App($app) as any);
