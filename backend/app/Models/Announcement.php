<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Announcement extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'announcements';
    protected $fillable = [
        'text',
        'user_id',
    ];
}
