import { Link } from 'wouter';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <a className="flex items-center space-x-2 transition-opacity hover:opacity-80">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Icon name="Code2" size={20} className="text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CSS Tricks
            </span>
          </a>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link href="/">
            <a className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Главная
            </a>
          </Link>
          <Link href="/about">
            <a className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              О блоге
            </a>
          </Link>
          <Link href="/contacts">
            <a className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Контакты
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
