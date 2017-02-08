var ctx = $("#myChart");
var myChart = new Chart(ctx, {

	type: 'bar',
	data: {
	        labels: ["Bootstrap", "React", "jQuery", "Foundation"],
	        datasets: [{
	            label: 'Popularity by GitHub stars', 
	            data: [106436, 59215, 43254, 24908],
	            backgroundColor: [
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(54, 162, 235, 0.2)'
	            ],
	            borderColor: [
	                'rgba(54, 162, 235, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(54, 162, 235, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }

	});

$(document).ready(function(){

});
