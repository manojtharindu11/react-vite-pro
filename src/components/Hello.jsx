function Hello({ name, message, emoji, seatNumbers, person }) {
  console.log(person);
  return (
    <>
      <h1>
        {message} {name} {emoji} {seatNumbers}
      </h1>
      <p>
        {person?.name} {person?.message} {person?.emoji} {person?.seatNumbers}{" "}
        {person?.age}
      </p>
    </>
  );
}

export default Hello;
