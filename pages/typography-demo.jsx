const Box = () => {
  return (
    <div
      style={{ width: 50, height: 50, background: "gray", border: "1px solid" }}
    ></div>
  );
};

const TypographyDemo = () => {
  return (
    <div>
      <div>
        Display
        <div className="display">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>

      <br />

      <div>
        Headline
        <br />
        h1
        <h1>The quick brown fox jumps over the lazy dog.</h1>
        h2
        <h2>The quick brown fox jumps over the lazy dog.</h2>
        h3
        <h3>The quick brown fox jumps over the lazy dog.</h3>
        h4
        <h4>The quick brown fox jumps over the lazy dog.</h4>
        h5 uppercase
        <h5 className="uppercase">
          The quick brown fox jumps over the lazy dog.
        </h5>
        h5
        <h5>The quick brown fox jumps over the lazy dog.</h5>
      </div>

      <br />

      <div>
        Body
        <br />
        b1
        <div className="body1">The quick brown fox jumps over the lazy dog.</div>
        b2
        <div className="body2">The quick brown fox jumps over the lazy dog.</div>
        b3
        <div className="body3">The quick brown fox jumps over the lazy dog.</div>
        b4
        <div className="body4">The quick brown fox jumps over the lazy dog.</div>
        b5
        <div className="body5">The quick brown fox jumps over the lazy dog.</div>
      </div>

      <br />

      <div>
        Button
        <br />
        <button className="primary">Click here!</button>
      </div>

      <br />

      <div>
        Link
        <br />
        <a href="#">Click here!</a>
      </div>

      <br />

      <div>
        Button
        <br />
        primary
        <div>
          <button className="primary">Button text</button>
        </div>
        primary outline
        <div>
          <button className="primary outline">Button text</button>
        </div>
        secundary
        <div>
          <button className="secundary">Button text</button>
        </div>
        secundary outline
        <div>
          <button className="secundary outline">Button text</button>
        </div>
        disabled
        <div>
          <button disabled>Button text</button>
        </div>
        outline disabled
        <div>
          <button disabled className="outline">
            Button text
          </button>
        </div>
      </div>

      <br />
      <div>
        Margin
        <br />
        margin
        <br />
        <div style={{ border: "1px solid black", display: "inline-flex" }}>
          <div style={{ border: "1px solid red" }} className="margin">
            Someting
          </div>
        </div>
        <br />
        no-margin
        <br />
        <div style={{ border: "1px solid black", display: "inline-flex" }}>
          <div style={{ border: "1px solid red" }} className="no-margin">
            Someting
          </div>
        </div>
        <br />
        horizontal-margin
        <br />
        <div style={{ border: "1px solid black", display: "inline-flex" }}>
          <div
            style={{ border: "1px solid red" }}
            className="horizontal-margin"
          >
            Someting
          </div>
        </div>
        <br />
        vertical-margin
        <br />
        <div style={{ border: "1px solid black", display: "inline-flex" }}>
          <div style={{ border: "1px solid red" }} className="vertical-margin">
            Someting
          </div>
        </div>
      </div>

      <br />

      <div>
        Padding
        <br />
        padding
        <br />
        <div style={{ border: "1px solid black", display: "inline-flex" }}>
          <div style={{ border: "1px solid red" }} className="padding">
            Someting
          </div>
        </div>
        <br />
        no-padding
        <br />
        <div style={{ border: "1px solid black", display: "inline-flex" }}>
          <div style={{ border: "1px solid red" }} className="no-padding">
            Someting
          </div>
        </div>
        <br />
        horizontal-padding
        <br />
        <div style={{ border: "1px solid black", display: "inline-flex" }}>
          <div
            style={{ border: "1px solid red" }}
            className="horizontal-padding"
          >
            Someting
          </div>
        </div>
        <br />
        vertical-padding
        <br />
        <div style={{ border: "1px solid black", display: "inline-flex" }}>
          <div style={{ border: "1px solid red" }} className="vertical-padding">
            Someting
          </div>
        </div>
      </div>

      <br />

      <div>
        Flex
        <br />
        flex-row-start
        <div
          style={{ width: "50%", border: "1px solid red" }}
          className="flex-row-start"
        >
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
        <br />
        flex-row-end
        <div
          style={{ width: "50%", border: "1px solid red" }}
          className="flex-row-end"
        >
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
        flex-row-center
        <div
          style={{ width: "50%", border: "1px solid red" }}
          className="flex-row-center"
        >
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
        flex-row-space-between
        <div
          style={{ width: "50%", border: "1px solid red" }}
          className="flex-row-space-between"
        >
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
        flex-row-space-around
        <div
          style={{ width: "50%", border: "1px solid red" }}
          className="flex-row-space-around"
        >
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
        flex-row-space-evenly
        <div
          style={{ width: "50%", border: "1px solid red" }}
          className="flex-row-space-evenly"
        >
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
      </div>
    </div>
  );
};

export default TypographyDemo;
