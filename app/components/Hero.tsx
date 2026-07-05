import { PrimaryLink, SecondaryLink } from "./ui/Button";

const heroIndicators = [
  "100% Free",
  "Verified Today",
  "No Hidden Charges",
  "Trusted by Indian Users",
];

export function Hero() {
  return (
    <section id="home" className="px-6 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
          Verified referral codes
        </p>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Save More with Verified Referral Codes
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
          Get exclusive signup rewards from India&apos;s top apps.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryLink href="#offers" className="w-full sm:w-auto">
            View Referral Codes
          </PrimaryLink>
          <SecondaryLink href="#how-it-works" className="w-full sm:w-auto">
            Learn More
          </SecondaryLink>
        </div>

        <div className="mx-auto mt-6 grid max-w-lg grid-cols-2 gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 sm:grid-cols-4">
          {heroIndicators.map((indicator) => (
            <div key={indicator} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
              <span className="mr-2 text-sky-600">✓</span>
              {indicator}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
