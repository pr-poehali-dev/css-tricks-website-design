import Icon from '@/components/ui/icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Icon name="Code2" size={16} className="text-primary-foreground" />
            </div>
            <span className="text-sm font-semibold">CSS Tricks</span>
          </div>

          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} CSS Tricks. Все статьи и туториалы для веб-разработчиков
          </p>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon name="Github" size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon name="Twitter" size={20} />
            </a>
            <a
              href="mailto:hello@csstricks.ru"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon name="Mail" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}