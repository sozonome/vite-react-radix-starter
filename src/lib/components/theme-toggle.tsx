import { Button } from '@radix-ui/themes';
import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/lib/components/theme-provider';

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <Button variant="ghost" size="1" onClick={toggleTheme}>
      <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
