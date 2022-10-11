<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\AssignmentController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\UserController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::get('me', 'me');
    
});

Route::group(["prefix" => "v1"], function () {
    Route::group(['middleware' => 'admin.role'], function () {
        Route::post('/register',[AuthController::class,'register']);
        Route::post("/addcourse", [CourseController::class, "AddCourse"]);
    });
});


Route::group(["prefix"=> "v2"], function(){
    Route::group(['middleware' => 'instructor.role'], function (){
        Route::post("/addanncmnt", [AnnouncementController::class, "AddAnnouncement"]);
        Route::post("/addassignment", [AssignmentController::class, "AddAssignment"]);
    });
});
    
Route::group(["prefix"=> "v3"], function(){
    Route::group(['middleware' => 'student.role'], function (){
        Route::get("/viewanncmnt", [AnnouncementController::class, "ViewAnnouncements"]);
        Route::get("/viewassignments", [AssignmentController::class, "viewAssignments"]);
    });
});
   
    

