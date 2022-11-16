/*fetch('pokemon.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayPokemonCards(data);
    });*/

$(document).ready(function() {
    $.get("https://uyghur.ai/course/data/pokemon.json", function(data, status) {
        displayPokemonCards(data);
    });


    function displayPokemonCards(pokemonData) {
        let pokemonDiv = document.getElementById("pokemonContainer");
        let rows = pokemonData.length / 6;
        let pokemonTypeColour = " ";
        for (let j = 0; j < rows; j++) {
            pokemonDiv.innerHTML += "<div class='row' id='row" + j + "'></div>";
            let rowID = "row" + j;
            for (let i = 0; i < 6; i++) {
                let currentItem = j * 6 + i;
                if (pokemonData[currentItem] != null || pokemonData[currentItem] != undefined) {
                    if (pokemonData[currentItem].type[0] == "Grass") {
                        pokemonTypeColour = "grass";
                    } else if (pokemonData[currentItem].type[0] == "Fire") {
                        pokemonTypeColour = "fire";
                    } else if (pokemonData[currentItem].type[0] == "Water") {
                        pokemonTypeColour = "water";
                    } else if (pokemonData[currentItem].type[0] == "Electric") {
                        pokemonTypeColour = "electric";
                    } else if (pokemonData[currentItem].type[0] == "Ghost") {
                        pokemonTypeColour = "Ghost";
                    } else if (pokemonData[currentItem].type[0] == "Poison") {
                        pokemonTypeColour = "poison";
                    } else if (pokemonData[currentItem].type[0] == "Normal") {
                        pokemonTypeColour = "normal";
                    } else if (pokemonData[currentItem].type[0] == "Bug") {
                        pokemonTypeColour = "bug";
                    } else if (pokemonData[currentItem].type[0] == "Ground") {
                        pokemonTypeColour = "ground";
                    } else if (pokemonData[currentItem].type[0] == "Fighting") {
                        pokemonTypeColour = "fighting";
                    } else if (pokemonData[currentItem].type[0] == "Psychic") {
                        pokemonTypeColour = "psychic";
                    } else if (pokemonData[currentItem].type[0] == "Ice") {
                        pokemonTypeColour = "ice";
                    } else if (pokemonData[currentItem].type[0] == "Rock") {
                        pokemonTypeColour = "rock";
                    } else if (pokemonData[currentItem].type[0] == "Dragon") {
                        pokemonTypeColour = "dragon";
                    }



                    document.getElementById(rowID).innerHTML +=
                        "<div class='col-2'>" +
                        "<div class='card h-100 " + pokemonTypeColour + " '>" +
                        //"<img src='" + pokemonData[currentItem].img + "'" +
                        //"onclick='pokemonSayHello(" + JSON.stringify(pokemonData[currentItem]) + ")' " +
                        "<img src='" + pokemonData[currentItem].img + "' class='card-img-top'>" +
                        "<div class='card-body'>" +
                        "<p class='card-text'></p></div>" +
                        "<div class='card-footer card-text'>" + pokemonData[currentItem].name + "</div>" +
                        "</div></div>";
                }
            }
        }
    }


    /*function displayPokemonRow(pokemonData) {
        let pokemonDiv = document.getElementById("pokemonContainer");
        pokemonDiv.innerHTML += "<div class='row' id='row0'></div>";
        for (let i = 0; i < 6; i++) {
            document.getElementById('row0').innerHTML +=
                "<div class='col-2'>" +
                "<div class='card'>" +
                "<img src='" + pokemonData[i].img + "' class='card-img-top'>" +
                "<div class='card-body'>" +
                "<p class='card-text'>" + pokemonData[i].name + "</p></div>" +
                "</div></div>";
        }
    }*/

    //function loadPokemonInfo(pokemon) {
    //    let alertText
    //}

    /*function pokemonSayHello(pokemon) {
        alert("Hello, I'm " + pokemon.name + " " + "My type is " + pokemon.type);
    }*/

    $("#hide-type").click(function() {
        let selectedType = $('#pokemonTypeOption :selected').text();
        if (selectedType == "Water") {
            $(".water").hide();
        } else if (selectedType == "Fire") {
            $(".fire").hide();
        } else if (selectedType == "Grass") {
            $(".grass").hide();
        } else if (selectedType == "Electric") {
            $(".electric").hide();
        } else if (selectedType == "Bug") {
            $(".bug").hide();
        } else if (selectedType == "Normal") {
            $(".normal").hide();
        } else if (selectedType == "Psychic") {
            $(".psychic").hide();
        } else if (selectedType == "Dragon") {
            $(".dragon").hide();
        } else if (selectedType == "Ice") {
            $(".ice").hide();
        } else if (selectedType == "Poison") {
            $(".poison").hide();
        } else if (selectedType == "Ground") {
            $(".ground").hide();
        } else if (selectedType == "Rock") {
            $(".rock").hide();
        } else if (selectedType == "Fighting") {
            $(".fighting").hide();
        } else if (selectedType == "Ghost") {
            $(".ghost").hide();
        } else {
            //do something
        }
    });

    $("#show-type").click(function() {
        let selectedType = $('#pokemonTypeOption :selected').text();
        if (selectedType == "Water") {
            $(".water").show();
        } else if (selectedType == "Fire") {
            $(".fire").show();
        } else if (selectedType == "Grass") {
            $(".grass").show();
        } else if (selectedType == "Electric") {
            $(".electric").show();
        } else if (selectedType == "Bug") {
            $(".bug").show();
        } else if (selectedType == "Normal") {
            $(".normal").show();
        } else if (selectedType == "Psychic") {
            $(".psychic").show();
        } else if (selectedType == "Dragon") {
            $(".dragon").show();
        } else if (selectedType == "Ice") {
            $(".ice").show();
        } else if (selectedType == "Poison") {
            $(".poison").show();
        } else if (selectedType == "Ground") {
            $(".ground").show();
        } else if (selectedType == "Rock") {
            $(".rock").show();
        } else if (selectedType == "Fighting") {
            $(".fighting").show();
        } else if (selectedType == "Ghost") {
            $(".ghost").show();
        } else {
            //do something
        }
    });
});

/*$(document).ready(function() {
    $("#test2").click(function() {
        $("p").show();
    }); */