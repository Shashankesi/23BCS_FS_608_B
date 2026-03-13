# Exp7 - Lazy Loading with React Router

A basic React application demonstrating lazy loading of pages using React.lazy() and Suspense.

## Features

- ✅ Lazy loading of pages for better performance
- ✅ React Router for navigation
- ✅ Basic and simple code structure
- ✅ Minimal CSS styling
- ✅ Pages: Home, About, Contact, Project, More

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## How Lazy Loading Works

- Pages are imported using `React.lazy()`
- `Suspense` component shows loading text while page is loading
- Pages load on demand (when user navigates)

## File Structure

```
exp7/
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Project.jsx
│   │   └── More.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
└── package.json
```
