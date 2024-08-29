//Serviço de loggin, apenas exibe na tela
class ServicoDeLogger {
  log(mensagem: string): void {
      console.log(mensagem);
  }
}

//Usa a classe ServicoDeLogger para registrar informações sobre a criação de usuários
class ServicoDeUsuario {
  private logger: ServicoDeLogger;

  constructor() {
     
      this.logger = new ServicoDeLogger();
  }

  public criarUsuario(nome: string): void {
      
      this.logger.log(`Criando usuário: ${nome}`);
     
  }
}

//Cria o usuário João da Silva
const servicoDeUsuario = new ServicoDeUsuario();
servicoDeUsuario.criarUsuario('João da Silva');
