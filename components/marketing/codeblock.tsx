"use client";

import { useEffect, useState } from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python'
import 'highlight.js/styles/pojoaque.css'


const Block = ({ code, language }) => {
  useEffect(() => {
    hljs.highlightAuto(code)
    
  }, []);

  return (
    <pre className="language-javascript">
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};


export default function CodeBlock() {

  hljs.registerLanguage('python', python);


  const [codeExample, setExample] = useState(`headers = {
    'X-MBX-APIKEY': API_KEY,
    }

    response = requests.post(
        'https://api.binance.com/api/v3/order',
        headers=headers,
        data=params,
    )`);

  // const type = () => {
  //   if (codeExample.length > 0) {
  //     setExample(codeExample.substring(0, codeExample.length -2))
  //   }
  // }

  // setTimeout(type, 200)


  return (
    <div className="p-6">
    <h1 className="mb-4 text-2xl font-bold">Code Block Example</h1>
    <Block code={codeExample} language="javascript" />
  </div>
    
  )

}
