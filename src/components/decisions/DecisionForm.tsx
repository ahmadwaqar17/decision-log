// src/components/decisions/DecisionForm.tsx
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../ui/Button";

const decisionSchema = z.object({
  title: z
    .string()
    .min(3, { message: "What was decided must be at least 3 characters." }),
  description: z
    .string()
    .min(5, { message: "Why/reasoning must be at least 5 characters." }),
  date: z.string().min(1, { message: "Date is required." }),
  author: z.string().optional(),
});

export type DecisionFormValues = z.infer<typeof decisionSchema>;

interface DecisionFormProps {
  onSubmit: (values: DecisionFormValues) => void;
  onCancel: () => void;
}

export default function DecisionForm({ onSubmit, onCancel }: DecisionFormProps) {
  const titleInputRef = useRef<HTMLInputElement | null>(null);

  const todayStr = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<DecisionFormValues>({
    resolver: zodResolver(decisionSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      date: todayStr,
      author: "",
    },
  });

  const { ref: registerTitleRef, ...titleRest } = register("title");

  // Focus first field when form opens
  useEffect(() => {
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-slate-800/90 bg-[#0A0E17]/95 p-6 backdrop-blur-xl shadow-2xl space-y-4 text-slate-100 animate-in fade-in duration-200"
    >
      {/* Field: What was decided */}
      <div className="space-y-1.5">
        <label
          htmlFor="title-input"
          className="block text-xs font-semibold text-slate-300"
        >
          What was decided
        </label>
        <input
          id="title-input"
          type="text"
          placeholder="Move billing off the homegrown system"
          ref={(e) => {
            registerTitleRef(e);
            titleInputRef.current = e;
          }}
          {...titleRest}
          className="w-full rounded-xl border border-slate-800 bg-[#070A11] px-4 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:border-[#2DD4BF] focus:outline-none focus:ring-1 focus:ring-[#2DD4BF]"
        />
        {errors.title && (
          <p className="text-[11px] text-rose-400 font-medium pt-0.5">
            {errors.title.message}
          </p>
        )}
      </div>

      {/* Field: Why */}
      <div className="space-y-1.5">
        <label
          htmlFor="why-input"
          className="block text-xs font-semibold text-slate-300"
        >
          Why
        </label>
        <textarea
          id="why-input"
          rows={3}
          placeholder="The reasoning, the trade-off, what we chose against."
          {...register("description")}
          className="w-full rounded-xl border border-slate-800 bg-[#070A11] px-4 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:border-[#2DD4BF] focus:outline-none focus:ring-1 focus:ring-[#2DD4BF] resize-none"
        />
        {errors.description && (
          <p className="text-[11px] text-rose-400 font-medium pt-0.5">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Grid: When & Who decided */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Field: When */}
        <div className="space-y-1.5">
          <label
            htmlFor="when-input"
            className="block text-xs font-semibold text-slate-300"
          >
            When
          </label>
          <input
            id="when-input"
            type="date"
            {...register("date")}
            className="w-full rounded-xl border border-slate-800 bg-[#070A11] px-4 py-2 text-xs text-slate-100 focus:border-[#2DD4BF] focus:outline-none focus:ring-1 focus:ring-[#2DD4BF]"
          />
          {errors.date && (
            <p className="text-[11px] text-rose-400 font-medium pt-0.5">
              {errors.date.message}
            </p>
          )}
        </div>

        {/* Field: Who decided */}
        <div className="space-y-1.5">
          <label
            htmlFor="who-input"
            className="block text-xs font-semibold text-slate-300"
          >
            Who decided
          </label>
          <input
            id="who-input"
            type="text"
            placeholder="Optional"
            {...register("author")}
            className="w-full rounded-xl border border-slate-800 bg-[#070A11] px-4 py-2 text-xs text-slate-100 placeholder-slate-600 focus:border-[#2DD4BF] focus:outline-none focus:ring-1 focus:ring-[#2DD4BF]"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-2">
        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          variant="primary"
          size="sm"
          className="px-5 py-2 text-xs font-semibold"
        >
          Save decision
        </Button>

        <Button
          type="button"
          onClick={onCancel}
          variant="ghost"
          size="sm"
          className="text-slate-400 hover:text-white text-xs"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
