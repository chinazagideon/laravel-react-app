<?php

use App\Http\Controllers\Api;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function (){
    Route::post("logout", [AuthController::class, "logout"]);
});

//Registration route to create new account
/**
 * @param null
 * request_type `_POST`
 * @return `object`
 * @return_type `Json`
 *
 */
Route::post("/register", [AuthController::class, "register"]);
Route::post("/login", [AuthController::class, "login"]);

Route::prefix('v1')->group(function () {
    Route::post("posts", [Api::class, 'store']);
});
