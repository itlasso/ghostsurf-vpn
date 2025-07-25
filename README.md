# GhostSurf Mobile VPN

A modern, responsive VPN dashboard application built with React, TypeScript, and Tailwind CSS. Features a sleek mobile-first design with server selection, connection statistics, and real-time status monitoring.

## 🚀 Features

- **Modern UI/UX**: Clean, mobile-first design with dark/light theme support
- **Server Selection**: Choose from multiple global server locations
- **Real-time Stats**: Monitor connection speed, latency, and data usage
- **Security Features**: Encryption, IP masking, and tunneling protection
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Animated Interactions**: Smooth transitions and connection animations
- **TypeScript**: Full type safety and enhanced developer experience

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **WireGuard** (for VPN functionality)

## 🛠️ Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd ghostsurf-mobile-vpn
```

### 2. Install dependencies
```bash
npm install
```
or
```bash
yarn install
```

### 3. WireGuard Setup

#### For Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install wireguard
```

#### For macOS:
```bash
brew install wireguard-tools
```

#### For Windows:
1. Download WireGuard from https://www.wireguard.com/install/
2. Install the MSI package
3. Add WireGuard to your system PATH

#### Configuration:
1. Generate key pair:
   ```bash
   wg genkey | tee privatekey | wg pubkey > publickey
   ```

2. Create configuration file `/etc/wireguard/wg0.conf`:
   ```ini
   [Interface]
   PrivateKey = <your-private-key>
   Address = 10.0.0.2/24
   DNS = 1.1.1.1
   
   [Peer]
   PublicKey = <server-public-key>
   Endpoint = <server-ip>:51820
   AllowedIPs = 0.0.0.0/0
   ```

3. Start WireGuard:
   ```bash
   sudo wg-quick up wg0
   ```

### 4. Start the development server
```bash
npm run dev
```
or
```bash
yarn dev
```

### 5. Open your browser
Navigate to `http://localhost:5173` to view the application

## 🔒 Security Features

### Encryption
- **AES-256 Encryption**: Military-grade encryption for all traffic
- **ChaCha20-Poly1305**: Modern authenticated encryption
- **Perfect Forward Secrecy**: New keys for each session

### IP Masking
- **Real IP Protection**: Hide your actual IP address
- **Geographic Spoofing**: Appear from different locations
- **DNS Leak Protection**: Prevent DNS queries from revealing identity

### Tunneling
- **WireGuard Protocol**: Modern, fast, and secure tunneling
- **Split Tunneling**: Route specific apps through VPN
- **Kill Switch**: Block internet if VPN disconnects

## 🏗️ Build for Production

1. **Create production build**
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```

2. **Preview production build**
   ```bash
   npm run preview
   ```
   or
   ```bash
   yarn preview
   ```

3. **Deploy**
   The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 📱 Usage

### Basic Operations
- **Connect/Disconnect**: Use the main button to toggle VPN connection
- **Server Selection**: Choose from available server locations in the sidebar
- **Statistics**: Monitor real-time connection stats in the stats panel
- **Security Dashboard**: View encryption, IP masking, and tunneling status
- **Theme Toggle**: Switch between light and dark themes

### Mobile Experience
- Optimized touch interactions
- Responsive layout adapts to screen size
- Swipe-friendly navigation

## 🧰 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **State Management**: React Context API
- **Routing**: React Router DOM
- **Theme**: next-themes for dark/light mode
- **VPN Protocol**: WireGuard

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── AppLayout.tsx   # Main app layout
│   ├── VPNDashboard.tsx # Main dashboard
│   ├── ServerList.tsx  # Server selection
│   ├── StatsPanel.tsx  # Statistics display
│   ├── SecurityDashboard.tsx # Security overview
│   ├── EncryptionPanel.tsx   # Encryption status
│   ├── IPMaskingPanel.tsx    # IP masking info
│   └── TunnelingPanel.tsx    # Tunneling status
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── main.tsx           # App entry point
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Include steps to reproduce the problem

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Setup
No additional environment variables required for basic functionality.

---

**Note**: This is a UI demonstration app. For production VPN functionality, additional backend services and native mobile app development would be required.