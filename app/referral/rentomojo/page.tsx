import { Navbar } from "../../components/Navbar";
import { ReferralCard } from "../../components/ReferralCard";
import { SectionHeader } from "../../components/SectionHeader";
import { FAQSection } from "../../components/FAQSection";
import { Footer } from "../../components/Footer";
import { Container } from "../../components/ui/Container";
import { ClaimBonusButton } from "../../components/ClaimBonusButton";
import { CopyCodeButton } from "../../components/CopyCodeButton";
import { referrals } from "../../../lib/referrals";
import { Badge } from "../../components/ui/Badge";

const relatedOffers = [
  {
    companyName: "Urban Company",
    status: "Coming Soon",
    description: "Home services and beauty appointments with verified referral offers.",
  },
];

export default function RentomojoPage() {
  const referral = referrals.find((item) => item.slug === "rentomojo");

  if (!referral) {
    throw new Error("Rentomojo referral not found.");
  }

  const faqItems = [
    {
      question: "Is the referral code working?",
      answer: "Yes. This page shares a verified Rentomojo referral code and link that are confirmed to work.",
    },
    {
      question: "How do I use it?",
      answer: "Click Claim Bonus, sign up through the referral link, and enter the code if prompted.",
    },
    {
      question: "Can existing users use it?",
      answer: "Existing users may be eligible for referral rewards based on Rentomojo's current policies.",
    },
    {
      question: "Does it expire?",
      answer: "Referral offers may change over time, so it is best to use the code soon after verification.",
    },
    {
      question: "How much reward do I get?",
      answer: `This offer provides ${referral.reward} when you sign up through the referral link and meet the eligibility requirements.`,
    },
    {
      question: "Is Rentomojo trustworthy?",
      answer: "Rentomojo is a popular furniture and appliance rental service in India with flexible plans for students and professionals.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-950">
      <Navbar />
      <main className="space-y-16 py-10 lg:py-14">
        <Container>
          <section className="px-6 sm:px-8">
            <div className="mx-auto max-w-5xl">
              <nav className="text-sm text-slate-600">
                <ol className="inline-flex items-center gap-2">
                  <li>
                    <a href="/" className="transition hover:text-slate-950">
                      Home
                    </a>
                  </li>
                  <li aria-hidden="true">›</li>
                  <li>
                    <a href="/#offers" className="transition hover:text-slate-950">
                      Referral Codes
                    </a>
                  </li>
                  <li aria-hidden="true">›</li>
                  <li className="font-semibold text-slate-950">Rentomojo</li>
                </ol>
              </nav>

              <div className="mt-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
                  Rentomojo referral
                </p>
                <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  Latest Verified Rentomojo Referral Code
                </h1>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
                  Use the referral code below or click the referral link to sign up.
                </p>
              </div>

              <div className="mx-auto mt-10 max-w-3xl rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-sm">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                  Referral code
                </p>
                <p className="mt-4 text-6xl font-semibold tracking-tight text-slate-950 sm:text-7xl">
                  {referral.referralCode}
                </p>
                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-600">
                  Enter this code during signup, or click Claim Bonus to open Rentomojo directly.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <ClaimBonusButton code={referral.referralCode} href={referral.referralLink} />
                  <CopyCodeButton code={referral.referralCode} />
                </div>

                <div className="mt-8 rounded-[20px] border border-slate-200 bg-slate-50 px-6 py-5">
                  <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Reward</p>
                  <p className="mt-3 text-4xl font-semibold text-slate-950">{referral.reward}</p>
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {referral.status} • Last updated {referral.lastVerified}
                </p>
              </div>
            </div>
          </section>
        </Container>

        <Container>
          <SectionHeader
            title="Referral Offer"
            subtitle="A verified Rentomojo code and signup reward in one place."
          />
          <div className="mt-10">
            <ReferralCard
              companyName={referral.company}
              description={referral.description}
              benefit={referral.reward}
              code={referral.referralCode}
              lastVerified={referral.lastVerified}
              link={referral.referralLink}
              badge={referral.status}
              logo={referral.logo}
            />
          </div>
        </Container>

        <Container>
          <SectionHeader
            title="How To Redeem"
            subtitle="Follow these simple steps to claim the Rentomojo bonus."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {referral.howToRedeem.map((step, index) => (
              <div
                key={step}
                className="rounded-[24px] border border-slate-200 bg-white p-6 text-left shadow-sm"
              >
                <p className="text-2xl font-semibold text-slate-950">{index + 1}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{step}</p>
              </div>
            ))}
          </div>
        </Container>

        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <section>
              <SectionHeader
                title="About Rentomojo"
                subtitle="Flexible rentals for furniture and appliances."
              />
              <div className="mt-8 space-y-4 rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm leading-7 text-slate-600">
                  Rentomojo offers furniture rental, appliance rental, and affordable monthly plans across major Indian cities. It is ideal for students and professionals who prefer flexibility without a long-term commitment.
                </p>
              </div>
            </section>

            <section>
              <SectionHeader
                title="Why Use This Referral?"
                subtitle="A verified code and referral link you can trust."
              />
              <div className="mt-8 space-y-4 rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm leading-7 text-slate-600">
                  This page provides a verified Rentomojo referral code and referral link. If you use the referral link, I may receive a referral reward at no additional cost to you.
                </p>
              </div>
            </section>
          </div>
        </Container>

        <Container>
          <FAQSection
            items={faqItems}
            title="Rentomojo FAQs"
            subtitle="Answers to the most common questions about this referral offer."
          />
        </Container>

        <Container>
          <section id="related-offers">
            <SectionHeader title="Related Offers" subtitle="More referral offers coming soon." />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
              {relatedOffers.map((offer) => (
                <div
                  key={offer.companyName}
                  className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950">{offer.companyName}</h3>
                      <p className="mt-2 text-sm text-slate-600">{offer.description}</p>
                    </div>
                    <Badge label={offer.status} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Container>

        <Container>
          <Footer />
        </Container>
      </main>
    </div>
  );
}
