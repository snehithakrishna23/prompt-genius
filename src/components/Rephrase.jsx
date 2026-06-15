import { useState } from 'react'
import { useClaude } from '../useClaude.js'
import OutputBox from './OutputBox.jsx'
import './Tool.css'

const GOALS = [
  { id: 'clearer', label: 'Make it clearer', desc: 'easier to understand' },
  { id: 'concise', label: 'Make it concise', desc: 'remove fluff, cut length' },
  { id: 'simpler', label: 'Simplify language', desc: 'plain everyday words' },
  { id: 'stronger', label: 'Make it stronger', desc: 'more impactful' },
  { id: 'formal', label: 'More formal', desc: 'professional register' },
  { id: 'casual', label: 'More casual', desc: 'conversational tone' },
]

const goalMap = {
  clearer: 'make it clearer and easier to understand',
  concise: 'make it more concise — remove fluff without losing meaning',
  simpler: 'simplify the language — use plain everyday words',
  stronger: 'make it stronger and more impactful',
  formal: 'make it more formal and professional',
  casual: 'make it more casual and conversational',
}

export default function Rephrase() {
  const [input, setInput] = useState('')
  const [goal, setGoal] = useState('clearer')
  const { run, loading, result, error } = useClaude()

  function handleSubmit() {
    if (!input.trim()) return
    const system = `You are a writing clarity expert. Rewrite text based on a specific goal. Return only the rewritten version — no explanation, no commentary.`
    const prompt = `Rewrite the following text to ${goalMap[goal]}:\n\n${input}`
    run(prompt, system)
  }

  return (
    <div className="tool">
      <div className="tool-header">
        <h2 className="tool-title">Say it better</h2>
        <p className="tool-desc">Paste any text and choose a goal — get an improved version instantly.</p>
      </div>

      <label className="field-label" htmlFor="rephrase-input">Text to improve</label>
      <textarea
        id="rephrase-input"
        className="textarea"
        rows={6}
        placeholder="e.g. Due to the fact that we are currently experiencing some issues with the aforementioned system..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <label className="field-label" style={{ marginTop: '1rem' }}>Goal</label>
      <div className="goal-grid">
        {GOALS.map(g => (
          <button key={g.id} className={`goal-chip ${goal === g.id ? 'selected' : ''}`} onClick={() => setGoal(g.id)}>
            <span className="goal-label">{g.label}</span>
            <span className="goal-desc">{g.desc}</span>
          </button>
        ))}
      </div>

      <button className="run-btn" onClick={handleSubmit} disabled={loading || !input.trim()}>
        {loading ? 'Rephrasing…' : '✦ Rephrase it'}
      </button>

      <OutputBox result={result} error={error} loading={loading} />
    </div>
  )
}
