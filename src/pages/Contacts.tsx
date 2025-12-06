import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-background to-card py-16 animate-fade-in">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-muted-foreground">
              Мы всегда рады вашим вопросам и предложениям
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="mx-auto max-w-2xl">
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
