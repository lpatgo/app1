import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // base tailwind for each button is this line
  "inline-flex items-center justify-center whitespace-nowrap text-black uppercase bg-accent hover:bg-accent-foreground  hover:text-secondary-foreground",
  {
    variants: {
      variant: {
        default: "bg-primary-background text-primary-foreground",
        destructive:
          "bg-pink-500 text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        leftround: "rounded-r-none rounded-l-lg uppercase",

      },
      size: {
        default: "h-10 rounded-lg px-4 py-2",
        sm: "h-9 rounded-md px-3 shadow-md",
        lg: 'w-60 h-15 rounded-full px-11 py-6 text-xl shadow-lg bg-[#C7E7E9]',
        icon: "h-10 w-10",
        lobbyheader: "w-60 h-12 my-1 px-11 py-6 text-xl shadow-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)



export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
