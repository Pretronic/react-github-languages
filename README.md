<p align="center">
  <a href="https://squidfunk.github.io/mkdocs-material/">
    <img src="https://content.pretronic.net/brand/logo/pretronic-gray.png" width="180" alt="Pretronic open source logo">
  </a><br />
<strong>Pretronic Open Source</strong><br />
React GitHub Languages
</p>

<p align="center">
  <strong>
    Translate your React projects easily
  </strong>
</p>

<p align="center">
  <a href="https://badge.fury.io/js/%40pretronic%2Freact-github-languages"><img
    src="https://badge.fury.io/js/%40pretronic%2Freact-github-languages.png"
    alt="Version"
  /></a>
  <a href="https://badge.fury.io/js/%40pretronic%2Freact-github-languages">
    <img alt="npm downloads" src="https://img.shields.io/npm/dm/@pretronic/react-github-languages">
  </a>
  <a href="https://discord.gg/ZR7HtTw"><img 
    src="https://discordapp.com/api/guilds/513441444959223809/embed.png" 
    alt="Pretronic Discord"
  /></a>
  <a href="https://docs.pretronic.net/react-github-languages/"><img 
    src="https://img.shields.io/static/v1?label=documentation&message=get%20started&color=blue" 
    alt="Pretronic Docs Platform"
  /></a>
</p>

<p align="center">
  The React GitHub language project is a simple and easy-to-use library for translating your React projects into different languages. The library directly consumes the language files from a GitHub repository.
</p>

## Features & Advantages
* **Multiple languages** — with this library you can use as many languages as you want. All languages are listed in the language.json in your GitHub repository.

* **Message variables** — you can pass custom variables to any translatable message.

* **No backend infrastructure required** — all messages are consumed directly from the GitHub repository, you don't need a server.

* **Everyone can translate** — let everyone in your community help translate your projects, they can easily contribute to your GitHub language repository.

* **Easy to use and simple** — the library is very light and can be integrated very quickly.

## Quick start
React GitHub Languages can be installed via the npm packet manager.

```
npm install @pretronic/react-github-languages
```

Your app can be localized very easily. Just set up the language provider and pass your variables to the 
message component, and finally translate your messages. You can find a clear introduction [here](https://docs.pretronic.net/react-github-languages/).

```typescript
import React from 'react';
import './App.css';
import {LanguageProvider, Message} from "@pretronic/react-github-languages";

export default class App extends React.Component<{}, {}> {


    render() {
        return(<LanguageProvider repository={"Pretronic/PretronicAccountTranslations"} branch={"main"} language={"en"} >

        <div style={{display: "flex",textAlign: "center",justifyContent: "center"}}>
            <p>
                <Message name={"page.description"} variables={{today: new Date().toLocaleDateString()}} />
            </p>
        </div>

        </LanguageProvider>)
    }
}
```

## License
