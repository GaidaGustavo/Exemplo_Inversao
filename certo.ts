
//Define um contrato para serviços de logging.
interface ILogger {
  log(mensagem: string): void;
}

//Serviço de loggin, Implementa a interface ILogger
class ServicoDeLogger implements ILogger {
  public log(mensagem: string): void {
      console.log(mensagem);
  }
}

  //registrar mensagens sobre a criação de usuários
class ServicoDeUsuario {
  //Ao invés de usar o ServicoDeLogger direto, usa o ILoger
  private logger: ILogger;

  constructor(logger: ILogger) {
      
      this.logger = logger;
  }

  public criarUsuario(nome: string): void {
      
      this.logger.log(`Criando usuário: ${nome}`);
      
  }
}

const servicoDeLogger = new ServicoDeLogger();
//ServicoDeUsuario instancia servicoDeLogger
const servicoDeUsuario = new ServicoDeUsuario(servicoDeLogger);
servicoDeUsuario.criarUsuario('João da Silva');