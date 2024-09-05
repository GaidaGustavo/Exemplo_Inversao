// Interface
    interface ServicoDeArmazenamento {
        armazenarTarefa(tarefa: string): void;
    }
    // Implementa a interface para armazenamento em arquivo
    class ArmazenamentoArquivo implements ServicoDeArmazenamento {
        armazenarTarefa(tarefa: string): void {
            console.log(`Armazenando tarefa no arquivo de texto: ${tarefa}`);
    }
    }
    class GerenciadorDeTarefas {
        constructor(private servicoDeArmazenamento: ServicoDeArmazenamento) {}
    
        adicionarTarefa(tarefa: string): void {
            this.servicoDeArmazenamento.armazenarTarefa(tarefa);
    }
    }
    const armazenamentoArquivo = new ArmazenamentoArquivo();
    const gerenciadorDeTarefasArquivo = new GerenciadorDeTarefas(armazenamentoArquivo);
    gerenciadorDeTarefasArquivo.adicionarTarefa('Tarefa importante para o arquivo de texto.');
    