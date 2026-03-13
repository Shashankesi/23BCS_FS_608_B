# Exp6 - Post Fetcher

A React functional component application that fetches posts from the JSONPlaceholder API and displays them with navigation controls.

## Features

- ✅ Fetches data using `useEffect` and `useState` hooks
- ✅ Displays post title and body
- ✅ Navigate between posts with Previous/Next buttons
- ✅ Loading and error states
- ✅ Responsive design
- ✅ Built with Vite and React

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## API

Uses the JSONPlaceholder API: `https://jsonplaceholder.typicode.com/posts`

## Project Structure

```
exp6/
├── src/
│   ├── components/
│   │   ├── PostFetcher.jsx
│   │   └── PostFetcher.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
