<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class Announcement extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'announcements';
    protected $fillable = [
        'text',
        'user_id',
    ];
}
