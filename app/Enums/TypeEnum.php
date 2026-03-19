<?php

namespace App\Enums;

enum TypeEnum: string
{
    case PUBLIC_REPLY = 'public_reply';
    case PRIVATE_NOTE = 'private_note';
    case RESOLUTION = 'resolution';

    public function label(): string
    {
        return match($this) {
            self::PUBLIC_REPLY => 'Respuesta Pública',
            self::PRIVATE_NOTE => 'Nota Privada',
            self::RESOLUTION => 'Resolución',
        };
    }
}
