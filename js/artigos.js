/**
 * Marcus Gonçalves Advocacia — Base de Artigos
 *
 * Para adicionar um novo artigo, insira um objeto no início do array (mais recente primeiro).
 *
 * Campos obrigatórios:
 *   slug       — URL amigável, ex: "reforma-trabalhista-2026" (sem espaços, sem acentos)
 *   categoria  — categoria do artigo, ex: "Direito Trabalhista"
 *   titulo     — título completo do artigo
 *   resumo     — parágrafo curto de introdução (aparece nos cards)
 *   data       — data de publicação, ex: "Abr 2026"
 *   autor      — autor do artigo, ex: "Marcus Gonçalves"
 *   conteudo   — HTML completo do corpo do artigo (parágrafos, listas, etc.)
 *
 * Campos opcionais:
 *   tempoLeitura — ex: "5 min de leitura"
 *   tags         — array de strings, ex: ["CLT", "Reforma", "Empresa"]
 */

const ARTIGOS = [
  // Exemplo de artigo (remova o comentário e preencha para ativar):
  // {
  //   slug: "titulo-do-artigo-aqui",
  //   categoria: "Direito Empresarial",
  //   titulo: "Título completo do artigo aqui",
  //   resumo: "Resumo curto do artigo que aparecerá nos cards da home e do blog.",
  //   data: "Abr 2026",
  //   autor: "Marcus Gonçalves",
  //   tempoLeitura: "5 min de leitura",
  //   tags: ["Tag 1", "Tag 2"],
  //   conteudo: `
  //     <p>Primeiro parágrafo do artigo...</p>
  //     <p>Segundo parágrafo...</p>
  //   `
  // }
];

// Exporta para uso nas outras páginas
if (typeof window !== 'undefined') {
  window.ARTIGOS = ARTIGOS;
}
