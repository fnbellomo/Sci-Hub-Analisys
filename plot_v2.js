$(function () {

    var url = "https://www.highcharts.com/samples/data/jsonp.php?filename=world-population-density.json&callback=?";

    var url2 = "https://fnbellomo.github.io/Sci-Hub-Analisys/data/plot_data_2000_10000.json";

    // I have a problem to load the data, so for now
    // I put this toy data in the file
    var data = {
	"0-10": [{
	    "lat": 62.1291562,
	    "lon": 25.6758771,
	    "z": 2,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 40.7492678,
	    "lon": -73.6406845,
	    "z": 1,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 40.2715286,
	    "lon": 44.633383,
	    "z": 2,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 36.4165052,
	    "lon": -6.1461102,
	    "z": 9,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 53.6993066,
	    "lon": 10.0008798,
	    "z": 2,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 46.7233502,
	    "lon": 0.2732767,
	    "z": 1,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 42.8543772,
	    "lon": -5.6714331,
	    "z": 1,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}],
	"10-100": [{
	    "lat": 47.394144,
	    "lon": 0.68484,
	    "z": 70,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 36.8854018,
	    "lon": 30.687568,
	    "z": 12,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 39.4937868,
	    "lon": -0.4635383,
	    "z": 15,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 43.455516,
	    "lon": -0.682123,
	    "z": 10,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": -23.2140719,
	    "lon": -46.8238911,
	    "z": 10,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 45.6911074,
	    "lon": 9.4770681,
	    "z": 47,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 38.793711,
	    "lon": 35.650846,
	    "z": 67,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 13.1641308,
	    "lon": 100.9216588,
	    "z": 24,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 47.1357,
	    "lon": 15.4514,
	    "z": 31,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}],
	"100-500": [{
	    "lat": 8.4798786,
	    "lon": 4.5418141,
	    "z": 187,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 45.4009928,
	    "lon": -71.8824288,
	    "z": 207,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": -0.9507484,
	    "lon": 100.3708439,
	    "z": 352,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 50.654836,
	    "lon": 3.073511,
	    "z": 143,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 4.471721,
	    "lon": 101.1654029,
	    "z": 460,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 35.7879958,
	    "lon": 139.2758298,
	    "z": 222,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 24.5246542,
	    "lon": 39.5691841,
	    "z": 118,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}],
	"500-1000": [{
	    "lat": 19.7059504,
	    "lon": -101.1949825,
	    "z": 665,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 54.7104264,
	    "lon": 20.4522144,
	    "z": 998,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 16.9890648,
	    "lon": 82.2474648,
	    "z": 564,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 29.0729673,
	    "lon": -110.9559192,
	    "z": 947,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 19.2452342,
	    "lon": -103.7240868,
	    "z": 542,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 34.1251832,
	    "lon": 42.374164,
	    "z": 768,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 34.6812614,
	    "lon": 135.5098009,
	    "z": 849,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 57.6260744,
	    "lon": 39.8844708,
	    "z": 675,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}],
	"1000-2000": [{
	    "lat": 54.9884804,
	    "lon": 73.3242362,
	    "z": 1023,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 34.797281,
	    "lon": 114.307583,
	    "z": 1623,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 58.0296813,
	    "lon": 56.2667916,
	    "z": 1891,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 56.9815632,
	    "lon": 24.9620345,
	    "z": 1059,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 43.8562586,
	    "lon": 18.4130763,
	    "z": 1604,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 31.2383015,
	    "lon": 32.2795667,
	    "z": 1749,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}, {
	    "lat": 15.050394,
	    "lon": 77.8727126,
	    "z": 1293,
	    "publisher": [{
		"editorial": "elsilver",
		"amount": 9
	    }, {
		"editorial": "nature",
		"amount": 8
	    }, {
		"editorial": "Ciecia hoy",
		"amount": 3
	    }]
	}]
    }

    
    $.getJSON(url, function(data_get) {
	
	// Initiate the chart
	$('#container').highcharts('Map', {
	    
	    chart: {
                borderWidth: 1,
                marginRight: 50 // for the legend
            },
	    
	    // title of the plot
            title: {
		text: 'Sci-Hub Downloads for coordinates'
            },

	    // plot legend
            legend: {
		title: {
                    text: 'Download per<br>coordinate'
		},
		layout: 'vertical',
		align: 'right',
		floating: true,
		backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255, 255, 255, 0.2)',
                symbolRadius: 0,
                symbolHeight: 14
            },

	    // can scroll over the plot
            mapNavigation: {
		enabled: true
            },

	    // Mensage show whrn put mouse over point
            tooltip: {
		headerFormat: '',
		pointFormat: 'Lat: {point.lat}<br>' + 
		    'Lon: {point.lon}<br>' +
		    'Download: {point.z}<br>' +
		    '{point.publisher.0.editorial}: {point.publisher.0.amount}<br>' +
		    '{point.publisher.1.editorial}: {point.publisher.1.amount}<br>' +
		    '{point.publisher.2.editorial}: {point.publisher.2.amount}<br>'
            },

            xAxis: {
		crosshair: {
                    zIndex: 5,
                    dashStyle: 'dot',
                    snap: false,
                    color: 'gray'
		}
            },

            yAxis: {
		crosshair: {
                    zIndex: 5,
                    dashStyle: 'dot',
                    snap: false,
                    color: 'gray'
		}
            },

            series: [{
		name: 'Basemap',
		// Use all the world
		mapData: Highcharts.maps['custom/world'],
		borderColor: '#606060',
		nullColor: 'rgba(200, 200, 200, 0.3)',
		showInLegend: false
            },  {
		// Data for download between 0 - 10
		name: '0 - 10',
		type: 'mapbubble',
		data: data["0-10"],
		maxSize: '7%',
		color: '#F1EEF6'
            },  {
		// Data for download between 0 - 10
		name: '10 - 100',
		type: 'mapbubble',
		data: data["10-100"],
		maxSize: '7%',
		color: '#D4B9DA'
            },  {
		// Data for download between 0 - 10
		name: '100 - 500',
		type: 'mapbubble',
		data: data["100-500"],
		maxSize: '7%',
		color: '#C994C7'
            },  {
		// Data for download between 0 - 10
		name: '500 - 1000',
		type: 'mapbubble',
		data: data["500-100"],
		maxSize: '8%',
		color: '#DF65B0'
            },  {
		// Data for download between 0 - 10
		name: '1000 - 2000',
		type: 'mapbubble',
		data: data["1000-2000"],
		maxSize: '10%',
		color: '#DD1C77'
            }] //end of the series	    
	}); //end of the highcharts

	chart = $('#container').highcharts();

    }); //end of the $.getJSON


    // The next function are stracted from this examples
    // http://www.highcharts.com/maps/demo/latlon-advanced
    // Display custom label with lat/lon next to crosshairs
    $('#container').mousemove(function (e) {
        var position;

        if (chart) {
            if (!chart.lab) {
                chart.lab = chart.renderer.text('', 0, 0)
                    .attr({
                        zIndex: 5
                    })
                    .css({
                        color: '#505050'
                    })
                    .add();
            }

            e = chart.pointer.normalize(e);
            position = chart.fromPointToLatLon({
                x: chart.xAxis[0].toValue(e.chartX),
                y: chart.yAxis[0].toValue(e.chartY)
            });

            chart.lab.attr({
                x: e.chartX + 5,
                y: e.chartY - 22,
                text: 'Lat: ' + position.lat.toFixed(2) + '<br>Lon: ' + position.lon.toFixed(2)
            });
        }
    });

    $('#container').mouseout(function () {
        if (chart && chart.lab) {
            chart.lab.destroy();
            chart.lab = null;
        }
    });
    
}); //end of the main function
