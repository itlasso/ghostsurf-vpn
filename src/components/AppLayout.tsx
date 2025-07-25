import React, { useState, useEffect } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import VPNDashboard from './VPNDashboard';
import ServerList from './ServerList';
import StatsPanel from './StatsPanel';
import { Button } from '@/components/ui/button';
import { Menu, X, Settings } from 'lucide-react';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();
  const [isConnected, setIsConnected] = useState(false);
  const [selectedServer, setSelectedServer] = useState('us-ny');
  const [connectionTime, setConnectionTime] = useState('00:00:00');
  const [dataUsed, setDataUsed] = useState({ download: '0 MB', upload: '0 MB' });
  const [startTime, setStartTime] = useState<Date | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isConnected && startTime) {
      interval = setInterval(() => {
        const now = new Date();
        const diff = Math.floor((now.getTime() - startTime.getTime()) / 1000);
        const hours = Math.floor(diff / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((diff % 3600) / 60).toString().padStart(2, '0');
        const seconds = (diff % 60).toString().padStart(2, '0');
        setConnectionTime(`${hours}:${minutes}:${seconds}`);
        
        // Simulate data usage
        const downloadMB = Math.floor(diff / 10) + Math.floor(Math.random() * 50);
        const uploadMB = Math.floor(diff / 20) + Math.floor(Math.random() * 20);
        setDataUsed({
          download: `${downloadMB} MB`,
          upload: `${uploadMB} MB`
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isConnected, startTime]);

  const handleConnect = () => {
    setIsConnected(true);
    setStartTime(new Date());
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setStartTime(null);
    setConnectionTime('00:00:00');
    setDataUsed({ download: '0 MB', upload: '0 MB' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card border-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            {isMobile && (
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleSidebar}
                className="text-foreground hover:bg-muted"
              >
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            )}
            <h1 className="text-xl font-bold text-foreground">GhostSurf VPN</h1>
          </div>
          <Button variant="ghost" size="sm" className="text-foreground hover:bg-muted">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        {(!isMobile || sidebarOpen) && (
          <aside className={`${isMobile ? 'fixed inset-y-0 left-0 z-50 w-80 bg-background border-r border-border' : 'w-80 border-r border-border'} p-4 space-y-4`}>
            <ServerList
              selectedServer={selectedServer}
              onServerSelect={setSelectedServer}
            />
            <StatsPanel
              isConnected={isConnected}
              connectionTime={connectionTime}
              dataUsed={dataUsed}
            />
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-2xl mx-auto">
            <VPNDashboard
              onConnect={handleConnect}
              onDisconnect={handleDisconnect}
              isConnected={isConnected}
            />
          </div>
        </main>
      </div>

      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default AppLayout;