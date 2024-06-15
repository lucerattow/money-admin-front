import { ReactNode } from "react";

interface TypographyInnerProps {
  children?: ReactNode;
}

const TypographyH1 = ({ ...props }: TypographyInnerProps) => {
  return (
    <h1
      className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      {...props}
    />
  );
};

const TypographyH2 = ({ ...props }: TypographyInnerProps) => {
  return (
    <h2
      className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      {...props}
    />
  );
};

const TypographyH3 = ({ ...props }: TypographyInnerProps) => {
  return (
    <h3
      className="scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    />
  );
};

const TypographyH4 = ({ ...props }: TypographyInnerProps) => {
  return (
    <h4
      className="scroll-m-20 text-xl font-semibold tracking-tight"
      {...props}
    />
  );
};

const TypographyP = ({ ...props }: TypographyInnerProps) => {
  return (
    <p
      className="leading-7 [&:not(:first-child)]:mt-6"
      {...props}
    />
  );
};

const TypographySpan = ({ ...props }: TypographyInnerProps) => {
  return (
    <span
      {...props}
    />
  );
};

const TypographyBlockquote = ({ ...props }: TypographyInnerProps) => {
  return (
    <blockquote
      className="mt-6 border-l-2 pl-6 italic"
      {...props}
    />
  );
};

const TypographyCode = ({ ...props }: TypographyInnerProps) => {
  return (
    <code
      className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
      {...props}
    />
  );
};

interface TypographyProps {
  className?: string;
  children?: ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "blackquote" | "code";
  onClick?: () => void;
}

export const Typography = ({ variant, ...props }: TypographyProps) => {
  switch (variant) {
    case "h1":
      return <TypographyH1 {...props} />;
    case "h2":
      return <TypographyH2 {...props} />;
    case "h3":
      return <TypographyH3 {...props} />;
    case "h4":
      return <TypographyH4 {...props} />;
    case "p":
      return <TypographyP {...props} />;
    case "span":
      return <TypographySpan {...props} />;
    case "blackquote":
      return <TypographyBlockquote {...props} />;
    case "code":
      return <TypographyCode {...props} />;
    default:
      return <TypographyP {...props} />;
  }
};

export default Typography;
