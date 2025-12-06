import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-background to-card py-16 animate-fade-in">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              О блоге CSS Tricks
            </h1>
            <p className="text-xl text-muted-foreground">
              Место, где CSS становится понятным и интересным
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="mx-auto max-w-4xl space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon name="Target" size={20} className="text-primary" />
                </div>
                Наша миссия
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              <p className="mb-4">
                CSS Tricks — это образовательный ресурс для веб-разработчиков всех уровней. 
                Мы создаем качественный контент о современном CSS, делясь практическими знаниями, 
                трюками и лучшими практиками.
              </p>
              <p>
                Наша цель — сделать CSS доступным и понятным, показать его возможности и помочь 
                разработчикам создавать красивые и производительные веб-приложения.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                  <Icon name="BookOpen" size={24} className="text-primary" />
                </div>
                <CardTitle>Туториалы</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Подробные пошаговые руководства по изучению CSS от базовых до продвинутых техник
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 mb-2">
                  <Icon name="Code2" size={24} className="text-secondary" />
                </div>
                <CardTitle>Примеры кода</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Готовые решения и код-сниппеты, которые можно использовать в ваших проектах
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                  <Icon name="Lightbulb" size={24} className="text-primary" />
                </div>
                <CardTitle>Best Practices</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Проверенные методологии и подходы к написанию чистого и поддерживаемого CSS
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                  <Icon name="Users" size={20} className="text-secondary" />
                </div>
                Для кого этот блог
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 mt-0.5">
                    <Icon name="Check" size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Начинающие разработчики</p>
                    <p className="text-sm">Получите фундаментальные знания CSS и научитесь создавать современные интерфейсы</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 mt-0.5">
                    <Icon name="Check" size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Опытные frontend-разработчики</p>
                    <p className="text-sm">Углубите знания, изучите продвинутые техники и узнайте о новых возможностях CSS</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 mt-0.5">
                    <Icon name="Check" size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Дизайнеры</p>
                    <p className="text-sm">Узнайте, как воплотить ваши идеи в жизнь с помощью современного CSS</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
