import { createRoot } from 'react-dom/client';
import App from './components/App';

import '@/panda/styles.css';

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('__plugin') as HTMLElement;
  // TODO: figure this out
  // const root = createRoot(container);
  // root.render(<App />);
});
