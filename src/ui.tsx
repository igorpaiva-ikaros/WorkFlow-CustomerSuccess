import type { ReactNode } from 'react'
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Clock,
  Lock,
  ShieldAlert,
  AlertTriangle,
  GitBranch,
  Ban,
} from 'lucide-react'

export type Tone = 'blue' | 'purple' | 'green' | 'amber' | 'red' | 'navy' | 'slate'

// Mapeamento Ikaros: 'purple' = laranja da marca (destaque principal) · 'navy' = creme (peso máximo)
export const tones: Record<Tone, { bg: string; text: string; border: string; dot: string; solid: string }> = {
  blue: { bg: 'bg-[#5f8cdc1a]', text: 'text-[#8db0eb]', border: 'border-[#5f8cdc47]', dot: 'bg-[#5f8cdc]', solid: 'bg-[#3e6bc4] text-white' },
  purple: { bg: 'bg-[#ff7a4d1a]', text: 'text-[#ff9a75]', border: 'border-[#ff7a4d4d]', dot: 'bg-[#ff7a4d]', solid: 'bg-[#ff7a4d] text-[#1a0c05]' },
  green: { bg: 'bg-[#34be8c1a]', text: 'text-[#5fd0a0]', border: 'border-[#34be8c47]', dot: 'bg-[#2fb985]', solid: 'bg-[#1f9e6e] text-white' },
  amber: { bg: 'bg-[#f0b4291a]', text: 'text-[#f0c060]', border: 'border-[#f0b42947]', dot: 'bg-[#f0b429]', solid: 'bg-[#f0b429] text-[#2a1c00]' },
  red: { bg: 'bg-[#f0606e1a]', text: 'text-[#ff8a94]', border: 'border-[#f0606e47]', dot: 'bg-[#f0606e]', solid: 'bg-[#d94656] text-white' },
  navy: { bg: 'bg-[#f1eee614]', text: 'text-[#f1eee6]', border: 'border-[#f1eee63d]', dot: 'bg-[#f1eee6]', solid: 'bg-[#f1eee6] text-[#0a1323]' },
  slate: { bg: 'bg-[#a3adbf14]', text: 'text-[#a3adbf]', border: 'border-[#a3adbf3d]', dot: 'bg-[#7d8799]', solid: 'bg-[#5b6678] text-white' },
}

/* ---------- Structure ---------- */

/** Aceita *palavra* no título para destacar em serifa itálica laranja. */
export function Title({ children }: { children: string }) {
  return (
    <>
      {children.split(/(\*[^*]+\*)/g).map((p, i) =>
        p.startsWith('*') ? <em key={i} className="accent-it pr-[0.06em]">{p.slice(1, -1)}</em> : <span key={i}>{p}</span>,
      )}
    </>
  )
}

export function Frame({
  id,
  n,
  title,
  subtitle,
  children,
}: {
  id: string
  n: string
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-[1280px] px-5 py-8 md:px-8">
      <div className="rounded-[28px] border border-line bg-surface px-6 py-10 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.9)] md:px-14 md:py-14">
        <header className="mb-12 max-w-3xl">
          <div className="num-outline text-[88px] md:text-[112px]">{n}</div>
          <h2 className="mt-3 font-display text-[40px] font-normal leading-[1.02] tracking-[-0.01em] text-ink md:text-[58px]">
            <Title>{title}</Title>
          </h2>
          <div className="mt-6 h-px w-full bg-gradient-to-r from-orange via-orange/20 to-transparent" />
          {subtitle && <p className="mt-6 text-lg leading-relaxed text-ink-soft">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-ink-soft ${className}`}>{children}</div>
  )
}

export function Panel({
  children,
  tone,
  className = '',
}: {
  children: ReactNode
  tone?: Tone
  className?: string
}) {
  const t = tone ? `${tones[tone].bg} ${tones[tone].border}` : 'bg-surface-2 border-line'
  return <div className={`rounded-2xl border p-6 ${t} ${className}`}>{children}</div>
}

/* ---------- Connectors ---------- */

export function Down({ className = '', stroke }: { className?: string; stroke?: string }) {
  return (
    <div className={`flex flex-col items-center py-1 text-[#3a4a68] ${className}`}>
      <span className="h-3 w-px bg-current" />
      <ArrowDown size={16} strokeWidth={1.75} stroke={stroke ?? 'currentColor'} />
    </div>
  )
}

export function Right({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center text-[#3a4a68] ${className}`}>
      <span className="h-px w-3 bg-current" />
      <ArrowRight size={16} strokeWidth={1.75} />
    </div>
  )
}

/* ---------- Reusable components ---------- */

export function Badge({ tone = 'slate', children, dot = true }: { tone?: Tone; children: ReactNode; dot?: boolean }) {
  const t = tones[tone]
  return (
    <span className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[12px] font-semibold leading-none ${t.bg} ${t.text} ${t.border}`}>
      {dot && <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />}
      {children}
    </span>
  )
}

export const Status = ({ children, tone = 'blue' }: { children: ReactNode; tone?: Tone }) => <Badge tone={tone}>{children}</Badge>

const prioTone: Record<string, Tone> = { Crítica: 'red', Alta: 'amber', Média: 'blue', Baixa: 'slate' }
export function Priority({ level }: { level: 'Crítica' | 'Alta' | 'Média' | 'Baixa' }) {
  const bars = { Crítica: 4, Alta: 3, Média: 2, Baixa: 1 }[level]
  const t = tones[prioTone[level]]
  return (
    <span className={`inline-flex items-center gap-2 rounded-md border px-2 py-1 text-[12px] font-semibold ${t.bg} ${t.text} ${t.border}`}>
      <span className="flex items-end gap-[2px]">
        {[1, 2, 3, 4].map((i) => (
          <span key={i} className={`w-[3px] rounded-sm ${i <= bars ? t.dot : 'bg-white/10'}`} style={{ height: 4 + i * 2 }} />
        ))}
      </span>
      {level}
    </span>
  )
}

const typeTone: Record<string, Tone> = {
  Suporte: 'blue',
  Implantação: 'purple',
  Bug: 'red',
  'Pequena melhoria': 'green',
  'Demanda complexa': 'navy',
  Upgrade: 'purple',
  Carteira: 'slate',
}
export function TypeTag({ children }: { children: string }) {
  const t = tones[typeTone[children] ?? 'slate']
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-1 font-mono text-[11px] font-medium uppercase tracking-wide ${t.bg} ${t.text} ${t.border}`}>
      <span className={`h-1.5 w-1.5 rounded-[2px] ${t.dot}`} />
      {children}
    </span>
  )
}

export function Owner({ name, tone = 'blue' }: { name: string; tone?: Tone }) {
  return (
    <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-ink">
      <span className={`grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold ${tones[tone].solid}`}>{name.slice(0, 1)}</span>
      {name}
    </span>
  )
}

export function SLAChip({ children, tone = 'blue' }: { children: ReactNode; tone?: Tone }) {
  const t = tones[tone]
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-1 font-mono text-[11px] font-medium ${t.bg} ${t.text} ${t.border}`}>
      <Clock size={12} />
      {children}
    </span>
  )
}

export function Approved({ children = 'Aprovado' }: { children?: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1f9e6e] px-3 py-1 text-[12px] font-semibold text-white">
      <CheckCircle2 size={13} /> {children}
    </span>
  )
}
export function Done({ children = 'Concluído' }: { children?: ReactNode }) {
  return <Badge tone="green">{children}</Badge>
}
export function Blocked({ children = 'Bloqueado' }: { children?: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f0606e47] bg-[#f0606e1a] px-3 py-1 text-[12px] font-semibold text-[#ff8a94]">
      <Ban size={13} /> {children}
    </span>
  )
}

export function Alert({ tone = 'amber', title, children }: { tone?: Tone; title: string; children?: ReactNode }) {
  const t = tones[tone]
  const Icon = tone === 'red' ? ShieldAlert : AlertTriangle
  return (
    <div className={`flex gap-3 rounded-xl border p-4 ${t.bg} ${t.border}`}>
      <Icon size={18} className={`mt-0.5 shrink-0 ${t.text}`} />
      <div>
        <div className={`text-[14px] font-semibold ${t.text}`}>{title}</div>
        {children && <div className="mt-1 text-[13px] leading-relaxed text-ink-soft">{children}</div>}
      </div>
    </div>
  )
}

export function Decision({ question, hint, tone = 'purple' }: { question: string; hint?: string; tone?: Tone }) {
  const t = tones[tone]
  return (
    <div className={`relative mx-auto max-w-md rounded-2xl border-2 border-dashed px-6 py-5 text-center ${t.bg} ${t.border}`}>
      <span className={`absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] ${t.solid}`}>
        <GitBranch size={11} /> Decisão
      </span>
      <div className="font-display text-[24px] font-normal leading-snug text-ink">{question}</div>
      {hint && <div className="mt-2 text-[13px] text-ink-soft">{hint}</div>}
    </div>
  )
}

/* ---------- Step node & chain ---------- */

export type Step = { title: string; sub?: string; tone?: Tone; tag?: ReactNode }

export function Node({ i, step, last }: { i?: number; step: Step; last?: boolean }) {
  const t = tones[step.tone ?? 'blue']
  return (
    <div className={`flex items-center gap-3 rounded-xl border bg-surface-2 px-4 py-3 ${last ? t.border : 'border-line'} transition hover:border-orange/50`}>
      {i !== undefined && (
        <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full font-mono text-[11px] font-semibold ${t.solid}`}>{i}</span>
      )}
      <div className="min-w-0 flex-1">
        <div className="text-[14px] font-semibold leading-snug text-ink">{step.title}</div>
        {step.sub && <div className="mt-0.5 text-[12.5px] leading-snug text-ink-soft">{step.sub}</div>}
      </div>
      {step.tag}
    </div>
  )
}

export function Chain({ steps, numbered = true }: { steps: Step[]; numbered?: boolean }) {
  return (
    <div className="flex flex-col">
      {steps.map((s, i) => (
        <div key={s.title}>
          <Node i={numbered ? i + 1 : undefined} step={s} last={i === steps.length - 1} />
          {i < steps.length - 1 && <Down />}
        </div>
      ))}
    </div>
  )
}

export function Lane({ title, tone, tag, children }: { title: string; tone: Tone; tag?: ReactNode; children: ReactNode }) {
  const t = tones[tone]
  return (
    <div className="rounded-2xl border border-line bg-surface-2 p-5">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className={`h-5 w-1.5 rounded-full ${t.dot}`} />
          <h3 className="font-display text-[26px] font-normal text-ink">{title}</h3>
        </div>
        {tag}
      </div>
      {children}
    </div>
  )
}

export { Lock, Clock, CheckCircle2 }
