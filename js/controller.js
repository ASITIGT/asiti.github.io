var app = angular.module("ASITI", []);

app.controller("asiti2020", function($scope,$http) {
  $scope.hash = window.location.hash.substr(1);
  
  $scope.asistentes = [
    {
        "hash": "60b92e613d228770a665c1cf5f2913ea",
        "name": "Danilo Manolo Romero G\u00f3mez",
        "temas": [
            "Computaci\u00f3n cu\u00e1ntica",
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "48a25e423ce8a61ba34a6e4100d134ad",
        "name": "Erick Enrique Zamora Paz",
        "temas": [
            "Computaci\u00f3n cu\u00e1ntica"
        ]
    },
    {
        "hash": "fe48c2128b0fc0b444d8d01f34780314",
        "name": "Alan De Jes\u00fas Espinoza Donis",
        "temas": [
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "7cc8f9a0fa1e31bf99087175ad3529ca",
        "name": "Angel Rogelio Trujillo Alvarado",
        "temas": [
            "Computaci\u00f3n cu\u00e1ntica",
            "Rob\u00f3tica en el salvador",
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "5a00e054b6e48e0c8f79f9caf974fc87",
        "name": "Antonio Xocop",
        "temas": [
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "8e090357d8e75ae60c5757d4a2e3268e",
        "name": "Arnolds An\u00edbal Vel\u00e1squez L\u00f3pez",
        "temas": [
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "a774fb019004b0f79b5556a5a7f1b1ce",
        "name": "Brian Am\u00edlcar Sosa L\u00f3pez",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "32597cebd7153582d41cf50df92628ba",
        "name": "Braulio No\u00e9 Antonio Corado Alvarez",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador",
            "Computaci\u00f3n cu\u00e1ntica",
            "Conociendo kicad",
            "Blockchain la estructura detras del bitcoin",
            "\u00bfqu\u00e9 es docker y c\u00f3mo utilizarlo?",
            "Machine learning"
        ]
    },
    {
        "hash": "cffc5e97146222d81456d8e1e52e96b7",
        "name": "Carlos Alberto Maldonado",
        "temas": [
            "Blockchain la estructura detras del bitcoin",
            "Rob\u00f3tica en el salvador",
            "Computaci\u00f3n cu\u00e1ntica"
        ]
    },
    {
        "hash": "62714ab978a908c5a312f46b031dcc2c",
        "name": "Carlos Quijibir",
        "temas": [
            "Machine learning"
        ]
    },
    {
        "hash": "640d1045267671d4ed9ece8db8699a37",
        "name": "Sebasti\u00e1n De Le\u00f3n",
        "temas": [
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "7f86820270c83e0f50fdb24d74e6945e",
        "name": "Mario Alfredo G\u00f3mez Cardona",
        "temas": [
            "Rob\u00f3tica en el salvador",
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "442594cc039404bf96d971b50789eb1b",
        "name": "Cindy Mar\u00eda Jos\u00e9 Reyna Ort\u00edz",
        "temas": [
            "Rob\u00f3tica en el salvador",
            "Conociendo java y su entorno en guatemala",
            "Computaci\u00f3n cu\u00e1ntica"
        ]
    },
    {
        "hash": "b1c7d91936a51ce3471e6b81c08598d7",
        "name": "Guillermo Antonio L\u00f3pez Mart\u00ednez",
        "temas": [
            "Computaci\u00f3n cu\u00e1ntica",
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "85f7be5e08efcda5abae07439c2f36cf",
        "name": "Diana Maricela L\u00f3pez Ortiz",
        "temas": [
            "Rob\u00f3tica en el salvador",
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "5ced48bc91d3569d60cfe97917778bae",
        "name": "Cristian Isai Najarro Gonz\u00e1lez",
        "temas": [
            "Computaci\u00f3n cu\u00e1ntica"
        ]
    },
    {
        "hash": "56b361ef734c8a702b1d1c32639f0752",
        "name": "Cristian Leonardo D\u00edaz Mejia",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "59167895f2206cc74c1b251f43bb2d45",
        "name": "Carlos Rodr\u00edguez Qui\u00f1onez",
        "temas": [
            "Rob\u00f3tica en el salvador",
            "Conociendo java y su entorno en guatemala",
            "Computaci\u00f3n cu\u00e1ntica"
        ]
    },
    {
        "hash": "275e6bdb4c4d4fd5324ba1ce2b8994ae",
        "name": "Edgar Daniel De Le\u00f3n Coyoy",
        "temas": [
            "Computaci\u00f3n cu\u00e1ntica",
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "36da9af3e705ca8cd21ffceb25cd7828",
        "name": "Danny Sap\u00f3n",
        "temas": [
            "Rob\u00f3tica en el salvador",
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "f9f95c9dbc1547b48d86ab14583fbc98",
        "name": "Diana Mar\u00eda Hern\u00e1ndez Luna",
        "temas": [
            "Computaci\u00f3n cu\u00e1ntica",
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "bdf3b791bb61ae5f0a29169550d24bf3",
        "name": "Darwin Orlando Ruiz Mateo",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Computaci\u00f3n cu\u00e1ntica",
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "0c1d6c2b493e12c65b49873a5f8b60cf",
        "name": "Edwin Roberto Tzic Am\u00e9zquita",
        "temas": [
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "9e61d5b23211862aacc1a74dc90c0625",
        "name": "Egdares Futch",
        "temas": [
            "Computaci\u00f3n cu\u00e1ntica",
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "bc1189e3d1a5e68c5c117115a41ba367",
        "name": "Erick Alejandro Saucedo Morales",
        "temas": [
            "Rob\u00f3tica en el salvador",
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "95b79c8873447dec12fd0f45e2cf43ab",
        "name": "Luis Enrique Estrada",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador",
            "Blockchain la estructura detras del bitcoin",
            "Computaci\u00f3n cu\u00e1ntica"
        ]
    },
    {
        "hash": "3c9728c6a1b0a8132d535a5df1538fc2",
        "name": "Jos\u00e9 Francisco Jim\u00e9nez Luna",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador",
            "Computaci\u00f3n cu\u00e1ntica"
        ]
    },
    {
        "hash": "2113cc658196098d6619e617016f032d",
        "name": "Jos\u00e9 Guillermo Gracias",
        "temas": [
            "Rob\u00f3tica en el salvador",
            "Conociendo java y su entorno en guatemala",
            "Computaci\u00f3n cu\u00e1ntica"
        ]
    },
    {
        "hash": "27db599b24f485c3d5e440ecc2ee3169",
        "name": "Andr\u00e9s Iderberto Montejo Santiago",
        "temas": [
            "Computaci\u00f3n cu\u00e1ntica",
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "30e0ee613a08f8d852a5ff95419ae714",
        "name": "Juan Carlos Martinez Benitez",
        "temas": [
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "9a2906a4a026dce241ee68c52207a5ea",
        "name": "Jeffersson Antonio Chaper\u00f3n Urizar",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador",
            "Computaci\u00f3n cu\u00e1ntica",
            "\u00bfqu\u00e9 es docker y c\u00f3mo utilizarlo?",
            "Blockchain la estructura detras del bitcoin",
            "Machine learning",
            "Conociendo kicad"
        ]
    },
    {
        "hash": "6a11a5e8685ed6b9a87b9eb34af7e464",
        "name": "Delmar Ismael Sac Tuj",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador",
            "Computaci\u00f3n cu\u00e1ntica",
            "\u00bfqu\u00e9 es docker y c\u00f3mo utilizarlo?",
            "Blockchain la estructura detras del bitcoin",
            "Machine learning",
            "Conociendo kicad"
        ]
    },
    {
        "hash": "fb8802f21e804e1e39566bf905662078",
        "name": "Josu\u00e9 Emanuell Garc\u00eda P\u00e9rez",
        "temas": [
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "6182576900d36d7cbaf258feca39ffee",
        "name": "Jos\u00e9 Javier Jarqu\u00edn P\u00e9rez",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "e0cf9b1658926e5e70c7b8721a954fc6",
        "name": "John Doe Ramirez",
        "temas": [
            "Rob\u00f3tica en el salvador",
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "4e28e323bac36c9fd299dd1e88470c50",
        "name": "Jonatan Alexander Zelada Sanchez",
        "temas": [
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "aa9f26338d779e200b8c3ea84fcc33ad",
        "name": "Josu\u00e9 David Garc\u00eda Escobar",
        "temas": [
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "547c96979e38dde38e30e6336227da2a",
        "name": "Joshua Jos\u00e9 Ruiz Mateo",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador",
            "Computaci\u00f3n cu\u00e1ntica"
        ]
    },
    {
        "hash": "a8adb650f1222da461ceae71787bccbd",
        "name": "Katerin Judith Castillo Navichoque",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "ac9c55b79a8b020ac1a2cbd5a2183830",
        "name": "Julio Gonz\u00e1lez",
        "temas": [
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "49942976d20d55b3261f9f40188968ab",
        "name": "Moises Leonardo Rodriguez",
        "temas": [
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "5f8b177ce97b9c28588eaa2288a1b3bd",
        "name": "Leonardo Yamasaki Maza",
        "temas": [
            "Computaci\u00f3n cu\u00e1ntica",
            "Rob\u00f3tica en el salvador",
            "Conociendo java y su entorno en guatemala",
            "\u00bfqu\u00e9 es docker y c\u00f3mo utilizarlo?"
        ]
    },
    {
        "hash": "c79b3698b2daa2fe8ca90866db758e09",
        "name": "Luis Antonio Magzul Batz",
        "temas": [
            "Rob\u00f3tica en el salvador",
            "Conociendo java y su entorno en guatemala",
            "Computaci\u00f3n cu\u00e1ntica"
        ]
    },
    {
        "hash": "e5834319b26b4f28f7c9343b34e1f391",
        "name": "Jorge Emilio Murillo Lux",
        "temas": [
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "0773fb89a5e0af0419fd6d3957cb9d22",
        "name": "Luis Enrique Villatoro",
        "temas": [
            "Computaci\u00f3n cu\u00e1ntica",
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "ef07dae4e0b463159cd7dbee2de906cb",
        "name": "Jorge Barreda",
        "temas": [
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "b8f1cb33effb77f24004846c96b14518",
        "name": "Wilfred Marco Pablo Serrano Martinez",
        "temas": [
            "Computaci\u00f3n cu\u00e1ntica"
        ]
    },
    {
        "hash": "df9eb7da27b8f31bc3e13fd96b2b441e",
        "name": "Marvin Pelic\u00f3 Argueta",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Computaci\u00f3n cu\u00e1ntica",
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "313440b022027d9325139129dd737eb7",
        "name": "Marvin Pereira",
        "temas": [
            "Rob\u00f3tica en el salvador",
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "c6113e0521fa6f70bbd2cdd66cb54b76",
        "name": "Mayra Rancho",
        "temas": [
            "Rob\u00f3tica en el salvador",
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "38b5af311d98b9381796a884bdebd3ef",
        "name": "Rody Mayron Cital\u00e1n Tuells",
        "temas": [
            "Computaci\u00f3n cu\u00e1ntica",
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "9d5fcabe5ad45e57e60da6478a5899de",
        "name": "Manuel J. Antonio H.",
        "temas": [
            "Rob\u00f3tica en el salvador",
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "5db59419634309c71f631144dc0e3ce9",
        "name": "Miguel Francisco Ram\u00edrez",
        "temas": [
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "c56909117251cea67df86c4d3330d319",
        "name": "Marcos Juan Pablo V\u00e1squez Mijangos",
        "temas": [
            "Computaci\u00f3n cu\u00e1ntica",
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "eab45fef859e4d5dc2074c6ae78574de",
        "name": "Pascual Hern\u00e1ndez P\u00e9rez",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador",
            "Computaci\u00f3n cu\u00e1ntica",
            "Conociendo kicad",
            "Blockchain la estructura detras del bitcoin",
            "\u00bfqu\u00e9 es docker y c\u00f3mo utilizarlo?",
            "Machine learning"
        ]
    },
    {
        "hash": "ea81b812ac303c288bd105afa2bf61fc",
        "name": "Abigail Cardona",
        "temas": [
            "Computaci\u00f3n cu\u00e1ntica",
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "c7cf773ccd6ce3c266441ffa12f55b94",
        "name": "Humberto Rafael Reyes Bermudez",
        "temas": [
            "Machine learning",
            "Conociendo java y su entorno en guatemala",
            "Blockchain la estructura detras del bitcoin"
        ]
    },
    {
        "hash": "1e82db8ec98272737cc053ae795934d2",
        "name": "Oswaldo Emanuel L\u00f3pez Hern\u00e1ndez",
        "temas": [
            "Computaci\u00f3n cu\u00e1ntica"
        ]
    },
    {
        "hash": "b3b679bb3cce09e5d03ff503ddaab283",
        "name": "Ingeniero Roberto Carlos Vel\u00e1squez God\u00ednez",
        "temas": [
            "\u00bfqu\u00e9 es docker y c\u00f3mo utilizarlo?",
            "Blockchain la estructura detras del bitcoin"
        ]
    },
    {
        "hash": "b664bffec2b4886ab6afc3292c1ee696",
        "name": "Richard Eliseo Mendoza G\u00e1faro",
        "temas": [
            "Computaci\u00f3n cu\u00e1ntica"
        ]
    },
    {
        "hash": "f905a4185a486195ec20ad7126f19d95",
        "name": "Karen Roc\u00edo Shac P\u00e9rez",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "420d7962ae5a093d301a6d0a94104551",
        "name": "Sergio Telon",
        "temas": [
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "fed484570cbe71c0d6ef702cb231880a",
        "name": "Sascha Ram",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador",
            "Computaci\u00f3n cu\u00e1ntica"
        ]
    },
    {
        "hash": "6a3bf7dda6c8ad3007bf2d97cc20e4be",
        "name": "Susana M\u00e9ndez",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "a92430a2f11abcee14e325640161e23a",
        "name": "Jos\u00e9 Augusto Tahual Sacalxot",
        "temas": [
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "44efec247c001e77a4d7dc339b873303",
        "name": "Jos\u00e9 Alberto Carranza",
        "temas": [
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "b21fac3784968b6b1f5357e02e23b736",
        "name": "Erick Estuardo Vasquez Gomez",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "be705494aa9faba8e06eef9247341c0b",
        "name": "Victor Hugo Martinez Reyes",
        "temas": [
            "Rob\u00f3tica en el salvador",
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "ed5604e695e7cf7578d954559021082d",
        "name": "Victor Montalvo",
        "temas": [
            "Rob\u00f3tica en el salvador",
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "356682aaac9f869ac415a61d3ec66914",
        "name": "V\u00edctor Miguel Revelo Membre\u00f1o",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador"
        ]
    },
    {
        "hash": "8f8df606363ce6355f685438537446fd",
        "name": "V\u00edctor Manuel Mart\u00ednez Reyes",
        "temas": [
            "Rob\u00f3tica en el salvador",
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "31587b9ca9bf8d4503c0311c21cc60aa",
        "name": "Wilder Magdiel L\u00f3pez Hern\u00e1ndez",
        "temas": [
            "Computaci\u00f3n cu\u00e1ntica"
        ]
    },
    {
        "hash": "db038cd50e3d3292e1a954d704d81e17",
        "name": "Wilson Gustavo L\u00f3pez L\u00f3pez",
        "temas": [
            "Rob\u00f3tica en el salvador",
            "Computaci\u00f3n cu\u00e1ntica",
            "\u00bfqu\u00e9 es docker y c\u00f3mo utilizarlo?",
            "Conociendo java y su entorno en guatemala"
        ]
    },
    {
        "hash": "d6bc1f0724a6bcb1055f161b1242cbe3",
        "name": "Otny Arody Bautista Angel",
        "temas": [
            "Computaci\u00f3n cu\u00e1ntica",
            "Machine learning"
        ]
    },
    {
        "hash": "ca8ed26ceb1f23438977ba7ac97f00a2",
        "name": "Ana Mateo",
        "temas": [
            "Rob\u00f3tica en el salvador",
            "Conociendo kicad"
        ]
    },
    {
        "hash": "c6f128421ef52c06ece9537649b29e30",
        "name": "German No\u00e9 Colop Ju\u00e1rez",
        "temas": [
            "Computaci\u00f3n cu\u00e1ntica"
        ]
    },
    {
        "hash": "02ad0969cb6cbfdd9ad740d430d764ae",
        "name": "Rogelio Orlando Saquic Poroj",
        "temas": [
            "\u00bfqu\u00e9 es docker y c\u00f3mo utilizarlo?",
            "Blockchain la estructura detras del bitcoin",
            "Machine learning",
            "Conociendo kicad"
        ]
    },
    {
        "hash": "c082ebd7190181abafe4874c61eacdf9",
        "name": "David Marroqu\u00edn",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Machine learning"
        ]
    },
    {
        "hash": "e988b29f870154b9ab5245a15c4df105",
        "name": "Esvia Janeth Chilin Sandoval",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador",
            "Computaci\u00f3n cu\u00e1ntica",
            "Conociendo kicad",
            "Blockchain la estructura detras del bitcoin",
            "\u00bfqu\u00e9 es docker y c\u00f3mo utilizarlo?",
            "Machine learning"
        ]
    },
    {
        "hash": "6bc9a85628b62fad98a60487d2781987",
        "name": "Jos\u00e9 Antonio Ortiz Corzo",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador",
            "Computaci\u00f3n cu\u00e1ntica",
            "Conociendo kicad",
            "Blockchain la estructura detras del bitcoin",
            "\u00bfqu\u00e9 es docker y c\u00f3mo utilizarlo?",
            "Machine learning"
        ]
    },
    {
        "hash": "bd718b90f965c6bc7940d8e83648b151",
        "name": "Luis Alberto Orozco Martin",
        "temas": [
            "Conociendo java y su entorno en guatemala",
            "Rob\u00f3tica en el salvador",
            "Computaci\u00f3n cu\u00e1ntica",
            "Conociendo kicad",
            "Blockchain la estructura detras del bitcoin",
            "\u00bfqu\u00e9 es docker y c\u00f3mo utilizarlo?",
            "Machine learning"
        ]
    }
];
if($scope.hash.length > 0 ){
  $scope.has_hash = true;
  $scope.hash_data = $scope.asistentes.find(el => el.hash === $scope.hash)
  if(!$scope.hash_data){
    $scope.hash_data = {
      'name': 'Invalido',
      'hash': 'Invalido',
      'temas': ["Invalido"]
    }
  }
}

$scope.buscarDiploma = function(){
  $scope.has_hash = true;
  ga('send', 'event', 'diploma', 'generar', $scope.user_email)
  if($scope.user_code == 'ASITI2020'){
    $scope.hash = CryptoJS.MD5($scope.user_email).toString();
    console.log($scope.hash)
    $scope.hash_data = $scope.asistentes.find(el => el.hash === $scope.hash)
    if(!$scope.hash_data){
        ga('send', 'event', 'diploma', 'generar-fail-email', $scope.user_email)
      // $scope.has_hash = false;
      $scope.hash_data = {
        'name': 'No registrado',
        'hash': 'No registrado',
        'temas': []
      }
    }else{
      $scope.has_diploma = true;
      $scope.diploma_url = `/events/asiti2020/${$scope.hash}.pdf`
    }
  }else{
    ga('send', 'event', 'diploma', 'generar-fail-code', $scope.user_code)
    $scope.hash_data = {
      'name': 'Código invalido',
      'hash': 'Código invalido',
      'temas': []
    }
  }
  
}
})

app.controller("eventSchedule", function($scope) {
  $scope.temas = [
      {
          name: "Vitalino Matías",
          img: "img/home/106427634_270370004405934_3197995465653743033_n.jpg",
          subject: "Conociendo Kicad",
          time: "16:00"
      },
      {
          name: "Ademir Bermudez",
          img: "img/home/101322524_880066412469689_5048674334927749120_n.png",
          subject: "Robótica en El Salvador",
          time: "11:00"
      },
      {
        name: "Adrían Catalan",
        img: "img/home/106050186_1490137291159423_2483573076017822338_n.jpg",
        subject: "Machine Learning",
        time: "15:00"
    },
    {
      name: "Valery Calderón Briz",
      img: "img/home/105576181_696774774479410_2075728025503736283_n.jpg",
      subject: "BLOCKCHAIN LA ESTRUCTURA DETRAS DEL BITCOIN",
      time: "14:00"
  },
  {
    name: "Mercedes Wyss",
    img: "img/home/106269348_705464200186775_9020890300994152888_n.jpg",
    subject: "Computación Cuántica",
    time: "12:00"
},
{
  name: "María del Carmen Castillo",
  img: "img/home/105569241_698507064334846_3591555409509974546_n.jpg",
  subject: "Conociendo Java y su entorno en Guatemala",
  time: "10:00"
}
,
{
  name: "Andrés Alonzo",
  img: "img/home/106083048_2645478565710979_6682098190242326805_n.jpg",
  subject: "¿Qué es Docker y cómo utilizarlo?",
  time: "13:00"
}
  ];
});
