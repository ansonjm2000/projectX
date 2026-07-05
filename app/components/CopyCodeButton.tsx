"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Copy } from "lucide-react";
import { SecondaryButton } from "./ui/Button";
import { ToastNotification } from "./ui/ToastNotification";

interface CopyCodeButtonProps {
  code: string;
}

export function CopyCodeButton({ code }: CopyCodeButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timer = window.setTimeout(() => setCopied(false), 2400);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
  };

  return (
    <div className="relative inline-flex">
      <SecondaryButton onClick={handleCopy} type="button" className="min-w-[120px]">
        {copied ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        {copied ? "Copied!" : "Copy Code"}
      </SecondaryButton>
      {copied ? <ToastNotification message="Referral code copied" /> : null}
    </div>
  );
}
