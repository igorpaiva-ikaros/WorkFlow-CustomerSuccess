import {
  Alert,
  Approved,
  Badge,
  Blocked,
  Chain,
  Decision,
  Done,
  Down,
  Eyebrow,
  Frame,
  Owner,
  Panel,
  Priority,
  Right,
  SLAChip,
  Status,
  TypeTag,
  tones,
  type Tone,
} from './ui'
import {
  Building2,
  Briefcase,
  Compass,
  Users,
  Cpu,
  Check,
  ShieldCheck,
  UserCheck,
  UserX,
  BrainCircuit,
  Rocket,
  FlaskConical,
  HelpCircle,
  Siren,
  ClipboardList,
  History,
  MessageCircle,
  Zap,
  Database,
  Bot,
  GitBranch,
  CheckCircle2,
  UploadCloud,
  RefreshCw,
  Smartphone,
  Lock,
} from 'lucide-react'
import { Eyebrow as E2 } from './ui'

/* ============ FRAME 05 ============ */

const roles: { n: string; sub: string; tone: Tone; I: typeof Users; items: string[] }[] = [
  { n: 'Cliente', sub: 'Quem usa o Ikaros', tone: 'slate', I: Building2, items: ['Relata problema', 'Fornece contexto', 'Valida solução'] },
  {
    n: 'Customer Success / Igor',
    sub: 'Dono do fluxo',
    tone: 'blue',
    I: Briefcase,
    items: ['Recebe demanda', 'Registra', 'Classifica', 'Atende', 'Conduz onboarding', 'Acompanha carteira', 'Executa pequenas melhorias', 'Conduz upgrades', 'Acompanha demandas complexas', 'Informa o cliente', 'Registra histórico'],
  },
  { n: 'Pedro / Direção', sub: 'Decisão e prioridade', tone: 'purple', I: Compass, items: ['Aprova decisões', 'Define prioridades', 'Valida alterações quando necessário', 'Analisa demandas complexas'] },
  { n: 'Equipe de desenvolvimento', sub: 'Execução técnica', tone: 'navy', I: Users, items: ['Executa demandas complexas', 'Trabalha em alterações fora do escopo de pequenas melhorias'] },
  { n: 'IA / Ferramentas', sub: 'Apoio, nunca autonomia', tone: 'amber', I: Cpu, items: ['Apoia análise', 'Auxilia desenvolvimento', 'Executa alterações dentro das ferramentas corporativas autorizadas', 'Nunca atua fora das regras de segurança'] },
]

export function Frame05() {
  return (
    <Frame id="f05" n="05" title="*Responsabilidades*" subtitle="Quem faz o quê. Se você não sabe de quem é uma tarefa, volte a esta página.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {roles.map((r) => (
          <div key={r.n} className={`flex flex-col rounded-2xl border bg-surface-2 p-5 ${r.n.startsWith('Customer') ? 'border-orange/60 ring-4 ring-orange/10' : 'border-line'}`}>
            <span className={`grid h-11 w-11 place-items-center rounded-xl ${tones[r.tone].solid}`}>
              <r.I size={20} />
            </span>
            <h3 className="mt-4 font-display font-normal text-[22px] leading-tight">{r.n}</h3>
            <Eyebrow className="mt-1.5 !text-[10px]">{r.sub}</Eyebrow>
            <ul className="mt-5 space-y-2.5 border-t border-line pt-4">
              {r.items.map((it) => (
                <li key={it} className="flex items-start gap-2 text-[13.5px] leading-snug text-ink">
                  <Check
                    size={14}
                    className={`mt-0.5 shrink-0 ${r.tone === 'navy' ? 'text-orange' : tones[r.tone].text}`}
                    strokeWidth={3}
                  />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Frame>
  )
}

/* ============ FRAME 06 ============ */

const rules: [string, string, typeof Lock, Tone?][] = [
  ['Somente canais oficiais', 'Atenda apenas por grupo oficial, e-mail ou sistema.', MessageCircle],
  ['Somente contas corporativas autorizadas', 'Ferramentas só com login da empresa.', ShieldCheck],
  ['Não inserir dados de clientes em contas pessoais', 'Dado de cliente nunca sai do ambiente corporativo.', UserX, 'red'],
  ['Não utilizar IA pessoal com informações confidenciais', 'Use apenas as IAs corporativas autorizadas.', BrainCircuit, 'red'],
  ['Nunca alterar produção fora do fluxo aprovado', 'Produção só muda após testes e aprovação.', Rocket, 'red'],
  ['Testar antes de publicar', 'Sem teste, sem publicação.', FlaskConical],
  ['Em caso de dúvida técnica, tratar como demanda complexa', 'Na dúvida, encaminhe.', HelpCircle, 'amber'],
  ['Comunicar incidentes imediatamente', 'Avise Pedro assim que perceber.', Siren, 'red'],
  ['Registrar todas as demandas', 'O Notion é a fonte única da verdade.', ClipboardList],
  ['Manter histórico das alterações', 'Todo ajuste precisa deixar rastro.', History],
]

export function Frame06() {
  return (
    <Frame id="f06" n="06" title="Regras de *ouro*" subtitle="Dez regras de segurança. Não são sugestões: valem para todo mundo, todos os dias.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {rules.map(([t, d, I, tone], i) => {
          const tt: Tone = tone ?? 'blue'
          return (
            <div key={t} className="relative flex flex-col rounded-2xl border border-line bg-surface-2 p-5 transition hover:border-orange/50">
              <div className="flex items-center justify-between">
                <span className={`grid h-10 w-10 place-items-center rounded-xl ${tones[tt].bg} ${tones[tt].text}`}>
                  <I size={19} />
                </span>
                <span className="font-mono text-[12px] text-[#5d6a85]">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-5 font-display font-normal text-[20px] leading-snug">{t}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{d}</p>
            </div>
          )
        })}
      </div>
      <div className="mt-6">
        <Alert tone="red" title="Incidente de segurança?">
          Pare o que está fazendo, não tente consertar sozinho e avise Pedro imediatamente. Depois, registre no Notion.
        </Alert>
      </div>
    </Frame>
  )
}

/* ============ FRAME 07 ============ */

export function Frame07() {
  return (
    <Frame id="f07" n="07" title="Exemplo *real*" subtitle="Um caso fictício, do primeiro WhatsApp ao “concluído”.">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <Eyebrow className="mb-4">Mensagem recebida · Grupo oficial</Eyebrow>
          <div className="rounded-2xl bg-[#0b211d] p-5">
            <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-surface-2 p-4 shadow-sm">
              <div className="flex items-center justify-between text-[12px]">
                <span className="font-semibold text-[#5fd0a0]">Marina · Distribuidora Alvorada</span>
                <span className="text-ink-soft">09:14</span>
              </div>
              <p className="mt-2 text-[15px] leading-relaxed">
                “Quando entro no cadastro do cliente, o botão está cortado no celular.”
              </p>
              <div className="mt-3 flex items-center gap-2 rounded-lg bg-canvas px-3 py-2 text-[12px] text-ink-soft">
                <Smartphone size={14} /> print-celular.png
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border-2 border-[#34be8c47] bg-[#34be8c1a] p-6">
            <Badge tone="green">Por que é pequena?</Badge>
            <p className="mt-4 font-display font-normal text-[27px] leading-snug">
              Não altera banco, integração, segurança ou regra de negócio.
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
              É um ajuste visual de layout em uma tela. Dentro da regra, o Customer Success executa.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <TypeTag>Bug</TypeTag>
            <TypeTag>Pequena melhoria</TypeTag>
            <Priority level="Média" />
            <SLAChip tone="green">Mesmo dia útil</SLAChip>
          </div>
        </div>

        <Chain
          steps={[
            { title: 'Mensagem do WhatsApp', tone: 'blue' },
            { title: 'Registro no Notion', sub: 'CS-0412 · Distribuidora Alvorada', tone: 'purple' },
            { title: 'Categoria: Bug / Pequena melhoria', tone: 'purple' },
            { title: 'Análise', sub: 'Componente do botão sem quebra de linha no mobile' },
            { title: 'Classificação: Pequena', tone: 'green', tag: <Done>Pequena</Done> },
            { title: 'Alteração no código', sub: 'Ferramenta corporativa autorizada' },
            { title: 'Teste' },
            { title: 'Verificação', tone: 'amber' },
            { title: 'Publicação', tone: 'amber', tag: <Approved /> },
            { title: 'Cliente confirma', tone: 'blue' },
            { title: 'Concluído', tone: 'green', tag: <Done /> },
          ]}
        />
      </div>
    </Frame>
  )
}

/* ============ FRAME 08 ============ */

const kpis: { l: string; v: string; tone: Tone; note: string; bars: number[] }[] = [
  { l: 'Demandas abertas', v: '24', tone: 'blue', note: '+3 esta semana', bars: [4, 6, 5, 8, 7, 9, 8] },
  { l: 'Em SLA', v: '21', tone: 'green', note: '87,5% do total', bars: [6, 7, 7, 8, 8, 9, 9] },
  { l: 'Atrasadas', v: '3', tone: 'red', note: 'Exigem ação hoje', bars: [1, 2, 1, 2, 3, 2, 3] },
  { l: 'Complexas', v: '6', tone: 'purple', note: 'Com desenvolvimento', bars: [2, 3, 3, 4, 4, 5, 6] },
  { l: 'Pequenas melhorias', v: '9', tone: 'green', note: '5 publicadas hoje', bars: [3, 5, 4, 6, 7, 6, 9] },
  { l: 'Implantações em andamento', v: '4', tone: 'blue', note: 'Média: 9 dias úteis', bars: [2, 2, 3, 3, 4, 4, 4] },
  { l: 'Upgrades', v: '2', tone: 'purple', note: 'No mês', bars: [0, 1, 1, 1, 2, 2, 2] },
  { l: 'Clientes em risco', v: '3', tone: 'amber', note: 'Acompanhamento próximo', bars: [1, 1, 2, 2, 2, 3, 3] },
  { l: 'Concluídas', v: '58', tone: 'green', note: 'Nos últimos 30 dias', bars: [5, 6, 8, 7, 9, 9, 10] },
]

const focus: [string, Tone][] = [
  ['Atender', 'blue'],
  ['Resolver', 'blue'],
  ['Acompanhar', 'purple'],
  ['Melhorar', 'purple'],
  ['Reter', 'green'],
  ['Expandir', 'green'],
]

export function Frame08() {
  return (
    <Frame id="f08" n="08" title="Dashboard do *processo*" subtitle="Nove indicadores para saber, em um olhar, como está a carteira. Valores ilustrativos.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {kpis.map((k) => (
          <div key={k.l} className="rounded-2xl border border-line bg-surface-2 p-5">
            <div className="flex items-start justify-between">
              <Eyebrow className="!text-[10.5px]">{k.l}</Eyebrow>
              <span className={`h-2 w-2 rounded-full ${tones[k.tone].dot}`} />
            </div>
            <div className="mt-3 flex items-end justify-between">
              <div className="font-display font-normal text-[59px] leading-none">{k.v}</div>
              <div className="flex h-10 items-end gap-1">
                {k.bars.map((b, i) => (
                  <span key={i} className={`w-1.5 rounded-sm ${tones[k.tone].dot} ${i === k.bars.length - 1 ? '' : 'opacity-30'}`} style={{ height: `${Math.max(b, 0.6) * 10}%` }} />
                ))}
              </div>
            </div>
            <div className={`mt-3 text-[13px] font-medium ${tones[k.tone].text}`}>{k.note}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-orange/25 bg-navy p-8 text-ink md:p-10">
        <Eyebrow className="!text-[#ff9a75]">Foco do Customer Success</Eyebrow>
        <div className="mt-6 flex flex-col items-stretch gap-3 md:flex-row md:items-center">
          {focus.map(([f, t], i) => (
            <div key={f} className="flex flex-1 items-center gap-3 md:contents">
              <div className="flex-1 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-4">
                <div className="font-mono text-[11px] text-[#ff9a75]">{String(i + 1).padStart(2, '0')}</div>
                <div className="mt-1 font-display font-normal text-[24px]">{f}</div>
              </div>
              {i < focus.length - 1 && <Right className="!text-[#ff7a4d99] max-md:hidden" />}
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}

/* ============ FRAME 09 ============ */

const arch: { t: string; I: typeof Zap; tone: Tone; human?: string }[] = [
  { t: 'WhatsApp', I: MessageCircle, tone: 'green' },
  { t: 'Automação', I: Zap, tone: 'blue' },
  { t: 'Notion', I: Database, tone: 'purple' },
  { t: 'Agente de IA', I: Bot, tone: 'purple' },
  { t: 'Codex / Claude Code', I: Cpu, tone: 'navy' },
  { t: 'Repositório', I: GitBranch, tone: 'blue' },
  { t: 'Testes', I: CheckCircle2, tone: 'amber', human: 'Validação' },
  { t: 'Aprovação', I: ShieldCheck, tone: 'amber', human: 'Decisão humana' },
  { t: 'Deploy', I: UploadCloud, tone: 'blue' },
  { t: 'Notion atualizado', I: RefreshCw, tone: 'purple' },
  { t: 'Cliente', I: Building2, tone: 'slate' },
]

export function Frame09() {
  return (
    <Frame id="f09" n="09" title="Arquitetura *futura*" subtitle="A visão de automação: menos trabalho manual, os mesmos pontos de controle.">
      <div className="grid gap-x-2 gap-y-4 md:grid-cols-[repeat(11,minmax(0,1fr))]">
        {arch.map((a, i) => (
          <div key={a.t} className="flex items-center md:contents">
            <div
              className={`relative flex-1 rounded-2xl border bg-surface-2 p-4 text-center ${a.human ? 'border-[#f0b429] ring-4 ring-[#f0b4291a]' : 'border-line'}`}
            >
              {a.human && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#f0b429] px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-[#2a1c00]">
                  {a.human}
                </span>
              )}
              <span className={`mx-auto grid h-10 w-10 place-items-center rounded-xl ${tones[a.tone].bg} ${tones[a.tone].text}`}>
                <a.I size={18} />
              </span>
              <div className="mt-3 text-[13px] font-semibold leading-tight">{a.t}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 hidden md:block">
        <div className="relative h-1.5 rounded-full bg-gradient-to-r from-[#5f8cdc] via-[#ff7a4d] to-[#2fb985] opacity-80" />
        <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-widest text-ink-soft">
          <span>Entrada</span>
          <span>Automação e IA</span>
          <span>Controle humano</span>
          <span>Entrega</span>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border-2 border-orange/60 bg-surface-2 p-7">
        <div className="flex items-start gap-4">
          <ShieldCheck className="mt-1 shrink-0 text-orange" size={26} />
          <p className="font-display font-normal text-[29px] leading-snug">
            Automação não substitui os pontos de decisão, validação e segurança.
          </p>
        </div>
      </div>
    </Frame>
  )
}

/* ============ APPENDIX ============ */

export function Appendix() {
  return (
    <Frame id="apx" n="A" title="Biblioteca de *componentes* e cores" subtitle="Os blocos reutilizáveis usados em todos os frames. Ao montar o Notion, mantenha as mesmas cores e significados.">
      <div className="grid gap-5 lg:grid-cols-3">
        <Panel>
          <Eyebrow className="mb-4">Legenda de cores</Eyebrow>
          <div className="space-y-3 text-[14px]">
            {(
              [
                ['blue', 'Fluxo normal, ação do CS'],
                ['purple', 'Triagem, decisão, comercial'],
                ['green', 'Concluído, aprovado'],
                ['amber', 'Atenção, aguardando'],
                ['red', 'Risco, incidente, atraso'],
                ['navy', 'Complexo, direção, estrutura'],
              ] as [Tone, string][]
            ).map(([t, d]) => (
              <div key={t} className="flex items-center gap-3">
                <span className={`h-6 w-6 rounded-md ${tones[t].dot}`} />
                <span className="text-ink">{d}</span>
              </div>
            ))}
          </div>
        </Panel>
        <Panel>
          <Eyebrow className="mb-4">Status</Eyebrow>
          <div className="flex flex-wrap gap-2">
            <Status tone="blue">Nova</Status>
            <Status tone="purple">Em triagem</Status>
            <Status tone="amber">Aguardando cliente</Status>
            <Status tone="green">Concluída</Status>
            <Done />
            <Approved />
            <Blocked />
          </div>
          <Eyebrow className="mb-3 mt-6">Prioridade</Eyebrow>
          <div className="flex flex-wrap gap-2">
            <Priority level="Crítica" />
            <Priority level="Alta" />
            <Priority level="Média" />
            <Priority level="Baixa" />
          </div>
        </Panel>
        <Panel>
          <Eyebrow className="mb-4">Tipo, responsável e SLA</Eyebrow>
          <div className="flex flex-wrap gap-2">
            <TypeTag>Suporte</TypeTag>
            <TypeTag>Implantação</TypeTag>
            <TypeTag>Bug</TypeTag>
            <TypeTag>Pequena melhoria</TypeTag>
            <TypeTag>Demanda complexa</TypeTag>
            <TypeTag>Upgrade</TypeTag>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <Owner name="Igor" />
            <Owner name="Pedro" tone="purple" />
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <SLAChip>4h úteis</SLAChip>
            <SLAChip tone="amber">Vence hoje</SLAChip>
            <SLAChip tone="red">Atrasado</SLAChip>
          </div>
        </Panel>
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <Decision question="Componente de decisão?" hint="Borda tracejada para tudo que bifurca o fluxo." />
        <div className="space-y-3">
          <Alert tone="amber" title="Alerta de atenção" />
          <Alert tone="red" title="Alerta de risco ou incidente" />
        </div>
      </div>
    </Frame>
  )
}
