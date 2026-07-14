"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { procedures } from "@/lib/procedures";
import { FORMSPREE_ENDPOINT } from "@/lib/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const fieldCls =
  "w-full rounded-input border border-line bg-surface px-3.5 py-2.5 text-ink placeholder:text-muted/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15";
const labelCls = "mb-1.5 block text-sm font-medium text-ink";

export function QuoteForm({
  className,
  defaultProcedure = "",
  showHeader = true,
  id,
}: {
  className?: string;
  defaultProcedure?: string;
  showHeader?: boolean;
  id?: string;
}) {
  const t = useTranslations("form");
  const [status, setStatus] = useState<Status>("idle");

  const schema = z.object({
    name: z.string().min(2, t("required")),
    email: z.email(t("invalidEmail")),
    phone: z.string().min(5, t("required")),
    procedure: z.string().optional(),
    message: z.string().optional(),
    consent: z.literal(true, t("required")),
    _gotcha: z.string().optional(),
  });
  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { procedure: defaultProcedure },
  });

  const onSubmit = async (data: FormValues) => {
    if (data._gotcha) {
      setStatus("success"); // silently swallow bots
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        id={id}
        className={cn(
          "flex flex-col items-center rounded-card border border-line bg-surface p-8 text-center shadow-card",
          className,
        )}
      >
        <div className="grid h-14 w-14 place-items-center rounded-full bg-primary-tint text-primary">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
          {t("successTitle")}
        </h3>
        <p className="mt-2 max-w-sm text-ink-soft">{t("successBody")}</p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn(
        "rounded-card border border-line bg-surface p-6 shadow-card sm:p-8",
        className,
      )}
    >
      {showHeader && (
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            {t("eyebrow")}
          </span>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-2 text-ink-soft">{t("subtitle")}</p>
        </div>
      )}

      {/* honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        {...register("_gotcha")}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-name" className={labelCls}>
            {t("name")}
          </label>
          <input
            id="qf-name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            className={cn(fieldCls, errors.name && "border-red-400")}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="qf-email" className={labelCls}>
            {t("email")}
          </label>
          <input
            id="qf-email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            className={cn(fieldCls, errors.email && "border-red-400")}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="qf-phone" className={labelCls}>
            {t("phone")}
          </label>
          <input
            id="qf-phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            className={cn(fieldCls, errors.phone && "border-red-400")}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="qf-procedure" className={labelCls}>
            {t("procedure")}
          </label>
          <select
            id="qf-procedure"
            className={cn(fieldCls, "appearance-none")}
            defaultValue={defaultProcedure}
            {...register("procedure")}
          >
            <option value="">{t("procedurePlaceholder")}</option>
            {procedures.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Not sure">{t("procedureOther")}</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="qf-message" className={labelCls}>
          {t("message")}
        </label>
        <textarea
          id="qf-message"
          rows={4}
          className={cn(fieldCls, "resize-y")}
          {...register("message")}
        />
      </div>

      <div className="mt-4">
        <label className="flex items-start gap-3 text-sm text-ink-soft">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-line-strong text-primary focus:ring-primary/30"
            {...register("consent")}
          />
          <span>{t("consent")}</span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-xs text-red-500">{errors.consent.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-btn bg-accent px-6 font-semibold text-white shadow-[0_8px_24px_-10px_rgba(196,106,63,0.65)] transition-all duration-200 hover:bg-accent-dark active:scale-[0.98] disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {t("sending")}
          </>
        ) : (
          <>
            {t("submit")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>

      {status === "error" && (
        <p className="mt-3 flex items-center justify-center gap-2 text-sm text-red-500">
          <AlertCircle className="h-4 w-4" />
          {t("errorBody")}
        </p>
      )}

      <p className="mt-4 text-center text-xs leading-relaxed text-muted">
        {t("privacy")}
      </p>
    </form>
  );
}
