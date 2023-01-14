let config = {
    type: 'line',
    data: data
};
let data = {
  labels: [2,4,6,8,10],
  datasets: [{
    label: 'Clickbait Ratio',
    data: [1,1,2,2,4],
    fill: false, 
    borderColor: 'black',
    tension: 0.1
  }]
};
let myChart = new Chart(document.getElementById('myChart').getContext('2d'),config);

