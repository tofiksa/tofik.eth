import './App.css';
import Profile from './components/Profile'
import FLOATIN_LAPTOP  from './image.jpg'

function App() {
  return (
    <div className="App">
					<img src={FLOATIN_LAPTOP} alt='floating laptop'/>
          <Profile/>
		</div>
  );
}

export default App;
