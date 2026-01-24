import './App.css';
import Sidebar from './sidebar';
import Feed from './feed';
import Suggestion from './suggestion';

function App() {
  return (
    <div className='d-flex'>
      <div className='w-20 sidebar'>
        <Sidebar />
      </div>
      <div className='w-50 feed'>
        <Feed />
      </div>
      <div className='w-30 suggestion'>
        <Suggestion />
      </div>
    </div>
  );
}

export default App;
