import './App.css';
import { BrowserRouter as Router,  Route , Navigate, Routes} from 'react-router-dom';
import {Home, Library, LibraryDetail} from './components';




function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/library/:id" element={<LibraryDetail/>}/>
          <Route  path="/library" element={<Library/>}/>
      
           <Route  path="*" element={<Navigate to='/library'/>}/>

        </Routes>
        
      </Router>
 
    </div>
  );


}

export default App;
