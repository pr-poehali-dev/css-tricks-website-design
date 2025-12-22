import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ArticleCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readTime: string;
}

export default function ArticleCard({ id, title, description, date, tags, readTime }: ArticleCardProps) {
  return (
    <Link href={`/article/${id}`}>
      <a className="block h-full">
        <Card className="h-full transition-all duration-300 hover-lift hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
          <CardHeader>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
              <Icon name="Calendar" size={14} />
              <span>{date}</span>
            </div>
            <CardTitle className="text-xl font-semibold leading-tight hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <CardDescription className="mt-2 line-clamp-2">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </a>
    </Link>
  );
}