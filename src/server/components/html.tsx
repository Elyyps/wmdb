import React from "react";
import Helmet from "react-helmet";

type Props = {
  children: any;
  css: string[];
  scripts: string[];
  state: string;
};

const HTML = ({ children, css = [], scripts = [], state = "{}" }: Props) => {
  const head = Helmet.renderStatic();

  return (
    <html lang="nl">
      <head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}
        {css.filter(Boolean).map(href => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_STATE__ = ${state}`
          }}
        />
        <title>Viper</title>
      </head>
      <body>
        {/* eslint-disable-next-line react/no-danger */}
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        {scripts.filter(Boolean).map(src => (
          <script key={src} src={src} />
        ))}
      </body>
    </html>
  );
};

export default HTML;
