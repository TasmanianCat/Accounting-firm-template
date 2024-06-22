// var xValues = ["Start", "Standart", "Standart +", "Growth", "Premium"];
// var yValues = [300, 350, 550, 750, 1150];
// var barColors = ["blueviolet", "green", "blue", "orange", "brown"];

// new Chart("pricingChart", {
//   type: "bar",
//   data: {
//     labels: xValues,
//     datasets: [
//       {
//         backgroundColor: barColors,
//         data: yValues,
//       },
//     ],
//   },
//   options: {
//     plugins: {
//       legend: { display: false },
//       title: {
//         display: true,
//         text: "Price guide 2024",
//         font: {
//           size: 24,
//         },
//       },
//       subtitle: {
//         display: true,
//         text: "$300 - $1150",
//         font: {
//           size: 18,
//         },
//         padding: {
//           top: 10,
//           bottom: 10,
//         },
//       },
//       datalabels: {
//         align: "end",
//         anchor: "end",
//         formatter: function (value, context) {
//           return "$" + value;
//         },
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
//   plugins: [ChartDataLabels],
// });

var xValues = ["Start", "Standart", "Standart +", "Growth", "Premium"];
var yValues = [300, 350, 550, 750, 1150];
var barColors = ["blueviolet", "green", "blue", "orange", "brown"];

new Chart("pricingChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Price guide 2024",
        font: {
          size: 24,
        },
      },
      subtitle: {
        display: true,
        text: "$300 - $1150",
        font: {
          size: 18,
        },
        padding: {
          top: 10,
          bottom: 10,
        },
      },
      datalabels: {
        align: "end",
        anchor: "end",
        formatter: function (value, context) {
          return "$" + value;
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
  plugins: [ChartDataLabels],
});
