import { createRoot } from 'react-dom/client';
import './styles.css';
import Recipes from './Recipes'
import recipesData from "../data/recipes.json"

function App() {
  return (
    <div>
      <h1 className="text-3xl">Ready to build</h1>
      <Recipes recipes={recipesData}/>
    </div>
    );
}

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');
createRoot(root).render(<App />);
