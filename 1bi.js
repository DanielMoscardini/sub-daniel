/*
1. Sobre os recursos de migração do TypeORM, assinale a alternativa incorreta:

Resposta: Auxilia no controle de versão dos softwares da aplicação, bem como na troca de servidores.

Erradas {
 Auxilia na criação do banco de dados em outros servidores durante o processo de migração.
 Auxilia na mitigação de perda de dados durante mudanças tecnológicas do sistema
 Auxilia na programação colaborativa e integrada de vários programadores
}





2. Sobre a utilização da dependência bcrypt.js em nosso projeto, analise as afirmações:

I. A função hash foi utilizada para gerar um hash da senha do usuário depois que os dados do usuário foram inseridos no banco

II. A função compare foi utilizada para comparar se a senha informada pelo usuário é igual a senha (hash) no banco de dados

III. O usuário precisa saber a senha (hash) que foi armazenado no banco de dados para informá-la no sistema, por exemplo, criar uma sessão
Estão corretas:

Resposta: Apenas II.

Erradas: I e III





3. Sobre a geração e uso de tokens para utilização de APIs protegidas, analise as afirmações:

I. A criação do token ocorre no arquivo CreateSessionService.js, utilizando a função sign da dependência jsonwebtoken e uma palavra que é pública ao usuário

II. A verificação se o token está correto ocorre no arquivo isAuthenticated.ts com a função verify, que utiliza a palavra pública informada também pelo usuário

III. Apenas se o usuário informar email e senha já cadastrados, é que ele pode receber um token. Assim como, apenas se ele informar o token correto, é que pode usar as APIs protegidas.
Estão corretas:

Resposta: Apenas III

Erradas: I e II






4. Sobre a criação de sessões de usuário para consumir um serviço de API, analise as afirmações

I. para criar uma sessão, é necessário informa email e senha. Estando corretos, o usuário recebe um token

II. de posse de um token, pode-se acessar as APIS, informando o token no cabeçalho da requisição, como o GET de usuários, que está protegido

III. para proteger as APIs de mal uso, é necessário, nos arquivos da pasta routes, utilizar o arquivo isAuthenticated.
Estão corretas:

Resposta: I, II e III

Erradas: Nenhuma.





5. Analise as afirmações abaixo a respeito de questões gerais do projeto

I. O uso do TypeORM auxiliou no mapeamento objeto relacional de classes TypeScript com tabelas relacionais do PostgreSQL

II. TypeORM faz uso dos decorators e anotações @, como @Entity e @EntityRepository

III. As classes controllers podem conter regras de negócio, assim como as classes services.
Estão corretas:

Resposta: I e II

Erradas: III





6. Considere a pergunta relacionando ao trabalho: para a criação de um novo módulo, como products e users, qual a sequência correta de criação das pastas:

Escolha uma:
a. services - typeorm - routes - controllers
b. typeorm - services - controllers - routes 
c. typeorm - services - routes - controllers 
d. typeorm - controllers - services - routes

Resposta: b. typeorm - services - controllers - routes 





7. Sobre o uso da classe AppError para tratamento personalizado de erros gerados na aplicação, analise as afirmações

I. É utilizada nas classes da pasta service para informar o tipo de erro ao usuário

II. No arquivo server.js, foi necessário a importação da dependência express-async-errors

III. No arquivo server.js, os erros tratados pela classe AppError tinha um tratamento diferente de outros erros não tratados pelo AppError
Estão corretos:
Escolha uma:
a. Apenas I e III
b. I, II e III 
c. Apenas II e III
d. Apenas I e II

Resposta: b. I, II e III 
*/
