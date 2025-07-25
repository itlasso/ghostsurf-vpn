import React from 'react';
import { TunnelingPanel } from './TunnelingPanel';
import { EncryptionPanel } from './EncryptionPanel';
import { IPMaskingPanel } from './IPMaskingPanel';

interface SecurityDashboardProps {
  isConnected: boolean;
  selectedServer: string;
}

const SecurityDashboard: React.FC<SecurityDashboardProps> = ({
  isConnected,
  selectedServer
}) => {
  const serverLocations: { [key: string]: string } = {
    'us-ny': 'New York, USA',
    'uk-london': 'London, UK',
    'de-berlin': 'Berlin, Germany',
    'jp-tokyo': 'Tokyo, Japan',
    'ca-toronto': 'Toronto, Canada'
  };

  return (
    <div className="space-y-4">
      <TunnelingPanel
        isConnected={isConnected}
        tunnelType="OpenVPN"
        encryptionLevel="AES-256"
      />
      
      <EncryptionPanel
        isConnected={isConnected}
        encryptionType="AES-256-GCM"
        keyStrength="256-bit"
      />
      
      <IPMaskingPanel
        isConnected={isConnected}
        realIP="192.168.1.100"
        maskedIP="203.45.67.89"
        location={serverLocations[selectedServer] || 'Unknown'}
      />
    </div>
  );
};

export default SecurityDashboard;