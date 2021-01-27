module.exports = function(app){

    // --- ROUTING
    app.get('/', function(request, response) {
        response.render('index.html');
    });

    app.get('/WorkingMemoryTraining', function(request, response) {
        response.render('workingmemorytraining.html');
    });
    app.get('/WorkingMemoryTesting', function(request, response) {
        response.render('workingmemorytesting.html');
    });

    app.get('/finish', function(request, response) {
        response.render('finish.html');
    });

}