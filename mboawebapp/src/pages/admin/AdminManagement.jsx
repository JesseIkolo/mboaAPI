import React, { useState, useEffect } from 'react';
import { config } from '../../config/env';
import { 
    Table, 
    Button, 
    Badge, 
    Modal, 
    Checkbox, 
    Select,
    message,
    Tabs
} from 'antd';
import { UserOutlined, CheckCircleOutlined, StopOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const AdminManagement = () => {
    const [admins, setAdmins] = useState([]);
    const [pendingAdmins, setPendingAdmins] = useState([]);
    const [permissions, setPermissions] = useState({});
    const [selectedAdmin, setSelectedAdmin] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedPermissions, setSelectedPermissions] = useState([]);
    const [loading, setLoading] = useState(false);

    // Charger les données initiales
    useEffect(() => {
        fetchAdmins();
        fetchPendingAdmins();
        fetchPermissions();
    }, []);

    // Récupérer la liste des administrateurs
    const fetchAdmins = async () => {
        try {
            const response = await fetch(`${config.API_URL}/api/admin/all`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await response.json();
            if (response.ok) {
                setAdmins(data);
            }
        } catch (error) {
            message.error('Erreur lors de la récupération des administrateurs');
        }
    };

    // Récupérer la liste des administrateurs en attente
    const fetchPendingAdmins = async () => {
        try {
            const response = await fetch(`${config.API_URL}/api/admin/pending`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await response.json();
            if (response.ok) {
                setPendingAdmins(data);
            }
        } catch (error) {
            message.error('Erreur lors de la récupération des administrateurs en attente');
        }
    };

    // Récupérer la liste des permissions disponibles
    const fetchPermissions = async () => {
        try {
            const response = await fetch(`${config.API_URL}/api/admin/permissions`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await response.json();
            if (response.ok) {
                setPermissions(data);
            }
        } catch (error) {
            message.error('Erreur lors de la récupération des permissions');
        }
    };

    // Valider un administrateur
    const handleValidateAdmin = async (admin) => {
        try {
            setLoading(true);
            const response = await fetch(`${config.API_URL}/api/admin/validate/${admin._id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ customPermissions: selectedPermissions })
            });

            if (response.ok) {
                message.success('Administrateur validé avec succès');
                fetchAdmins();
                fetchPendingAdmins();
                setIsModalVisible(false);
            } else {
                const error = await response.json();
                message.error(error.message);
            }
        } catch (error) {
            message.error('Erreur lors de la validation de l\'administrateur');
        } finally {
            setLoading(false);
        }
    };

    // Révoquer un administrateur
    const handleRevokeAdmin = async (admin) => {
        try {
            setLoading(true);
            const response = await fetch(`${config.API_URL}/api/admin/revoke/${admin._id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.ok) {
                message.success('Accès administrateur révoqué avec succès');
                fetchAdmins();
            } else {
                const error = await response.json();
                message.error(error.message);
            }
        } catch (error) {
            message.error('Erreur lors de la révocation de l\'administrateur');
        } finally {
            setLoading(false);
        }
    };

    // Mettre à jour les permissions
    const handleUpdatePermissions = async (admin) => {
        try {
            setLoading(true);
            const response = await fetch(`${config.API_URL}/api/admin/permissions/${admin._id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ permissions: selectedPermissions })
            });

            if (response.ok) {
                message.success('Permissions mises à jour avec succès');
                fetchAdmins();
                setIsModalVisible(false);
            } else {
                const error = await response.json();
                message.error(error.message);
            }
        } catch (error) {
            message.error('Erreur lors de la mise à jour des permissions');
        } finally {
            setLoading(false);
        }
    };

    // Colonnes pour la table des administrateurs
    const columns = [
        {
            title: 'Nom',
            key: 'name',
            render: (_, record) => `${record.firstName} ${record.lastName}`
        },
        {
            title: 'Nom d\'utilisateur',
            dataIndex: 'username'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        },
        {
            title: 'Type',
            dataIndex: 'adminType',
            render: (type) => (
                <Badge 
                    status={type === 'superadmin' ? 'error' : 'processing'} 
                    text={type}
                />
            )
        },
        {
            title: 'Statut',
            key: 'status',
            render: (_, record) => (
                <Badge 
                    status={record.isAdminValidated ? 'success' : 'warning'} 
                    text={record.isAdminValidated ? 'Validé' : 'En attente'}
                />
            )
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <div className="space-x-2">
                    {!record.isAdminValidated ? (
                        <Button 
                            type="primary" 
                            icon={<CheckCircleOutlined />}
                            onClick={() => {
                                setSelectedAdmin(record);
                                setSelectedPermissions(record.permissions || []);
                                setIsModalVisible(true);
                            }}
                        >
                            Valider
                        </Button>
                    ) : (
                        <>
                            <Button 
                                type="default"
                                onClick={() => {
                                    setSelectedAdmin(record);
                                    setSelectedPermissions(record.permissions || []);
                                    setIsModalVisible(true);
                                }}
                            >
                                Permissions
                            </Button>
                            <Button 
                                danger 
                                icon={<StopOutlined />}
                                onClick={() => handleRevokeAdmin(record)}
                            >
                                Révoquer
                            </Button>
                        </>
                    )}
                </div>
            )
        }
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Gestion des Administrateurs</h1>
            
            <Tabs defaultActiveKey="1">
                <TabPane tab="Administrateurs" key="1">
                    <Table 
                        columns={columns} 
                        dataSource={admins}
                        rowKey="_id"
                        loading={loading}
                    />
                </TabPane>
                <TabPane tab="En attente de validation" key="2">
                    <Table 
                        columns={columns} 
                        dataSource={pendingAdmins}
                        rowKey="_id"
                        loading={loading}
                    />
                </TabPane>
            </Tabs>

            <Modal
                title={`Gérer les permissions - ${selectedAdmin?.firstName} ${selectedAdmin?.lastName}`}
                visible={isModalVisible}
                onOk={() => {
                    if (selectedAdmin?.isAdminValidated) {
                        handleUpdatePermissions(selectedAdmin);
                    } else {
                        handleValidateAdmin(selectedAdmin);
                    }
                }}
                onCancel={() => setIsModalVisible(false)}
                confirmLoading={loading}
            >
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold mb-2">Type d'administrateur</h3>
                        <Badge status="processing" text={selectedAdmin?.adminType} />
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Permissions</h3>
                        {permissions.permissions && (
                            <div className="space-y-2">
                                {Object.entries(permissions.permissions).map(([key, value]) => (
                                    <div key={key}>
                                        <Checkbox
                                            checked={selectedPermissions.includes(value)}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setSelectedPermissions([...selectedPermissions, value]);
                                                } else {
                                                    setSelectedPermissions(
                                                        selectedPermissions.filter(p => p !== value)
                                                    );
                                                }
                                            }}
                                        >
                                            {key}
                                        </Checkbox>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AdminManagement; 