<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\AssignmentController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::get('me', 'me');

});

Route::group(["prefix"=> "v1"], function(){
    Route::post("/addanncmnt", [AnnouncementController::class, "AddAnnouncement"]);
    Route::get("/viewanncmnt", [AnnouncementController::class, "ViewAnnouncements"]);
});


// Route::get('/post/{slug}', [PostController::class, 'show']);

// Route::resource('posts', PostController::class)->only([
//     'destroy', 'show', 'store', 'update'
//  ]);

