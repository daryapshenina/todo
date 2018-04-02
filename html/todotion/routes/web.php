<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


//Route::get('photo', 'UserController@showProfile')->name('profile');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('task', 'TaskController@index');
//Route::controller('task', 'TaskController');
Route::any('task/{name}', function($name)
{
$task=new \App\Http\Controllers\TaskController();
$task->$name();
})
    ->where('name', '[A-Za-z]+');

