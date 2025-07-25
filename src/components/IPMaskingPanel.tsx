import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, Eye, EyeOff, MapPin } from 'lucide-react';

interface IPMaskingPanelProps {
  isConnected: boolean;
  realIP: string;
  maskedIP: string;
  location: string;
}

export const IPMaskingPanel: React.FC<IPMaskingPanelProps> = ({
  isConnected,
  realIP,
  maskedIP,
  location
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5" />
          IP Masking
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Status</span>
          <Badge variant={isConnected ? "default" : "destructive"}>
            {isConnected ? (
              <><EyeOff className="h-3 w-3 mr-1" />Hidden</>
            ) : (
              <><Eye className="h-3 w-3 mr-1" />Exposed</>
            )}
          </Badge>
        </div>
        
        <div className="space-y-3">
          <div className="p-3 bg-muted rounded-lg">
            <div className="text-xs text-muted-foreground mb-1">Your Real IP</div>
            <div className="font-mono text-sm">
              {isConnected ? '•••.•••.•••.•••' : realIP}
            </div>
          </div>
          
          <div className="p-3 bg-primary/10 rounded-lg">
            <div className="text-xs text-muted-foreground mb-1">Public IP</div>
            <div className="font-mono text-sm">
              {isConnected ? maskedIP : realIP}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span>Apparent Location</span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {isConnected ? location : 'Your Location'}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};