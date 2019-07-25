/*var db;
db = window.sqlitePlugin.OpenDatabase({name: "DB"});

db.transaction(function(tx){

    tx.executeSql('CREATE TABLE IF NOT EXISTS tabela_principal (id integer primary key, pergunta text, mes integer, prioridade integer)');
    tx.executeSql("INSERT INTO tabela_principal (pergunta, mes, prioridade) VALUES (?,?,?)", ["A criança levanta a cabeça?",1,1]);

});*/
function chamarInicio(){
    window.location.href = "../index.html";
}

function alertDismissed() {
    // do something
}

function showAlert(){
    
      v = "<text-align:justify;text-justify: kashida;>Você esqueceu de responder algum(uns) campo(os)!"; 
    document.getElementById("error").innerHTML = v;
    //navigator.notification.alert(
      //  'Você esqueceu de responder algum(uns) campo(os).',  // message
        //alertDismissed,         // callback
        //'Respoda as perguntas.',            // title
        //'OK'                  // buttonName
    //);
}
window.onscroll = debugtest();
function debugtest(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myP").className = "test";
    } else {
        document.getElementById("myP").className = "";
    }

    document.getElementById("teste").innerHTML = "";
}
function getIdade(){
    var v = document.getElementById("selec").value;
    switch(v){
        case "1":
            window.location.href = "html/umMes.html";
            break;
        case "2":
            window.location.href = "html/doisMeses.html";
            break;
        case "3":
            window.location.href = "html/tresMeses.html";
            break;
        case "4":
            window.location.href = "html/quatroMeses.html";
            break;
        case "5":
            window.location.href = "html/cincoMeses.html";
            break;
        case "6":
            window.location.href = "html/seisMeses.html";
            break;
        case "7":
            window.location.href = "html/seteMeses.html";
            break;
        case "8":
            window.location.href = "html/oitoMeses.html";
            break;
        case "9":
            window.location.href = "html/noveMeses.html";
            break;
        case "10":
            window.location.href = "html/dezMesesAdozeMeses.html";
            break;
        case "11":
            window.location.href = "html/trezeMeses.html";
            break;
        case "12":
            window.location.href = "html/quatorzeMesesAvinteMeses.html";
            break;
        case "13":
            window.location.href = "html/vinteEumAvinteEtresMeses.html";
            break;
        case "14":
            window.location.href = "html/vinteEquatroMeses.html";
            break;            
        default:
    }
}


function seteQuest(){
    
    var a = document.getElementById("resp1").value;
    var b = document.getElementById("resp2").value;
    var c = document.getElementById("resp3").value;
    
    var d = document.getElementById("resp4").value;
    var e = document.getElementById("resp5").value;
    var f = document.getElementById("resp6").value;
    var g = document.getElementById("resp7").value;
    
    if(a != 0 && b != 0 && c != 0 && d != 0 && e != 0 && f != 0 && g != 0){
           
        var contador = 0;
        var erroHabDesen = 0;

        if(a == "sim")
            contador += 10;
        else
            erroHabDesen += 1;
        
        if(b == "sim")
            contador += 10;
        else
            erroHabDesen += 1;

        if(c == "sim")
            contador += 10;
        else
            erroHabDesen += 1;
        
        if(d == "sim")
            contador += 4;
        else
            contador += 0;

        if(e == "sim")
            contador += 4;
        else
            contador += 0;

        if(f == "sim")
            contador += 1;
        else
            contador += 0;

        if(g == "sim")
            contador += 1;
        else
            contador += 0;

        
        gerarResposta(contador,erroHabDesen);
    }
    else
        showAlert();
        //alert("Você esqueceu de responder algum(uns) campo(os).");
    
}



function gerarResposta(resposta, erroHabDesen){
    var cssINC = "<fieldset id ='jsfield'style=border-style:solid;>";
    var cssINClast = "</fieldset>";
    var r1 = "<p><h1></h1>\nOps! O crescimento da criança é considerado INADEQUADO.";
    var r2 = "<p><h1></h1>\nQue bom! O crescimento da criança é considerado ADEQUADO.";
    var r3 = "<p><h1></h1>\nParabéns!!! O crescimento da criança é considerado MAIS que ADEQUADO.";
    var r4 = "<p>\nQue demais!!! O crescimento da criança é considerado MUITO MELHOR do que o esperado.";


    var procureMedico = "<br>Procure um médico especialista para mais informações.</p>";
    var erros = "<br>A sua criança NÃO POSSUI " + erroHabDesen + " habilidade(s) que ja é/são devesenvolvida(s) em crianças de mesma idade.";
    var erros2 = "<br>Mas a sua criança NÃO POSSUI " + erroHabDesen + " habilidade(s) que ja é/são devesenvolvida(s) em crianças de mesma idade.";

    document.getElementById("title").innerHTML="<style=font-size:18px;>Diagnostico:";
    var voltar = "<input";
    if(resposta < 20){
        if(erroHabDesen > 0)
            document.getElementById("res").innerHTML= cssINC + r1 + erros + procureMedico + cssINClast;
        else
            document.getElementById("res").innerHTML= cssINC + r1 + procureMedico  + cssINClast;
    } else if(resposta  >= 20 && resposta < 34){
        if(erroHabDesen > 0)
            document.getElementById("res").innerHTML= cssINC + r2 + erros2 + procureMedico  + cssINClast;
        else
            document.getElementById("res").innerHTML= cssINC + r2 + procureMedico  + cssINClast;
    } else if(resposta >= 34 && resposta <=38){
            document.getElementById("res").innerHTML= cssINC + r3 + procureMedico  + cssINClast;
    } else{
            document.getElementById("res").innerHTML= cssINC + r4 + procureMedico  + cssINClast;
    }
    
    
}
