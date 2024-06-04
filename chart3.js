var ctx2 = document.getElementById("doughnut").getContext("2d");
var myChart2 = new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["Linha 1", "Linha 2", "Linha 3"],

    datasets: [
      {
        label: "Produção (Proporção)",
        data: [27350, 22900, 4450],
        backgroundColor: [
          "rgba(41, 155, 99, 1)",
          "#8B008B",
          "rgba(54, 162, 235, 1)",
        ],
        borderColor: [
          "rgba(41, 155, 99, 1)",
          "#8B008B",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
