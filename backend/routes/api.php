<?php

use Illuminate\Http\Request;
use App\Http\Controllers\JWTAuthController;
use App\Http\Controllers\WatchController;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('register', [JWTAuthController::class, 'register']);
Route::post('login', [JWTAuthController::class, 'login']);

Route::middleware('auth:api')->group(function () {
    Route::get('user', [JWTAuthController::class, 'getUser']);
    Route::post('logout', [JWTAuthController::class, 'logout']);
    
    Route::prefix('watches')->group(function () {
        Route::get('/', [WatchController::class, 'getAll']);
        Route::get('/{id}', [WatchController::class, 'get']);
        Route::post('/', [WatchController::class, 'create']);
        Route::put('/{id}', [WatchController::class, 'update']);
        Route::delete('/{id}', [WatchController::class, 'delete']);
        Route::get('/price/{price}', [WatchController::class, 'getWatchByPrice']);
    });
});

