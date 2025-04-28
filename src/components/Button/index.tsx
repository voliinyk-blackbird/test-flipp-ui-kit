// src/components/my-ui-kit/Button/Button.tsx
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<typeof ShadcnButton> & {
  customProp?: string;
};

export function Button({ customProp, className, ...props }: ButtonProps) {
  return (
    <ShadcnButton
      className={cn(
        "your-custom-class",
        customProp && `custom-${customProp}`,
        className
      )}
      {...props}
    />
  );
}