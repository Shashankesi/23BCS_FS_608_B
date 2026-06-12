# Smart To-Do List - Modern Task Manager

A beautiful, modern React-based To-Do List web application with glassmorphic design, smooth animations, and full productivity features.

## ✨ Features

- ✅ **Add, Edit, and Delete Tasks** - Complete task management with real-time updates
- 🎯 **Task Completion** - Mark tasks as complete with animated checkboxes
- 🎨 **Beautiful UI** - Glassmorphic design with gradient colors and smooth animations
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📊 **Progress Tracking** - Visual progress bar showing completion percentage
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- 💾 **Local Storage** - Tasks persist even after closing the browser
- 🔍 **Smart Filtering** - Filter tasks by All, Active, or Completed status
- 📈 **Task Statistics** - View total tasks, completed tasks, and remaining tasks
- 🎭 **Rich Animations** - Smooth transitions and interactive effects
- 🎯 **Keyboard Support** - Press Enter to add tasks, Escape to cancel editing

## 🛠️ Tech Stack

- **React 18** - Modern UI library with hooks
- **Vite** - Fast build tool and dev server
- **React Icons** - Beautiful icon library
- **CSS3** - Glassmorphism, gradients, and animations
- **localStorage API** - Client-side data persistence

## 📁 Project Structure

```
todo-app/
├── public/                 # Static files
├── src/
│   ├── components/
│   │   ├── TodoApp.jsx     # Main app component
│   │   ├── TodoInput.jsx   # Input field component
│   │   ├── TodoItem.jsx    # Individual task component
│   │   └── ProgressBar.jsx # Progress tracking component
│   ├── styles/
│   │   ├── App.css         # App-level styles
│   │   └── Todo.css        # Todo component styles with animations
│   ├── App.jsx             # Root component
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
├── index.html              # HTML template
├── package.json            # Project dependencies
└── vite.config.js          # Vite configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory**
   ```bash
   cd todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🎯 Usage

### Adding a Task
1. Type your task in the input field
2. Press `Enter` or click the **Add** button
3. The task appears at the top of your list

### Managing Tasks
- **Complete**: Click the checkbox to mark as done (with animation)
- **Edit**: Click the edit icon to modify the task
- **Delete**: Click the delete icon to remove the task
- **Cancel Edit**: Press `Escape` or click cancel button

### Filtering Tasks
- **All**: View all tasks
- **Active**: View only incomplete tasks
- **Completed**: View only completed tasks

### Dark Mode
- Click the moon/sun icon in the header to toggle dark mode
- Your preference is saved automatically

### Tracking Progress
- Watch the animated progress bar fill as you complete tasks
- View the percentage of completion
- See statistics: Total Tasks, Completed, and Remaining

## 📝 Code Structure

### TodoApp.jsx
Main component that manages:
- Todo state with localStorage sync
- Add, delete, toggle, and edit operations
- Filter logic (All/Active/Completed)
- Statistics calculation
- Dark mode state

### TodoInput.jsx
Handles:
- Input field with focus management
- Form submission with Enter key support
- Input validation
- Helpful hints

### TodoItem.jsx
Displays:
- Individual task with checkbox
- Edit mode with inline editing
- Action buttons (edit, delete, save, cancel)
- Hover effects and animations

### ProgressBar.jsx
Shows:
- Visual progress indicator
- Completion percentage
- Task count information

## 🎨 Styling Highlights

- **Glassmorphism**: Semi-transparent cards with backdrop blur effect
- **Gradients**: Linear gradients for buttons, progress bar, and text
- **Animations**: 
  - Smooth slide-in animations for components
  - Floating animation for emojis
  - Bounce effect for checkmarks
  - Shine effect on progress bar
  - Scale and translate effects on hover
- **Dark Mode**: Complete theme switching with preserved localStorage preference
- **Responsive**: Mobile-first design with breakpoints at 600px, 768px, and 480px

## 💾 localStorage

Data is automatically saved to browser localStorage under the key `todos`. Structure:
```javascript
[
  {
    id: 1710374400000,
    text: "Task description",
    completed: false,
    createdAt: "2024-03-14T12:00:00.000Z"
  }
]
```

## 🔨 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with side-by-side elements
- **Tablet (768px)**: Optimized grid layouts
- **Mobile (480px)**: Single column with full-width inputs

## ✨ Animation Details

- **Entry Animations**: All components slide in with fade
- **Button Feedback**: Scale and shadow changes on hover/click
- **Checkbox Animation**: Bouncy checkmark animation
- **Progress Bar**: Smooth fill animation with shimmer effect
- **Delete Animation**: Item fades out gracefully
- **Edit Transition**: Smooth swap between view and edit modes

## 🎯 Future Enhancements

Possible features to add:
- Task categories/tags
- Due dates and reminders
- Task priorities
- Cloud sync
- Export to PDF/JSON
- Recurring tasks
- Collaborative lists
- Voice input

## 📝 Notes

- All tasks are stored locally - clearing browser data will remove tasks
- Tasks are loaded from localStorage on page refresh
- Dark mode preference is saved across sessions
- UI responds instantly with smooth animations
- No backend required - fully client-side

## 🤝 Contributing

Feel free to fork and submit pull requests for any improvements!

## 📄 License

This project is open source and available under the MIT License.

---

Made with ❤️ for productivity lovers. Enjoy organizing your tasks! ✨
