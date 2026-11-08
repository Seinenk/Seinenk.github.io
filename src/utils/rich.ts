/**
 * Texto curto com marcação mínima, para os estudos de caso:
 * `código` vira <code> e **destaque** vira <strong>. Todo o resto é escapado.
 */
const escape = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function rich(text: string): string {
  return escape(text)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

/** Texto puro (sem marcação), para descrições e contagem de palavras. */
export function plain(text: string): string {
  return text.replace(/`/g, '').replace(/\*\*/g, '');
}

/** Tempo de leitura em minutos, a 200 palavras por minuto. */
export function readingMinutes(texts: string[]): number {
  const words = texts.join(' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
