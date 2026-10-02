import {
  Alert,
  Approved,
  Badge,
  Blocked,
  Chain,
  Decision,
  Down,
  Eyebrow,
  Frame,
  Lane,
  Node,
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
  Mail,
  MessageCircle,
  Monitor,
  Users,
  Headset,
  Rocket,
  Bug,
  Sparkles,
  Layers,
  TrendingUp,
  Briefcase,
  Check,
  X,
  Timer,
  Clock,
  Sunset,
  FileBarChart,
  Zap,
  Reply,
} from 'lucide-react'

/* ============ FRAME 01 ============ */

const macro: { t: string; s: string; tone: Tone }[] = [
  { t: 'Cliente', s: 'Origem da solicitação', tone: 'slate' },
  { t: 'WhatsApp / canais oficiais', s: 'Grupo oficial, e-mail, sistema', tone: 'blue' },
  { t: 'Captura da demanda', s: 'Entender e coletar contexto', tone: 'blue' },
  { t: 'Registro no Notion', s: 'Toda demanda vira um card', tone: 'purple' },
  { t: 'Triagem', s: 'Qual é a natureza da demanda?', tone: 'purple' },
  { t: 'Classificação', s: 'Pequena ou complexa', tone: 'purple' },
  { t: 'Execução', s: 'Resolver ou encaminhar', tone: 'blue' },
  { t: 'Validação', s: 'Testes, verificação, aprovação', tone: 'amber' },
  { t: 'Cliente', s: 'Recebe retorno e confirma', tone: 'slate' },
  { t: 'Encerramento', s: 'Registro final no Notion', tone: 'green' },
]

const actions: { n: string; d: string; I: typeof Headset; tone: Tone }[] = [
  { n: 'Suporte', d: 'Dúvidas e orientações de uso', I: Headset, tone: 'blue' },
  { n: 'Implantação / Onboarding', d: 'Colocar o cliente em operação', I: Rocket, tone: 'purple' },
  { n: 'Bug', d: 'Comportamento incorreto do sistema', I: Bug, tone: 'red' },
  { n: 'Pequena melhoria', d: 'Ajuste simples, executado pelo CS', I: Sparkles, tone: 'green' },
  { n: 'Demanda complexa', d: 'Vai para a equipe de desenvolvimento', I: Layers, tone: 'navy' },
  { n: 'Upgrade', d: 'Evolução de plano com comissão', I: TrendingUp, tone: 'purple' },
  { n: 'Acompanhamento da carteira', d: 'Relacionamento e saúde do cliente', I: Briefcase, tone: 'slate' },
]

export function Frame01() {
  return (
    <Frame
      id="f01"
      n="01"
      title="Como funciona o *Customer Success* do Ikaros ERP"
      subtitle="Do pedido do cliente à resolução, melhoria ou encaminhamento técnico."
    >
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <Eyebrow className="mb-5">Fluxo macro · 10 etapas</Eyebrow>
          <div className="relative">
            {macro.map((m, i) => (
              <div key={i}>
                <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface-2 px-5 py-3.5 transition hover:border-orange/50">
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full font-mono text-xs font-semibold ${tones[m.tone].solid}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <div className="font-display font-normal text-[21px] text-ink">{m.t}</div>
                    <div className="text-[13px] text-ink-soft">{m.s}</div>
                  </div>
                </div>
                {i < macro.length - 1 && <Down />}
              </div>
            ))}
          </div>
        </div>

        <div>
          <Eyebrow className="mb-5">Legenda · tipos de atuação</Eyebrow>
          <div className="space-y-3">
            {actions.map(({ n, d, I, tone }) => (
              <div key={n} className="flex items-center gap-4 rounded-2xl border border-line bg-[#0d182b] p-4">
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${tones[tone].bg} ${tones[tone].text}`}>
                  <I size={20} />
                </span>
                <div>
                  <div className="text-[15px] font-semibold text-ink">{n}</div>
                  <div className="text-[13px] text-ink-soft">{d}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Alert tone="purple" title="Regra de ouro do fluxo">
              Nenhuma demanda existe fora do Notion. Se não foi registrada, não aconteceu.
            </Alert>
          </div>
        </div>
      </div>
    </Frame>
  )
}

/* ============ FRAME 02 ============ */

const notionFields: [string, string][] = [
  ['ID', 'CS-0412'],
  ['Cliente', 'Corretora Imperium'],
  ['Categoria', 'Bug'],
  ['Descrição', 'Sistema não está cadastrando o produto da cliente. De acordo com a cliente ao tentar cadastrar aparece o seguinte erro: (Erro0401)'],
  ['Prioridade', ''],
  ['Status', ''],
  ['Responsável', ''],
  ['SLA', ''],
  ['Data de entrada', '02 out 2026 · 09:14'],
]

function NotionCard() {
  return (
    <div className="rounded-2xl border border-line bg-surface-2 p-5 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.8)]">
      <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
        <div className="flex items-center gap-2 font-display font-normal text-[20px]">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-cream text-[11px] font-bold text-canvas">N</span>
          Demanda
        </div>
        <Eyebrow>Banco · Demandas CS</Eyebrow>
      </div>
      <dl className="space-y-2.5">
        {notionFields.map(([k, v]) => (
          <div key={k} className="grid grid-cols-[120px_1fr] items-center gap-3 text-[13.5px]">
            <dt className="text-ink-soft">{k}</dt>
            <dd className="font-medium text-ink">
              {k === 'Prioridade' ? <Priority level="Alta" /> : k === 'Status' ? <Status tone="blue">Nova</Status> : k === 'Responsável' ? <Owner name="Igor" /> : k === 'SLA' ? <SLAChip>1ª resposta · 4h úteis</SLAChip> : k === 'Categoria' ? <TypeTag>Bug</TypeTag> : v}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

const small: { title: string; tone?: Tone; sub?: string }[] = [
  { title: 'Demanda aprovada', tone: 'green' },
  { title: 'Analisar código' },
  { title: 'Executar alteração', sub: 'Com ferramenta corporativa autorizada', tone: 'purple' },
  { title: 'Testes automatizados' },
  { title: 'Verificação', tone: 'amber' },
  { title: 'Aprovação necessária', sub: 'Ponto de decisão humana', tone: 'amber' },
  { title: 'Publicação' },
  { title: 'Atualizar tutorial / IA de ajuda' },
  { title: 'Informar cliente' },
  { title: 'Registrar conclusão no Notion', tone: 'green' },
]

const complex: { title: string; tone?: Tone; sub?: string }[] = [
  { title: 'Demanda identificada' },
  { title: 'Classificar como complexa', tone: 'navy' },
  { title: 'Encaminhar para Pedro / equipe de desenvolvimento', tone: 'purple' },
  { title: 'Registrar encaminhamento' },
  { title: 'Acompanhar andamento' },
  { title: 'Manter cliente informado' },
  { title: 'Receber solução' },
  { title: 'Validar', tone: 'amber' },
  { title: 'Informar cliente' },
  { title: 'Encerrar demanda', tone: 'green' },
]

function Bullets({ items, I, tone }: { items: string[]; I: typeof Check; tone: Tone }) {
  return (
    <ul className="space-y-2">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2.5 text-[14px] text-ink">
          <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${tones[tone].bg} ${tones[tone].text}`}>
            <I size={12} strokeWidth={3} />
          </span>
          {it}
        </li>
      ))}
    </ul>
  )
}

function StepHead({ n, title, tone = 'blue' }: { n: number; title: string; tone?: Tone }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className={`grid h-8 w-8 place-items-center rounded-full font-mono text-xs font-semibold ${tones[tone].solid}`}>{n}</span>
      <h3 className="font-display font-normal text-[27px] text-ink">{title}</h3>
    </div>
  )
}

export function Frame02() {
  return (
    <Frame id="f02" n="02" title="Fluxo completo da *demanda*" subtitle="Cada etapa, na ordem exata em que acontece. Leia de cima para baixo.">
      {/* 1-3 */}
      <div className="grid gap-6 lg:grid-cols-[1fr_auto_1.1fr_auto_1.1fr] lg:items-start">
        <div>
          <StepHead n={1} title="Cliente envia a demanda" />
          <Panel className="space-y-2.5 !p-4">
            <Eyebrow className="mb-1">Origem</Eyebrow>
            {[
              [MessageCircle, 'Grupo de atendimento no WhatsApp'],
              [Monitor, 'Sistema'],
            ].map(([I, l]) => {
              const Ic = I as typeof Mail
              return (
                <div key={l as string} className="flex items-center gap-3 rounded-xl bg-[#5f8cdc1a] px-3.5 py-3 text-[14px] font-medium text-[#8db0eb]">
                  <Ic size={18} /> {l as string}
                </div>
              )
            })}
          </Panel>
        </div>
        <Right className="hidden self-center lg:flex" />
        <div>
          <StepHead n={2} title="Captura" />
          <Panel className="!p-4">
            <Eyebrow className="mb-3">Registrar</Eyebrow>
            <Bullets
              I={Check}
              tone="blue"
              items={['Cliente', 'Responsável', 'Data', 'Problema relatado', 'Contexto', 'Impacto', 'Resultado esperado', 'Evidências / prints, quando disponíveis']}
            />
          </Panel>
        </div>
        <Right className="hidden self-center lg:flex" />
        <div>
          <StepHead n={3} title="Registro no Notion" tone="purple" />
          <NotionCard />
        </div>
      </div>

      <Down className="my-4" stroke="var(--color-ink)" />

      {/* 4 */}
      <div>
        <StepHead n={4} title="Triagem" tone="purple" />
        <Decision question="Qual é a natureza da demanda?" hint="Toda demanda cai em exatamente uma destas seis ramificações." />
        <div className="mx-auto h-5 w-px bg-[#2a3754]" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          {(
            [
              ['Dúvida / Suporte', Headset, 'blue'],
              ['Implantação', Rocket, 'purple'],
              ['Bug', Bug, 'red'],
              ['Pequena melhoria', Sparkles, 'green'],
              ['Demanda complexa', Layers, 'navy'],
              ['Upgrade', TrendingUp, 'purple'],
            ] as [string, typeof Headset, Tone][]
          ).map(([l, I, t]) => (
            <div key={l} className={`rounded-xl border p-4 ${tones[t].bg} ${tones[t].border}`}>
              <I size={20} className={tones[t].text} />
              <div className={`mt-3 text-[14px] font-semibold ${'text-ink'}`}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <Down className="my-4" />

      {/* 5 */}
      <div>
        <StepHead n={5} title="Classificação técnica" tone="purple" />
        <Decision question="É uma pequena melhoria?" tone="purple" />
        <div className="mx-auto h-5 w-px bg-[#2a3754]" />
        <div className="grid gap-5 md:grid-cols-2">
          <Panel tone="green">
            <div className="mb-4 flex h-[44px] w-[300px] flex-row items-center justify-between gap-[5px]">
              <Badge tone="green">Pequena · SIM</Badge>
              <span className="text-[12px] text-ink-soft">Todos os itens devem ser verdadeiros</span>
            </div>
            <Bullets I={Check} tone="green" items={['Ajuste de tela', 'Alteração de texto', 'Configuração', 'Regra simples', 'Sem alteração de banco', 'Sem integração', 'Sem Edge Functions', 'Sem regra de negócio complexa', 'Sem alteração de segurança']} />
          </Panel>
          <Panel tone="slate" className="!bg-[#f1eee614] !border-[#f1eee63d]">
            <div className="mb-4 flex h-[44px] w-[300px] flex-row items-center justify-center gap-[5px]">
              <span className="inline-flex rounded-full bg-cream px-2.5 py-1 text-[12px] font-semibold text-canvas">Complexa · NÃO</span>
              <span className="text-[12px] text-ink-soft">Basta um item para ser complexa</span>
            </div>
            <Bullets I={X} tone="navy" items={['Alteração de banco', 'Integração', 'Edge Functions', 'Regras de negócio', 'Segurança', 'Qualquer alteração de maior complexidade']} />
          </Panel>
        </div>
        <div className="mt-5">
          <Alert tone="amber" title="Em caso de dúvida: TRATAR COMO COMPLEXA">
            Errar para o lado da cautela custa um encaminhamento. Errar para o outro lado pode custar produção.
          </Alert>
        </div>
      </div>

      <Down className="my-4" />

      {/* 6 & 7 */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <StepHead n={6} title="Demanda pequena" tone="green" />
          <Lane title="Executada pelo CS" tone="green" tag={<SLAChip tone="green">Mesmo dia útil</SLAChip>}>
            <Chain steps={small} />
          </Lane>
        </div>
        <div>
          <StepHead n={7} title="Demanda complexa" tone="navy" />
          <Lane title="Encaminhada ao desenvolvimento" tone="purple" tag={<Owner name="Pedro" tone="purple" />}>
            <Chain steps={complex} />
          </Lane>
        </div>
      </div>

      <div className="my-12 h-px bg-line" />

      {/* 8 & 9 */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <StepHead n={8} title="Suporte" />
          <Lane title="Fluxo de atendimento" tone="blue">
            <div className="flex flex-col">
              <Node i={1} step={{ title: 'Cliente pergunta' }} />
              <Down />
              <Node i={2} step={{ title: 'Analisar contexto' }} />
              <Down />
              <Node i={3} step={{ title: 'Responder' }} />
              <Down />
              <Decision question="Problema resolvido?" tone="blue" />
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#34be8c47] bg-[#34be8c1a] p-4">
                  <Badge tone="green">SIM</Badge>
                  <div className="mt-2 text-[14px] font-semibold">Registrar e encerrar</div>
                </div>
                <div className="rounded-xl border border-[#f0b42947] bg-[#f0b4291a] p-4">
                  <Badge tone="amber">NÃO</Badge>
                  <div className="mt-2 text-[14px] font-semibold">Transformar em demanda e encaminhar para triagem</div>
                </div>
              </div>
            </div>
          </Lane>
        </div>
        <div>
          <StepHead n={9} title="Upgrade" tone="purple" />
          <Lane title="Fluxo comercial" tone="purple">
            <Chain
              steps={[
                { title: 'Identificar necessidade real do cliente', tone: 'purple' },
                { title: 'Apresentar plano superior', tone: 'purple' },
                { title: 'Respeitar condições comerciais aprovadas', tone: 'amber' },
                { title: 'Cliente aceita', tone: 'purple' },
                { title: 'Registrar no CRM / sistema', tone: 'purple' },
                { title: 'Upgrade efetivado', tone: 'green' },
                { title: 'Registrar comissão', tone: 'green' },
              ]}
            />
            <div className="mt-5 rounded-2xl border border-orange/30 bg-gradient-to-br from-[#12294f] to-[#0a1323] p-5 text-ink">
              <Eyebrow className="!text-[#ff9a75]">Comissão</Eyebrow>
              <div className="mt-2 font-display font-normal text-[27px] leading-tight">
                COMISSÃO = 100% DE UMA MENSALIDADE DO NOVO PLANO
              </div>
            </div>
          </Lane>
        </div>
      </div>
    </Frame>
  )
}

/* ============ FRAME 03 ============ */

const slas: { t: string; v: string; I: typeof Clock; tone: Tone; note: string }[] = [
  { t: 'Primeira resposta', v: 'Até 4 horas úteis', I: Reply, tone: 'blue', note: 'Contado a partir do registro' },
  { t: 'Solução ou encaminhamento', v: 'Até 1 dia útil', I: Zap, tone: 'purple', note: 'Resolver ou encaminhar com registro' },
  { t: 'Implantação', v: '5 a 15 dias úteis', I: Rocket, tone: 'purple', note: 'Conforme porte do cliente' },
  { t: 'Pequena melhoria', v: 'Preferencialmente no mesmo dia útil', I: Sparkles, tone: 'green', note: 'Executada pelo CS' },
  { t: 'Mensagens fora do horário', v: 'Responder no próximo dia útil', I: Sunset, tone: 'amber', note: 'Sem cobrança de resposta imediata' },
  { t: 'Relatório mensal', v: 'Até o 5º dia útil do mês seguinte', I: FileBarChart, tone: 'blue', note: 'Enviado a cada cliente da carteira' },
]

export function Frame03() {
  return (
    <Frame id="f03" n="03" title="Níveis de *serviço*" subtitle="Cada demanda carrega um relógio. O SLA começa no registro e só para quando ela é encerrada.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {slas.map(({ t, v, I, tone, note }) => (
          <div key={t} className="rounded-2xl border border-line bg-surface-2 p-6 transition hover:border-orange/50">
            <span className={`grid h-11 w-11 place-items-center rounded-xl ${tones[tone].bg} ${tones[tone].text}`}>
              <I size={20} />
            </span>
            <Eyebrow className="mt-6">{t}</Eyebrow>
            <div className="mt-2 font-display font-normal text-[29px] leading-tight text-ink">{v}</div>
            <div className="mt-3 text-[13px] text-ink-soft">{note}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid items-center gap-8 rounded-2xl border border-orange/25 bg-navy p-8 text-ink md:grid-cols-[auto_1fr]">
        <div className="flex items-center gap-5">
          <svg width="76" height="76" viewBox="0 0 24 24" fill="none" stroke="#ff9a75" strokeWidth="1.2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 3v2M21 12h-2M12 21v-2M3 12h2" strokeLinecap="round" />
            <line className="clock-hand" x1="12" y1="12" x2="12" y2="5.5" stroke="#f1eee6" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="12" cy="12" r="1.2" fill="#f1eee6" stroke="none" />
          </svg>
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#ff9a75]">
              <span className="live-dot h-2 w-2 rounded-full bg-[#f0b429]" /> Tempo correndo
            </div>
            <div className="mt-1 font-display font-normal text-[27px]">SLA em acompanhamento</div>
          </div>
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between font-mono text-[11px] text-[#ff9a75]">
            <span>CS-0412 · Primeira resposta</span>
            <span>limite: 4h úteis</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-white/10">
            <div className="sla-bar h-full rounded-full bg-gradient-to-r from-[#2fb985] via-[#f0b429] to-[#f0606e]" />
          </div>
          <div className="mt-3 flex flex-wrap gap-4 text-[12.5px] text-[#d5dae4]">
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#2fb985]" /> No prazo</span>
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#f0b429]" /> Atenção</span>
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#f0606e]" /> Atrasada</span>
          </div>
        </div>
      </div>
    </Frame>
  )
}

/* ============ FRAME 04 ============ */

const cols: { n: string; tone: Tone; d: string; card: string }[] = [
  { n: 'Nova', tone: 'blue', d: 'Registrada, ainda não lida', card: 'CS-0415 · Erro ao emitir NF' },
  { n: 'Em triagem', tone: 'purple', d: 'Definindo natureza e prioridade', card: 'CS-0414 · Relatório lento' },
  { n: 'Aguardando informação', tone: 'amber', d: 'Falta contexto do cliente', card: 'CS-0413 · Sem print do erro' },
  { n: 'Em execução', tone: 'blue', d: 'Alguém está trabalhando', card: 'CS-0412 · Botão cortado' },
  { n: 'Aguardando validação', tone: 'amber', d: 'Testado, falta aprovar', card: 'CS-0411 · Texto do boleto' },
  { n: 'Publicada', tone: 'purple', d: 'No ar, falta avisar', card: 'CS-0409 · Filtro de estoque' },
  { n: 'Aguardando cliente', tone: 'amber', d: 'Cliente precisa confirmar', card: 'CS-0407 · Cadastro de lote' },
  { n: 'Concluída', tone: 'green', d: 'Confirmada e registrada', card: 'CS-0402 · Permissão de perfil' },
]

export function Frame04() {
  return (
    <Frame id="f04" n="04" title="Status da *demanda*" subtitle="O caminho normal passa por oito colunas, da esquerda para a direita. Três estados especiais ficam fora dele.">
      <div className="thin-scroll -mx-2 overflow-x-auto px-2 pb-4">
        <div className="flex min-w-max items-stretch gap-0">
          {cols.map((c, i) => (
            <div key={c.n} className="flex items-stretch">
              <div className="w-[196px] rounded-2xl border border-line bg-[#0d182b] p-3">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-ink-soft">{String(i + 1).padStart(2, '0')}</span>
                  <span className={`h-2 w-2 rounded-full ${tones[c.tone].dot}`} />
                </div>
                <Status tone={c.tone}>{c.n}</Status>
                <p className="mt-3 min-h-[34px] text-[12.5px] leading-snug text-ink-soft">{c.d}</p>
                <div className="mt-3 rounded-xl border border-line bg-surface p-3 shadow-sm">
                  <div className="text-[12.5px] font-semibold text-ink">{c.card}</div>
                  <div className="mt-2 flex items-center justify-between">
                    <Owner name="Igor" />
                  </div>
                </div>
              </div>
              {i < cols.length - 1 && <Right className="px-1" />}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Eyebrow className="mb-4">Estados especiais · podem ocorrer em qualquer etapa</Eyebrow>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#f0606e47] bg-[#f0606e1a] p-5">
            <Blocked />
            <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">Algo externo impede o avanço. Registrar o motivo e avisar Pedro.</p>
          </div>
          <div className="rounded-2xl border border-[#ff7a4d4d] bg-[#ff7a4d1a] p-5">
            <Badge tone="purple">Encaminhada para desenvolvimento</Badge>
            <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">Demanda complexa. O CS segue acompanhando e informando o cliente.</p>
          </div>
          <div className="rounded-2xl border border-[#a3adbf3d] bg-[#a3adbf14] p-5">
            <Badge tone="slate">Cancelada</Badge>
            <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">Cliente desistiu ou demanda duplicada. Sempre registrar o motivo.</p>
          </div>
        </div>
      </div>
    </Frame>
  )
}

export { Timer }
