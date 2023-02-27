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
        <div className="b1">
          The quick brown fox jumps over the lazy dog.
        </div>
        b2
        <div className="b2">
          The quick brown fox jumps over the lazy dog.
        </div>
        b3
        <div className="b3">
          The quick brown fox jumps over the lazy dog.
        </div>
        b4
        <div className="b4">
          The quick brown fox jumps over the lazy dog.
        </div>
        b5
        <div className="b5">
          The quick brown fox jumps over the lazy dog.
        </div>
      </div>
    </div>
  );
};

export default TypographyDemo;
