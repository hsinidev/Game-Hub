# Game Hub

Welcome to Game Hub, a modern gaming platform built with React and TypeScript. This application provides a seamless, ad-free gaming experience with a vast collection of unblocked games that can be played directly in your browser in fullscreen mode.

## Features

- **Extensive Game Library:** Access a wide variety of games across multiple genres.
- **Dynamic Routing:** Each game has its own dedicated page, making it easy to share and access.
- **Responsive Design:** Enjoy a seamless experience on both desktop and mobile devices.
- **SEO Optimized:** Includes a `robots.txt` and `sitemap.xml` to ensure search engines can easily crawl and index the site.
- **Easy to Extend:** Adding new games is as simple as updating a single file.

## Getting Started

To get started with this project, clone the repository and follow the setup instructions below.

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/game-hub.git
   cd game-hub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Project

To start the development server, run the following command:

```bash
npm start
```

This will open the application in your default browser at `http://localhost:3000`.

## Adding New Games

To add a new game to the library, follow these steps:

1. **Open the `constants.ts` file:**
   This file is located in the `src` directory and contains the list of all game URLs.

2. **Add the new game URL:**
   Append the URL of the new game to the `gameUrls` array. The application will automatically process the URL to generate the game's ID, name, and thumbnail.

   ```typescript
   const gameUrls = [
     // ...existing game URLs
     "https://playszgames.com/wp-content/uploads/unblocked/new-game.html",
   ];
   ```

3. **Save the file:**
   The application will automatically update to include the new game in the library.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
