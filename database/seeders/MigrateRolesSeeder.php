<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;

class MigrateRolesSeeder extends Seeder
{
    public function run(): void
    {
        $agentRole = Role::firstOrCreate(['name' => 'agent', 'guard_name' => 'web']);

        $usersWithTecnicoRole = User::role('tecnico')->get();

        foreach ($usersWithTecnicoRole as $user) {
            $user->removeRole('tecnico');
            $user->assignRole('agent');
            $this->command->info("Usuario {$user->email} migrado de rol 'tecnico' a 'agent'");
        }

        $tecnicoRole = Role::where('name', 'tecnico')->first();
        if ($tecnicoRole) {
            $tecnicoRole->delete();
            $this->command->info("Rol 'tecnico' eliminado de la base de datos");
        }

        $this->command->info('Migración de roles completada exitosamente!');
    }
}
