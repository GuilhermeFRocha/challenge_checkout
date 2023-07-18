![Imagem inicial da tela](src/assets/readme.png)

# Wizzi

O projeto Wizzi é uma solução inovadora e eficiente que visa simplificar e melhorar o processo de checkout, proporcionando uma experiência de compra mais fluida e agradável para os usuários.

## Instalação

Para instalar e executar o projeto Wizzi localmente, siga estas etapas:

1. Clone o repositório:

   ```bash
   git clone https://github.com/GuilhermeFRocha/challenge_checkout.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd wizzi
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra seu navegador e visite `http://localhost:5173` para ver o aplicativo em ação.

# Funcionalidades

## Preenchimento automático de endereço através da API ViaCEP

Ao digitar o CEP no campo específico, o sistema realiza uma busca na API ViaCEP para obter informações detalhadas sobre o endereço associado ao CEP informado. Dessa forma, os campos relacionados ao endereço, como rua, bairro, cidade e estado, são automaticamente preenchidos com os dados obtidos da API, agilizando o preenchimento do formulário pelo usuário.

## Busca inteligente de cidades com API do IBGE para facilitar o preenchimento do formulário

Os campos de cidade de origem e destino possuem um recurso de busca que utiliza a API do IBGE para obter a lista completa de cidades. Conforme o usuário digita o nome da cidade, o sistema apresenta sugestões e exibe as cidades correspondentes em tempo real. Isso facilita a seleção da cidade desejada e evita erros de digitação, tornando o processo de preenchimento do formulário mais intuitivo e eficiente.

## Validação de número de cartão de crédito, data de vencimento e CPF através da biblioteca Yup

Os campos relacionados ao número de cartão de crédito, data de vencimento e CPF possuem uma validação utilizando a biblioteca Yup. Essa validação verifica se os dados inseridos são válidos e correspondem a formatos aceitáveis. Dessa forma, o sistema garante que as informações fornecidas pelo usuário são corretas e existem, evitando erros e problemas durante o processo de finalização da compra.

# Scripts

## Os seguintes scripts estão disponíveis:

- `dev`: Inicia o desenvolvimento
- `build`: Compila o projeto usando TypeScript e Vite.
- `preview`: Visualiza a compilação de produção usando o Vite..

# Dependências

## O projeto possui as seguintes dependências:

- react@18.2.0
- react-dom@18.2.0
- formik@2.4.2
- react-input-mask@2.0.4"
- styled-components@6.0.4"

# Dependências de Desenvolvimento

## O projeto possui as seguintes dependências de desenvolvimento:

```json
@types/react@18.2.14
@types/react-dom@18.2.6
@vitejs/plugin-react@4.0.1
typescript@5.0.2
vite@4.4.0
```
