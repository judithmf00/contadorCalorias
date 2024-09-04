import './styles/main.css';
import Form from './Components/Form'
import Header from './Components/Header'
import Summary from './Components/Summary'
import SummaryActivityFood from './Components/SummaryActivityFood'

function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <header className="h-[10%]">
        <Header/>
      </header>
      <div className="h-[70%] grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-20  my-8 items-center w-full overflow-y-auto">
        <Form />
        <SummaryActivityFood />
      </div>
      <footer className="h-[20%]">
        <Summary/>
      </footer>
    </div>
  );
}

export default App;
