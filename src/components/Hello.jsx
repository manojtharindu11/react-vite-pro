function Hello(props) {
  console.log(props);
  const { name, message } = props;
  return (
    <h1>
      {props.message} {props.name}
    </h1>
  );
}

export default Hello;
