'use client'

import React, { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Card, CardContent, Typography } from '@mui/material'

export default function SignupForm() {
  const router = useRouter()

  const firstNameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
  })

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    nextRef?: React.RefObject<HTMLInputElement>
  ) => {
    if (e.key === 'Enter' && nextRef?.current) {
      nextRef.current.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const firstName = firstNameRef.current?.value || ''
    const lastName = lastNameRef.current?.value || ''
    const email = emailRef.current?.value || ''
    const phone = phoneRef.current?.value || ''

    const newErrors = {
      firstName: !firstName.trim(),
      lastName: !lastName.trim(),
      email: !email.includes('@'),
      phone: !/^\d{10}$/.test(phone),
    }

    setErrors(newErrors)

    const hasError = Object.values(newErrors).some(Boolean)
    if (!hasError) {
      // Simulate sending data then redirect
      setTimeout(() => router.push('/'), 500)
    }
  }

  const inputStyle = (hasError: boolean) => ({
    padding: '0.5rem',
    margin: '0.5rem 0',
    border: hasError ? '2px solid red' : '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
  })

  return (
    <Card sx={{ maxWidth: 500, margin: '2rem auto' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            ref={firstNameRef}
            onKeyDown={(e) => handleKeyPress(e, lastNameRef)}
            style={inputStyle(errors.firstName)}
          />
          <input
            type="text"
            placeholder="Last Name"
            ref={lastNameRef}
            onKeyDown={(e) => handleKeyPress(e, emailRef)}
            style={inputStyle(errors.lastName)}
          />
          <input
            type="email"
            placeholder="Email"
            ref={emailRef}
            onKeyDown={(e) => handleKeyPress(e, phoneRef)}
            style={inputStyle(errors.email)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            ref={phoneRef}
            style={inputStyle(errors.phone)}
          />
          <Button type="submit" variant="contained" sx={{ mt: 2, width: '100%' }}>
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
