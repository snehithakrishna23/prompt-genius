import { useState } from 'react'
import { useClaude } from '../useClaude.js'
import OutputBox from './OutputBox.jsx'
import './Tool.css'

const TONES = [
  { id: 'professional', label: 'Professional' },
  { id: 'friendly', label: 'Friendly' },
  { id: 'assertive', label: 'Assertive' },
  { id: 'concise', label: 'Concise' },
  { id: 'empathetic', label: 'Empathetic' },
]

export default function EmailTone() {
  const [input, setInput] = useState('')
  const [tone, setTone] = useState('professional')
  const { run, loading, result, error } = useClaude()

  function handleSubmit() {
    if (!input.trim()) return
    const system = `You are an expert email editor. Rewrite emails to match a requested tone while keeping the same core message and intent. Return only the rewritten email — no intro, no explanation, no commentary.`
    const prompt = `Rewrite this email to sound ${tone}:\n\n${input}`
    run(prompt, system)
  }

  return (
    <div className="tool">
      <div className="tool-header">
        <h2 className="tool-title">Email tone fixer</h2>
        <p className="tool-desc">Paste your draft, pick a tone, and get a rewritten version that lands the way you mean it.</p>
      </div>

      <label className="field-label" htmlFor="email-input">Your email draft</label>
      <textarea
        id="email-input"
        className="textarea"
        rows={7}
        placeholder="e.g. hey so i still haven't got the report, it's been a week and this is really frustrating..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <label className="field-label" style={{ marginTop: '1rem' }}>Rewrite as</label>
      <div className="tone-grid">
        {TONES.map(t => (
          <button key={t.id} className={`tone-chip ${tone === t.id ? 'selected' : ''}`} onClick={() => setTone(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      <button className="run-btn" onClick={handleSubmit} disabled={loading || !input.trim()}>
        {loading ? 'Rewriting…' : '✦ Fix email tone'}
      </button>

      <OutputBox result={result} error={error} loading={loading} />
    </div>
  )
}
