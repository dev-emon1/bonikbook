import BonikBookLogo from "@/assets/logos/bonikbook-logo.png";

export function LoginHeader() {
  return (
    <header className="mb-6 flex flex-col items-center text-center">
      <img
        src={BonikBookLogo}
        alt="BonikBook"
        className="mb-4 h-14 w-auto select-none"
        draggable={false}
      />

      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        Welcome Back
      </h1>

      <p className="mt-2 max-w-[320px] text-sm leading-6 text-muted-foreground">
        Sign in to access your BonikBook dashboard and manage your business with
        confidence.
      </p>
    </header>
  );
}
