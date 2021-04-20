console.log('start_scriting');

var ul=document.getElementById('links');
var atag=ul.getElementsByClassName('side');
console.log(atag.length);
for (var i = 0; i < atag.length; i++) {
  atag[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");

  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}



var ctx = document.getElementById('chart1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
      data: {
        labels: ['Requests', 'Solved', 'Processing', 'Unsolved'],
          datasets: [{
            label: 'User Request Stats',
            data: [20, 11, 6, 3],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'            
            ],
            borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
           }]
        },
        options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
          }
        }
});

var ch2 = document.getElementById('chart2').getContext('2d');
var myChart2 = new Chart(ch2, {
    type: 'line',
      data: {
        labels: ['Requests', 'Solved', 'Processing', 'Unsolved'],
          datasets: [{
            label: 'User Request Stats',
            data: [20, 11, 6, 3],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'            
            ],
            borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
           }]
        },
        options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
          }
        }
});

var ch3 = document.getElementById('chart3').getContext('2d');
var myChart3 = new Chart(ch3, {
    type: 'pie',
      data: {
        labels: ['Requests', 'Solved', 'Processing', 'Unsolved'],
          datasets: [{
            label: 'User Request Stats',
            data: [20, 11, 6, 3],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'            
            ],
            borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
           }]
        },
        options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
          }
        }
});