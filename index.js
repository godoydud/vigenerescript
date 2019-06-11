function Cri(){
    
    var palavra = document.getElementById("palavra").value;
    var chave = document.getElementById("chave").value;
    var alfabeto = "abcdefghijklmnopqrstuvwxyz";
    var d =  "";
    var j = 0;
    for(var i=0; i<palavra.length;i++){
        // var c = alfabeto.indexOf(chave.charAt(i));

        if(j >= chave.length){
          j=0;
        }
        var posicaochave = alfabeto.indexOf(chave.charAt(j));
        var posicaoletra = alfabeto.indexOf(palavra.charAt(i));
        var newKey = posicaochave+posicaoletra;

        if(newKey >= 25){
          newKey = newKey - 26;
        }

        if(newKey < 0){
          newKey = newKey + 26;
        }
        console.log("posicao palavra: " +posicaochave);
        console.log("posicao chave: " +posicaoletra);

        var d = d + alfabeto.charAt(newKey);

        j++;
    }
    console.log(newKey)
    document.getElementById("vai").innerHTML=" <h3></h3>:  "+d;
  }

  function Descri(){
    var palavra = document.getElementById("palavra").value;
    var chave = document.getElementById("chave").value;
    var alfabeto = "abcdefghijklmnopqrstuvwxyz";
    var d =  "";
    var j = 0;

    for(var i=0; i<palavra.length;i++){
        // var c = alfabeto.indexOf(chave.charAt(i));

        if(j >= chave.length){
          j=0;
        }

        var posicaochave = alfabeto.indexOf(chave.charAt(j));
        var posicaoletra = alfabeto.indexOf(palavra.charAt(i));
        var newKey = posicaoletra-posicaochave;

        if(newKey >= 25){
          newKey = newKey - 26;
        }

        if(newKey < 0){
          newKey = newKey + 26;
        }
        console.log("posicao palavra: " +posicaochave);
        console.log("posicao chave: " +posicaoletra);

        var d = d + alfabeto.charAt(newKey);

        // resultado= resultado + alfabeto.charAt(newKey);
        // result1 = resultado.toUpperCase();
        j++;
    }

    document.getElementById("vai").innerHTML=" <h3></h3>..:  "+d;
  }