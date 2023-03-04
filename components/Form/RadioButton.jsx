export const RadioButton = (props) => {
  const { changed, id, isSelected, label, value } = props;
  return (
    <div className="RadioButton">
      <input
        id={id}
        onChange={changed}
        value={value}
        type="radio"
        checked={isSelected}
      />
      <label style={{margin:'0 5px'}} htmlFor={id}>{label}</label>
    </div>
  );
};
