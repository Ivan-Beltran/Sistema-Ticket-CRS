<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Knowledge;
use Illuminate\Database\Seeder;

class KnowledgeSeeder extends Seeder
{
    public function run(): void
    {
        $categories = Category::all();

        foreach ($categories as $category) {
            Knowledge::create([
                'title' => 'Guía básica de ' . $category->name,
                'content_response' => 'Contenido de ayuda relacionado con ' . $category->name,
                'creation_date' => now(),
                'category_id' => $category->id,
            ]);

            Knowledge::create([
                'title' => 'Problemas comunes en ' . $category->name,
                'content_response' => 'Soluciones frecuentes para ' . $category->name,
                'creation_date' => now(),
                'category_id' => $category->id,
            ]);
        }
    }
}
