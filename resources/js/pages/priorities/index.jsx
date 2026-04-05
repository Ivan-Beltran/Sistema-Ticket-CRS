import { Head } from '@inertiajs/react';

// 1. Le explicamos a TypeScript qué campos tiene una Prioridad en tu base de datos
interface Priority {
    id: number;
    // Cambia 'name' por el nombre de la columna real que tengas (ej. nombre, titulo, descripcion)
    name: string; 
    created_at?: string;
    updated_at?: string;
}

// 2. Le decimos que recibimos un arreglo de esa interfaz (Priority[])
export default function Index({ priorities }: { priorities: Priority[] }) {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <Head title="Prioridades" />
            
            <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    Módulo de Prioridades
                </h1>
                
                <p className="text-gray-600">
                    ¡La vista ya está conectada al controlador!
                </p>

                <pre className="mt-4 bg-gray-50 p-4 rounded text-sm">
                    {JSON.stringify(priorities, null, 2)}
                </pre>
            </div>
        </div>
    );
}