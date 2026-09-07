import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// A simple welcome page or import can be added here Demo Component
const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-medium text-center mb-8">
          Design system component library
        </h1>
        <div className="text-center text-muted-foreground">
          <p className="mb-4">Text shadcn/ui Text</p>
          <p>Text Storybook Text</p>
        </div>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 