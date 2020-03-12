const Lines = props => {
  const params = props.params;
  return (
    <div>
      Loaded the CalogBrowse/Lines Component
      <br />
      <br />
      <p>
        <b>Parameters:</b>
      </p>
      {params.map((param, i) => {
        return <p key={i}>{param}</p>;
      })}
    </div>
  );
};
export default Lines;
