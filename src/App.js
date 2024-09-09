import './App.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';



const Home = lazy(() => import('./pages/mainPage'));
const Variables = lazy(() => import('./pages/variables'));
const SingleVariable = lazy(() => import('./pages/singleVariable'));

function App() {


  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path='/variables'
            element={<Variables />}
          />
          <Route
            path='/variables/:variableId'
            element={<SingleVariable />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
