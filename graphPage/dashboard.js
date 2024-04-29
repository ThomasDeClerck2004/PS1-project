/* globals Chart:false */

(() => {
  'use strict'
  // geld in array plaatsen -> visualizeren
  const kas = [10000,0,0,0,0,0,0]
  const klanten = [5000,0,0,0,0,0,0]


  // Graphs
  const ctx = document.getElementById('myChart')
  // Dashed line
  // ctx.stroke();
  const ctx2 = document.getElementById('myChart2')
  const ctx3 = document.getElementById('myChart3')
  const ctx4 = document.getElementById('myChart4')
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

              kas[0],
              kas[1],
              kas[2]
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
            // lineTension: 0,
            // backgroundColor: 'transparent',
            // borderColor: '#007bff',
            // borderWidth: 4,
            // pointBackgroundColor: '#007bff'

            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#e80303',
            borderWidth: 5,
            pointBackgroundColor: '#e80303',
            // setLineDash: segments

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
      },
  )
  const myChart2 = new Chart(ctx2, {
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

              klanten[0],
              klanten[1],
              klanten[2]
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
            // lineTension: 0,
            // backgroundColor: 'transparent',
            // borderColor: '#007bff',
            // borderWidth: 4,
            // pointBackgroundColor: '#007bff'

            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#aff1fd',
            borderWidth: 5,
            pointBackgroundColor: '#62bcfc',
            line: 0.5

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
      },
  )
  const myChart3 = new Chart(ctx3, {
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

              kas[0],
              kas[1],
              kas[2]
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
            // lineTension: 0,
            // backgroundColor: 'transparent',
            // borderColor: '#007bff',
            // borderWidth: 4,
            // pointBackgroundColor: '#007bff'

            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#9d23cf',
            borderWidth: 5,
            pointBackgroundColor: '#9327bf',
            // setLineDash: segments

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
      },
  )
  const myChart4 = new Chart(ctx4, {
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

              kas[0],
              kas[1],
              kas[2]
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
            // lineTension: 0,
            // backgroundColor: 'transparent',
            // borderColor: '#007bff',
            // borderWidth: 4,
            // pointBackgroundColor: '#007bff'

            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#cfa723',
            borderWidth: 5,
            pointBackgroundColor: '#bfab27',
            // setLineDash: segments

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
      },
  )
  // document.getElementById('verliesBtn').addEventListener('click', function() {
  //   canvas.style.display = 'none'; });
})()


