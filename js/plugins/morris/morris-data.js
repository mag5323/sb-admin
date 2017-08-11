// Morris.js Charts sample data for SB Admin template

$(function() {

    // Area Chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            洗車: 2666,
            交易: null,
        }, {
            period: '2010 Q2',
            洗車: 2778,
            交易: 2294,
        }, {
            period: '2010 Q3',
            洗車: 4912,
            交易: 1969,
        }, {
            period: '2010 Q4',
            洗車: 3767,
            交易: 3597,
        }, {
            period: '2011 Q1',
            洗車: 6810,
            交易: 1914,
        }, {
            period: '2011 Q2',
            洗車: 5670,
            交易: 4293,
        }, {
            period: '2011 Q3',
            洗車: 4820,
            交易: 3795,
        }, {
            period: '2011 Q4',
            洗車: 15073,
            交易: 5967,
        }, {
            period: '2012 Q1',
            洗車: 10687,
            交易: 4460,
        }, {
            period: '2012 Q2',
            洗車: 8432,
            交易: 5713,
        }],
        xkey: 'period',
        ykeys: ['洗車', '交易'],
        labels: ['洗車', '交易'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "SUV",
            value: 12
        }, {
            label: "Sedan",
            value: 30
        }, {
            label: "Hatchback",
            value: 20
        }],
        resize: true
    });
});
