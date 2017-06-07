window.onload = function(){

Chart.defaults.global.defaultFontColor = 'black';

var ctx1 = document.getElementById("pie").getContext('2d');

var myChart = new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: ["People who like it", "People who don't like it", "People who don't know what's going on", "People who don't care", "The Uninitiated", "Lord of the Ring fans", "Fell asleep during the movie"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e"
      ],
      data: [12, 19, 3, 17, 28, 24, 7]
    }]

  }


});

var ctx2 = document.getElementById("bar").getContext('2d');
var myChart = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ["People who like it", "People who don't like it", "People who don't know what's going on", "People who don't care", "The Uninitiated", "Lord of the Ring fans", "Fell asleep during the movie"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e"
      ],
      data: [12, 19, 3, 17, 28, 24, 7]
    }]

  }


});
};
