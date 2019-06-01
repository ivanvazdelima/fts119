$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BuscaGoogle.feature");
formatter.feature({
  "line": 1,
  "name": "Busca",
  "description": "",
  "id": "busca",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Busca Positiva",
  "description": "",
  "id": "busca;busca-positiva",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Acesso o site do Google no \u003cbrowser\u003e e digite \u003ctermo\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Pressiona Enter",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Exibe a pagina com o titulo \"dia da toalha - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "busca;busca-positiva;",
  "rows": [
    {
      "cells": [
        "browser",
        "termo"
      ],
      "line": 8,
      "id": "busca;busca-positiva;;1"
    },
    {
      "cells": [
        "\"chrome\"",
        "\"dia da toalha\""
      ],
      "line": 9,
      "id": "busca;busca-positiva;;2"
    },
    {
      "cells": [
        "\"chrome\"",
        "\"dia da toalha\""
      ],
      "line": 10,
      "id": "busca;busca-positiva;;3"
    },
    {
      "cells": [
        "\"ie\"",
        "\"dia da toalha\""
      ],
      "line": 11,
      "id": "busca;busca-positiva;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Busca Positiva",
  "description": "",
  "id": "busca;busca-positiva;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Acesso o site do Google no \"chrome\" e digite \"dia da toalha\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Pressiona Enter",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Exibe a pagina com o titulo \"dia da toalha - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 28
    },
    {
      "val": "dia da toalha",
      "offset": 46
    }
  ],
  "location": "BuscaGoogle.acesso_o_site_do_Google_no_e_digite(String,String)"
});
formatter.result({
  "duration": 8781423630,
  "status": "passed"
});
formatter.match({
  "location": "BuscaGoogle.pressiona_Enter()"
});
formatter.result({
  "duration": 4561960247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dia da toalha - Pesquisa Google",
      "offset": 29
    }
  ],
  "location": "BuscaGoogle.exibe_a_pagina_com_o_titulo(String)"
});
formatter.result({
  "duration": 685070944,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Busca Positiva",
  "description": "",
  "id": "busca;busca-positiva;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Acesso o site do Google no \"chrome\" e digite \"dia da toalha\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Pressiona Enter",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Exibe a pagina com o titulo \"dia da toalha - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 28
    },
    {
      "val": "dia da toalha",
      "offset": 46
    }
  ],
  "location": "BuscaGoogle.acesso_o_site_do_Google_no_e_digite(String,String)"
});
formatter.result({
  "duration": 9544015197,
  "status": "passed"
});
formatter.match({
  "location": "BuscaGoogle.pressiona_Enter()"
});
formatter.result({
  "duration": 4604667404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dia da toalha - Pesquisa Google",
      "offset": 29
    }
  ],
  "location": "BuscaGoogle.exibe_a_pagina_com_o_titulo(String)"
});
formatter.result({
  "duration": 655001414,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Busca Positiva",
  "description": "",
  "id": "busca;busca-positiva;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Acesso o site do Google no \"ie\" e digite \"dia da toalha\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Pressiona Enter",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Exibe a pagina com o titulo \"dia da toalha - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ie",
      "offset": 28
    },
    {
      "val": "dia da toalha",
      "offset": 42
    }
  ],
  "location": "BuscaGoogle.acesso_o_site_do_Google_no_e_digite(String,String)"
});
formatter.result({
  "duration": 3318856842,
  "status": "passed"
});
formatter.match({
  "location": "BuscaGoogle.pressiona_Enter()"
});
formatter.result({
  "duration": 3253469495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dia da toalha - Pesquisa Google",
      "offset": 29
    }
  ],
  "location": "BuscaGoogle.exibe_a_pagina_com_o_titulo(String)"
});
formatter.result({
  "duration": 550287827,
  "status": "passed"
});
});