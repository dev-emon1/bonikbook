import { Link } from "react-router";

export function LoginFooter() {
  return (
    <footer className="mt-6 border-t border-border/60 pt-5">
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="text-xs leading-5 text-muted-foreground">
          Don't have an account?
          <Link
            to="/contact-sales"
            className="ml-1 font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Contact Sales
          </Link>
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <Link
            to="/privacy-policy"
            className="transition-colors hover:text-foreground"
          >
            Privacy
          </Link>

          <span className="h-1 w-1 rounded-full bg-border" />

          <Link
            to="/terms-and-conditions"
            className="transition-colors hover:text-foreground"
          >
            Terms
          </Link>

          <span className="h-1 w-1 rounded-full bg-border" />

          <span>© 2026 BonikBook</span>
        </div>
      </div>
    </footer>
  );
}
