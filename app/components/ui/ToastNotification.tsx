export function ToastNotification({ message }: { message: string }) {
  return (
    <div
      role="status"
      className="pointer-events-none absolute right-0 top-full z-10 mt-3 w-full max-w-xs rounded-3xl border border-slate-200 bg-slate-950/95 px-4 py-3 text-sm text-white shadow-xl"
    >
      {message}
    </div>
  );
}
