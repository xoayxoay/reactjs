<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('projects', 'ProjectController@index');
Route::post('projects', 'ProjectController@store');
Route::get('projects/{id}', 'ProjectController@show');
Route::put('projects/{project}', 'ProjectController@markAsCompleted');
Route::post('tasks', 'TaskController@store');
Route::put('tasks/{task}', 'TaskController@markAsCompleted');

Route::post('auth/register', 'UserController@register');
Route::post('auth/login', 'UserController@login');
Route::group(['middleware' => 'jwt.auth'], function () {
    Route::get('user-info', 'UserController@getUserInfo');
});

