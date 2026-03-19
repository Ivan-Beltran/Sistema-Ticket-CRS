<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TicketSolution extends Model
{
    protected $fillable = [
        'ticket_id',
        'user_id',
        'message',
        'date',
        'attach',
        'type'
    ];

    protected $casts = [ 'type' => TicketSolution::class];

    public function ticket(): BelongsTo
    {
        return $this->belongsTo(Ticket::class);
    }

    public function user():BelongsTo{
        return $this->belongsTo(User::class);
    }
}
