'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Something went wrong</h2>
          <button
            onClick={() => reset()}
            style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid #ccc', cursor: 'pointer', background: '#f5f5f5' }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
