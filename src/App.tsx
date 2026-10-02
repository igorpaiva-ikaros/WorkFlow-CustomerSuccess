import logo from './assets/ikaros-logo.png'
import cover from './assets/ikaros-cover.jpg'
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
          <a href="#top" className="flex shrink-0 items-center" aria-label="Ikaros ERP">
            <img src={logo} alt="Ikaros" className="h-[26px] w-auto" />
          </a>
          <nav className="thin-scroll flex gap-1 overflow-x-auto">
            {nav.map(([id, l]) => (
              <a key={id} href={`#${id}`} className="whitespace-nowrap rounded-md px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft transition hover:bg-surface hover:text-orange">
                {l}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div id="top" className="relative overflow-hidden border-b border-line">
        <img src={cover} alt="" className="absolute inset-0 h-full w-full object-cover object-[70%_30%] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-canvas to-transparent" />
        <div className="relative mx-auto max-w-[1280px] px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          <img src={logo} alt="Ikaros" className="h-10 w-auto md:h-12" />
          <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.32em] text-ink-soft">Ninguém precisa voar sozinho</div>
          <div className="mt-24 flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-orange md:mt-36">
            <span className="h-px w-7 bg-orange" />
            Documentação operacional · v1.0 · Outubro 2026
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-[56px] font-normal leading-[0.98] tracking-[-0.015em] md:text-[104px]">
            Workflow <span className="text-orange">—</span> <span className="accent-it">Customer</span> Success
            <span className="mt-3 block text-[0.5em] leading-none text-ink-soft">Ikaros ERP</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-soft">
            O guia único para entender o processo completo, da solicitação do cliente à conclusão da demanda. Feito para treinamento, uso diário e como base para o sistema no Notion.
          </p>
        </div>
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

      <footer className="mx-auto max-w-[1280px] border-t border-line px-8 py-12 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
        <img src={logo} alt="Ikaros" className="mx-auto mb-5 h-6 w-auto opacity-80" />
        Ikaros ERP · Customer Success · Documento interno
        <div className="mt-2 text-[10px] tracking-[0.2em] opacity-60">Imagem de capa criada com IA generativa (Higgsfield) · erp.ikaros.com.br</div>
      </footer>
    </div>
  )
}
