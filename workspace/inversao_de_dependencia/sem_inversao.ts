
// implementa o serviço de envio de email
class ServicoEmail {
    enviarMensagem(mensagem: string): void {
        console.log(`Enviando e-mail: ${mensagem}`);
    }
}

// utiliza o serviço de envio
class ServicoDeMensagem {
    private servicoEmail: ServicoEmail;

    constructor() {
        // criação direta do servico de email
        this.servicoEmail = new ServicoEmail(); 
    }

    enviar(mensagem: string): void {
        this.servicoEmail.enviarMensagem(mensagem);
    }
}

// Uso
const servicoDeMensagem = new ServicoDeMensagem();
servicoDeMensagem.enviar('Olá, mundo!');
