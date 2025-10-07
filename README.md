# Transcendence - Multiplayer Pong Game

A modern, feature-rich web-based Pong game with real-time multiplayer functionality, comprehensive user management, and enhanced security features. Built as the final project for 42 Abu Dhabi.

**Team Project | 5 Developers | June - September 2025**

## 🎮 Features

### Core Gameplay
- **Local Multiplayer**: Classic two-player Pong on the same device
- **Remote Multiplayer**: Play against opponents from different locations via WebSockets
- **AI Opponent**: Single-player mode with intelligent computer opponent
- **Tournament System**: Organize multi-player tournaments with automated matchmaking
- **Game Customization**: Adjustable settings including ball speed, paddle size, and visual themes

### User Management & Authentication
- **User Registration & Login**: Secure account creation and authentication
- **Profile Management**: Customizable user profiles with avatars and statistics
- **Remote Authentication**: Google Sign-In integration for convenient access
- **Two-Factor Authentication (2FA)**: Enhanced security with email/SMS verification
- **JWT Authorization**: Secure, stateless session management
- **Friend System**: Add friends and track online status
- **Match History**: Complete gameplay history with statistics

### Privacy & Security
- **GDPR Compliance**:
  - User data anonymization options
  - Local data management controls
  - Account deletion functionality
- **Secure Password Storage**: bcrypt hashing for all passwords
- **HTTPS Enforcement**: Secure WebSocket connections (wss://)

### User Experience & Accessibility
- **Responsive Design**: Full support across desktop, tablet, and mobile devices
- **Cross-Browser Compatibility**: Tested on Firefox, Chrome, Safari, and Edge
- **Accessibility Features**:
  - Screen reader support
  - Keyboard navigation
  - High-contrast mode options
  - Adjustable text sizes
- **User Statistics Dashboard**: Comprehensive analytics on wins, losses, and performance metrics
- **Game Statistics Dashboard**: Detailed match history and gameplay insights

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- Modern web browser (Firefox, Chrome, Safari, or Edge)

### Installation & Running

```bash
# Clone the repository
git clone https://github.com/yourusername/transcendence.git
cd transcendence_42

# Build and start all services using Makefile
make

# Access the application
# Navigate to: https://localhost (or your configured domain)
```

### Using the Makefile

```bash
# Start the application
make

# Clean up containers and volumes
make clean

# View logs
docker-compose logs -f
```

## 🏗️ Technology Stack

**Backend:**
- **Framework**: Fastify with Node.js
- **Database**: Prisma ORM with SQLite
- **Authentication**: JWT + OAuth2 (Google Sign-In)
- **Real-time Communication**: WebSockets
- **Language**: TypeScript/JavaScript

**Frontend:**
- **Styling Framework**: Tailwind CSS
- **Base Language**: TypeScript
- **Server**: NGINX
- **Game Rendering**: HTML Canvas
- **Build Tool**: Custom build script

**Security:**
- **SSL/TLS**: HTTPS enforcement with SSL certificates
- **Reverse Proxy**: NGINX for secure routing

**DevOps:**
- **Containerization**: Docker (3 separate containers)
- **Orchestration**: Docker Compose
- **Build Automation**: Makefile

## 📁 Project Structure

```
transcendence_42/
│
├── backend/
│   ├── config/               # Configuration files
│   ├── controller/           # Request handlers
│   ├── prisma/               # Prisma ORM schema and migrations
│   ├── public/               # Static assets
│   ├── routes/               # API route definitions
│   ├── schema/               # Validation schemas
│   ├── services/             # Business logic layer
│   ├── utils/                # Helper utilities
│   ├── cookies.txt           # Cookie configuration
│   ├── Dockerfile            # Backend container config
│   ├── entrypoint.sh         # Container startup script
│   ├── package.json          # Node.js dependencies
│   ├── package-lock.json
│   └── server.js             # Main server entry point
│
├── frontend/
│   ├── imgs/                 # Image assets
│   ├── src/                  # Source code (components, game logic, styles)
│   ├── .dockerignore
│   ├── build.sh              # Frontend build script
│   ├── Dockerfile            # Frontend container config
│   ├── index.html            # Main HTML file
│   ├── nginx.conf            # NGINX server configuration
│   ├── package.json          # Node.js dependencies
│   ├── package-lock.json
│   ├── tailwind.config.js    # Tailwind CSS configuration
│   └── tsconfig.json         # TypeScript configuration
│
├── security/
│   ├── ssl/                  # SSL/TLS certificates
│   ├── .dockerignore
│   ├── .gitignore
│   └── Dockerfile            # Security container config
│
├── .dockerignore
├── .gitignore
├── docker-compose.yml        # Multi-container orchestration
├── en.subject.pdf            # 42 project subject
├── get_ip.js                 # IP detection utility
└── Makefile                  # Build automation commands
```

## 🎯 Key Features Implementation

### Tournament System
- Multi-player tournament brackets
- Automated matchmaking between participants
- Registration system with unique aliases per tournament
- Real-time tournament progress tracking
- Match scheduling and notifications

### AI Opponent
- Predictive ball tracking algorithm
- Difficulty scaling based on gameplay
- Human-like paddle movement simulation
- Adapts to power-ups and game customization options

### Remote Multiplayer
- WebSocket-based real-time gameplay
- Network lag compensation
- Automatic disconnection handling
- Room-based matchmaking system

### User Dashboards

**Personal Dashboard:**
- Win/loss statistics
- Total games played
- Win rate percentage
- Recent match history
- Friend activity

**Game Statistics:**
- Detailed match breakdowns
- Performance metrics over time
- Comparison with other players
- Achievement tracking

## 🔒 Security Features

### Authentication & Authorization
- **Password Security**: bcrypt hashing with salt
- **2FA**: Time-based one-time passwords (TOTP)
- **JWT Tokens**: Secure, stateless session management
- **OAuth Integration**: Google Sign-In with proper token validation

### Data Protection
- **Input Validation**: Server-side validation for all user inputs
- **HTTPS/WSS**: Encrypted connections
- **GDPR Compliance**: User data control and deletion options

## 🌐 Accessibility Features

- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Keyboard Navigation**: Full keyboard control support
- **Visual Accessibility**:
  - High-contrast mode
  - Adjustable font sizes
  - Clear focus indicators
- **Responsive Design**: Works on all screen sizes
- **Browser Compatibility**: Firefox, Chrome, Safari, Edge

## 🎮 Game Customization Options

Players can customize their gaming experience with:
- **Ball Speed**: Slow, Medium, Fast, Extreme
- **Paddle Size**: Small, Medium, Large
- **Visual Themes**: Classic, Neon, Retro, Modern
- **Power-ups**: Enable/disable special abilities
- **Game Duration**: Time limits or score limits

## 👥 Team Collaboration

This project was developed using Agile methodologies:
- **Version Control**: Git with feature branching
- **Code Reviews**: Mandatory peer review process
- **Team Roles**:
  - **Technical Lead**: Sumyah Helal - Architecture, backend, team coordination
  - **Backend Developer**: API and database implementation
  - **Frontend Developer**: UI/UX and game rendering
  - **DevOps**: Docker configuration and deployment

## 📊 Statistics & Analytics

### User Statistics
- Total matches played
- Wins and losses
- Win percentage
- Longest winning streak
- Average game duration
- Favorite game settings

### Game Analytics
- Most active players
- Popular game modes
- Peak playing hours
- Tournament participation rates

## 📚 Learning Outcomes

This project demonstrates proficiency in:
- **Full-Stack Development**: Complete web application from database to UI
- **Real-Time Systems**: WebSocket implementation for live gameplay
- **Authentication & Security**: JWT, 2FA, OAuth, GDPR compliance
- **Responsive Design**: Cross-device, cross-browser compatibility
- **Database Design**: User data, relationships, and game state management
- **DevOps**: Containerization and deployment strategies
- **Team Collaboration**: Git workflows, code reviews, agile practices
- **Accessibility**: WCAG compliance and inclusive design

## 🐛 Known Limitations

- Single server instance (no horizontal scaling)
- Tournament system supports up to 16 players
- AI opponent has fixed difficulty levels
- Limited to Pong gameplay (classic mode)

## 👤 Contributors

**Team Lead:** Sumyah Helal  
**Institution:** 42 Abu Dhabi  
**Project Duration:** June 2025 - September 2025

**Team Members:** Maha Faisal, Sara Bakhit, Mai Ahmed, Munia Alkhidir

## 📄 License

This project was created as part of the 42 Abu Dhabi curriculum and is available for educational purposes.

## 🙏 Acknowledgments

- 42 Abu Dhabi for the project framework and peer learning environment
- The Fastify and Node.js communities for excellent documentation
- Google OAuth team for authentication integration support
- Our peers for code reviews and testing feedback

---

**Note**: This is an educational project completed as part of the 42 Abu Dhabi curriculum. The tournament system, user management, and all security features were implemented following modern web development best practices.
