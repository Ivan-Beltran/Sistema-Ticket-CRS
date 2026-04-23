<?php

use App\Http\Controllers\PublicController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use Inertia\Inertia;
use App\Http\Controllers\SlaPlanController;
use App\Http\Controllers\PriorityController;
use App\Http\Controllers\TecnicoController;
use App\Http\Controllers\TicketController;

// ==========================================
// 1. RUTAS PÚBLICAS
// ==========================================
Route::get('/', [PublicController::class, 'index'])->name('home');

// ==========================================
// 2. RUTAS AUTENTICADAS
// ==========================================
Route::middleware(['auth'])->group(function () {

    // --- A. ACCESO GENERAL ---
    Route::middleware(['role:tecnico|admin'])->group(function () {
        Route::prefix('tecnico')->group(function () {
            Route::get('/dashboard', function () {
                return Inertia::render('tecnico/Dashboard');
            })->name('tecnico.dashboard');


            Route::get('/ticket/{id}', function ($id) {
                return Inertia::render('dashboards/detalleTicket', ['id' => $id]);
            })->name('tecnico.ticket');

            Route::get('/total-asignados', [TecnicoController::class, 'totalTicketsAsignados']);
            Route::get('/total-en-proceso', [TecnicoController::class, 'totalTicketsEnProceso']);
            Route::get('/total-resueltos', [TecnicoController::class, 'totalTicketsResueltos']);

            Route::get('/historial-finalizados', [TecnicoController::class, 'historialTicketsFinalizados']);

            Route::get('/mis-estadisticas', [TecnicoController::class, 'misEstadisticas']);
            Route::get('/tasa-resolucion', [TecnicoController::class, 'tasaResolucion']);

            Route::get('/tickets-en-cola', [TecnicoController::class, 'ticketsEnCola']);
            Route::get('/tickets-en-proceso', [TecnicoController::class, 'ticketsEnProceso']);
            Route::get('/dashboard-data', [TecnicoController::class, 'dashboardData']);
            Route::get('/tickets-asignados', [TecnicoController::class, 'ticketsAsignados']);
            Route::get('/ver-ticket/{id}', [TecnicoController::class, 'verTicket']);
            Route::post('/ticket/{id}/diagnostico', [TecnicoController::class, 'guardarDiagnostico']);
        });
    });

   Route::resource('tickets', TicketController::class);

    // Rutas de SLA Plans
    Route::resource('/sla-plans',  SlaPlanController::class);
    // Rutas de prioridades
    Route::resource('priorities', PriorityController::class);


    // --- D. ÁREA TÉCNICA (Agentes y Admins de Área) ---
    Route::middleware(['role:agent|admin'])->prefix('agent')->group(function () {

        Route::get('/dashboard', function () {
            return redirect()->route('dashboard');
        })->name('agent.dashboard');

        Route::get('/area-dashboard', function () {
            return redirect()->route('dashboard');
        })->name('admin.dashboard');




        Route::get('/ticket/{id}', function ($id) {
            return Inertia::render('dashboards/detalleTicket', ['id' => $id]);
        })->name('agent.ticket');

        Route::get('/total-asignados', [TecnicoController::class, 'totalTicketsAsignados']);
        Route::get('/total-en-proceso', [TecnicoController::class, 'totalTicketsEnProceso']);
        Route::get('/total-resueltos', [TecnicoController::class, 'totalTicketsResueltos']);
        Route::get('/historial-finalizados', [TecnicoController::class, 'historialTicketsFinalizados']);

        Route::get('/mis-estadisticas', [TecnicoController::class, 'misEstadisticas']);
        Route::get('/tasa-resolucion', [TecnicoController::class, 'tasaResolucion']);

        Route::get('/tickets-en-cola', [TecnicoController::class, 'ticketsEnCola']);
        Route::get('/tickets-en-proceso', [TecnicoController::class, 'ticketsEnProceso']);
        Route::get('/dashboard-data', [TecnicoController::class, 'dashboardData']);
        Route::get('/tickets-asignados', [TecnicoController::class, 'ticketsAsignados']);
        Route::get('/ver-ticket/{id}', [TecnicoController::class, 'verTicket']);
        Route::post('/ticket/{id}/diagnostico', [TecnicoController::class, 'guardarDiagnostico']);
    });

});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
