import { Monitor, Moon, Sun } from 'lucide-react';

import { Button } from '@/components/_ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/_ui/dropdown-menu';
import { useTheme } from '@/components/app/theme-provider';

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant='default' size='icon' />}>
        <Sun className='size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
        <Moon className='absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
        <span className='sr-only'>Toggle theme</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun data-icon='inline-start' />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon data-icon='inline-start' />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Monitor data-icon='inline-start' />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
