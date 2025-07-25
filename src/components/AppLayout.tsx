import React, { useState, useEffect } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import VPNDashboard from './VPNDashboard';
import ServerList from './ServerList';
import StatsPanel from './StatsPanel';
import SecurityDashboard from './SecurityDashboard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
      <header className="border-b bg-card border-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            {isMobile && (
              <Button variant="ghost" size="sm" onClick={toggleSidebar}>
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            )}
            <h1 className="text-xl font-bold">GhostSurf VPN</h1>
          </div>
          <Button variant="ghost" size="sm">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <div className="flex">
        {(!isMobile || sidebarOpen) && (
          <aside className={`${isMobile ? 'fixed inset-y-0 left-0 z-50 w-80 bg-background border-r' : 'w-80 border-r'} p-4 space-y-4`}>
            <ServerList selectedServer={selectedServer} onServerSelect={setSelectedServer} />
            <StatsPanel isConnected={isConnected} connectionTime={connectionTime} dataUsed={dataUsed} />
          </aside>
        )}

        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="dashboard" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
              <TabsContent value="dashboard" className="mt-6">
                <VPNDashboard onConnect={handleConnect} onDisconnect={handleDisconnect} isConnected={isConnected} />
              </TabsContent>
              <TabsContent value="security" className="mt-6">
                <SecurityDashboard isConnected={isConnected} selectedServer={selectedServer} />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>

      {isMobile && sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleSidebar} />
      )}
    </div>
  );
};

export default AppLayout;