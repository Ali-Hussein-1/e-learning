<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class Assignment extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'assignments';
    protected $fillable = [
        'text',
        'user_id',
    ];
}
