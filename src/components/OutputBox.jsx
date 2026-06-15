import { useState } from 'react'
import './OutputBox.css'

export default function OutputBox({ result, error, loading }) {
  const [copied, setCopied] = useState(false)

  if (!loading && !result && !error) return null

  function copy() {
    navigator.clipboard.writeText(result).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  return (
    <div className="output-wrap">
      <div className="output-header">
        <span className="output-label">Result</span>
        {result && (
          <button className="copy-btn" onClick={copy}>
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        )}
      </div>
      <div className={`output-body ${error ? 'has-error' : ''}`}>
        {loading && (
          <div className="loading-row">
            <span className="spinner" />
            <span>Working on it…</span>
          </div>
        )}
        {error && <p className="error-text">{error}</p>}
        {!loading && result && <pre className="result-text">{result}</pre>}
      </div>
    </div>
  )
}
