import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Shield, Lock, Key, CheckCircle } from 'lucide-react';

interface EncryptionPanelProps {
  isConnected: boolean;
  encryptionType: string;
  keyStrength: string;
}

export const EncryptionPanel: React.FC<EncryptionPanelProps> = ({
  isConnected,
  encryptionType,
  keyStrength
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Encryption Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Protection</span>
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
            <span>Cipher</span>
            <span className="flex items-center gap-1">
              <Lock className="h-3 w-3" />
              {encryptionType}
            </span>
          </div>
          <Progress value={isConnected ? 100 : 0} className="h-2" />
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span>Key Strength</span>
          <span className="flex items-center gap-1">
            <Key className="h-3 w-3" />
            {keyStrength}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};