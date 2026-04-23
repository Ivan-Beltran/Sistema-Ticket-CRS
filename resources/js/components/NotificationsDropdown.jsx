import { Link, usePage } from '@inertiajs/react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Bell, CheckCircle, Clock } from 'lucide-react';
import { useState } from 'react';

export function NotificationsDropdown() {
    const { notifications } = usePage().props;
    const [unread, setUnread] = useState(notifications || []);
    const [isOpen, setIsOpen] = useState(false);

    const unreadCount = unread.length;

    const markAsRead = async (notificationId, ticketId) => {
        try {
            await fetch(`/notifications/${notificationId}/read`, {
                method: 'PATCH',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                },
            });
            setUnread(prev => prev.filter(n => n.id !== notificationId));
            window.location.href = `/tickets/${ticketId}`; // o Inertia.visit()
        } catch (error) {
            console.error('Error al marcar como leída', error);
        }
    };

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <button className="relative flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors">
                    <Bell className="w-4 h-4" />
                    {unreadCount > 0 && (
                        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-destructive border border-background"></span>
                    )}
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 mt-2 p-0">
                <div className="flex items-center justify-between border-b px-4 py-2">
                    <span className="font-medium text-sm">Notificaciones</span>
                    {unreadCount > 0 && (
                        <button
                            onClick={async () => {
                                await fetch('/notifications/mark-all-read', { method: 'POST' });
                                setUnread([]);
                            }}
                            className="text-xs text-red-500 hover:underline"
                        >
                            Marcar todas como leídas
                        </button>
                    )}
                </div>
                <div className="max-h-80 overflow-y-auto">
                    {unread.length === 0 ? (
                        <div className="px-4 py-6 text-center text-muted-foreground text-sm">
                            No tienes notificaciones nuevas
                        </div>
                    ) : (
                        unread.map(notif => (
                            <div key={notif.id} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                                <button
                                    onClick={() => markAsRead(notif.id, notif.data.ticket_id)}
                                    className="w-full text-left px-4 py-3 block"
                                >
                                    <div className="flex justify-between items-start gap-2">
                                        <div className="flex-1">
                                            <p className="text-sm font-medium">
                                                {notif.data.subject || 'Nuevo ticket'}
                                            </p>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                {notif.data.message}
                                            </p>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                {new Date(notif.created_at).toLocaleString('es-ES', {
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                    day: 'numeric',
                                                    month: 'short',
                                                })}
                                            </p>
                                        </div>
                                        {notif.read_at === null && (
                                            <div className="h-2 w-2 rounded-full bg-blue-500 mt-1"></div>
                                        )}
                                    </div>
                                </button>
                            </div>
                        ))
                    )}
                </div>
                <div className="border-t px-4 py-2 text-center">
                    <Link href="/notifications" className="text-xs text-muted-foreground hover:text-foreground">
                        Ver todas las notificaciones
                    </Link>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
