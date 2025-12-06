import { useRoute } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Link } from 'wouter';

const articles: Record<string, {
  title: string;
  description: string;
  date: string;
  tags: string[];
  readTime: string;
  author: string;
  content: Array<{ type: 'paragraph' | 'code' | 'heading' | 'list'; text?: string; items?: string[]; language?: string }>;
}> = {
  '1': {
    title: 'CSS Grid: Полное руководство',
    description: 'Изучите все возможности CSS Grid Layout для создания сложных адаптивных макетов',
    date: '15 ноября 2024',
    tags: ['CSS Grid', 'Layout', 'Responsive'],
    readTime: '8 мин',
    author: 'CSS Tricks Team',
    content: [
      { type: 'paragraph', text: 'CSS Grid — это мощная система компоновки, которая позволяет создавать двумерные макеты с помощью строк и столбцов. В отличие от Flexbox, который является одномерным, Grid даёт полный контроль над размещением элементов по обеим осям.' },
      { type: 'heading', text: 'Основы Grid' },
      { type: 'paragraph', text: 'Чтобы начать использовать Grid, достаточно применить display: grid к родительскому элементу. Это превратит все прямые дочерние элементы в grid-элементы.' },
      { type: 'code', language: 'css', text: `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}` },
      { type: 'heading', text: 'Ключевые свойства' },
      { type: 'list', items: [
        'grid-template-columns — определяет количество и размер столбцов',
        'grid-template-rows — определяет количество и размер строк',
        'gap — задаёт промежутки между элементами',
        'grid-area — позволяет именовать области сетки'
      ]},
      { type: 'paragraph', text: 'С помощью Grid вы можете создавать сложные адаптивные макеты без медиа-запросов, используя функции minmax() и auto-fit/auto-fill.' },
      { type: 'code', language: 'css', text: `.responsive-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}` },
      { type: 'paragraph', text: 'Этот код создаст адаптивную сетку, которая автоматически подстраивается под размер контейнера, создавая столбцы минимальной шириной 250px.' }
    ]
  },
  '2': {
    title: 'Современные CSS анимации',
    description: 'Создавайте плавные и производительные анимации с помощью CSS',
    date: '10 ноября 2024',
    tags: ['Animations', 'CSS', 'Performance'],
    readTime: '6 мин',
    author: 'CSS Tricks Team',
    content: [
      { type: 'paragraph', text: 'CSS анимации позволяют создавать впечатляющие визуальные эффекты без JavaScript. Правильное использование анимаций улучшает пользовательский опыт и делает интерфейс более живым.' },
      { type: 'heading', text: 'Transitions' },
      { type: 'paragraph', text: 'Transitions — это простейший способ добавить плавность изменениям CSS-свойств при наведении или других событиях.' },
      { type: 'code', language: 'css', text: `.button {\n  background: #9b87f5;\n  transition: all 0.3s ease;\n}\n\n.button:hover {\n  background: #7E69AB;\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(0,0,0,0.2);\n}` },
      { type: 'heading', text: 'Keyframe анимации' },
      { type: 'paragraph', text: 'Для более сложных анимаций используйте @keyframes, которые позволяют задать несколько промежуточных состояний.' },
      { type: 'code', language: 'css', text: `@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.element {\n  animation: fadeIn 0.5s ease-out;\n}` },
      { type: 'heading', text: 'Советы по производительности' },
      { type: 'list', items: [
        'Используйте transform и opacity — они не вызывают reflow',
        'Добавьте will-change для критичных анимаций',
        'Избегайте анимации width, height, top, left',
        'Используйте requestAnimationFrame для JS-анимаций'
      ]}
    ]
  }
};

export default function Article() {
  const [, params] = useRoute('/article/:id');
  const articleId = params?.id || '1';
  const article = articles[articleId] || articles['1'];

  return (
    <div className="min-h-screen animate-fade-in">
      <article className="container py-8 max-w-4xl">
        <Link href="/">
          <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <Icon name="ArrowLeft" size={16} />
            Вернуться к статьям
          </a>
        </Link>

        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Icon name="Calendar" size={14} />
              <span>{article.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Icon name="Clock" size={14} />
              <span>{article.readTime}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Icon name="User" size={14} />
              <span>{article.author}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-6">
            {article.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <Separator className="mb-8" />

        <div className="prose prose-invert max-w-none">
          {article.content.map((block, index) => {
            if (block.type === 'paragraph') {
              return (
                <p key={index} className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  {block.text}
                </p>
              );
            }

            if (block.type === 'heading') {
              return (
                <h2 key={index} className="text-2xl font-bold mt-10 mb-4 text-foreground">
                  {block.text}
                </h2>
              );
            }

            if (block.type === 'code') {
              return (
                <div key={index} className="my-6">
                  <div className="rounded-lg bg-muted border border-border overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
                      <span className="text-xs font-medium text-muted-foreground uppercase">
                        {block.language || 'code'}
                      </span>
                      <Button variant="ghost" size="sm" className="h-7 text-xs">
                        <Icon name="Copy" size={14} className="mr-1" />
                        Копировать
                      </Button>
                    </div>
                    <pre className="p-4 overflow-x-auto">
                      <code className="text-sm text-primary">{block.text}</code>
                    </pre>
                  </div>
                </div>
              );
            }

            if (block.type === 'list') {
              return (
                <ul key={index} className="space-y-3 my-6">
                  {block.items?.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 mt-0.5">
                        <Icon name="Check" size={14} className="text-primary" />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            return null;
          })}
        </div>

        <Separator className="my-12" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
              <Icon name="User" size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-semibold">{article.author}</p>
              <p className="text-sm text-muted-foreground">Автор статьи</p>
            </div>
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
              <Icon name="Share2" size={16} className="mr-2" />
              <span className="hidden xs:inline">Поделиться</span>
            </Button>
            <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
              <Icon name="Bookmark" size={16} className="mr-2" />
              <span className="hidden xs:inline">Сохранить</span>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}