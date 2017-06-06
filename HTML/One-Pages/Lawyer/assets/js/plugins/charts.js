var ctx = document.getElementById("chart").getContext('2d');
Chart.defaults.global.defaultFontColor = 'white';
var myChart = new Chart(ctx, {
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