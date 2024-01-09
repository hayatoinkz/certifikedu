import { Sidebar } from './sidebar'
import Header from './header'

interface LayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout(props: Readonly<LayoutProps>) {
  return (
    <div className="h-full min-h-screen">
      <div className="grid h-full grid-cols-6">
        <Sidebar className="hidden lg:block" />
        <div className="col-span-6 lg:ml-[275px]">
          <Header />
          <div className="mb-16 flex flex-col gap-8 p-6 md:px-14 md:py-16">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}
