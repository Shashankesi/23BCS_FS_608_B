import { useState, useEffect } from 'react'
import { MdDarkMode, MdLightMode, MdAdd, MdClose } from 'react-icons/md'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import ProgressBar from './ProgressBar'
import '../styles/Todo.css'

/**
 * Main TodoApp Component
 * Handles all todo operations, filtering, and state management
 */
export default function TodoApp({ darkMode, toggleDarkMode }) {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all') // all, active, completed
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos))
      } catch (error) {
        console.error('Error loading todos:', error)
      }
    }
  }, [])

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Add a new todo
  const addTodo = (text) => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
      }
      setTodos([newTodo, ...todos])
    }
  }

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // Start editing a todo
  const startEdit = (id, text) => {
    setEditingId(id)
    setEditText(text)
  }

  // Save edited todo
  const saveEdit = (id) => {
    if (editText.trim()) {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, text: editText.trim() } : todo
        )
      )
    }
    setEditingId(null)
    setEditText('')
  }

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null)
    setEditText('')
  }

  // Filter todos based on selected filter
  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }

  const filteredTodos = getFilteredTodos()
  const completedCount = todos.filter(todo => todo.completed).length
  const completionPercentage = todos.length > 0 ? (completedCount / todos.length) * 100 : 0

  return (
    <div className={`todo-container ${darkMode ? 'dark' : 'light'}`}>
      {/* Header with Title and Dark Mode Toggle */}
      <div className="todo-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="title-icon">✨</span>
            Smart To-Do List
          </h1>
          <p className="app-subtitle">Stay organized and productive</p>
        </div>
        <button 
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          title={darkMode ? 'Light mode' : 'Dark mode'}
        >
          {darkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
        </button>
      </div>

      {/* Progress Bar */}
      <ProgressBar 
        completed={completedCount} 
        total={todos.length}
        percentage={completionPercentage}
      />

      {/* Input Section */}
      <TodoInput onAddTodo={addTodo} darkMode={darkMode} />

      {/* Statistics */}
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-label">Total Tasks</span>
          <span className="stat-value">{todos.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Completed</span>
          <span className="stat-value">{completedCount}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Remaining</span>
          <span className="stat-value">{todos.length - completedCount}</span>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="filter-container">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      {/* Todo List */}
      <div className="todo-list">
        {filteredTodos.length > 0 ? (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              isEditing={editingId === todo.id}
              editText={editText}
              onToggle={() => toggleTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
              onStartEdit={() => startEdit(todo.id, todo.text)}
              onSaveEdit={() => saveEdit(todo.id)}
              onCancelEdit={cancelEdit}
              onEditTextChange={setEditText}
              darkMode={darkMode}
            />
          ))
        ) : (
          <div className="empty-state">
            <p className="empty-icon">📝</p>
            <p className="empty-message">
              {todos.length === 0
                ? 'No tasks yet. Add one to get started!'
                : `No ${filter} tasks`}
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="todo-footer">
        <p>Made with <span className="heart">❤️</span> for productivity lovers</p>
      </div>
    </div>
  )
}
