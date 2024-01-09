import { ArchiveIcon, LogOutIcon, MenuIcon, UserIcon, X } from 'lucide-react'
import { UserNav } from './user-nav'
import { Button } from '../ui/button'
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '../ui/sheet'

export default function Header() {
  return (
    <header className="sticky left-0 top-0 z-50 flex flex-col bg-background lg:hidden">
      <div className="flex h-16 items-center border-b px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="max-h-screen w-full bg-neutral-100 p-0 pb-16"
          >
            <div className="inline-flex h-16 w-full items-center justify-between pl-3 pr-8">
              <SheetClose asChild>
                <Button variant="ghost">
                  <X />
                </Button>
              </SheetClose>
              <img
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/assets/img/icon.svg"
                alt="CertifikEDU Icon"
                width={36}
                height={24}
              />
            </div>
            <div className="flex h-full flex-col px-6 py-8">
              <div className="flex h-full flex-col justify-between">
                <div className="my-4 space-y-1">
                  <Button variant="neutral" className="w-full justify-start">
                    <ArchiveIcon className="mr-2 h-4 w-4" />
                    Minha Carteira
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <UserIcon className="mr-2 h-4 w-4" />
                    Meu Perfil
                  </Button>
                </div>
              </div>
              <Button variant="ghost" className="w-full justify-start">
                <LogOutIcon className="mr-2 h-4 w-4" />
                Fazer Logout
              </Button>
            </div>
          </SheetContent>
        </Sheet>
        <div className="ml-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </div>
    </header>
  )
}
