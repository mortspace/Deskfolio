import './lib/deskfolio.css'
import './deskfolio-page.css'
import { DeskFolioPage } from './DeskFolioPage.tsx'

export { DeskFolioPage }

// Convenience wrapper that includes the page-level layout classes DeskFolio expects,
// so consumers can drop it in without replicating the wrapper markup.
export function DeskFolio() {
  return (
    <main className="page page-bleed page-deskfolio">
      <DeskFolioPage />
    </main>
  )
}
