Feature: Busca
	Scenario Outline: Busca Positiva
		Given Acesso o site do Google no <browser> e digite <termo>
		And Pressiona Enter
		Then Exibe a pagina com o titulo "dia da toalha - Pesquisa Google"

		Examples: 
		| browser		| termo						|
		| "chrome"	| "dia da toalha" |
		| "chrome"	| "dia da toalha" |
		| "ie"			| "dia da toalha" |
		