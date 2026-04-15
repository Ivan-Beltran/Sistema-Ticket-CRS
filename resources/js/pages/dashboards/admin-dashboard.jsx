// Archivo: resources/js/components/dashboards/admin-dashboard.jsx

export default function AdminDashboard() {
    return (
        <div className="flex flex-col gap-6">

            {/* FILA 1: Tarjetas de estadísticas superiores (4 columnas) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-xl border bg-card p-6 shadow-sm">
                    {/* Placeholder: Total Tickets */}
                    <div className="h-16">Estadística 1</div>
                </div>
                <div className="rounded-xl border bg-card p-6 shadow-sm">
                    {/* Placeholder: Tickets Abiertos */}
                    <div className="h-16">Estadística 2</div>
                </div>
                <div className="rounded-xl border bg-card p-6 shadow-sm">
                    {/* Placeholder: Tickets Resueltos */}
                    <div className="h-16">Estadística 3</div>
                </div>
                <div className="rounded-xl border bg-card p-6 shadow-sm">
                    {/* Placeholder: Vencidos / SLA */}
                    <div className="h-16">Estadística 4</div>
                </div>
            </div>

            {/* FILA 2: Gráfico principal (Líneas) y Gráfico secundario (Circular) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Gráfico ancho (ocupa 2 columnas en pantallas grandes) */}
                <div className="lg:col-span-2 rounded-xl border bg-card p-6 shadow-sm min-h-[350px] flex flex-col">
                    <h3 className="font-semibold mb-4">Tickets por mes</h3>
                    <div className="flex-1 bg-muted/20 rounded border-dashed border-2 flex items-center justify-center">
                        {/* Aquí irá tu librería de gráficos (Recharts, Chart.js, etc.) */}
                        Área para Gráfico de Líneas
                    </div>
                </div>

                {/* Gráfico lateral (ocupa 1 columna) */}
                <div className="rounded-xl border bg-card p-6 shadow-sm min-h-[350px] flex flex-col">
                    <h3 className="font-semibold mb-4">Por categoría</h3>
                    <div className="flex-1 bg-muted/20 rounded border-dashed border-2 flex items-center justify-center">
                        Área para Gráfico Circular (Donut)
                    </div>
                </div>
            </div>

            {/* FILA 3: Gráfico inferior y Resumen de métricas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Gráfico de barras */}
                <div className="rounded-xl border bg-card p-6 shadow-sm min-h-[250px] flex flex-col">
                    <h3 className="font-semibold mb-4">Por prioridad</h3>
                    <div className="flex-1 bg-muted/20 rounded border-dashed border-2 flex items-center justify-center">
                        Área para Gráfico de Barras
                    </div>
                </div>

                {/* Cuadrícula de resumen rápido */}
                <div className="rounded-xl border bg-card p-6 shadow-sm min-h-[250px] flex flex-col">
                    <h3 className="font-semibold mb-4">Resumen rápido</h3>
                    <div className="grid grid-cols-2 gap-4 flex-1">
                        <div className="bg-muted/20 rounded flex items-center justify-center border">Métrica A</div>
                        <div className="bg-muted/20 rounded flex items-center justify-center border">Métrica B</div>
                        <div className="bg-muted/20 rounded flex items-center justify-center border">Métrica C</div>
                        <div className="bg-muted/20 rounded flex items-center justify-center border">Métrica D</div>
                    </div>
                </div>
            </div>

        </div>
    );
}
