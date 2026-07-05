export interface Referral {
    slug: string;
    company: string;
    referralCode: string;
    referralLink: string;
    reward: string;
    status: string;
    lastVerified: string;
    logo: string;
    description: string;
    howToRedeem: string[];
  }
  
  export const referrals: Referral[] = [
    {
      slug: "rentomojo",
      company: "Rentomojo",
      referralCode: "VM71TB",
      referralLink: "https://rmojo.in/RNTMJO/OZOYFFAps_",
      reward: "₹500",
      status: "Verified",
      lastVerified: "Today",
      logo: "/logos/rentomojo.png",
      description:
        "Rent furniture and appliances with flexible monthly plans and affordable pricing.",
      howToRedeem: [
        "Click the Claim Bonus button.",
        "Sign up using the referral link.",
        "Enter referral code VM71TB if prompted.",
        "Complete your first eligible order.",
        "Receive referral benefits as per Rentomojo's current terms."
      ]
    }
  ];