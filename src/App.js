import React, { Component } from "react";
import "./App.css";

let marked = require("marked");
marked.setOptions({
  breaks: true
});

class App extends Component {
  INITIAL_MARKDOWN =
    "# Markdown Text goes here\n## You can also make subheadings\n\nOne of the **trickiest** parts of getting this project to work was learning how to use `dangerouslySetInnerHTML` to make the previewer display the output of [marked.js](https://github.com/markedjs/marked/blob/master/README.md) as HTML instead of a string.\n\nAccording to the React Documentation,\n>dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack.\n\nExample Code:\n```\nfunction createMarkup() {\n  return {__html: 'First &middot; Second'};\n}\n\nfunction MyComponent() {\n  return <div dangerouslySetInnerHTML={createMarkup()} />;\n}\n```\n\nJust remember to:\n- Search, Read, Ask\n- Ask for help on the Forum (that's what worked for me.)\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n";

  state = {
    markdown: this.INITIAL_MARKDOWN
  };

  updateMarkdown = markdown => {
    this.setState({
      markdown
    });
  };

  render() {
    let { markdown } = this.state;
    console.log(markdown);
    return (
      <div className="App">
        <div className="container py-3 bg-light">
          <h1>Markdown</h1>
          <div className="card">
            <div className="card-body bg-warning">
              <h4 className="card-title text-left">Editor</h4>

              <div className="form-group">
                <label className="form-label"></label>
                <textarea
                  id="editor"
                  type="text"
                  className="form-control"
                  placeholder="Enter Markdown"
                  rows="10"
                  value={markdown}
                  onChange={event => this.updateMarkdown(event.target.value)}
                >
                  {this.INITIAL_MARKDOWN}
                </textarea>
              </div>
            </div>
          </div>
          <div
            className="my-5 bg-success"
            style={{
              border: "1px solid rgba(0,0,0,.125)",
              borderRadius: ".25rem"
            }}
          >
            <div className="p-2">
              <h4 className="text-left">Preview</h4>
              <div
                className="p-2 text-left bg-white"
                style={{
                  border: "1px solid rgba(0,0,0,.125)",
                  borderRadius: ".25rem"
                }}
              >
                <div
                  id="preview"
                  contentEditable="true"
                  dangerouslySetInnerHTML={{ __html: marked(markdown) }}
                  style={{ minHeight: "10em" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
