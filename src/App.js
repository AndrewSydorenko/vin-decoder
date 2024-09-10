import './App.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { SharedLayout } from './components/SharedLayout';



const Main = lazy(() => import('./pages/mainPage'));
const Variables = lazy(() => import('./pages/variables'));
const SingleVariable = lazy(() => import('./pages/singleVariable'));

function App() {


  return (
    <div className="App">
      <Suspense fallback={<div className='loading'>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />} >
            <Route
              index
              element={<Main />}
            />
            <Route
              path='/variables'
              element={<Variables />}
            />
            <Route
              path='/variables/:variableId'
              element={<SingleVariable />}
            />
          </Route >
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
