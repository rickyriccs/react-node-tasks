import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Eventloop from './pages/EventLoop';
import EventBubbling from './pages/EventBubbling';

function App() {
    return (
        <Router>
            <nav style={{ marginBottom: '1rem' }}>
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/contact">Contact</Link>
                <Link to="/eventloop">Event Loop</Link>
                <Link to="/event-bubbling">Event Bubbling</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/eventloop" element={<Eventloop />} />
                <Route path="/event-bubbling" element={<EventBubbling />} />
            </Routes>
        </Router>
    );
}

export default App;
