import { useRef } from "react";

interface OtpInputProps {
  value: string;
  length?: number;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export function OtpInput({
  value,
  onChange,
  length = 6,
  disabled,
}: OtpInputProps) {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const values = Array.from({ length }, (_, index) => value[index] ?? "");

  const handleChange = (index: number, input: string) => {
    if (!/^\d?$/.test(input)) return;

    const next = [...values];

    next[index] = input;

    onChange(next.join(""));

    if (input && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Backspace") {
      if (values[index]) {
        const next = [...values];

        next[index] = "";

        onChange(next.join(""));
      } else if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }

    if (event.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }

    if (event.key === "ArrowRight" && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    const pasted = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);

    if (!pasted) return;

    onChange(pasted);

    const focusIndex = Math.min(pasted.length - 1, length - 1);

    inputsRef.current[focusIndex]?.focus();
  };

  return (
    <div className="flex justify-center gap-2">
      {values.map((digit, index) => (
        <input
          key={index}
          ref={(element) => {
            inputsRef.current[index] = element;
          }}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={1}
          disabled={disabled}
          value={digit}
          onChange={(event) => handleChange(index, event.target.value)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onPaste={handlePaste}
          className="h-14 w-12 rounded-xl border bg-background text-center text-xl font-semibold outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
        />
      ))}
    </div>
  );
}
