<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class SlaPlan extends Model
{
    use SoftDeletes;
    
    protected $fillable = [
        'name',
        'grace_time_hours',
        'working_hours'
    ];

    public function helpTopics()
    {
        return $this->hasMany(HelpTopic::class, 'division_id');
    }

    public function tickets(): HasMany
    {
        return $this->hasMany(Ticket::class);
    }
}
