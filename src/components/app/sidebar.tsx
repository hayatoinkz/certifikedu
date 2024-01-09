import { cn } from '@/lib/utils'
import { ArchiveIcon, LogOutIcon, UserIcon } from 'lucide-react'
import { Button } from '../ui/button'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div
      className={cn(
        'h-full max-h-screen w-[280px] fixed bg-neutral-100 top-0 pb-16 rounded-tr-[60px] rounded-br-[60px]',
        className
      )}
    >
      <div className="flex h-full flex-col px-10 py-12">
        <img
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/assets/img/logo.svg"
          alt="CertifikEDU Logo"
          width={150}
          height={36}
        />
        <div className="flex h-full flex-col justify-between">
          <div className="my-10 space-y-1">
            <Button variant="neutral" className="w-full justify-start">
              <ArchiveIcon className="mr-2 h-4 w-4" />
              Minha Carteira
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <UserIcon className="mr-2 h-4 w-4" />
              Meu Perfil
            </Button>
          </div>

          <Button variant="ghost" className="w-full justify-start">
            <LogOutIcon className="mr-2 h-4 w-4" />
            Fazer Logout
          </Button>
        </div>
      </div>
    </div>
  )
}
