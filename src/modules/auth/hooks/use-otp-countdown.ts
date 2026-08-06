import { useEffect, useState } from "react";

export function useOtpCountdown(initialSeconds = 60) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timer = setTimeout(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsLeft]);

  const restart = () => {
    setSecondsLeft(initialSeconds);
  };

  return {
    secondsLeft,
    canResend: secondsLeft === 0,
    restart,
  };
}
