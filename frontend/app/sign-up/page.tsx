'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { signup, verifyOtp } from '@/lib/api'

export default function SignUpPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [otpCode, setOtpCode] = useState('')
  const [isOtpStep, setIsOtpStep] = useState(false)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)

  const handleSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      await signup(email, password)
      setIsOtpStep(true)
      setNotice(`We sent a 6-digit verification code to ${email}`)
    } catch (err: any) {
      console.error('Sign up error:', err)
      // If user already exists, suggest sign in
      if (err?.status === 409 || err?.message?.includes('already registered')) {
        setError('This email is already registered. Please sign in instead.')
      } else {
        setError(err?.message || 'Could not create account. Please check your details.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      await verifyOtp(email, otpCode)
      router.push('/scan/new')
    } catch (err: any) {
      console.error('OTP error:', err)
      setError(err?.message || 'Invalid or expired code. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#c4b5fd] relative flex flex-col items-center justify-center p-6 overflow-hidden font-sans">
      
      {/* Background Grid Pattern */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');
        
        .font-serif {
          font-family: 'Instrument Serif', serif;
        }
        
        .bg-grid-auth {
          background-image: 
            linear-gradient(to right, rgba(9, 9, 11, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(9, 9, 11, 0.08) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}} />

      <div className="absolute inset-0 bg-grid-auth pointer-events-none" />

      {/* Floating Halftone Decorative Background Images */}
      <div className="absolute left-8 top-1/3 -translate-y-1/2 w-48 h-48 opacity-25 pointer-events-none select-none hidden md:block">
        <Image src="/decor/filing-cabinet.png" alt="" width={200} height={200} priority className="object-contain" />
      </div>
      <div className="absolute right-12 top-16 w-44 h-44 opacity-25 pointer-events-none select-none hidden md:block">
        <Image src="/decor/old-key.png" alt="" width={180} height={180} priority className="object-contain" />
      </div>
      <div className="absolute right-16 bottom-16 w-52 h-52 opacity-25 pointer-events-none select-none hidden md:block">
        <Image src="/decor/rotary-phone.png" alt="" width={220} height={220} priority className="object-contain" />
      </div>

      <div className="relative z-10 w-full max-w-[420px] flex flex-col items-center">
        
        {/* Top Logo / Mark */}
        <div className="w-12 h-12 bg-[#bce784] border-2 border-[#09090b] rounded-xl flex items-center justify-center shadow-[3px_3px_0px_#09090b] mb-3">
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-[#09090b]" />
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-4xl text-[#09090b] font-normal tracking-tight mb-1">
          HACK-BACK
        </h1>
        <p className="text-sm font-medium text-[#09090b]/70 mb-8">
          {isOtpStep ? 'Verify your email' : 'Create your account'}
        </p>

        {/* Main Card with Neo-brutalist Tilt */}
        <div className="relative w-full bg-[#fffdf8] border-2 border-[#09090b] rounded-2xl p-7 sm:p-9 shadow-[6px_6px_0px_#09090b] rotate-[-0.5deg]">
          
          {/* Overlapping Stamp / Badge */}
          <div className="absolute -top-7 -right-7 w-20 h-20 bg-[#bce784] border-2 border-[#09090b] rounded-full flex flex-col items-center justify-center shadow-[3px_3px_0px_#09090b] rotate-[12deg] z-20 pointer-events-none">
            <span className="text-[7px] font-mono font-bold tracking-tight uppercase text-[#09090b] leading-tight">
              EVIDENCE DECIDES
            </span>
            <span className="text-xs font-mono font-black text-[#09090b] my-0.5">
              CVSS v3.1
            </span>
            <span className="text-[6.5px] font-mono font-bold tracking-tight uppercase text-[#09090b] leading-tight">
              SCANS ONLY
            </span>
          </div>

          {!isOtpStep ? (
            <>
              {/* Social OAuth Buttons */}
              <div className="space-y-3 mb-5">
                <a
                  href="/api/auth/google/login"
                  className="w-full flex items-center justify-center gap-2.5 bg-white border-2 border-[#09090b] rounded-lg py-2.5 px-4 text-xs font-bold text-[#09090b] shadow-[2px_2px_0px_#09090b] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#09090b] transition-all"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 12.2c0 5-3.6 8.3-8.8 8.3A8.5 8.5 0 1 1 18 5.9" strokeLinecap="round" />
                    <path d="M21 12.2h-8.2" strokeLinecap="round" />
                  </svg>
                  <span>Continue with Google</span>
                </a>

                <a
                  href="/api/auth/github/login"
                  className="w-full flex items-center justify-center gap-2.5 bg-white border-2 border-[#09090b] rounded-lg py-2.5 px-4 text-xs font-bold text-[#09090b] shadow-[2px_2px_0px_#09090b] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#09090b] transition-all"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.19.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.56 22.29 24 17.79 24 12.5 24 5.87 18.63.5 12 .5z" />
                  </svg>
                  <span>Continue with GitHub</span>
                </a>
              </div>

              {/* Divider */}
              <div className="my-5 flex items-center gap-3">
                <span className="h-[1px] flex-1 bg-black/15" />
                <span className="text-[11px] font-mono text-[#09090b]/50 lowercase">or</span>
                <span className="h-[1px] flex-1 bg-black/15" />
              </div>

              {/* Form */}
              <form onSubmit={handleSignUpSubmit} className="space-y-4">
                {error && (
                  <div className="p-2.5 rounded-lg border-2 border-red-500 bg-red-50 text-red-700 text-xs font-medium">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-[#09090b] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-3.5 py-2 rounded-lg border-2 border-[#09090b] bg-white text-sm text-[#09090b] placeholder-[#09090b]/35 font-sans focus:outline-none focus:ring-2 focus:ring-[#bce784]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#09090b] mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      minLength={8}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Minimum 8 characters"
                      className="w-full px-3.5 py-2 pr-10 rounded-lg border-2 border-[#09090b] bg-white text-sm text-[#09090b] placeholder-[#09090b]/35 font-sans focus:outline-none focus:ring-2 focus:ring-[#bce784]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#09090b]/40 hover:text-[#09090b]"
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 py-3 bg-[#bce784] text-[#09090b] border-2 border-[#09090b] rounded-lg font-bold text-sm shadow-[3px_3px_0px_#09090b] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#09090b] transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Creating account…</span>
                    </>
                  ) : (
                    <span>Create account</span>
                  )}
                </button>
              </form>

              {/* Switch link */}
              <div className="mt-5 text-center">
                <span className="text-xs text-[#09090b]/70 font-medium">Already have an account? </span>
                <Link href="/sign-in" className="text-xs font-bold text-[#09090b] underline hover:text-[#6366f1]">
                  Sign in
                </Link>
              </div>
            </>
          ) : (
            /* OTP Verification Step */
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              {notice && (
                <div className="p-3 rounded-lg border-2 border-[#09090b] bg-[#bce784]/20 text-[#09090b] text-xs font-medium">
                  {notice}
                </div>
              )}

              {error && (
                <div className="p-2.5 rounded-lg border-2 border-red-500 bg-red-50 text-red-700 text-xs font-medium">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#09090b] mb-1.5">
                  6-Digit Verification Code
                </label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value.trim())}
                  placeholder="123456"
                  className="w-full px-3.5 py-2.5 text-center tracking-widest text-lg font-mono font-bold rounded-lg border-2 border-[#09090b] bg-white text-[#09090b] placeholder-[#09090b]/25 focus:outline-none focus:ring-2 focus:ring-[#bce784]"
                />
              </div>

              <button
                type="submit"
                disabled={loading || otpCode.length < 6}
                className="w-full py-3 bg-[#bce784] text-[#09090b] border-2 border-[#09090b] rounded-lg font-bold text-sm shadow-[3px_3px_0px_#09090b] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#09090b] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Verifying…</span>
                  </>
                ) : (
                  <span>Verify & Proceed</span>
                )}
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setIsOtpStep(false)}
                  className="text-xs font-semibold text-[#09090b]/70 hover:text-[#09090b] underline"
                >
                  ← Edit email address
                </button>
              </div>
            </form>
          )}

          {/* Small Disclaimer */}
          <div className="mt-6 pt-5 border-t border-black/10 text-[10.5px] leading-relaxed text-[#09090b]/60 text-center font-sans">
            This tool is <a href="https://github.com/0xAkshit/HackBack" target="_blank" rel="noreferrer" className="underline font-bold">open source</a>. Hosted scans are limited to keep this free to use. For unlimited use, support the repo or run it locally.
          </div>

        </div>

        {/* Back Link */}
        <Link href="/" className="mt-7 text-xs font-bold text-[#09090b] underline hover:text-[#6366f1] transition-colors">
          Back to hackback.
        </Link>

      </div>
    </div>
  )
}
