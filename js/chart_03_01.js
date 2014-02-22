$(function () {
    $('#chart_03_01').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: '市民一人当たり市税'
        },
        xAxis: {
            categories: ["S40", "S41", "S42", "S43", "S44", "S45", "S46", "S47", "S48", "S49", "S50", "S51", "S52", "S53", "S54", "S55", "S56", "S57", "S58", "S59", "S60", "S61", "S62", "S63", "H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "H11", "H12", "H13", "H14", "H15", "H16", "H17", "H18", "H19", "H20", "H21", "H22", "H23", "H24"]
        },
        yAxis: {
            min: 0,
            title: {
                text: '円'
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -70,
            verticalAlign: 'top',
            y: 20,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' + this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black, 0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: '市税',
            data: [12243, 12426, 14847, 16126, 17425, 20521, 23867, 28455, 35268, 43883, 45578, 52637, 60064, 67501, 74921, 85121, 92039, 98650, 104614, 109989, 120058, 128525, 138955, 146504, 157986, 166371, 179869, 191991, 197569, 191536, 199465, 206793, 206852, 197639, 196871, 190590, 188209, 183776, 174694, 170902, 176967, 180252, 189730, 188143, 180440, 176257, 176940, 175359]
        }]
    });
});
