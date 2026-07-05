export function SectionHeader({
  title,
  subtitle,
  id,
}: {
  title: string;
  subtitle?: string;
  id?: string;
}) {
  return (
    <div id={id} className="mx-auto max-w-3xl text-center">
      <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-xl font-semibold text-slate-950 sm:text-3xl">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
