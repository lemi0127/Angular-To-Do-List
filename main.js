var ToDo = angular.module('ToDo', []);

ToDo.controller('TodoCtrl',['$scope', function($scope) {
    $scope.todos = [
        {text:"Task 1", done: false},
        {text:"Task 2", done: false},
        {text:"Task 3", done: false}
    ];

    $scope.addTodo = function () {
        $scope.todos.push({
            'text': $scope.todoText,
            'done': false
        });
        $scope.todoText = '';
    };
    
    $scope.clear = function () {
        $scope.todos = $scope.todos.filter(function (item) {
            return !item.done
        })
    };
}]);
