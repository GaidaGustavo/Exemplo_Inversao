class ArmazenamentoArquivo {
    armazenarTarefa(tarefa: string): void {
        console.log(`Armazenando tarefa no arquivo de texto: ${tarefa}`);
    }
}
// Classe de alto nível que usa o serviço de armazenamento
class GerenciadorDeTarefas {
    constructor(private armazenamento: ArmazenamentoArquivo) {}
    adicionarTarefa(tarefa: string): void {
        this.armazenamento.armazenarTarefa(tarefa);
    }
}
// Função de fábrica para criar instâncias
function criarGerenciadorDeTarefas(): GerenciadorDeTarefas {
    // Aqui você pode trocar a implementação do serviço de armazenamento
    const armazenamentoArquivo = new ArmazenamentoArquivo();
    return new GerenciadorDeTarefas(armazenamentoArquivo);
}
// Função principal para configurar e executar o sistema
const main = () => {
    const gerenciadorDeTarefas = criarGerenciadorDeTarefas();
    gerenciadorDeTarefas.adicionarTarefa('Tarefa importante para o arquivo de texto.');
}
// Executa a função principal
main(); 