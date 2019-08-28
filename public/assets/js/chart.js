$(document).ready(function(){
    var ctx = document.getElementById('myChart').getContext('2d');

    $("#bar").click(function(){

        location.reload();
    });

        $.get("/api/user_data", function(user) {

            var currentUser = (user.username.substr(0, user.username.indexOf("@")).toUpperCase());

            $(".member-name").text(currentUser);




            var emotionChart = myChart.data.datasets[0];

            emotionChart.label = 'Levels of daily emotions: ' + currentUser;

            emotionChart.data[0] = 0;
            emotionChart.data[1] = 0;
            emotionChart.data[2] = 0;
            emotionChart.data[3] = 0;
            emotionChart.data[4] = 0;
            emotionChart.data[5] = 0;
            emotionChart.data[6] = 0;

            user.umoji.forEach(function(user_emoji) {
                var updated_date = new Date(user_emoji.user_emojis.updatedAt);
                emotionChart.data[updated_date.getDay()] = user_emoji.polarity;

            });

            myChart.update();

          });


    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [{
                label: '',
                data: [0, 0, 0, 0, 0, 0, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 164, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });



$("#line").click(function(e){
    e.preventDefault();
    $.get("/api/user_data", function(user) {
        var currentUser = (user.username.substr(0, user.username.indexOf("@"))
        .toUpperCase());

        var emotionChart = myChart.data.datasets[0];

        emotionChart.label = 'Levels of daily emotions: ' + currentUser;

        emotionChart.data[0] = 0;
        emotionChart.data[1] = 0;
        emotionChart.data[2] = 0;
        emotionChart.data[3] = 0;
        emotionChart.data[4] = 0;
        emotionChart.data[5] = 0;
        emotionChart.data[6] = 0;

        user.umoji.forEach(function(user_emoji) {
            var updated_date = new Date(user_emoji.user_emojis.updatedAt);
            emotionChart.data[updated_date.getDay()] = user_emoji.polarity;

        });

        myChart.update();

      });
    myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
            label: '',
            data: [0, 0, 0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 164, 1)'
            ],
            borderWidth: 1
        }]
    },options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
    })
    myChart.update();
});

});