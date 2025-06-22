import React from 'react';
import { WalletMultiButton as SolanaWalletMultiButton } from '@solana/wallet-adapter-react-ui';

interface WalletMultiButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const WalletMultiButton: React.FC<WalletMultiButtonProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <SolanaWalletMultiButton 
      className={`wallet-adapter-button ${className}`}
    >
      {children}
    </SolanaWalletMultiButton>
  );
};

export default WalletMultiButton; 