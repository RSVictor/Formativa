var ctx = document.getElementById("lineChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "12",
      "13",
      "14",
      "15",
    ],
    datasets: [
      {
        label: "Linha 1",
        data: [
          2050, 1900, 2100, 2800, 1800, 2000, 2500, 2600, 2450, 1950, 2300,
          2900,2020,2030,1752,2500,
        ],
        backgroundColor: "rgba(41, 155, 99, 1)",
        borderColor: "rgba(41, 155, 99, 1)",
        borderWidth: 1,
      },
      {
        label: "Linha 2",
        data: [
          1500, 1700, 1800, 2200, 1600, 1700, 1900, 2100, 2000, 1800, 2200,
          2400,1300,1560,950,1900,
        ],
        backgroundColor: "#8B008B",
        borderColor: "#8B008B",
        borderWidth: 1,
      },
      {
        label: "Linha 3",
        data: [550, 200, 300, 600, 200, 300, 600, 500, 450, 150, 100, 500,365,
          600,525,350,
        ],
        backgroundColor: "rgba(54, 162, 235, 1)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
