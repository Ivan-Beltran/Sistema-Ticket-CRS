import { Head, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

import AdminDashboard from '../pages/dashboards/admin-dashboard';
import AgentDashboard from '../pages/dashboards/agent-dashboard';

const breadcrumbs = [
    { title: 'Dashboard', href: '/dashboard' }
];

export default function Dashboard() {
    // Obtenemos la información del usuario autenticado
    const { auth } = usePage().props;

    // Obtenemos el arreglo de roles (si no hay, por defecto es un arreglo vacío)
    const userRoles = auth?.user?.roles || [];

    // Verificamos si el usuario tiene el rol 'admin' (Ajusta el nombre si en tu BD se llama 'Administrador')
    const isAdmin = userRoles.includes('admin');

    const renderContent = () => {
        if (isAdmin) {
            return <AdminDashboard />;
        }

        // Si no es admin, mostramos el dashboard del agente
        return <AgentDashboard />;
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            <div className="p-4 md:p-6 lg:p-8 w-full flex flex-col h-full">
                {renderContent()}
            </div>
        </AppLayout>
    );
}
