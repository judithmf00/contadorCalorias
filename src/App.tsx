import './styles/main.css';
import Form from './Components/Form'
import Header from './Components/Header'
import Summary from './Components/Summary'
import SummaryActivityFood from './Components/SummaryActivityFood'

function App() {

  return (
    <>
      <Header/>
      <div>
        <Form/>
        <SummaryActivityFood/>
      </div>
      <Summary/>
    </>
  )
}

export default App
