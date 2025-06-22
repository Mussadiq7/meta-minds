import { useWallet as useSolanaWallet, useConnection } from '@solana/wallet-adapter-react';
import { useMemo } from 'react';
import { PublicKey } from '@solana/web3.js';

export const useWallet = () => {
  const { 
    publicKey, 
    sendTransaction, 
    signTransaction, 
    signAllTransactions, 
    connected, 
    connecting, 
    disconnect, 
    select, 
    wallet, 
    wallets, 
    signMessage 
  } = useSolanaWallet();
  
  const { connection } = useConnection();

  // Get wallet address as string
  const walletAddress = useMemo(() => {
    return publicKey?.toBase58();
  }, [publicKey]);

  // Get shortened wallet address for display
  const shortAddress = useMemo(() => {
    if (!walletAddress) return '';
    return `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`;
  }, [walletAddress]);

  // Check if wallet is connected
  const isConnected = useMemo(() => {
    return connected && !!publicKey;
  }, [connected, publicKey]);

  // Get available wallets
  const availableWallets = useMemo(() => {
    return wallets.filter(wallet => wallet.readyState === 'Installed' || wallet.readyState === 'Loadable');
  }, [wallets]);

  return {
    // Wallet state
    publicKey,
    walletAddress,
    shortAddress,
    connected: isConnected,
    connecting,
    wallet,
    
    // Wallet functions
    sendTransaction,
    signTransaction,
    signAllTransactions,
    signMessage,
    disconnect,
    select,
    
    // Connection
    connection,
    
    // Available wallets
    wallets: availableWallets,
    
    // Utility functions
    isConnected,
    hasWallet: availableWallets.length > 0,
  };
}; 