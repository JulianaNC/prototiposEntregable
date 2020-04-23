var app = angular.module("votaU",['ngRoute']);

app.controller("miUrna", ["$scope", function($scope){
  $scope.idPreguntas = 0;
  $scope.misPreguntas=[

  ];
  $scope.nuevaPregunta={

    pregunta: "",
    idOpciones : 0,
    opciones: []
  };

  $scope.nuevaOpcion={
    cadena:"",
    editar: false
  };



  $scope.agregandoPregunta=false;
  $scope.preguntaValida = false;
  $scope.preguntaStringValida = false;
  $scope.preguntaOpcionesValida = false;
  $scope.preguntaValidaEditar = false;

  $scope.agregarPreguntaBoton= function(){
    $scope.agregandoPregunta= true;
  }

  $scope.agregarOpcionBoton= function(){
    $scope.nuevaOpcion.idOpcion = $scope.nuevaPregunta.idOpciones;
    $scope.nuevaPregunta.idOpciones++;

    $scope.nuevaPregunta.opciones.push($scope.nuevaOpcion);
    console.log($scope.nuevaOpcion);
    $scope.preguntaOpcionesValida = true;
    if($scope.preguntaStringValida && $scope.preguntaOpcionesValida){
    $scope.preguntaValida = true;
    }
    $scope.nuevaOpcion={

      cadena: "",

    };

  }

  $scope.agregarPregunta = function(){
    $scope.nuevaPregunta.id = $scope.idPreguntas;
    $scope.idPreguntas++;

    $scope.misPreguntas.push($scope.nuevaPregunta);
    $scope.agregandoPregunta=false;
    $scope.nuevaPregunta={

      pregunta: "",
      opciones: []
    };
  }

  $scope.editarPregunta = function(myId){
    $scope.nuevaPregunta=$scope.misPreguntas[myId];
    $scope.misPreguntas[myId]=$scope.nuevaPregunta;
    $scope.agregandoPregunta= true;
    $scope.preguntaValida= false;
    $scope.preguntaValidaEditar= true;

  }

  $scope.editarOpcion = function(myId){

    $scope.nuevaOpcion = $scope.nuevaPregunta.opciones[myId]
    console.log($scope.nuevaOpcion);
  }

  $scope.agregarPreguntaEditar = function () {
    //$scope.misPreguntas[$scope.nuevaPregunta.id] = $scope.nuevaPregunta;
    for(i = 0; i < $scope.nuevaPregunta.opciones.length; i++){

    }
    $scope.nuevaPregunta={

      pregunta: "",
      opciones: []
    };
  }

  $scope.borrarPregunta = function(myId){
    for(i = myId; i < $scope.idPreguntas; i++){
      $scope.misPreguntas[i] = $scope.misPreguntas[i+1];
    }
    $scope.misPreguntas.pop();
    $scope.idPreguntas--;
    $scope.agregandoPregunta= false;
  }

$scope.$watch('nuevaPregunta.pregunta', function(newValue, oldValue){
  if(newValue != ""){
    $scope.preguntaStringValida = true;
  }
  else{
    $scope.preguntaStringValida = false;
  }
  console.log($scope.preguntaValida);
  console.log("string: "+$scope.preguntaStringValida);
  console.log("opciones: "+$scope.preguntaOpcionesValida);
  console.log($scope.preguntaStringValida && $scope.preguntaOpcionesValida);
})

$scope.borrarOpcion = function(myId){
    console.log("myId: " + myId);
    console.log($scope.nuevaPregunta.idOpciones);
    for(i = myId; i < $scope.nuevaPregunta.idOpciones-1; i++){
      console.log("primero: "+$scope.nuevaPregunta.opciones[i]);
      console.log("segundo: " + $scope.nuevaPregunta.opciones[i].cadena);
      $scope.nuevaPregunta.opciones[i].cadena = $scope.nuevaPregunta.opciones[i+1].cadena;
    }
    $scope.nuevaPregunta.opciones.pop();
    $scope.nuevaPregunta.idOpciones--;
    for(i = 0; i < $scope.nuevaPregunta.idOpciones; i++){
      console.log(":" + $scope.nuevaPregunta.opciones[i].cadena);
    }

}
}])
