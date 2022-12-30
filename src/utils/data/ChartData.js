const labelsLineChart = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thusday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const dataChart = {
  labels: labelsLineChart,
  datasets: [
    {
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: new Array(7).fill(0).map((o) => Math.floor(Math.random() * 100)),
    },
    {
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      data: new Array(7).fill(0).map((o) => Math.floor(Math.random() * 100)),
    },
  ],
};
