// Catálogo de filmes e séries
const catalogo = [
    { id: 1, titulo: "O Poderoso Chefão", tipo: "filme", ano: 1972, generos: ["Crime", "Drama"], nota: 9.2, assistido: true },
    { id: 2, titulo: "Breaking Bad", tipo: "serie", ano: 2008, generos: ["Crime", "Drama", "Thriller"], nota: 9.5, assistido: true },
    { id: 3, titulo: "Spider-Man: Across the Spider-Verse", tipo: "filme", ano: 2023, generos: ["Animação", "Ação", "Aventura"], nota: 8.7, assistido: false },
    { id: 4, titulo: "Severance", tipo: "serie", ano: 2022, generos: ["Ficção Científica", "Suspense"], nota: 8.7, assistido: true },
    { id: 5, titulo: "Parasita", tipo: "filme", ano: 2019, generos: ["Comédia Ácida", "Suspense", "Drama"], nota: 8.5, assistido: false },
    { id: 6, titulo: "The Bear", tipo: "serie", ano: 2022, generos: ["Drama", "Comédia"], nota: 8.6, assistido: true }
];

// --- LOGS NO CONSOLE ---

// 1. Títulos em caixa alta (Corrigido: usando .map para criar a lista)
const TitulosCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("Títulos em Caps Lock:", TitulosCaixaAlta);

// 2. Detalhes de cada item (Corrigido: adicionado crases)
console.log("--- Lista Detalhada ---");
catalogo.forEach(index => {
    console.log(`(${index.tipo}), ${index.titulo}, [${index.ano}]`);
});

// 3. Não assistidos
const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log(`Existem ${naoAssistidos.length} itens não assistidos.`);

// 4. Filmes ótimos
const filmeOtimo = catalogo.find(item => item.nota >= 9);
if (filmeOtimo) {
    console.log(`Título: ${filmeOtimo.titulo}, Nota: ${filmeOtimo.nota}`);
}

// 5. Cálculos de Médias
const somaTodas = catalogo.reduce((acc, item) => acc + item.nota, 0);
const mediaGeral = somaTodas / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);
const somaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0);
const mediaAssistidos = somaAssistidos / assistidos.length;

console.log(`Média geral: ${mediaGeral.toFixed(2)}`);
console.log(`Média assistidos: ${mediaAssistidos.toFixed(2)}`);

// 6. Checagens
const verificaAno = catalogo.some(item => item.ano < 2000);
const verificaGenero = catalogo.every(item => item.generos.length >= 1);

console.log(`Existe pré-2000? ${verificaAno ? "Sim" : "Não"}`);
console.log(`Todos têm gênero? ${verificaGenero ? "Sim" : "Não"}`);

// --- SAÍDA NA TELA (DOM) ---

const totalItens = catalogo.length;
const qtdFilmes = catalogo.filter(item => item.tipo === "filme").length;
const qtdSeries = catalogo.filter(item => item.tipo === "serie").length;

const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

const output = document.getElementById("output");

if (output) {
    output.innerHTML = `
        <h2>Resumo do Catálogo</h2>
        <p><strong>Total de itens:</strong> ${totalItens}</p>
        <p><strong>Filmes:</strong> ${qtdFilmes} | <strong>Séries:</strong> ${qtdSeries}</p>
        <p><strong>Não assistidos:</strong> ${naoAssistidos.length}</p>
        <p><strong>Média geral de notas:</strong> ${mediaGeral.toFixed(2)}</p>
        
        <h3> Top 3 Títulos</h3>
        <ul>
            ${ranking.map(item => `<li>${item.titulo} - Nota: ${item.nota}</li>`).join('')}
        </ul>
    `;
}