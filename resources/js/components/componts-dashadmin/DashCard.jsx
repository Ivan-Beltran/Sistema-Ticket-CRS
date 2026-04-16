/**
 * Contenedor de sección del dashboard con cabecera opcional.
 *
 * Props:
 *  - title    : string          — título de la sección
 *  - subtitle : string          — subtítulo (opcional)
 *  - action   : ReactNode       — elemento derecho del header (ej. botón "Ver todos")
 *  - children : ReactNode       — contenido interno
 *  - className: string          — clases extra para el wrapper (opcional)
 */
export default function DashCard({ title, subtitle, action, children, className = '' }) {
    return (
        <div className={`rounded-xl border border-sidebar-border bg-white dark:bg-sidebar ${className}`}>
            {(title || action) && (
                <div className="flex items-start justify-between border-b border-sidebar-border px-4 py-3">
                    <div>
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">{title}</h3>
                        {subtitle && (
                            <p className="mt-0.5 text-[11px] text-gray-500">{subtitle}</p>
                        )}
                    </div>
                    {action && <div>{action}</div>}
                </div>
            )}
            <div className="p-4">{children}</div>
        </div>
    );
}