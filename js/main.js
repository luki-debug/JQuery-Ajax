function consultaCep() {
    var cep=document.getElementById("cep").value;
    var url = "http://viacep.com.br/ws/"+cep+"/json"
    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            $("#logradouro").html(response.logradouro);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            $("#bairro").html(response.bairro);
            $("#code").html(response.cep);
            $("#cidade").html(response.localidade);
            $("#uf").html(response.uf);
        }
    })
}