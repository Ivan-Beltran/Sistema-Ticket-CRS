<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserRoleSeeder extends Seeder
{
    public function run(): void
    {
        // usuario que creamos en el UserSeeder
        $user = User::where('email', 'admin@admin.com')->first();

        if ($user) {
            $user->syncRoles(['superadmin']);
        }
    }
}
