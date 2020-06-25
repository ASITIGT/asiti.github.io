var app = angular.module("ASITI", []);
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