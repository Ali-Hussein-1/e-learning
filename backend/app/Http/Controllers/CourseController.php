<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;

class CourseController extends Controller
{
    public function addCourse(Request $request)
    {
        $course = new Course;

        $course->name = $request->name;
 
        $course->save();
 
        return response()->json(["result" => "ok"], 201);
    }
}
