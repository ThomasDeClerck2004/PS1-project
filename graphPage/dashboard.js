/* globals Chart:false */

(() => {
  'use strict'
  // geld in array plaatsen -> visualizeren
  const wallet = [10000,0,0,0,0,0,0]

      // Graphs
  const ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'turn 1',
        'turn 2',
        'turn 3',
        'turn 4',
        'turn 5',
        'turn 6',
        'turn 7'
      ],
      datasets: [{

        data: [

            wallet[0],
            // wallet[1],
            // wallet[2]

        //   15339,
        //   21345,
        //   18483,
        //   24003,
        //   23489,
        //   24092,
        //   12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }],

    },
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          boxPadding: 3
        }
      }
    }
  })
})()
