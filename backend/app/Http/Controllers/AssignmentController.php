<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Assignment;

class AssignmentController extends Controller
{
    public function addAssignment(Request $request)
    {
        $assignment = new Assignment;

        $assignment->text = $request->text;
 
        $assignment->save();
 
        return response()->json(["result" => "ok"], 201);
    }

    public function viewAssignments()
    {
        return response()->json(Assignment::all(), 200);
    }
}
