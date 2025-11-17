# Cryptoku - Elegant Cryptocurrency Price Tracker
Link = https://cryptoku-mu.vercel.app/

An elegant, mobile-first cryptocurrency tracking application with a premium black and gold design. Built with React, TypeScript, and Tailwind CSS, featuring real-time price updates from the CoinLore API.

![Cryptoku](https://img.shields.io/badge/version-1.0.0-gold)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-cyan)

## 🌟 Features

- **Live Cryptocurrency Data**: Real-time prices for top cryptocurrencies
- **Elegant Design**: Premium black and gold color scheme with smooth animations
- **Mobile-First**: Fully responsive design optimized for mobile devices
- **Instant Refresh**: One-tap refresh button for latest price updates
- **Top 10 Cryptos**: Displays rank, name, symbol, and USD price
- **Fast Performance**: Built with Vite for lightning-fast load times
- **Error Handling**: Robust error handling with user-friendly notifications

##  Screenshots

The app displays:
- Cryptocurrency rank
- Coin name and symbol
- Current price in USD
- Elegant card-based layout with hover effects
- Refresh button with loading animation

## 🛠️ Technologies Used

### Frontend
- **React 18.3.1** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework

### UI Components
- **shadcn/ui** - High-quality UI components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Sonner** - Toast notifications

### API
- **CoinLore API** - Free cryptocurrency data API
  - Endpoint: `https://api.coinlore.net/api/tickers/`
  - No authentication required
  - Real-time cryptocurrency prices

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd cryptoku
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 🏗️ Project Structure

```
cryptoku/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   └── CryptoList.tsx   # Main crypto list component
│   ├── pages/
│   │   ├── Index.tsx        # Home page
│   │   └── NotFound.tsx     # 404 page
│   ├── hooks/               # Custom React hooks
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── App.tsx              # Main app component
│   ├── index.css            # Global styles & design system
│   └── main.tsx             # App entry point
├── public/                  # Static assets
├── index.html              # HTML template
├── tailwind.config.ts      # Tailwind configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Project dependencies
```

## 🎨 Design System

### Color Palette
- **Primary Gold**: `hsl(45, 85%, 55%)`
- **Black Background**: `hsl(0, 0%, 7%)`
- **Card Background**: `hsl(0, 0%, 10%)`
- **Secondary Background**: `hsl(0, 0%, 15%)`

### Design Features
- Elegant gold accents on black background
- Smooth hover animations and transitions
- Glass-morphism effects on cards
- Gradient text effects
- Responsive card layouts
- Touch-friendly mobile interface

## 🔧 Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Production Build
```bash
npm run build        # Creates optimized production build in /dist
```

## 📊 API Documentation

### CoinLore API
The app uses the CoinLore public API to fetch cryptocurrency data.

**Endpoint**: `GET https://api.coinlore.net/api/tickers/`

**Response Format**:
```json
{
  "data": [
    {
      "id": "90",
      "rank": "1",
      "name": "Bitcoin",
      "symbol": "BTC",
      "price_usd": "27604.54",
      ...
    }
  ]
}
```

**Rate Limits**: No authentication required, reasonable rate limits apply.

## 🌐 Deployment

### Deploy to Production

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting provider:
   - Vercel
   - Netlify
   - GitHub Pages
   - Cloudflare Pages

### Environment Variables
No environment variables required - the app uses public APIs.

## 🔄 Features Roadmap

- [ ] Search and filter cryptocurrencies
- [ ] Price change indicators (24h change)
- [ ] Detailed coin pages
- [ ] Price charts and graphs
- [ ] Favorites/watchlist
- [ ] Multiple currency support
- [ ] Dark/light theme toggle
- [ ] Price alerts
- [ ] Historical data

## 🐛 Known Issues

None at the moment. If you find any bugs, please open an issue!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **CoinLore** for providing the free cryptocurrency API
- **shadcn/ui** for the beautiful UI components
- **Lucide** for the icon library
- **Tailwind CSS** for the styling framework

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

## 🔗 Links

- **Project Repository**: [GitHub Repository URL]
- **Live Demo**: [Live Application URL]
- **CoinLore API**: https://www.coinlore.com/cryptocurrency-data-api
- **Documentation**: [Documentation URL]

---

**Made with ❤️ and ☕ using React + TypeScript + Tailwind CSS**

*Last Updated: November 2025*
