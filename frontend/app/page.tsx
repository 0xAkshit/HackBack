import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="font-sans antialiased min-h-screen flex flex-col overflow-x-hidden text-[#09090b]">
      
      {/* Google Fonts for Instrument Serif & Sans */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');
        
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 5.5rem;
        }

        .font-serif {
          font-family: 'Instrument Serif', serif;
        }
        
        /* Grid background pattern */
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(9, 9, 11, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(9, 9, 11, 0.05) 1px, transparent 1px);
          background-size: 32px 32px;
        }

        .manual-card {
          background: #ffffff;
          border: 1.5px solid #09090b;
          border-radius: 16px;
          box-shadow: 4px 4px 0px #09090b;
          transition: all 0.2s ease;
        }
        .manual-card:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px #09090b;
        }

        .btn-brutal {
          background-color: #bce784;
          border: 2px solid #09090b;
          box-shadow: 3px 3px 0px #09090b;
          transition: all 0.15s ease;
        }
        .btn-brutal:hover {
          transform: translate(1px, 1px);
          box-shadow: 2px 2px 0px #09090b;
        }
      `}} />

      {/* Navbar */}
      <header className="w-full bg-[#f6f3ec] border-b-2 border-[#09090b] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#bce784] border-2 border-[#09090b] flex items-center justify-center rounded-sm font-black text-xs">
              HB
            </div>
            <span className="font-mono font-black tracking-tight text-lg uppercase">HACK-BACK</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#09090b]/80">
            <a href="#how-it-works" className="hover:text-[#09090b]">How it works</a>
            <a href="#coverage" className="hover:text-[#09090b]">Coverage</a>
            <a href="#trust" className="hover:text-[#09090b]">Why HACK-BACK</a>
            <a href="#security" className="hover:text-[#09090b]">Security</a>
            <a href="#faq" className="hover:text-[#09090b]">FAQ</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="text-sm font-bold hover:opacity-75">Sign in</Link>
            <Link href="/sign-up" className="btn-brutal text-[#09090b] px-5 py-2 rounded-full text-sm font-bold">
              Sign up
            </Link>
          </div>
        </div>
      </header>

      {/* 1. Hero Section (Warm Beige + Grid) */}
      <section className="relative bg-[#f6f3ec] bg-grid-pattern pt-20 pb-28 px-6 flex flex-col items-center text-center border-b-2 border-[#09090b]">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="bg-[#bce784]/40 border border-[#09090b] text-[#09090b] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-[2px_2px_0px_#09090b]">
            Authorized scans only
          </span>
          <span className="bg-white border border-[#09090b] text-[#8b7cf8] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-[2px_2px_0px_#09090b]">
            Evidence decides · CVSS v3.1
          </span>
        </div>

        <h1 className="font-serif text-6xl sm:text-8xl md:text-[100px] leading-[0.9] tracking-tight max-w-4xl text-[#09090b] mb-6">
          Find security risks <br/>
          <span className="italic text-[#8b7cf8]">before</span> attackers do.
        </h1>

        <p className="text-lg md:text-xl text-[#09090b]/80 max-w-2xl font-medium mb-10">
          HACK-BACK scans your website with eight trusted security tools at once, then explains what it found in plain English, ranked by what to fix first.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link href="/scan/new" className="btn-brutal text-[#09090b] px-8 py-4 rounded-full font-bold text-lg">
            Start scanning free
          </Link>
          <a href="#coverage" className="bg-white text-[#09090b] border-2 border-[#09090b] px-8 py-4 rounded-full font-bold text-lg shadow-[3px_3px_0px_#09090b] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
            See what it checks →
          </a>
        </div>
      </section>

      {/* 2. How it works (Soft Peach Section) */}
      <section id="how-it-works" className="relative bg-[#fbdcc4] bg-grid-pattern py-24 px-6 border-b-2 border-[#09090b]">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#09090b]/60 mb-2 block">How it works</span>
          <h2 className="font-serif text-5xl sm:text-6xl text-[#09090b] mb-16">
            Three steps <span className="italic text-[#8b7cf8]">start to finish.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="manual-card p-8">
              <div className="font-mono text-sm font-bold text-[#8b7cf8] mb-4">01</div>
              <h3 className="font-serif text-3xl mb-3">Point it at a domain</h3>
              <p className="text-[#09090b]/80 text-sm leading-relaxed">
                Enter a host you are authorized to test and confirm authorization. HACK-BACK refuses private ranges and unverified targets.
              </p>
            </div>
            <div className="manual-card p-8">
              <div className="font-mono text-sm font-bold text-[#8b7cf8] mb-4">02</div>
              <h3 className="font-serif text-3xl mb-3">Eight scanners run at once</h3>
              <p className="text-[#09090b]/80 text-sm leading-relaxed">
                Recon, web, TLS, headers, OWASP, fingerprinting, CVEs and directory enumeration execute in parallel, not one after another.
              </p>
            </div>
            <div className="manual-card p-8">
              <div className="font-mono text-sm font-bold text-[#8b7cf8] mb-4">03</div>
              <h3 className="font-serif text-3xl mb-3">Get a prioritized report</h3>
              <p className="text-[#09090b]/80 text-sm leading-relaxed">
                Findings are de-duplicated, re-verified, scored against CVSS v3.1, and written up in language a non-specialist can act on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Coverage (Blue-Gray Section) */}
      <section id="coverage" className="relative bg-[#e8ecf1] bg-grid-pattern py-24 px-6 border-b-2 border-[#09090b]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#09090b]/60 mb-2 block">Coverage</span>
            <h2 className="font-serif text-5xl sm:text-6xl text-[#09090b] mb-4">
              What HACK-BACK <span className="italic text-[#8b7cf8]">actually looks at.</span>
            </h2>
            <p className="text-[#09090b]/80 max-w-xl text-sm font-medium">
              Every module is a real, industry-standard scanner, normalized into one report instead of eight incompatible outputs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="manual-card p-6 bg-white">
              <h4 className="font-bold text-lg mb-2">Recon</h4>
              <p className="text-xs text-[#09090b]/70">DNS enumeration, subdomain discovery, WHOIS lookups, and open port detection.</p>
            </div>
            <div className="manual-card p-6 bg-[#e0f2fe]">
              <h4 className="font-bold text-lg mb-2">Web Scan</h4>
              <p className="text-xs text-[#09090b]/70">Active vulnerability scanning via OWASP ZAP and Nikto, plus crawling.</p>
            </div>
            <div className="manual-card p-6 bg-[#e0e7ff]">
              <h4 className="font-bold text-lg mb-2">SSL/TLS</h4>
              <p className="text-xs text-[#09090b]/70">Certificate validity, cipher strength, protocol versions, and HSTS enforcement.</p>
            </div>
            <div className="manual-card p-6 bg-[#ffedd5]">
              <h4 className="font-bold text-lg mb-2">Headers</h4>
              <p className="text-xs text-[#09090b]/70">Checks all security response headers: CSP, X-Frame-Options, HSTS, CORS.</p>
            </div>
            <div className="manual-card p-6 bg-[#f3e8ff]">
              <h4 className="font-bold text-lg mb-2">OWASP Top 10</h4>
              <p className="text-xs text-[#09090b]/70">Tests for injection, broken auth, XSS, IDOR, and security misconfigurations.</p>
            </div>
            <div className="manual-card p-6 bg-[#dcfce7]">
              <h4 className="font-bold text-lg mb-2">Tech Fingerprint</h4>
              <p className="text-xs text-[#09090b]/70">Identifies CMS, frameworks, outdated software, and detects WAF presence.</p>
            </div>
            <div className="manual-card p-6 bg-[#fae8ff]">
              <h4 className="font-bold text-lg mb-2">Nuclei CVE Scan</h4>
              <p className="text-xs text-[#09090b]/70">Template-based scanning for known CVEs, misconfigurations, and panels.</p>
            </div>
            <div className="manual-card p-6 bg-[#ffedd5]">
              <h4 className="font-bold text-lg mb-2">Dir Enumeration</h4>
              <p className="text-xs text-[#09090b]/70">Brute-forces hidden files, directories, and admin panels via FFUF.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why it matters / Trust (Pale Yellow Section) */}
      <section id="trust" className="relative bg-[#fdf0a6] bg-grid-pattern py-24 px-6 border-b-2 border-[#09090b]">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#09090b]/60 mb-2 block">Why it matters</span>
          <h2 className="font-serif text-5xl sm:text-6xl text-[#09090b] mb-16">
            A scan you can <br/><span className="italic text-[#8b7cf8]">actually trust.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="manual-card p-8 bg-white">
              <h3 className="font-serif text-3xl mb-3">Scores are deterministic</h3>
              <p className="text-[#09090b]/80 text-sm leading-relaxed">
                Every severity, CVSS score and priority is computed from the official CVSS v3.1 formula in code. Run the same scan twice and numbers are identical.
              </p>
            </div>
            <div className="manual-card p-8 bg-white">
              <h3 className="font-serif text-3xl mb-3">Findings are re-verified</h3>
              <p className="text-[#09090b]/80 text-sm leading-relaxed">
                Before anything is reported, HACK-BACK passively re-observes each finding to check it still reproduces. Results are labelled confirmed or probable.
              </p>
            </div>
            <div className="manual-card p-8 bg-white">
              <h3 className="font-serif text-3xl mb-3">Written for humans</h3>
              <p className="text-[#09090b]/80 text-sm leading-relaxed">
                Each finding gets a plain-English explanation of real-world impact plus concrete remediation steps so no security background is needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Security (Mint Green Section) */}
      <section id="security" className="relative bg-[#d2f6e5] bg-grid-pattern py-24 px-6 border-b-2 border-[#09090b]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/3 text-left">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#09090b]/60 mb-2 block">Security</span>
            <h2 className="font-serif text-5xl sm:text-6xl text-[#09090b] mb-6">
              Authorization is <br/><span className="italic text-[#8b7cf8]">not optional.</span>
            </h2>
            <p className="text-[#09090b]/80 text-sm leading-relaxed mb-6">
              HACK-BACK is a testing tool for systems you own or have written permission to assess. Those limits are enforced in code, not left to a checkbox.
            </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="manual-card p-6 bg-white">
              <h4 className="font-bold text-base mb-2">Explicit authorization</h4>
              <p className="text-xs text-[#09090b]/70">Every scan requires a confirmed authorization flag, logged with a timestamp and operator.</p>
            </div>
            <div className="manual-card p-6 bg-white">
              <h4 className="font-bold text-base mb-2">Private ranges rejected</h4>
              <p className="text-xs text-[#09090b]/70">RFC 1918 addresses, loopback and localhost are refused before a job is ever queued.</p>
            </div>
            <div className="manual-card p-6 bg-white">
              <h4 className="font-bold text-base mb-2">Non-destructive only</h4>
              <p className="text-xs text-[#09090b]/70">Active checks use read-only payloads. HACK-BACK proves a weakness exists; it never weaponizes it.</p>
            </div>
            <div className="manual-card p-6 bg-white">
              <h4 className="font-bold text-base mb-2">You choose where it runs</h4>
              <p className="text-xs text-[#09090b]/70">Self-hosted via Docker Compose, every scan and analysis stays entirely on your own infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ (Lavender Section) */}
      <section id="faq" className="relative bg-[#c4b5fd] bg-grid-pattern py-24 px-6 border-b-2 border-[#09090b]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-5xl sm:text-6xl text-[#09090b] mb-12 text-center">
            Questions, <span className="italic text-white">answered.</span>
          </h2>
          
          <div className="flex flex-col gap-4">
            <div className="bg-white border-2 border-[#09090b] rounded-xl p-5 shadow-[3px_3px_0px_#09090b] flex justify-between items-center font-bold text-sm">
              <span>Do I need a security background to use it?</span>
              <span>+</span>
            </div>
            <div className="bg-white border-2 border-[#09090b] rounded-xl p-5 shadow-[3px_3px_0px_#09090b] flex justify-between items-center font-bold text-sm">
              <span>What can I scan?</span>
              <span>+</span>
            </div>
            <div className="bg-white border-2 border-[#09090b] rounded-xl p-5 shadow-[3px_3px_0px_#09090b] flex justify-between items-center font-bold text-sm">
              <span>Where does my scan data go?</span>
              <span>+</span>
            </div>
            <div className="bg-white border-2 border-[#09090b] rounded-xl p-5 shadow-[3px_3px_0px_#09090b] flex justify-between items-center font-bold text-sm">
              <span>How is the severity score calculated?</span>
              <span>+</span>
            </div>
            <div className="bg-white border-2 border-[#09090b] rounded-xl p-5 shadow-[3px_3px_0px_#09090b] flex justify-between items-center font-bold text-sm">
              <span>Can I self-host it?</span>
              <span>+</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Footer (Warm Beige) */}
      <footer className="relative bg-[#f6f3ec] bg-grid-pattern pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-serif text-6xl sm:text-7xl text-[#09090b] mb-8">
            Know where you <span className="italic text-[#8b7cf8]">stand.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/sign-up" className="btn-brutal text-[#09090b] px-8 py-4 rounded-full font-bold text-lg">
              Create a free account
            </Link>
            <Link href="/sign-in" className="bg-white text-[#09090b] border-2 border-[#09090b] px-8 py-4 rounded-full font-bold text-lg shadow-[3px_3px_0px_#09090b]">
              Sign in
            </Link>
          </div>
          <p className="text-xs font-mono text-[#09090b]/60 max-w-xl mx-auto">
            HACK-BACK helps you uncover vulnerabilities in your website, understand their real impact in plain English, and fix them with clear guidance.
          </p>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t-2 border-[#09090b] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#bce784] border-2 border-[#09090b] flex items-center justify-center rounded-sm text-[10px] font-black">
              HB
            </div>
            <span className="font-mono font-bold tracking-tight text-sm uppercase">HACK-BACK</span>
          </div>
          
          <div className="flex gap-8 text-xs font-bold text-[#09090b]/80">
            <a href="#" className="hover:underline">Security</a>
            <a href="#" className="hover:underline">Responsible use</a>
            <a href="#" className="hover:underline">Self-hosting</a>
          </div>
          
          <div className="text-xs font-mono text-[#09090b]/60">
            © 2026 HACK-BACK · Authorized assessments only
          </div>
        </div>
      </footer>

    </div>
  );
}