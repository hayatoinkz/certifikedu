import { PlusIcon, SearchIcon } from 'lucide-react'
import { Card } from './components/app/card'
import Layout from './components/app/layout'
import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink
} from './components/ui/pagination'
import { generateCertificateData } from './mock/data'

export default function App() {
  const certificates = Array.from({ length: 4 }, () =>
    generateCertificateData()
  )

  return (
    <Layout>
      <h1 className="text-xl font-bold">Meus Certificados</h1>
      <header className="flex flex-col justify-center gap-4 md:flex-row">
        <div className="relative w-full">
          <SearchIcon className="absolute left-4 top-4 h-4 w-4" />
          <Input placeholder="Pesquisar certificado" className="pl-10" />
        </div>
        <Button>
          <PlusIcon className="mr-2" /> Criar Certificado
        </Button>
      </header>
      <div className="flex flex-col gap-6">
        {certificates.map((certificate) => (
          <Card.Root key={certificate.id}>
            <Card.Header>
              <Card.Image src="https://picsum.photos/200/300" />
              <Card.Body>
                <Card.Title>{certificate.title}</Card.Title>
                <Card.Description>{certificate.author}</Card.Description>
              </Card.Body>
              <Card.Button></Card.Button>
            </Card.Header>
            <Card.Footer>
              {certificate.openBadge && <Badge>Open Badge</Badge>}
              {certificate.blockchain && (
                <Badge variant="secondary">Blockchain</Badge>
              )}
            </Card.Footer>
          </Card.Root>
        ))}

        <Pagination className="mt-2">
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </Layout>
  )
}
