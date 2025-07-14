# BAAS Platform UI

Uma aplicação React moderna para simular uma plataforma de Banking as a Service (BAAS) com funcionalidades bancárias básicas.

## 🚀 Sobre o Projeto

A BAAS Platform UI é uma aplicação frontend que simula uma plataforma bancária digital, oferecendo funcionalidades como:

- **Autenticação**: Login e cadastro de usuários
- **Transferências**: Envio de dinheiro entre contas (email/CPF)
- **Saque**: Simulação de saque em caixa eletrônico
- **Depósito**: Geração de código PIX para receber depósitos
- **Dashboard**: Interface moderna com saldo e operações

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **React Router** - Roteamento da aplicação
- **React Hook Form** - Gerenciamento de formulários
- **Lucide React** - Ícones modernos
- **Vite** - Build tool e dev server

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## 🔧 Instalação e Execução

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd BAAS-platform-ui
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute a aplicação
```bash
npm run dev
```

### 4. Acesse a aplicação
Abra seu navegador e acesse: `http://localhost:5173`

## 🎨 Funcionalidades

### Autenticação
- **Login**: Email e senha
- **Cadastro**: Nome, email, CPF e senha
- **Proteção de rotas**: Dashboard só acessível após login

### Dashboard
- **Saldo**: Exibição do saldo atual (simulado)
- **Operações**: Cards para transferência, saque, depósito e extrato
- **Layout responsivo**: Funciona em desktop e mobile

### Transferência
- **Destinatário**: Email ou CPF
- **Valor**: Campo numérico com validação
- **Modal interativo**: Interface limpa e intuitiva

### Saque
- **Valores pré-definidos**: R$ 50, 100, 200, 500
- **Valor personalizado**: Campo para valores customizados
- **Simulação**: Processo simulado de saque

### Depósito
- **Código PIX**: Geração automática de código copia e cola
- **Instruções**: Passo a passo para usar o código
- **Copiar**: Botão para copiar o código automaticamente

## 🏗️ Arquitetura

```
src/
├── components/     # Componentes reutilizáveis
├── features/       # Funcionalidades específicas
│   ├── transfer/   # Modal de transferência
│   ├── withdraw/   # Modal de saque
│   └── deposit/    # Modal de depósito
├── pages/          # Páginas da aplicação
├── routes/         # Configuração de rotas
├── services/       # Serviços e APIs (futuro)
├── hooks/          # Custom hooks (futuro)
├── utils/          # Utilitários (futuro)
└── styles/         # Estilos globais
```

## 🎯 Design System

### Cores
- **Primary**: Azul claro (`#3B82F6`)
- **Background**: Branco (`#FFFFFF`)
- **Gray**: Tons de cinza para textos e bordas

### Componentes
- **Botões**: Estilo consistente com hover effects
- **Inputs**: Bordas e focus states padronizados
- **Modais**: Overlay com backdrop e animações
- **Cards**: Sombras e bordas arredondadas

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- **Desktop**: Layout em grid com 4 colunas
- **Tablet**: Layout adaptativo com 2 colunas
- **Mobile**: Layout em coluna única

## 🔮 Próximos Passos

- [ ] Integração com backend real
- [ ] Sistema de notificações
- [ ] Histórico de transações
- [ ] Configurações de conta
- [ ] Testes automatizados
- [ ] Deploy em produção

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido como projeto de demonstração de uma plataforma BAAS moderna e escalável.

---

**Nota**: Esta é uma aplicação de demonstração. As funcionalidades bancárias são simuladas e não realizam transações reais.
