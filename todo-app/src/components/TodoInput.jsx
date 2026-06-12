import { useState } from 'react'
import { MdAdd } from 'react-icons/md'

/**
 * TodoInput Component
 * Handles input field and adding new todos
 */
export default function TodoInput({ onAddTodo, darkMode }) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddTodo(inputValue)
    setInputValue('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      handleSubmit(e)
    }
  }

  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <input
          type="text"
          className={`todo-input ${darkMode ? 'dark' : 'light'}`}
          placeholder="Add a new task... ✨"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          autoFocus
        />
        <button
          type="submit"
          className="add-btn"
          disabled={!inputValue.trim()}
          title="Add task"
        >
          <MdAdd size={24} />
          <span>Add</span>
        </button>
      </div>
      {inputValue && (
        <div className="input-hint">
          Press <kbd>Enter</kbd> or click <strong>Add</strong> to create task
        </div>
      )}
    </form>
  )
}
