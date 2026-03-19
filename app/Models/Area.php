<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Area extends Model
{
    use SoftDeletes;
    
    protected $fillable = [
        'name',
        'description'
    ];

    public function departments():HasMany
    {
        return $this->hasMany(Department::class);
    }
}
