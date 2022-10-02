// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("tempChart");
var tempChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Injetora","Extrusora","Granuladora"],
    datasets: [{
      data: [55, 170, 90, 0, 200],
      backgroundColor: ['#4e73df','#e74a3b','#4e73df'],
      hoverBackgroundColor: ['#2e59d9'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});

var ctx = document.getElementById("vibChart");
var vibChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Injetora","Extrusora","Granuladora"],
    datasets: [{
      data: [50, 55, 90, 0, 200],
      backgroundColor: ['#4e73df','#4e73df','#4e73df'],
      hoverBackgroundColor: ['#2e59d9'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});

var ctx = document.getElementById("noiseChart");
var noiseChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Injetora","Extrusora","Granuladora"],
    datasets: [{
      data: [100, 85, 110, 0, 200],
      backgroundColor: ['#4e73df','#4e73df','#4e73df'],
      hoverBackgroundColor: ['#2e59d9'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
