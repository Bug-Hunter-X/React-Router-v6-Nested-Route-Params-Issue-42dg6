import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about/123">Go to About</Link>
    </div>
  );
}

function About() {
  let { id } = useParams();
  return (
    <div>
      <h1>About {id}</h1>
    </div>
  );
}

function NotFound(){
  return(
    <div>404 Not Found</div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;