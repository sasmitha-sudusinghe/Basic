import Card from "./Card.jsx"
import Button from "./Button.jsx"
import Student from "./Student.jsx"


function App() {
  return(
    <>
      <Card/>
      <Button/>
      <Student name="Spongebob" age="23" isStudent={true}/>
    </>
  );
}

export default App
