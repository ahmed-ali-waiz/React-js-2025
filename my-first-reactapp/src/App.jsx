import Welcome from './welcome';
import Bye from './Bye';

function App() {
  return (
    <div>
      <h1>Hello World from App Component</h1>
      <Welcome name = "Ahmad" message= "You are doing great with react" />
      <Welcome name = "Ali" message= "This is your first custom component. 🎉" />
      <Bye name = "Waiz" message = "I am Ahmad Ali waiz" />
    </div>
  );
}

export default App;
