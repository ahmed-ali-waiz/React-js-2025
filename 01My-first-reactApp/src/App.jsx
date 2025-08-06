import Welcome from './welcome';
import Bye from './Bye';
import Greet from './Components/Greet'; 
import Hellow from './Props/Hello';

function App() {
  return (
    <div>
      <h1>Hello World from App Component</h1>
      <Welcome name = "Ahmad" message= "You are doing great with react" />
      <Welcome name = "Ali" message= "This is your first custom component. 🎉" />
      <Bye name = "Waiz" message = "I am Ahmad Ali waiz" />

       <Greet name = "Ali" age = "21" city = "sahiwal" uni = "Comsats" />
       <Hellow name = "Ahmad Ali" />
       <Hellow name = "ALi Waiz" />
       <Hellow name = "Waiz" />
    </div>
   
  );
}

export default App;
