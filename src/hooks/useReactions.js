import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-reactions'

function read() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch {
    return new Set()
  }
}

/**
 * Which posts the visitor has liked, kept in localStorage so the profile
 * remembers them between visits. Private to the browser — nothing is sent
 * anywhere.
 */
export function useReactions() {
  const [liked, setLiked] = useState(read)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...liked]))
    } catch {
      /* private mode, or storage blocked — the toggle still works in-session */
    }
  }, [liked])

  const toggle = useCallback((id) => {
    setLiked((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  return { liked, toggle }
}
