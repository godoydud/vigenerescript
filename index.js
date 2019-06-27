function Cript(){
    
    var palavra = document.getElementById("palavra").value;
    var chave = document.getElementById("chave").value;
    var alfabeto = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var outrosCaracteres = '1234567890!@#$%¨&*()_+,./|';
    var d =  "";
    var j = 0;
    for(var i=0; i<palavra.length;i++){
        // var c = alfabeto.indexOf(chave.charAt(i));

        if(j >= chave.length){
          j=0;
        }

        if(palavra.charAt(i) === " "){
          d = d + " ";
          ++i;
        }

        for (let x = 0; x < outrosCaracteres.length; x++) {
          if(palavra.charAt(i) === " "){
            d = d + " ";
            ++i;
          }
          if (palavra.charAt(i) === outrosCaracteres.charAt(x)) {
              d = d + outrosCaracteres.charAt(x)
              ++i;
          }
      }

        if (i < palavra.length) {
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
    }
    console.log(newKey)
  //  if(palavra.charAt(i) == "")
    document.getElementById("vai").innerHTML=" <h3></h3>  "+d;
  }

  function Descript(){
    var palavra = document.getElementById("palavra").value;
    var chave = document.getElementById("chave").value;
    var alfabeto = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var outrosCaracteres = '1234567890!@#$%¨&*()_+,./|';
    var d =  "";
    var j = 0;

    for(var i=0; i<palavra.length;i++){
        if(j >= chave.length){
          j=0;
        }

        if(palavra.charAt(i) === " "){
          d = d + " ";
          ++i;
        }

        for (let x = 0; x < outrosCaracteres.length; x++) {
          if(palavra.charAt(i) === " "){
            d = d + " ";
            ++i;
          }
          if (palavra.charAt(i) === outrosCaracteres.charAt(x)) {
              d = d + outrosCaracteres.charAt(x)
              ++i;
          }
      }

        if (i < palavra.length) {
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

        j++;
    }
  }
    document.getElementById("vai").innerHTML=" <h3></h3>"+d;
  }
