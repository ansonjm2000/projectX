import { CheckCircle2, Copy, Gift, RefreshCcw, ShieldCheck, Sparkles, UserCheck } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SectionHeader } from "./components/SectionHeader";
import { TrustCard } from "./components/TrustCard";
import { ReferralCard } from "./components/ReferralCard";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { Container } from "./components/ui/Container";

const trustItems = [
  {
    icon: CheckCircle2,
    title: "Working Today",
    description: "Referral offers are confirmed as working before they appear.",
  },
  {
    icon: RefreshCcw,
    title: "Verified Recently",
    description: "Codes are checked often to keep the details fresh and accurate.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description: "We share only reliable referral links without aggressive spam.",
  },
  {
    icon: Sparkles,
    title: "Easy to Use",
    description: "Copy and claim offers with a clear, minimal process.",
  },
];

const referralOffers = [
  {
    companyName: "Rentomojo",
    description: "Rent furniture, appliances, and electronics with a signup bonus.",
    benefit: "₹3,000 off",
    code: "RENTOMJ123",
    lastVerified: "Today",
    link: "https://rentomojo.com",
    badge: "Verified",
    viewDetailsHref: "/referral/rentomojo",
  },
  {
    companyName: "Urban Company",
    description: "Book home services and beauty appointments with cashback.",
    benefit: "₹250 cashback",
    code: "URBN250",
    lastVerified: "Today",
    link: "https://urbancompany.com",
    badge: "Verified",
  },
];

const howSteps = [
  {
    icon: Copy,
    title: "Choose an offer",
    description: "Select the referral code that matches the app and signup benefit you need.",
  },
  {
    icon: Copy,
    title: "Copy the referral code",
    description: "Tap copy to store the code and use it during app signup or checkout.",
  },
  {
    icon: UserCheck,
    title: "Sign up with the referral",
    description: "Complete the registration or booking process using the shared code.",
  },
  {
    icon: Gift,
    title: "Receive the bonus",
    description: "Enjoy the reward, cashback or credit after the referral is accepted.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-950">
      <Navbar />
      <main className="space-y-16 py-10 lg:py-14">
        <Container>
          <Hero />
        </Container>

        <Container>
          <SectionHeader title="Featured Referral Offers" subtitle="Top offers for popular Indian apps." id="offers" />
          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {referralOffers.map((offer) => (
              <ReferralCard key={offer.companyName} {...offer} />
            ))}
          </div>
        </Container>

        <Container>
          <SectionHeader
            title="Trust Indicators"
            subtitle="Confidence you can rely on every time."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {trustItems.map((item) => (
              <TrustCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>

        <Container>
          <SectionHeader
            title="How It Works"
            subtitle="Follow a simple process to claim referral rewards." 
            id="how-it-works"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {howSteps.map((step) => (
              <article key={step.title} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 text-slate-950">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>

        <Container>
          <FAQSection />
        </Container>

        <Container>
          <Footer />
        </Container>
      </main>
    </div>
  );
}
