- seguir o padrão JS de pastas, arquivos e funções com letras minusculas (X)
- ajustar estrutura de teste. colocar o arquivo de teste na pasta do arquivo normal, e extrair para mais arquivos diferentes (dar uma olhada no jest)
- se nao for ter outros dominios, remover a pasta de movie tendo em vista que o projeto só tem um dominio
- remover alguns const, tendo em vista que as vezes não é usado (ex: const movieSearched = await MovieService ... => return await MovieService...) (X)
- ja existe o try catch no Controller, nao existe necessidade de ter no service (readability, boas praticas pegar em lugar unico) (X)
- ver sobre abrir/fechar conexão com mongo, pode onerar.
- controller deveria ter a responsabilidade de trabalhar com req, res.
- rever rota do healthcheck, usar framework do express e eliminar rota (olhar doc)
- rever uso do validatorJs
- documentar
- jwt (injeção na rota)