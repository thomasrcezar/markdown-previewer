import React, { useState } from 'react';
import { marked } from 'marked';

const MarkdownPreviewer = () => {
  const [text, setText] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

![React Logo w/ Text](https://goo.gl/Umyytc)
`);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const getMarkdownText = () => {
    const rawMarkup = marked(text, { breaks: true });
    console.log(rawMarkup); // Check what HTML is being produced
    return { __html: rawMarkup };
  };

  console.log("Rendering MarkdownPreviewer");
  return (
    <div className="container mt-5">
      <h1>Testing Markdown Previewer</h1> {/* Temporary heading to check rendering */}
      <textarea id="editor" className="form-control" value={text} onChange={handleChange} />
      <div id="preview" className="mt-3" dangerouslySetInnerHTML={getMarkdownText()} />
    </div>
  );
};

export default MarkdownPreviewer;
