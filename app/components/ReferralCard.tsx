import { Badge } from "./ui/Badge";
import { CopyCodeButton } from "./CopyCodeButton";
import { ClaimBonusButton } from "./ClaimBonusButton";

interface ReferralCardProps {
  companyName: string;
  description: string;
  benefit: string;
  code: string;
  lastVerified: string;
  link: string;
  badge?: string;
  logo?: string;
  viewDetailsHref?: string;
}

export function ReferralCard({
  companyName,
  description,
  benefit,
  code,
  lastVerified,
  link,
  badge,
  logo,
  viewDetailsHref,
}: ReferralCardProps) {
  return (
    <article className="group cursor-pointer rounded-[28px] border border-slate-200 bg-white p-7 transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl bg-slate-100 text-slate-950 text-3xl font-semibold">
            {logo ? (
              <img src={logo} alt={`${companyName} logo`} className="h-full w-full object-contain" />
            ) : (
              companyName
                .split(" ")
                .map((word) => word[0])
                .join("")
            )}
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{companyName}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
          </div>
        </div>

        {badge ? <Badge label={badge} /> : null}
      </div>

      <div className="mt-8">
        <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Bonus amount</p>
        <p className="mt-4 text-4xl font-semibold text-slate-950">{benefit}</p>
      </div>

      <div className="mt-8 grid gap-4 rounded-[22px] bg-slate-50 p-5 sm:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Referral code</p>
          <p className="mt-3 text-xl font-semibold text-slate-950">{code}</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Last verified</p>
          <p className="mt-3 text-xl font-semibold text-slate-950">{lastVerified}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <CopyCodeButton code={code} />
        <div className="flex flex-wrap gap-3">
          <ClaimBonusButton code={code} href={link} />
          {viewDetailsHref ? (
            <a
              href={viewDetailsHref}
              className="inline-flex items-center justify-center rounded-[14px] border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition duration-200 hover:bg-slate-100"
            >
              View Details
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
