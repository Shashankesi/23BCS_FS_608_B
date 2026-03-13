import PostFetcher from './components/PostFetcher'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Post Fetcher App</h1>
      </header>
      <main>
        <PostFetcher />
      </main>
    </div>
  )
}

export default App
