import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';
import { dummyApiData, tabsData } from './utils/tabs';

function App() {
  const onTabChangeHandler = (index) => {
    console.log("Current tab index is", index);
  }
  return (
    <div className="App">
      <Tabs tabs={tabsData} apiData={dummyApiData} currentTab={0} onTabChangeHandler={onTabChangeHandler}/>
    </div>
  );
}

export default App;
