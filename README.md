# Comando
## Ocorrências do Comando - Centro de Operações Rio

## Objetivo
* Buscar informações de uma API a cada 28 e 58 minutos 
* Atualiza o banco de dados.
* Escreve dados em um arquivo.
* Faz uso de uma autenticação distribuida entre outras aplicações.

## 🛠 Tecnologias
* [Node Cron](https://github.com/node-cron/node-cron)
* [Date-fns](https://date-fns.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Node >=16](https://nodejs.org/)

## Uso
```bash
# Transpila e Executa
yarn prod

# Executar em desenvolvimento
yarn dev
```

```bash
# Transpila e Executa
npm run prod

# Executar em desenvolvimento
npm run dev
```

## Rodando a aplicação com Docker
[![asciicast](https://asciinema.org/a/567257.svg)](https://asciinema.org/a/567257?t=11)

```bash
DOCKER_BUILDKIT=1 docker build -t <image_tag> .
docker run -d --restart on-failure --env-file .env <image_tag>
```

## Variaveis de Ambiente
 
```dotenv
NODE_ENV=production

USERAPI=
PASSAPI=

APP_NAME=comando

DB_HOST=ec2.compute-1.amazonaws.com
DB_NAME=comando
DB_USER=postgres
DB_PASS=stronPassword
DB_TABLE_EVENTO=evento_comando


FORCE=false
FILENAME=dump.json
```