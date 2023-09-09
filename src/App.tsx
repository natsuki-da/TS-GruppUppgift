import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThreadListView from "./pages/ThreadListView"
import ThreadCreationView from './pages/ThreadCreationView';
import ThreadDetailView from './pages/ThreadDetailView';
// import Post from './components/Post';

const App = () => {
 return(
    <Router>
        <Routes>
          <Route path="/" element={<ThreadCreationView />} />
          <Route path="/List" element={<ThreadListView />} />
          <Route path="/Detail/:id" element={<ThreadDetailView />} />
        </Routes>
      </Router>
 );   
};

export default App;