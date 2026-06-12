import { useState } from 'react'
import { MdDelete, MdEdit, MdCheck, MdClose } from 'react-icons/md'

/**
 * TodoItem Component
 * Displays individual todo items with edit and delete functionality
 * Features: completion toggle, edit mode, delete with animations
 */
export default function TodoItem({
  todo,
  isEditing,
  editText,
  onToggle,
  onDelete,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
  onEditTextChange,
  darkMode,
}) {
  const [isHovered, setIsHovered] = useState(false)

  const handleEditKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSaveEdit()
    } else if (e.key === 'Escape') {
      onCancelEdit()
    }
  }

  return (
    <div
      className={`todo-item ${todo.completed ? 'completed' : ''} ${
        isHovered ? 'hovered' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Checkbox */}
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={onToggle}
          id={`todo-${todo.id}`}
        />
        <label htmlFor={`todo-${todo.id}`} className="checkbox-label">
          <span className="checkmark">✓</span>
        </label>
      </div>

      {/* Todo Text or Edit Input */}
      {isEditing ? (
        <div className="edit-container">
          <input
            type="text"
            className="edit-input"
            value={editText}
            onChange={(e) => onEditTextChange(e.target.value)}
            onKeyPress={handleEditKeyPress}
            autoFocus
          />
        </div>
      ) : (
        <p className="todo-text">{todo.text}</p>
      )}

      {/* Action Buttons */}
      <div className="action-buttons">
        {isEditing ? (
          <>
            <button
              className="action-btn save-btn"
              onClick={onSaveEdit}
              title="Save"
            >
              <MdCheck size={18} />
            </button>
            <button
              className="action-btn cancel-btn"
              onClick={onCancelEdit}
              title="Cancel"
            >
              <MdClose size={18} />
            </button>
          </>
        ) : (
          <>
            <button
              className="action-btn edit-btn"
              onClick={onStartEdit}
              title="Edit"
            >
              <MdEdit size={18} />
            </button>
            <button
              className="action-btn delete-btn"
              onClick={onDelete}
              title="Delete"
            >
              <MdDelete size={18} />
            </button>
          </>
        )}
      </div>
    </div>
  )
}
