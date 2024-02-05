import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Index } from "./pages/Index";
import { Musings } from "./pages/Musings";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/musings" element={<Musings />} />
    </Routes>
  </BrowserRouter>
);

export default App;
