# X Clone UI

A modern, responsive X (formerly Twitter) clone built with Next.js 15, React 19, and TypeScript. This project demonstrates a feature-rich social media interface with custom responsive layouts, image upload capabilities, and interactive post components.

## Features

- **Responsive Layout** - Custom Tailwind breakpoints optimized for different screen sizes
- **Post Creation** - Share posts with text and image upload support
- **Image Upload** - Integrated ImageKit for efficient image handling and optimization
- **Post Interactions** - Like, repost, comment, and share functionality
- **Feed System** - Dynamic feed with post rendering and real-time updates
- **Navigation Bars** - Left sidebar navigation and right sidebar widgets
- **Custom Theming** - Dark mode design with X-inspired color palette
- **TypeScript** - Full type safety across the application

## Tech Stack

- **Framework:** [Next.js 15.1.0](https://nextjs.org/) - React framework with App Router
- **UI Library:** [React 19](https://react.dev/) - Latest React with concurrent features
- **Language:** [TypeScript 5](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling:** [Tailwind CSS 3.4.1](https://tailwindcss.com/) - Utility-first CSS framework
- **Image Handling:** [ImageKit](https://imagekit.io/) - Image optimization and CDN
- **Linting:** [ESLint 9](https://eslint.org/) - Code quality and consistency

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20.x or higher
- **npm**, **yarn**, **pnpm**, or **bun** package manager

## Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd x-clone-ui
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Set up environment variables** (if needed)

Create a `.env.local` file in the root directory and add your ImageKit credentials:

```env
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

## Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page auto-updates as you edit files in the `src` directory.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
x-clone-ui/
├── public/              # Static assets
│   ├── general/        # General images
│   ├── icons/          # Icon assets
│   └── svg/            # SVG files
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── layout.tsx  # Root layout with navigation
│   │   └── page.tsx    # Home page
│   ├── components/     # React components
│   │   ├── Feed.tsx           # Post feed container
│   │   ├── Post.tsx           # Individual post component
│   │   ├── PostInfo.tsx       # Post metadata display
│   │   ├── PostInteractions.tsx  # Like, comment, share buttons
│   │   ├── Share.tsx          # Post creation form
│   │   ├── Image.tsx          # Image display component
│   │   ├── ImageEditor.tsx    # Image upload interface
│   │   ├── LeftBar.tsx        # Left navigation sidebar
│   │   └── RightBar.tsx       # Right widgets sidebar
│   └── actions.tsx     # Server actions
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies
```

## Custom Configuration

### Tailwind CSS Custom Breakpoints

This project uses custom responsive breakpoints optimized for the X clone layout:

```typescript
screens: {
  xsm: "500px",   // Extra small devices
  sm: "600px",    // Small devices
  md: "690px",    // Medium devices
  lg: "988px",    // Large devices (shows right sidebar)
  xl: "1078px",   // Extra large devices
  xxl: "1265px"   // 2X large devices (maximum width)
}
```

### Custom Color Palette

```typescript
colors: {
  textGray: "#71767b",        // Secondary text
  textGrayLight: "#e7e9ea",   // Primary text
  borderGray: "#2f3336",      // Border color
  inputGray: "#202327",       // Input backgrounds
  iconBlue: "#1d9bf0",        // Blue accent (like, link)
  iconGreen: "#00ba7c",       // Green accent (repost)
  iconPink: "#f91880",        // Pink accent (like filled)
}
```

## Components Overview

- **Feed** - Main feed container that displays posts
- **Post** - Individual post with user info, content, and interactions
- **PostInfo** - Displays post metadata (username, timestamp, etc.)
- **PostInteractions** - Interactive buttons for engagement (like, repost, comment, share)
- **Share** - Post creation interface with text and image upload
- **ImageEditor** - Image upload component with layout options
- **Image** - Optimized image display using ImageKit
- **LeftBar** - Navigation sidebar with main menu items
- **RightBar** - Widgets sidebar (trends, suggestions, etc.)

## Key Features Implementation

### Responsive Layout

The application uses a three-column layout:
- **Left Sidebar** - Visible on all screens, contains navigation
- **Main Feed** - Center column with posts, min-width enforced on large screens
- **Right Sidebar** - Hidden on mobile/tablet, visible on lg+ screens

### Image Upload

Images are handled through ImageKit integration:
- Client-side upload with progress tracking
- Automatic optimization and CDN delivery
- Responsive layout options for post images

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and React
