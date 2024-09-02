
// Interface
interface ServicoDeEnvio {
    enviarMensagem(mensagem: string): void;
}

// Implementa a interface
class ServicoEmail implements ServicoDeEnvio {
    enviarMensagem(mensagem: string): void {
        console.log(`Enviando e-mail: ${mensagem}`);
    }
}

// utiliza o serviço de envio de mensagens
class ServicoDeMensagem {
    constructor(private servicoDeEnvio: ServicoDeEnvio) {}

    enviar(mensagem: string): void {
        this.servicoDeEnvio.enviarMensagem(mensagem);
    }
}

const servicoEmail = new ServicoEmail();
const servicoDeMensagem = new ServicoDeMensagem(servicoEmail);
servicoDeMensagem.enviar('Olá, mundo!');

