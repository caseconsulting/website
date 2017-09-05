window.onload = function(){
  Chart.defaults.global.defaultFontColor = 'black';

  var ctx1 = document.getElementById("pie").getContext('2d');
  var colors = ["#9b59b6","#f1c40f","#e74c3c","#34495e"];
  data = [12, 19, 3, 17, 28, 24, 7];
  var myChart = new Chart(ctx1, {
    type: 'doughnut',
    data: {
      labels: ["Ruby", "Javascript", "Java"],
      datasets: [{
        backgroundColor: colors ,
        data: [47, 32, 21]
      }]
    },
    options: {
    }
  });

  var ctx2 = document.getElementById("bar").getContext('2d');
  var myChart = new Chart(ctx2, {
    type: 'horizontalBar',
    data: {
      labels: ["Bachelors Degree", "Masters Degree"],
      datasets: [{
        backgroundColor: ["#2ecc71", "#3498db"],
        data: [100, 53]
      }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
          xAxes: [{
              ticks: {
                  min: 0,
                  max: 100
              }
          }],
          scaleLabel: {
            labelString: "%",
            display: true
          }
      }
    }
  });
};
