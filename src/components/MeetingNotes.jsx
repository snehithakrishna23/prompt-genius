import { useState } from 'react'
import { useClaude } from '../useClaude.js'
import OutputBox from './OutputBox.jsx'
import './Tool.css'

const SYSTEM = `You are a meeting notes assistant. Take raw, messy meeting notes and transform them into a clean structured summary.

Format with these sections (only include sections that have content):
📋 Summary (1-2 sentence overview)
✅ Action items (bullet list: who → what → by when, if mentioned)
🔑 Key decisions
❓ Open questions / unclear items
📅 Next steps

Keep it concise and scannable. Plain text only.`

export default function MeetingNotes() {
  const [input, setInput] = useState('')
  const { run, loading, result, error } = useClaude()

  function handleSubmit() {
    if (!input.trim()) return
    run(input, SYSTEM)
  }

  return (
    <div className="tool">
      <div className="tool-header">
        <h2 className="tool-title">Meeting notes cleaner</h2>
        <p className="tool-desc">Paste raw, messy notes — get a structured summary with action items and decisions.</p>
      </div>

      <label className="field-label" htmlFor="notes-input">Your raw notes</label>
      <textarea
        id="notes-input"
        className="textarea"
        rows={7}
        placeholder="e.g. discussed q4 launch, john handles design by friday, budget still unclear, sarah to review copy, next sync tuesday 3pm..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <button className="run-btn" onClick={handleSubmit} disabled={loading || !input.trim()}>
        {loading ? 'Cleaning…' : '✦ Clean & structure notes'}
      </button>

      <OutputBox result={result} error={error} loading={loading} />
    </div>
  )
}
