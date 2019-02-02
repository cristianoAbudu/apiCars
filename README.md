# Teste da Net Sar

Em primeiro lugar deverá instalar o node.js, caso já não o possua.

Para instalar esse teste, deverá fazer o checkout desse repositório:

<code> git ckeckout apiCars </code>

Esse sistema se conecta com um servidor online gratuito de MySQL, o que em alguns casos causa lentidão.

A seguir seguem dados úteis para acessar o servidor de MySQL

<code>  
	https://www.freemysqlhosting.net/
	mysql pass: test123
	mysql://sql10276945:LCWBgmDmhz@sql10.freemysqlhosting.net:3306/sql10276945
 
	Server: sql10.freemysqlhosting.net
	Name: sql10276945
	Username: sql10276945
	Password: LCWBgmDmhz
	Port number: 3306

</code>

Caso deseje, é possível configurar o banco local. Nesse caso será necessário alterar as informações do data source

<code>
	apiCars/server/datasources.json
</code>

Para criar a tabela dos carros, deverá executar os seguintes comandos SQL :

<code>  
	CREATE TABLE `sql10276945`.`car` ( `modelo` VARCHAR(250) NOT NULL , `fabricante` VARCHAR(250) NOT NULL , `ano` INT NOT NULL , `preco` VARCHAR(250) NOT NULL,`ano` INT NOT NULL  ) ENGINE = InnoDB;

	ALTER TABLE `car` ADD `id` INT NOT NULL AUTO_INCREMENT FIRST, ADD PRIMARY KEY (`id`);
</code>

O código de criação das estruturas internas do loopback encontra-se no arquivo:

<code>
	apiCars/server/create-lb-tables.js
	
	node create-lb-tables.js
</code>


Primeiro deve-se abrir um terminal e navegar até a pasta home da api (apiCars) e executar a API REST feita em LoopBack:

<code>node .</code>

A seguir, iniciar o angular, a partir da pasta apiCars/client

<code> ng serve </code>

Então basta acessar a aplicação ( http://localhost:4200/user/login ) e fazer login com o usuário

<code>
	admin@test.com
	admin123
</code>

# Observações:

Fiz o teste acompanhando todo o curso. Como o ele extenso, deixei algumas coisas de fora:

- Não julguei necessário implementar a paginação na aplicação.
- Não implementei uma maneira para adicionar imagens de novos carros cadastrados. Apenas os 4 cadastrados por mim terão imagens.

# Anotações úteis: 

https://loopback.io/doc/en/lb3/Create-a-simple-API.html

{
  "realm": "string",
  "username": "cristiano.m.almeida",
  "email": "cristiano_de_almeida@hotmail.com",
  "emailVerified": true,
  "password" : "cristiano.m.almeida"
}


{
  "id": "BnRTtWEEGXeJohIExy0AI5zZHH23wbF5Kw2MVwajjHwOHiXWO6ktFqqtMcbBv8dT",
  "ttl": 1209600,
  "created": "2019-02-02T00:59:21.478Z",
  "userId": 1
}


https://github.com/bezael/loopback3_angular6_bootstrap4/tree/master/apiBooks

