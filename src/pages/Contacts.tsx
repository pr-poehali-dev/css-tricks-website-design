import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Contacts() {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message })
      });

      if (response.ok) {
        toast({
          title: "Сообщение отправлено!",
          description: "Мы свяжемся с вами в ближайшее время",
        });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте еще раз позже",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-background to-card py-16 animate-fade-in">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent px-4 sm:px-0">
              Свяжитесь с нами
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground px-4 sm:px-0">
              Мы всегда рады вашим вопросам и предложениям
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="mx-auto max-w-2xl">
          <Card className="mb-8 border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                  <Icon name="MessageCircle" size={20} className="text-primary" />
                </div>
                Отправить сообщение
              </CardTitle>
              <CardDescription>
                Заполните форму ниже, и мы свяжемся с вами в ближайшее время
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input 
                    id="name"
                    type="text" 
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Электронная почта</Label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea 
                    id="message"
                    placeholder="Напишите ваше сообщение..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  <Icon name="Send" size={18} className="mr-2" />
                  {isSubmitting ? 'Отправка...' : 'Отправить'}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="grid gap-6 mb-8">
            <Card className="hover-lift transition-all duration-300 hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  Email
                </CardTitle>
                <CardDescription>
                  Напишите нам по любым вопросам
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:hello@csstricks.ru" 
                  className="text-lg font-medium text-primary hover:underline flex items-center gap-2"
                >
                  hello@csstricks.ru
                  <Icon name="ExternalLink" size={16} />
                </a>
              </CardContent>
            </Card>

            <Card className="hover-lift transition-all duration-300 hover:border-secondary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                    <Icon name="Github" size={20} className="text-secondary" />
                  </div>
                  GitHub
                </CardTitle>
                <CardDescription>
                  Все примеры кода доступны в нашем репозитории
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://github.com/csstricks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-secondary hover:underline flex items-center gap-2"
                >
                  github.com/csstricks
                  <Icon name="ExternalLink" size={16} />
                </a>
              </CardContent>
            </Card>

            <Card className="hover-lift transition-all duration-300 hover:border-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon name="Twitter" size={20} className="text-primary" />
                  </div>
                  Twitter
                </CardTitle>
                <CardDescription>
                  Следите за новостями и обновлениями
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://twitter.com/csstricks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-primary hover:underline flex items-center gap-2"
                >
                  @csstricks
                  <Icon name="ExternalLink" size={16} />
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                  <Icon name="MessageSquare" size={20} className="text-primary" />
                </div>
                Предложить тему статьи
              </CardTitle>
              <CardDescription>
                Есть идея для статьи или туториала? Мы будем рады услышать!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Если у вас есть интересная тема по CSS, о которой вы хотели бы прочитать, 
                или вы сами хотите написать гостевую статью — свяжитесь с нами.
              </p>
              <Button className="w-full sm:w-auto">
                <Icon name="Send" size={18} className="mr-2" />
                Отправить предложение
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}