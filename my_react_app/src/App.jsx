import Header from './Header.jsx'
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Student from './Students.jsx';
import CardProps from './CardProps.jsx';
import logo from "./assets/react.svg"
import gpt from "./assets/gpt.svg"
import gpt2 from "./assets/gpt2.png"

function App() {
    return(
      <>
        <Header/>
        <Card/>
        
        <Food/>
        <CardProps logo = {logo} name = "React" rate = {2}/>
        <CardProps logo = {gpt} name = "ChatGpt" rate = {3}/>
        <CardProps logo = {gpt2} name = "GPT 4o" rate = {5}/>
        <CardProps />
        <Student name = "Menintel" age={23} isStudent = {true}/>
        
        <Footer/>
      </>  
    );
}

export default App
