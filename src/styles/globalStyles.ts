import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 300;
    src: url('/font/NotoSans-Light.ttf') format("truetype");
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 400;
    src: url('/font/NotoSans-Regular.ttf') format("truetype");
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 500;
    src: url('/fonts/NotoSans-Medium.ttf') format("truetype");
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 700;
    src: url('/fonts/NotoSans-Bold.ttf') format("truetype");
  }

  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  line-height: 1;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400; 
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
}
button::-moz-focus-inner {
    border: 0;
    padding: 0;
}
`;
