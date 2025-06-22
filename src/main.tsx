import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import WalletConnectionProvider from './components/WalletConnectionProvider.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <WalletConnectionProvider>
    <App />
  </WalletConnectionProvider>
);
