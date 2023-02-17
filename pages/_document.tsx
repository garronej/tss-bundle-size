import { Html, Head, Main, NextScript } from 'next/document'
import { augmentDocumentWithEmotionCache } from "./_app";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


//You can also pass your custom document if you have one. 
augmentDocumentWithEmotionCache(Document);
