/*
1. Analise as afirmações a seguir sobre o projeto de frontend chamado gitcollection desenvolvido em aula com as tecnologias ReactJS e TypeScript, especificamente sobre componentes estilizados:

I. os componentes estilizados são muito úteis para reutilização de estilos e geração única e automática de nome de classes de elementos de marcação que auxiliam principalmente em projetos grandes

II. foram criados 4 componentes estilizados para a page DashBoard: Title (um elemento h1), Formulario (um elemento form), e Repo (um elemento div)

III.  são criados nomes de classes automaticamente apenas para o elemento root (raiz) de um componente estilizado, e não para os elementos filhos. Por exemplo, é criado nome de classe para form e não para input e button 

Escolha uma:
a. Apenas II e III
b. Apenas III
c. Apenas I e II 
d. I, II e III
e. Apenas I e III

Resposta: d. I, II e III





2. Sobre o componente Repo, analise as afirmações:

I. a função useEffect() será chamada toda vez que a variáveis aux for alterada e a página for carregada

II. inicialmente, o vetor issues é inicializado como vazio, sendo do tipo GithubRepository

III. caso a api de issues fosse consultada localmente, haveria a alteração no import para  import { apiLocal  } 
from '../../services/api';

 
Escolha uma:
a. Apenas III
b. Apenas I e III
c. Apenas II e III
d. I, II e III 

Resposta: a. Apenas III





3. Sobre a solução SPA - Single Page Application - do projeto desenvolvido em aula, analise as afirmações:

I. foi criado o componente Header, que foi adicionado ao arquivo App.jsx, dentro do BrowserRouter, antes do componente Routes

II. foi criado para o componente Header o componente estilizado chamado Navegacao, um elemento nav. 

III. o componente Header possui direcionamento para as rotas /dashboard, /repositories e /about

Estão corretas  


Escolha uma:
a. Apenas II
b. Apenas I e II
c. I, II e III 
d. Apenas I e III
e. Apenas II e III

Resposta: c. I, II e III 





4. Sobre o componente Repo desenvolvido em aula do projeto GitCollection , analise as afirmações:

considere que questões é uma tradução do conceito issues

I. os componentes estilizados e utilizados foram Header, RepoInfo e Issues, 

II. o useEffect() faz duas chamadas às APIs, a primeira traz dados de um repositório, e a segunda traz dados das issues do mesmo repositório 

III. como um repositório pode ter várias issues, foi utilizada a função map para recuperar do vetor issues todas as questões de um repositório.

Estão corretas:
Escolha uma:
a. I, II e III 
b. Apenas I e III
c. Apenas I e II
d. Apenas II e III

Resposta: a. I, II e III





5. Analise as afirmações a seguir sobre o projeto de frontend chamado gitcollection desenvolvido em aula com as tecnologias ReactJS e TypeScript, especificamente a classe Dashboard:

I. No componente DashBoard foi chamada a rota /repositories, trocando o caractere - por /. E quando o componente Repo recebeu este valor, trocou-se novamente / por -.

II. se um novo estado/variável fosse criado nesta classe Dashboard, e associado a uma nova caixa de texto para entrada de dados, a mesma função  handleInputChange poderia ser reutilizada no evento onChange da caixa de texto

III.  a cláusula try/ catch foi utilizada na chamada da API para tratar erro de repositório não existente ou erro não esperado na chamada da api.
Estão corretas:


Escolha uma:
a. Apenas II e III
b. I, II e III
c. Apenas III
d. Apenas III e I
e. Apenas III e II

Resposta: c. Apenas III





6. No arquivo App.tsx, foi definida a rota abaixo:

<Route path="/repositories/:repository" element={<Repo/>} />

Assinale a alternativa correta com relação a definição desta rota:

Escolha uma:
a. O :repository serve para que o componente Repo recupere o conteúdo passado na rota /repositories, mas caso o conteúdo contenha -, a rota não será resolvida
b. O :repository serve para que o componente Repo recupere o conteúdo passado na rota /repositories, mas caso o conteúdo contenha /, a rota não será resolvida 
c. O :repository serve para que o componente Repo recupere o conteúdo passado na rota /repositories, independente do conteúdo 
d. O :repository serve para que o componente Repo recupere o conteúdo passado na rota /repositories, mas caso o conteúdo contenha / ou -, a rota não será resolvida

Resposta: b.  O :repository serve para que o componente Repo recupere o conteúdo passado na rota /repositories, mas caso o conteúdo contenha /, a rota não será resolvida.






7. Analise as afirmações a seguir sobre o projeto de frontend chamado gitcollection desenvolvido em aula com as tecnologias ReactJS e TypeScript:

I. No Componente DashBoard, caso outros dados tivessem que ser recuperados do github pela api, a interface GithubRepository precisaria ser alterada, adicionando novos campos ou retirando os atuais de não interesse 

II. No Componente DashBoard, o comando resp.data já vai conter apenas os campos contendo os dados de interesse do repositório, conforme a interface GithubRepository

III. No Componente DashBoard, caso o button fosse alterado para type="button", a função handleAddRepo continuaria a ser executada quando o botão for pressionado.
Estão corretas:
Escolha uma:
a. Apenas I e II
b. Apenas I
c. Apenas II e III 
d. Apenas II
e. Apenas I e III

Resposta: a. Apenas I e II
*/
