import './styles/main.css';
import Form from './Components/Form'
import Header from './Components/Header'
import Summary from './Components/Summary'
import SummaryActivityFood from './Components/SummaryActivityFood'

function App() {
  return (
    <div className="h-screen flex flex-col">
      <header className="h-[10%]">
        <Header/>
      </header>
      <div className="h-[70%] grid grid-cols-2 gap-4 mx-20 my-10 items-center">
        <Form/>
        <SummaryActivityFood/>
      </div>
      <footer className="h-[20%]">
        <Summary/>
      </footer>
    </div>
  );
}

export default App;

