window.onload = function() {
  Chart.defaults.global.defaultFontColor = "black";

  var colors = [
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#f1c40f",
    "#e74c3c",
    "#34495e"
  ];

  var ctx1 = document.getElementById("roles").getContext("2d");
  var colors1 = ["#9b59b6", "#f1c40f", "#e74c3c", "#34495e"];
  var myChart1 = new Chart(ctx1, {
    type: "doughnut",
    data: {
      labels: [
        "Developer",
        "Systems Engineer",
        "Tester",
        "PM",
        "DBA",
        "Accounting",
        "System Administrator"
      ],
      datasets: [
        {
          backgroundColor: colors,
          data: [65.6, 9.4, 9.4, 6.3, 3.1, 3.1, 3.1]
        }
      ]
    },
    options: {
      legend: {
        display: false
      }
    }
  });

  var ctx2 = document.getElementById("bar").getContext("2d");
  var myChart2 = new Chart(ctx2, {
    type: "horizontalBar",
    data: {
      datasets: [
        {
          backgroundColor: colors,
          data: [100, 50]
        }
      ],
      labels: ["Bachelors Degree", "Masters Degree"]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            ticks: {
              min: 0,
              max: 100
            },
            gridLines: {
              display: false,
              drawBorder: false
            },
            scaleLabel: {
              display: true,
              labelString: "%"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false
            }
          }
        ]
      }
    }
  });

  var ctx3 = document.getElementById("technology").getContext("2d");
  var colors2 = ["#9b59b6", "#f1c40f", "#e74c3c", "#34495e"];
  var myChart3 = new Chart(ctx3, {
    type: "doughnut",
    data: {
      labels: ["Ruby", "Javascript", "Java"],
      datasets: [
        {
          backgroundColor: colors,
          data: [47, 32, 21]
        }
      ]
    },
    options: {
      legend: {
        display: false
      }
    }
  });
};
