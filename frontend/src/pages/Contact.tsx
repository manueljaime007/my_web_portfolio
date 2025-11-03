import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '../hooks/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    // newsletter: false,
  });
  const { toast } = useToast();


  const postData = async (url: string) => {
    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json'
        },
        body: JSON.stringify(formData)
      })
    } catch (error) {
      console.log(`Erro ao enviar mensagem: ${error}`)
    }

  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    postData('https://guanadev.vercel.app/api/v1/contacts');

    toast({
      title: 'Mensagem enviada!',
      description: 'Entrarei em contacto em breve.',
    });

    setFormData({
      name: '',
      email: '',
      message: '',
      // newsletter: false
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto space-y-12"
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">Contacte-me</h1>
          <p className="text-xl text-muted-foreground">
            Vamos trabalhar juntos no seu próximo projeto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nome
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    // checked={formData.newsletter}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        // newsletter: checked as boolean
                      })
                    }
                  />
                  <label
                    htmlFor="newsletter"
                    className="text-sm text-muted-foreground cursor-pointer"
                  >
                    Quero receber novidades por email
                  </label>
                </div>

                <Button type="submit" className="w-full">
                  Enviar mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:manueljaime0020@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      manueljaime0020@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Telefone</h3>
                    <a
                      href="tel:+244950366621"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +244 950 366 621
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Localização</h3>
                    <p className="text-muted-foreground">Luanda, Angola</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="pt-6">
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Disponível para projetos
                </h3>
                <p className="text-muted-foreground mb-4">
                  Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades
                  de fazer parte das suas visões.
                </p>
                <Button asChild variant="outline">
                  <a href="/cv.pdf" download>
                    Download CV
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
