// Archivo: resources/js/components/dashboards/agent-dashboard.jsx

export default function AgentDashboard() {
    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold">Mis Tickets Asignados</h2>

            {/* Estadísticas simples del agente */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-xl border bg-card p-6 shadow-sm">Tickets Pendientes</div>
                <div className="rounded-xl border bg-card p-6 shadow-sm">Prioridad Alta</div>
                <div className="rounded-xl border bg-card p-6 shadow-sm">Resueltos Hoy</div>
            </div>

            {/* Tabla principal de trabajo */}
            <div className="rounded-xl border bg-card p-6 shadow-sm min-h-[400px]">
                <div className="bg-muted/20 w-full h-full border-dashed border-2 flex items-center justify-center rounded">
                    Aquí va la Tabla de Datos (Data Table) del Agente
                </div>
            </div>
        </div>
    );
}
