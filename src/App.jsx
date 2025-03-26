import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
function App() {
  const seatNumbers = [1, 5, 7];
  const person = {
    name: "John",
    message: "hi there",
    age: 22,
    emoji: "🙂",
    seatNumbers: [1, 5, 7],
  };
  return (
    <div className="App">
      {/* <Hello
        name="Mike"
        message="Hi there,"
        emoji="❤️❤️"
        seatNumbers={seatNumbers}
        person={person}
      />
      <Hello name="Tom" message="Hello," emoji="🍉🍉" /> */}
      <Fruits/>
    </div>
  );
}

export default App;
