<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnnouncementController extends Controller
{
    public function addAnnouncements(Request $request)
    {
        $anncmnt = new Announcement;

        $anncmnt->text = $request->text;
 
        $anncmnt->save();
 
        return response()->json(["result" => "ok"], 201);
    }
}
