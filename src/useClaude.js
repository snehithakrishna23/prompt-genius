import { useState } from 'react'

export function useClaude() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  async function run(prompt, system = '') {
    setLoading(true)
    setResult('')
    setError('')

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, system }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'API error')
      }

      setResult(data.text.trim())
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function reset() {
    setResult('')
    setError('')
  }

  return { run, loading, result, error, reset }
}
