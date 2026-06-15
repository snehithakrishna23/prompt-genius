import { useState } from 'react'
import MeetingNotes from './components/MeetingNotes.jsx'
import EmailTone from './components/EmailTone.jsx'
import Rephrase from './components/Rephrase.jsx'
import './App.css'

const TABS = [
  { id: 'notes', label: 'Meeting notes', icon: '📋' },
  { id: 'email', label: 'Email tone', icon: '✉️' },
  { id: 'rephrase', label: 'Say it better', icon: '✏️' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('notes')

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <span className="brand-mark">✦</span>
            <span className="brand-name">WriteAI</span>
          </div>
          <p className="brand-tagline">Your AI writing toolkit</p>
        </div>
      </header>

      <main className="main">
        <nav className="tab-nav" role="tablist">
          {TABS.map(tab => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="panel">
          {activeTab === 'notes' && <MeetingNotes />}
          {activeTab === 'email' && <EmailTone />}
          {activeTab === 'rephrase' && <Rephrase />}
        </div>
      </main>
    </div>
  )
}
