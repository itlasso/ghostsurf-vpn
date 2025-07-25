import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Network, Zap, Shield, CheckCircle } from 'lucide-react';

interface TunnelingPanelProps {
  isConnected: boolean;
  tunnelType: string;
  encryptionLevel: string;
}

export const TunnelingPanel: React.FC<TunnelingPanelProps> = ({
  isConnected,
  tunnelType,
  encryptionLevel
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Network className="h-5 w-5" />
          Secure Tunneling
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Tunnel Status</span>
          <Badge variant={isConnected ? "default" : "secondary"}>
            {isConnected ? (
              <><CheckCircle className="h-3 w-3 mr-1" />Active</>
            ) : (
              "Inactive"
            )}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Encryption</span>
            <span className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              {encryptionLevel}
            </span>
          </div>
          <Progress value={isConnected ? 100 : 0} className="h-2" />
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span>Protocol</span>
          <span className="flex items-center gap-1">
            <Zap className="h-3 w-3" />
            {tunnelType}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};