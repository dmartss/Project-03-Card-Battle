import { injectGlobal } from 'styled-components';
import rem from './rem';
import * as t from './themeProvider';

injectGlobal`

    .App {
      text-align: center;
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      background: ${t.background};
      overflow: hidden;
    }

    h3 {
      font-size: 2.5em;
    }

    p {
      margin: 0;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      padding: ${rem(15)};
      font-family: baskerville;
      letter-spacing: 0.05em;
      font-size: 1.5rem;
    }

    main {
      flex-grow: 1;
      height: calc(100vh - ${rem(208)});
    }

    header li,
    a {
      font-family: ${t.mainFont};
      font-size: 1.2rem;
      display: -webkit-inline-flex;
      letter-spacing: 0.07em;
      color: ${t.footer1};
      text-decoration: none;
    }

    header li {
      font-family: ${t.headerFont};
      cursor: default;
      user-select: none;
    }


    button {
      border: 1.5px solid ${t.primary};
      padding: ${rem(8)} ${rem(25)};
      font-family: ${t.oxygen};
      font-size: ${t.regFontSize};
      background: ${t.primary};
      color: ${t.button};
    }

    button:hover {
      background: ${t.background2};
      border: 1.5px solid ${t.background2};
      color: ${t.button};
      cursor: pointer;
      animation: none;
    }

    button[type='button'] {
      border: 1.5px solid ${t.button2};
      padding: ${rem(8)} ${rem(25)};
      font-family: ${t.oxygen};
      font-size: ${t.regFontSize};
      background: white;
    }

    button[type='button']:hover {
      background: ${t.button2};
      border: 1.5px solid ${t.button2};
      color: ${t.button3};
      cursor: pointer;
    }

    input[type='text'],
    input[type='password'],
    input[type='email'] {
      width: ${rem(350)};
      padding: ${rem(10)};
      margin-bottom: ${rem(20)};
      font-size: ${t.regFontSize};
      font-family: ${t.oxygen};
    }

    footer {
      background: ${t.footer};
      display: flex;
      flex-direction: column;
      color:  ${t.footer1};
      text-align: center;
      padding: ${rem(10)};
      font-family: ${t.mainFont};
      font-size: .9rem;
      letter-spacing: 0.2em;
      position: fixed;
      bottom: 0;
      width: 100vw;
    }


`;
