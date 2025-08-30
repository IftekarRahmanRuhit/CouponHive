# 🎯 CouponHive

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.15-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-11.0.2-FFCA28?style=for-the-badge&logo=firebase)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

> **Your ultimate destination for exclusive coupons and savings** 💰

## 📖 Description

A feature-rich platform where users can access a variety of coupon codes for different e-commerce platforms, browse ongoing discounts, and unlock exclusive deals. This project also includes user authentication, password validation, and profile management to ensure a personalized and secure experience.

## 🌐 Live Demo

**[🚀 Visit the Live Website](https://couponhive-46f22.web.app/)**

---

## 🎯 Purpose

The **Coupon Collecting Website** aims to provide users with an easy-to-use platform to discover and collect coupon codes for various e-commerce brands. Users can create an account, log in, and enjoy a secure experience while exploring the latest discounts and offers. Only authenticated users can view brand details and access exclusive coupon codes.

## ✨ Key Features

### 🔐 Authentication & Security
- **User Authentication**: Secure login and registration system using Firebase
- **Password Validation**: Ensures strong password requirements during registration
- **Forgot Password**: Secure password reset via email link
- **Google Sign-In**: One-click authentication with Google accounts
- **Profile Management**: Update and manage user profile information

### 🛍️ Shopping & Coupons
- **Brand Discovery**: Browse through extensive brand collections
- **Coupon Codes**: Access exclusive, verified coupon codes
- **Real-time Search**: Find brands and deals instantly
- **Category Filtering**: Organized shopping by product categories
- **Exclusive Deals**: Special offers and limited-time promotions

### 🎨 User Experience
- **Responsive Design**: Fully optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Integrated with CSS animations and transitions
- **Interactive UI**: Modern, intuitive interface with hover effects
- **Toast Notifications**: Real-time feedback and updates
- **Loading States**: Smooth user experience during data fetching

### 📱 Technical Features
- **Progressive Web App**: Fast, reliable, and engaging
- **SEO Optimized**: Search engine friendly structure
- **Performance**: Optimized for speed and efficiency
- **Accessibility**: WCAG compliant design patterns

## 🛠️ Technologies Used

### Frontend
- **[React.js](https://reactjs.org/)** (18.3.1) - Core library for building user interfaces
- **[React Router](https://reactrouter.com/)** (6.28.0) - Client-side routing
- **[Tailwind CSS](https://tailwindcss.com/)** (3.4.15) - Utility-first CSS framework
- **[DaisyUI](https://daisyui.com/)** (4.12.14) - Tailwind CSS component library
- **[Vite](https://vitejs.dev/)** (5.4.10) - Fast build tool and dev server

### UI/UX Libraries
- **[React Icons](https://react-icons.github.io/react-icons/)** (5.3.0) - Scalable vector icons
- **[Animate.css](https://animate.style/)** (4.1.1) - CSS animation library
- **[React Hot Toast](https://react-hot-toast.com/)** (2.4.1) - Toast notifications
- **[React Fast Marquee](https://www.react-fast-marquee.com/)** (1.6.5) - Scrolling text effects
- **[Lucide React](https://lucide.dev/)** (0.542.0) - Beautiful & consistent icon toolkit

### Backend & Authentication
- **[Firebase](https://firebase.google.com/)** (11.0.2) - Authentication, hosting, and backend services
- **[LocalForage](https://localforage.github.io/localForage/)** (1.10.0) - Offline data storage

### Development Tools
- **[ESLint](https://eslint.org/)** (9.13.0) - Code linting and formatting
- **[PostCSS](https://postcss.org/)** (8.4.49) - CSS processing
- **[Autoprefixer](https://autoprefixer.github.io/)** (10.4.20) - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/couponhive.git
   cd couponhive
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password and Google Sign-in)
   - Copy your Firebase configuration to `src/Firebase/Firebase.init.js`

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 📁 Project Structure

```
couponhive/
├── public/                 # Static assets
├── src/
│   ├── Components/        # React components
│   │   ├── MainLayout/   # Layout components
│   │   ├── Banner.jsx    # Hero banner component
│   │   ├── Brands.jsx    # Brand listing
│   │   ├── Login.jsx     # Authentication
│   │   └── ...           # Other components
│   ├── Firebase/          # Firebase configuration
│   ├── Providers/         # Context providers
│   ├── Routes/            # Application routing
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── package.json           # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🌟 Key Components

### Banner Component
- **Interactive Carousel**: Auto-playing slides with manual controls
- **Responsive Design**: Adapts to all screen sizes
- **Call-to-Action**: Direct links to key sections

### Brands Component
- **Search Functionality**: Real-time brand filtering
- **Grid Layout**: Responsive card-based design
- **Rating System**: User feedback and brand credibility

### Authentication System
- **Firebase Integration**: Secure user management
- **Form Validation**: Client-side and server-side validation
- **Social Login**: Google authentication support

## 🎨 Design System

### Color Palette
- **Primary**: Orange (#E1713B) - Brand identity and CTAs
- **Secondary**: Gray scale - Text and backgrounds
- **Accent**: Blue tones - Interactive elements
- **Success/Error**: Green/Red - Status indicators

### Typography
- **Display**: Poppins - Headings and titles
- **Body**: Inter - Body text and content

### Components
- **Cards**: Elevated design with hover effects
- **Buttons**: Gradient backgrounds with smooth transitions
- **Forms**: Clean, accessible input fields
- **Navigation**: Sticky header with smooth scrolling

## 📱 Responsive Breakpoints

- **Mobile**: 375px+ (xs)
- **Tablet**: 768px+ (md)
- **Desktop**: 1024px+ (lg)
- **Large Desktop**: 1280px+ (xl)
- **2XL**: 1536px+ (2xl)

## 🔒 Security Features

- **Firebase Authentication**: Industry-standard security
- **Protected Routes**: Authentication-required pages
- **Input Validation**: XSS and injection prevention
- **Secure API**: HTTPS-only communication

## 🚀 Performance Optimizations

- **Code Splitting**: Route-based code splitting
- **Lazy Loading**: Component-level lazy loading
- **Image Optimization**: Responsive images with proper formats
- **Bundle Optimization**: Tree shaking and minification



## 🙏 Acknowledgments

- **Firebase** for authentication and hosting services
- **Tailwind CSS** for the utility-first CSS framework
- **React Community** for the amazing ecosystem
- **Unsplash** for high-quality images

---

<div align="center">

**Made with ❤️ by [Iftekar Rahman Ruhit]**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/IftekarRahmanRuhit)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/iftekar-rahman-ruhit/)

</div>