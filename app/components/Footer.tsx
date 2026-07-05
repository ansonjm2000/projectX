export function Footer() {
  return (
    <footer className="rounded-[32px] border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-8">
      <div className="grid gap-10 md:grid-cols-3">
        <div id="about">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">About</p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            A simple source for verified referral codes and signup offers across India&apos;s top consumer apps.
          </p>
        </div>

        <div id="contact">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Contact</p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            For feedback and support, email us at <a href="mailto:hello@referral.codes" className="font-medium text-slate-900">hello@referral.codes</a>.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Legal</p>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>
              <a href="#about" className="transition hover:text-slate-900">Privacy Policy</a>
            </li>
            <li>
              <a href="#about" className="transition hover:text-slate-900">Terms</a>
            </li>
            <li>
              <a href="#about" className="transition hover:text-slate-900">Disclaimer</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
        <p>Referral benefits are provided by the respective companies and may change over time.</p>
        <p className="mt-4">© {new Date().getFullYear()} Referral Codes. All rights reserved.</p>
      </div>
    </footer>
  );
}
