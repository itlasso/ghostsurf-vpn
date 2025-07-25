import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Globe, Zap, Eye } from 'lucide-react';

interface VPNDashboardProps {
  onConnect: () => void;
  onDisconnect: () => void;
  isConnected: boolean;
}

const VPNDashboard: React.FC<VPNDashboardProps> = ({ onConnect, onDisconnect, isConnected }) => {
  const [selectedLocation, setSelectedLocation] = useState('United States');
  const [isAnimating, setIsAnimating] = useState(false);
  
  const locations = [
    { name: 'United States', flag: '🇺🇸', ping: '12ms' },
    { name: 'United Kingdom', flag: '🇬🇧', ping: '25ms' },
    { name: 'Germany', flag: '🇩🇪', ping: '18ms' },
    { name: 'Japan', flag: '🇯🇵', ping: '45ms' },
    { name: 'Canada', flag: '🇨🇦', ping: '8ms' }
  ];

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isConnected]);

  return (
    <div className="space-y-6">
      <Card className="border-2 bg-card">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className={`h-16 w-16 transition-colors duration-2000 ${
              isConnected ? 'text-primary' : 'text-muted-foreground'
            } ${
              isAnimating ? 'animate-logo-connect' : ''
            }`} />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">
            GhostSurf Mobile VPN
          </CardTitle>
          <Badge variant={isConnected ? 'default' : 'secondary'} className="mt-2">
            {isConnected ? 'Connected' : 'Disconnected'}
          </Badge>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <Button
              size="lg"
              onClick={isConnected ? onDisconnect : onConnect}
              className={`w-full py-6 text-lg font-semibold ${
                isConnected 
                  ? 'bg-destructive hover:bg-destructive/90 text-destructive-foreground' 
                  : 'bg-primary hover:bg-primary/90 text-primary-foreground'
              }`}
            >
              {isConnected ? 'Disconnect' : 'Connect'}
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-1">
              <Globe className="h-6 w-6 mx-auto text-primary" />
              <p className="text-sm font-medium text-foreground">Location</p>
              <p className="text-xs text-muted-foreground">{selectedLocation}</p>
            </div>
            <div className="space-y-1">
              <Zap className="h-6 w-6 mx-auto text-accent" />
              <p className="text-sm font-medium text-foreground">Speed</p>
              <p className="text-xs text-muted-foreground">{isConnected ? '98 Mbps' : '--'}</p>
            </div>
            <div className="space-y-1">
              <Eye className="h-6 w-6 mx-auto text-primary" />
              <p className="text-sm font-medium text-foreground">Privacy</p>
              <p className="text-xs text-muted-foreground">{isConnected ? 'Protected' : 'Exposed'}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VPNDashboard;