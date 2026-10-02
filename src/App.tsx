import { Frame01, Frame02, Frame03, Frame04 } from './frames-a'
import { Frame05, Frame06, Frame07, Frame08, Frame09, Appendix } from './frames-b'

const nav = [
  ['f01', '01 Visão geral'],
  ['f02', '02 Fluxo'],
  ['f03', '03 SLA'],
  ['f04', '04 Status'],
  ['f05', '05 Papéis'],
  ['f06', '06 Regras'],
  ['f07', '07 Exemplo'],
  ['f08', '08 Dashboard'],
  ['f09', '09 Futuro'],
  ['apx', 'Componentes'],
]

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-line bg-canvas/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] items-center gap-6 px-5 py-3 md:px-8">
          <a href="#top" className="flex shrink-0 items-center gap-2.5 font-display text-[15px] font-semibold">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-blue to-purple text-[13px] text-white">I</span>
            Ikaros ERP
          </a>
          <nav className="thin-scroll flex gap-1 overflow-x-auto">
            {nav.map(([id, l]) => (
              <a key={id} href={`#${id}`} className="whitespace-nowrap rounded-md px-2.5 py-1.5 text-[12.5px] font-medium text-ink-soft transition hover:bg-white hover:text-ink">
                {l}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div id="top" className="mx-auto max-w-[1280px] px-5 pb-6 pt-16 md:px-8 md:pt-24">
        <div className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-purple">Documentação operacional · v1.0 · Outubro 2026</div>
        <h1 className="mt-6 max-w-4xl font-display text-[44px] font-semibold leading-[1.02] tracking-tight md:text-[76px]">
          Workflow <span className="text-blue">—</span> Customer Success
          <span className="mt-2 block text-ink-soft">Ikaros ERP</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
          O guia único para entender o processo completo, da solicitação do cliente à conclusão da demanda. Feito para treinamento, uso diário e como base para o sistema no Notion.
        </p>
      </div>

      <main>
        <Frame01 />
        <Frame02 />
        <Frame03 />
        <Frame04 />
        <Frame05 />
        <Frame06 />
        <Frame07 />
        <Frame08 />
        <Frame09 />
        <Appendix />
      </main>

      <footer className="mx-auto max-w-[1280px] px-8 py-12 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
        Ikaros ERP · Customer Success · Documento interno
      </footer>
    </div>
  )
}
