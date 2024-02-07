import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./pages/Index";
import { Musings } from "./pages/Musings";
import { AllPosts } from "./components/AllPosts";
import { OnePost } from "./components/OnePost";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/musings" element={<Musings />} />
      <Route path="/all-posts" element={<AllPosts />} />
      <Route path="/:slug" element={<OnePost />} />
    </Routes>
  </BrowserRouter>
);

export default App;
