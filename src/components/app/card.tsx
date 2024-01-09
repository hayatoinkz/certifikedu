import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button, ButtonProps } from '@/components/ui/button'
import { MoreHorizontal } from 'lucide-react'

interface CardRootProps extends React.ComponentProps<'div'> {
  withQrCode?: boolean
}

export const CardRoot: React.FC<CardRootProps> = ({
  children,
  className,
  ...props
}) => {
  const classNames = `flex flex-col gap-6 p-6 bg-orange-100 rounded-3xl ${className}`

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}

export const CardHeader: React.FC<React.ComponentProps<'div'>> = ({
  className,
  children,
  ...props
}) => {
  const classNames = `inline-flex justify-between gap-6 ${className}`
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}

export const CardFooter: React.FC<React.ComponentProps<'div'>> = ({
  className,
  children,
  ...props
}) => {
  const classNames = `inline-flex gap-3 ${className}`
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}

export const CardBody: React.FC<React.ComponentProps<'div'>> = ({
  className,
  children,
  ...props
}) => {
  const classNames = `flex flex-col w-full gap-4 justify-center ${className}`
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}

export const CardImage: React.FC<React.ComponentProps<'img'>> = ({
  alt,
  ...props
}) => {
  return (
    <div className="w-[128px] min-w-[96px]">
      <AspectRatio ratio={1 / 1}>
        <img
          className="h-full w-full max-w-[128px] rounded-xl"
          alt={alt}
          {...props}
        />
      </AspectRatio>
    </div>
  )
}

export const CardTitle: React.FC<React.ComponentProps<'h2'>> = ({
  className,
  children,
  ...props
}) => {
  const classNames = `text-xs font-bold uppercase ${className}`
  return (
    <h2 className={classNames} {...props}>
      {children}
    </h2>
  )
}

export const CardDescription: React.FC<React.ComponentProps<'p'>> = ({
  className,
  children,
  ...props
}) => {
  const classNames = `text-xs ${className}`
  return (
    <p className={classNames} {...props}>
      {children}
    </p>
  )
}

export const CardButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} variant="secondary" size="icon" className="min-w-10">
      <MoreHorizontal className="h-5 w-5" />
    </Button>
  )
}

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Footer: CardFooter,
  Image: CardImage,
  Body: CardBody,
  Title: CardTitle,
  Description: CardDescription,
  Button: CardButton
}
