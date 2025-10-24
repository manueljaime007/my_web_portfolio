import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, Briefcase, FileText, Plus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('stats');

  // Mock data - would come from database
  const stats = {
    visitors: 1234,
    messages: 45,
    projects: 8,
    experiences: 5,
  };

  const mockMessages = [
    { id: 1, name: 'João Silva', email: 'joao@example.com', message: 'Olá, gostaria de discutir um projeto', date: '2025-01-20' },
    { id: 2, name: 'Maria Santos', email: 'maria@example.com', message: 'Impressionado com seu portfólio!', date: '2025-01-19' },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl font-heading font-bold text-gradient mb-2">
              Painel Administrativo
            </h1>
            <p className="text-muted-foreground">
              Gerencie seu portfólio
            </p>
          </motion.div>
          <ThemeToggle />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto">
            <TabsTrigger value="stats">Estatísticas</TabsTrigger>
            <TabsTrigger value="messages">Mensagens</TabsTrigger>
            <TabsTrigger value="projects">Projetos</TabsTrigger>
            <TabsTrigger value="experiences">Experiências</TabsTrigger>
          </TabsList>

          <TabsContent value="stats" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Visitantes</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.visitors}</div>
                  <p className="text-xs text-muted-foreground">Total de acessos</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Mensagens</CardTitle>
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.messages}</div>
                  <p className="text-xs text-muted-foreground">Recebidas</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Projetos</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.projects}</div>
                  <p className="text-xs text-muted-foreground">Publicados</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Experiências</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.experiences}</div>
                  <p className="text-xs text-muted-foreground">Cadastradas</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Aviso Importante</CardTitle>
                <CardDescription>
                  Esta é apenas a interface do dashboard. Para funcionalidade completa, é necessário:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">✓ Configurar base de dados (tabelas para visitantes, mensagens, projetos, experiências)</p>
                <p className="text-sm">✓ Implementar autenticação real com roles de admin</p>
                <p className="text-sm">✓ Criar APIs para CRUD de dados</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-heading font-bold">Mensagens Recebidas</h2>
            </div>

            <div className="space-y-4">
              {mockMessages.map((msg) => (
                <Card key={msg.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{msg.name}</CardTitle>
                        <CardDescription>{msg.email}</CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground">{msg.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{msg.message}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-heading font-bold">Gestão de Projetos</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Novo Projeto
              </Button>
            </div>

            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground">
                  Funcionalidade CRUD requer configuração da base de dados
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experiences" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-heading font-bold">Gestão de Experiências</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Nova Experiência
              </Button>
            </div>

            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground">
                  Funcionalidade CRUD requer configuração da base de dados
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
