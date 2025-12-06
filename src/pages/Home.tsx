import { useState, useMemo } from 'react';
import ArticleCard from '@/components/ArticleCard';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const articles = [
  {
    id: '1',
    title: 'CSS Grid: Полное руководство',
    description: 'Изучите все возможности CSS Grid Layout для создания сложных адаптивных макетов. От базовых концепций до продвинутых техник.',
    date: '15 ноября 2024',
    tags: ['CSS Grid', 'Layout', 'Responsive'],
    readTime: '8 мин'
  },
  {
    id: '2',
    title: 'Современные CSS анимации',
    description: 'Создавайте плавные и производительные анимации с помощью CSS transitions, transforms и animations. Практические примеры и best practices.',
    date: '10 ноября 2024',
    tags: ['Animations', 'CSS', 'Performance'],
    readTime: '6 мин'
  },
  {
    id: '3',
    title: 'CSS Custom Properties на практике',
    description: 'Как использовать CSS переменные для создания гибких и поддерживаемых стилей. Темизация, динамические стили и реальные кейсы.',
    date: '5 ноября 2024',
    tags: ['CSS Variables', 'Theming', 'Best Practices'],
    readTime: '7 мин'
  },
  {
    id: '4',
    title: 'Flexbox: От новичка до профи',
    description: 'Освойте Flexbox и научитесь создавать гибкие макеты любой сложности. Все свойства, примеры и типичные паттерны использования.',
    date: '1 ноября 2024',
    tags: ['Flexbox', 'Layout', 'Tutorial'],
    readTime: '10 мин'
  },
  {
    id: '5',
    title: 'Продвинутые селекторы CSS',
    description: 'Углубленное изучение CSS селекторов: псевдоклассы, псевдоэлементы, комбинаторы и их практическое применение в реальных проектах.',
    date: '28 октября 2024',
    tags: ['Selectors', 'CSS', 'Advanced'],
    readTime: '5 мин'
  },
  {
    id: '6',
    title: 'Оптимизация CSS для продакшена',
    description: 'Техники оптимизации CSS: минификация, критический CSS, устранение неиспользуемых стилей и улучшение производительности загрузки.',
    date: '25 октября 2024',
    tags: ['Performance', 'Optimization', 'Production'],
    readTime: '9 мин'
  }
];

const ARTICLES_PER_PAGE = 12;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const scrollToArticles = () => {
    document.getElementById('articles-section')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  const currentArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
    const endIndex = startIndex + ARTICLES_PER_PAGE;
    return articles.slice(startIndex, endIndex);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('articles-section')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const renderPaginationItems = () => {
    const items = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              onClick={() => handlePageChange(i)}
              isActive={currentPage === i}
              className="cursor-pointer"
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      items.push(
        <PaginationItem key={1}>
          <PaginationLink
            onClick={() => handlePageChange(1)}
            isActive={currentPage === 1}
            className="cursor-pointer"
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      if (currentPage > 3) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              onClick={() => handlePageChange(i)}
              isActive={currentPage === i}
              className="cursor-pointer"
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (currentPage < totalPages - 2) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            onClick={() => handlePageChange(totalPages)}
            isActive={currentPage === totalPages}
            className="cursor-pointer"
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-card py-20 animate-fade-in">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm mb-6">
              <Icon name="Sparkles" size={16} className="mr-2 text-primary" />
              <span className="text-primary font-medium">Новые статьи каждую неделю</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 sm:mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              CSS Tricks
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Современный блог о CSS трюках, туториалах и лучших практиках веб-разработки.
              От базовых концепций до продвинутых техник.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" onClick={scrollToArticles}>
                Читать статьи
                <Icon name="ArrowRight" size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Rss" size={18} className="mr-2" />
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="articles-section" className="container py-12">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">Последние статьи</h2>
            <p className="text-muted-foreground">
              Свежие туториалы и гайды по современному CSS · {articles.length} статей
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="FileText" size={16} />
            <span>Страница {currentPage} из {totalPages}</span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {currentArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                >
                  <span className="hidden sm:inline">Назад</span>
                  <span className="sm:hidden"><Icon name="ChevronLeft" size={16} /></span>
                </PaginationPrevious>
              </PaginationItem>

              {renderPaginationItems()}

              <PaginationItem>
                <PaginationNext
                  onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                >
                  <span className="hidden sm:inline">Вперёд</span>
                  <span className="sm:hidden"><Icon name="ChevronRight" size={16} /></span>
                </PaginationNext>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </section>
    </div>
  );
}