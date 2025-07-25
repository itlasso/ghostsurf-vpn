# GhostSurf Mobile VPN

A modern, responsive VPN dashboard application built with React, TypeScript, and Tailwind CSS. Features a sleek mobile-first design with server selection, connection statistics, and real-time status monitoring.

## 🚀 Features

- **Modern UI/UX**: Clean, mobile-first design with dark/light theme support
- **Server Selection**: Choose from multiple global server locations
- **Real-time Stats**: Monitor connection speed, latency, and data usage
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Animated Interactions**: Smooth transitions and connection animations
- **TypeScript**: Full type safety and enhanced developer experience

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher) or **yarn** (v1.22.0 or higher)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ghostsurf-mobile-vpn
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

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

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── AppLayout.tsx   # Main app layout
│   ├── VPNDashboard.tsx # Main dashboard
│   ├── ServerList.tsx  # Server selection
│   └── StatsPanel.tsx  # Statistics display
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