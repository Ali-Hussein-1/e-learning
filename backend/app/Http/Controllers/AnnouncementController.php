<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Announcement;

class AnnouncementController extends Controller
{
    public function addAnnouncements(Request $request)
    {
        $anncmnt = new Announcement;

        $anncmnt->text = $request->text;
 
        $anncmnt->save();
 
        return response()->json(["result" => "ok"], 201);
    }

    public function viewAnnouncements()
    {
        return response()->json(Announcement::all(), 200);
    }

    public function deleteAnnouncements($id)
    {
        Announcement::where('_id', '=', $id)->delete();
        return response()->json(["result" => "ok"], 201);
    }

}