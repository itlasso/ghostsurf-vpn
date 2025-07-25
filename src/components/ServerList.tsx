import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wifi } from 'lucide-react';

interface Server {
  id: string;
  name: string;
  flag: string;
  ping: string;
  load: number;
  premium?: boolean;
}

interface ServerListProps {
  selectedServer: string;
  onServerSelect: (serverId: string) => void;
}

const ServerList: React.FC<ServerListProps> = ({ selectedServer, onServerSelect }) => {
  const servers: Server[] = [
    // United States - North, South, East, West locations
    { id: 'us-ny', name: 'United States - New York', flag: '🇺🇸', ping: '12ms', load: 25 },
    { id: 'us-ca', name: 'United States - Los Angeles', flag: '🇺🇸', ping: '18ms', load: 45 },
    { id: 'us-tx', name: 'United States - Dallas', flag: '🇺🇸', ping: '15ms', load: 35 },
    { id: 'us-wa', name: 'United States - Seattle', flag: '🇺🇸', ping: '20ms', load: 30 },
    { id: 'us-fl', name: 'United States - Miami', flag: '🇺🇸', ping: '16ms', load: 40 },
    { id: 'us-il', name: 'United States - Chicago', flag: '🇺🇸', ping: '14ms', load: 50 },
    // International locations
    { id: 'uk-1', name: 'United Kingdom - London', flag: '🇬🇧', ping: '25ms', load: 30 },
    { id: 'de-1', name: 'Germany - Frankfurt', flag: '🇩🇪', ping: '18ms', load: 55 },
    { id: 'jp-1', name: 'Japan - Tokyo', flag: '🇯🇵', ping: '45ms', load: 20, premium: true },
    { id: 'ca-1', name: 'Canada - Toronto', flag: '🇨🇦', ping: '8ms', load: 35 },
    { id: 'au-1', name: 'Australia - Sydney', flag: '🇦🇺', ping: '65ms', load: 40, premium: true },
    { id: 'fr-1', name: 'France - Paris', flag: '🇫🇷', ping: '22ms', load: 50 }
  ];

  const getLoadColor = (load: number) => {
    if (load < 30) return 'text-primary';
    if (load < 70) return 'text-accent';
    return 'text-destructive';
  };

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Wifi className="h-5 w-5 text-primary" />
          Server Locations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {servers.map((server) => (
            <div
              key={server.id}
              className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                selectedServer === server.id
                  ? 'border-primary bg-primary/10'
                  : 'border-border hover:bg-muted/50'
              }`}
              onClick={() => onServerSelect(server.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{server.flag}</span>
                  <div>
                    <p className="font-medium text-sm text-foreground">{server.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">{server.ping}</span>
                      <span className={`text-xs font-medium ${getLoadColor(server.load)}`}>
                        {server.load}% load
                      </span>
                      {server.premium && (
                        <Badge variant="secondary" className="text-xs px-1 py-0 bg-accent text-accent-foreground">
                          PRO
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                {selectedServer === server.id && (
                  <div className="h-2 w-2 rounded-full bg-primary" />
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServerList;