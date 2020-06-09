// Charts
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');

let yearlyLabel = document.getElementById('yearlyTotal');

let newAmount = document.getElementById('itemAmount')
let newMonth = document.getElementById('exampleInputEmail1');

// let monthlySales = Array.of(500, 9000, 3000, 4000);
// let monthlyLabels = Array.of('Oct', 'Nov', 'Dec');

// let deptSales = Array.of(12, 9, 3);
// let deptLabels = Array.of('Hiking', 'Running', 'Hunting');

let yearlyTotal = 0;

const monthlySales = new Set();
const monthlyLabels = new Set();

function addSale() {
  monthlySales.add(newAmount.value);
  monthlyLabels.add(newMonth.value);
  alert('You have entered in ' + monthlySales.size + ' sales')
  console.log(monthlySales)
}

// function addYearlyTotal(x) {
//   yearlyTotal = x + yearlyTotal;
// }

// monthlySales.forEach(addYearlyTotal);

// let octNums = Array.of(12000, 1000, 9000);
// let novNums = Array.of(1000, 2000, 8000);
// let decNums = Array.of(2000, 3000, 4000);

// // let total = Array.of(addYearlyTotal(...octNums), addYearlyTotal(...novNums), addYearlyTotal(...decNums));

// yearlyLabel.innerHTML = "$" + yearlyTotal;

// function findOver1000() {
//   let firstThousand = monthlySales.findIndex(element => element > 1000);
//   alert(firstThousand);
// }

// function resetNum() {
//   monthlySales.fill(0);
//   monthlySalesChart.update();
// }

// // Bar
// var monthlySalesChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: monthlyLabels,
//     datasets: [{
//       label: '# of Sales',
//       data: monthlySales,
//       backgroundColor: [
//         'rgba(238, 184, 104, 1)',
//         'rgba(75, 166, 223, 1)',
//         'rgba(239, 118, 122, 1)',
//       ],
//       borderWidth: 0
//     }]
//   },
//   options: {
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero: true
//         }
//       }]
//     }
//   }
// });

// // Pie
// var deptSalesChart = new Chart(pieCtx, {
//   type: 'pie',
//   data: {
//     labels: deptLabels,
//     datasets: [{
//       label: '# of Sales',
//       data: deptSales,
//       backgroundColor: [
//         'rgba(238, 184, 104, 1)',
//         'rgba(75, 166, 223, 1)',
//         'rgba(239, 118, 122, 1)',
//       ],
//       borderWidth: 0
//     }]
//   },
//   options: {

//   }
// })