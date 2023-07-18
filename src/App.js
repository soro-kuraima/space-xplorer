import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { useState } from 'react';
import APOD from './pages/APOD';
import EPIC from './pages/EPIC';
import IMAGE from './pages/IMAGE';

function App() {
  const [pageIndex, setPageIndex] = useState(0)
  return (
    <div className="App min-h-screen flex flex-start overflow-hidden">
      <Sidebar setPage={setPageIndex} />
      <Content>
        {
          pageIndex === 0 && <APOD />
        }
        {
          pageIndex === 1 && <EPIC />
        }
        {
          pageIndex === 2 && <IMAGE />
        }
      </Content>
    </div>
  );
}

export default App;
