
import './App.css';
import Navigation from './Components/Navigation';
import ContactHeader from './Components/ContactHeader';
import ContactForm from './Components/ContactForm';

function App() {
  return (
    <div className="App">
     <Navigation></Navigation>
     <main className='main_container'>
      <ContactHeader></ContactHeader>
      <ContactForm></ContactForm>
     </main>
    </div>
  );
}

export default App;
