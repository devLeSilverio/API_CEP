// This is a JavaScript file

$(document).on("click","#buscar",function(){

  $.ajax({
    type:"get", //como que irei enviar
    dataType:"json",
    url:"https://viacep.com.br/ws/"+$("#cep").val() +"/json/", //para onde irei enviar
    success:function(data){
          var conteudo;
          conteudo = "<p><strong>Logradouro:</strong>"+data.logradouro+"</p>";
          conteudo += "<p><strong>Bairro:</strong>"+data.bairro+"</p>";
          conteudo += "<p><strong>Cidade:</strong>"+data.localidade+"</p>";
          conteudo += "<p><strong>Estado:</strong>"+data.uf+"</p>";
          $("#dados").html(conteudo );     
    },
    error: function(){
      alert("Deu erro!!");
    }
  })
});


$(document).on("click","#buscar2",function(){
  $.ajax({
    type:"get",
    dataType:"json",
    url:"https://api.hgbrasil.com/weather?format=json&key=44ec2c77&city_name="+$("#city").val(),
    success:function(data){
          var conteudo2;
          conteudo2 = "<p><strong>Temperatura:</strong>"+data.temp+"</p>";
          conteudo2 += "<p><strong>Data:</strong>"+data.date+"</p>";
          conteudo2 += "<p><strong>Tempo:</strong>"+data.time+"</p>";
          conteudo2 += "<p><strong>Descrição:</strong>"+data.description+"</p>";
          $("#dados2").html(conteudo2);  
    },
    error: function(){
      alert("Error");
    }
  })
});

