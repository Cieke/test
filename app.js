/**
 * Created by tywinlannister on 06/09/16.
 */
var appModule = angular.module('ToDoApp', []);

appModule.controller('ToDoCtrl', function($scope) {
   console.log('Controller loaded');

   $scope.title = "Cieke's To Do App";

   $scope.todos = [
      {description : 'Learn JavaScript', done: true},
      {description : 'Learn HTML', done: false},
      {description : 'Learn CSS', done: true},
      {description : 'Learn AngularJS', done: true},
      {description : 'Learn Java', done: true}
   ];

   $scope.countIncomplete = function () {
      var count = 0;
      $scope.todos.forEach(function (val) {
         if(!val.done){
            count++;
         }
      });
      return count;
   }

   $scope.addTodo = function (desc) {
      var newTodo ={
         description:desc,
         done: false
      };
      $scope.todos.push(newTodo);
   }

});