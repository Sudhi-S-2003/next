'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface RedirectComponentProps {
  position: string; 
}

function RedirectComponent({ position }: RedirectComponentProps) {
  const router = useRouter()
  const [redirecting, setRedirecting] = useState(false)

  const handleRedirect = (position: string) => {
    setRedirecting(true); 
    if (position === 'home') {
      router.push('/')
    } else if (position === 'seller') {
      router.push('/Seller')
    } else if (position === 'buyer') {
      router.push('/Buyer')
    }
  }

  return (
    <div>
      <button 
        onClick={() => handleRedirect(position)} 
        disabled={redirecting}
        className="btn btn-primary">
        Go to {position}
      </button>
    </div>
  )
}

export default RedirectComponent
