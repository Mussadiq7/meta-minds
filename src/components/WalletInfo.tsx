import React from 'react';
import { useWallet } from '../hooks/useWallet';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Copy, ExternalLink } from 'lucide-react';

const WalletInfo: React.FC = () => {
  const { 
    connected, 
    walletAddress, 
    shortAddress, 
    wallet, 
    disconnect,
    connection 
  } = useWallet();

  const copyToClipboard = async () => {
    if (walletAddress) {
      try {
        await navigator.clipboard.writeText(walletAddress);
        // You could add a toast notification here
        console.log('Address copied to clipboard');
      } catch (err) {
        console.error('Failed to copy address:', err);
      }
    }
  };

  const openExplorer = () => {
    if (walletAddress) {
      const explorerUrl = `https://explorer.solana.com/address/${walletAddress}?cluster=devnet`;
      window.open(explorerUrl, '_blank');
    }
  };

  if (!connected) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Wallet Not Connected</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            Connect your wallet to interact with MetaMinds
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Wallet Connected</span>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            {wallet?.adapter.name}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium text-muted-foreground">Address</label>
          <div className="flex items-center space-x-2 mt-1">
            <code className="text-sm bg-muted px-2 py-1 rounded">
              {shortAddress}
            </code>
            <button
              onClick={copyToClipboard}
              className="p-1 hover:bg-muted rounded transition-colors"
              title="Copy address"
            >
              <Copy className="h-4 w-4" />
            </button>
            <button
              onClick={openExplorer}
              className="p-1 hover:bg-muted rounded transition-colors"
              title="View on explorer"
            >
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium text-muted-foreground">Network</label>
          <p className="text-sm mt-1">
            {connection.rpcEndpoint.includes('devnet') ? 'Devnet' : 'Mainnet'}
          </p>
        </div>

        <button
          onClick={disconnect}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors"
        >
          Disconnect Wallet
        </button>
      </CardContent>
    </Card>
  );
};

export default WalletInfo; 