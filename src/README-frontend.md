README — Front-end

Tecnologias


React + TypeScript
Vite
Bootstrap 5
React Router DOM



Páginas do sistema


/ — Página Inicial (App.tsx)

Página principal da plataforma com apresentação, botões de acesso e seção de serviços resumidos.

Endpoints consumidos: nenhum (conteúdo estático)


/sobre — Sobre (Sobre.tsx)

Apresenta a missão, visão e valores da plataforma, além dos números de impacto.

Endpoints consumidos: nenhum (conteúdo estático)


/servicos — Nossos Serviços (NossosServicos.tsx)

Lista completa dos serviços oferecidos pela plataforma com descrição e detalhes de cada um.

Endpoints consumidos: nenhum (conteúdo estático)


/cadastrar — Cadastro (Cadastro.tsx)

Formulário para criação de conta com nome, e-mail e senha.

Endpoints consumidos:

MétodoRotaDescriçãoPOST/cadastroCria um novo usuário no banco de dados


/login — Login (Login.tsx)

Formulário de autenticação com e-mail e senha.

Endpoints consumidos:

MétodoRotaDescriçãoPOST/loginAutentica o usuário e retorna seus dados


/perfil — Perfil (Perfil.tsx)

Página do usuário logado com nome, e-mail, opção de editar dados e botão de logout.

Endpoints consumidos: nenhum (dados salvos no localStorage após login)