import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Download, Upload, Clock, Shield } from 'lucide-react';

interface StatsPanelProps {
  isConnected: boolean;
  connectionTime: string;
  dataUsed: { download: string; upload: string };
}

const StatsPanel: React.FC<StatsPanelProps> = ({ isConnected, connectionTime, dataUsed }) => {
  const stats = [
    {
      icon: Download,
      label: 'Downloaded',
      value: isConnected ? dataUsed.download : '0 MB',
      color: 'text-primary'
    },
    {
      icon: Upload,
      label: 'Uploaded',
      value: isConnected ? dataUsed.upload : '0 MB',
      color: 'text-accent'
    },
    {
      icon: Clock,
      label: 'Session Time',
      value: isConnected ? connectionTime : '00:00:00',
      color: 'text-primary'
    },
    {
      icon: Shield,
      label: 'Protection',
      value: isConnected ? 'Active' : 'Inactive',
      color: isConnected ? 'text-primary' : 'text-destructive'
    }
  ];

  return (
    <div className="space-y-4">
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-lg text-foreground">Connection Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <IconComponent className={`h-4 w-4 ${stat.color}`} />
                    <span className="text-sm font-medium text-foreground">{stat.label}</span>
                  </div>
                  <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-lg text-foreground">Security Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Kill Switch</span>
              <div className={`h-2 w-2 rounded-full ${isConnected ? 'bg-primary' : 'bg-muted-foreground'}`} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">DNS Leak Protection</span>
              <div className={`h-2 w-2 rounded-full ${isConnected ? 'bg-primary' : 'bg-muted-foreground'}`} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">AES-256 Encryption</span>
              <div className={`h-2 w-2 rounded-full ${isConnected ? 'bg-primary' : 'bg-muted-foreground'}`} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">No-Logs Policy</span>
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsPanel;