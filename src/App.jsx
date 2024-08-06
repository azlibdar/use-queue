// npm install @heroicons/react
// Change document title
// Change the title and include repo link in Header
// Update hook name in the README.MD

import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full min-h-dvh bg-zinc-900">
      <Header />
      <Content />
    </div>
  );
}

export default App;
