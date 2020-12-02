import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

function App(props) {
  return (
    <>
      <Header />
      <Content state={props.state} />
    </>
  );
}

export default App;
