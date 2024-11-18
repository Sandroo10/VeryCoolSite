import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ModeToggle } from './mode-toggle/index';
import { cn } from "../lib/utils"
import { Check } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover"
 
const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "python",
    label: "Python",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "javascript",
    label: "Javascript",
  },
  {
    value: "astro",
    label: "Astro",
  },
]


const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const { t, i18n } = useTranslation();
    const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language); 
  };

  return (
    <header className="border-b w-full fixed top-0 z-50 left-0">
      <div className="w-full px-4 py-4 flex items-center justify-between">
        <a className="text-2xl font-bold pl-3" href="/">
          BitBlogs
        </a>

        <nav className="hidden md:flex space-x-4 ">
          <a className="text-gray-400 " href="/">
            {t('home')}
          </a>
          <a className="text-gray-400 " href="/write">
            {t('write')}
          </a>
          <a className="text-gray-400 " href="/about">
            {t('about')}
          </a>
        </nav>

        <div className="flex items-center space-x-4 pr-3">
        <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
      <button
  className="relative flex items-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-2 rounded"
  type="button"
  aria-haspopup="dialog"
  aria-expanded="false"
  aria-controls="radix-:r0:"
  data-state="closed"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="lucide lucide-search text-muted-foreground dark:text-white"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
  </svg>
</button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
       

          <button className="bg-blue-500 px-4 py-2 rounded-md">
            <Link className="text-white" to="/signin">
              {t('signIn')}
            </Link>
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger className="hover:bg-gray-500 focus:outline-none bg-white dark:bg-gray-800 px-3 py-2 rounded-md">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-current text-black dark:text-white"
              >
                <path
                  d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
                <path
                  d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
                <path
                  d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-700 text-white rounded-md mt-2">
              <DropdownMenuItem
                onClick={() => changeLanguage('en')}
                className="hover:bg-gray-600 px-4 py-2 cursor-pointer"
              >
                {t('english')}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => changeLanguage('ka')}
                className="hover:bg-gray-600 px-4 py-2 cursor-pointer"
              >
                {t('georgian')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>


          <ModeToggle/>
        </div>
      </div>
    </header>
  );
};

export default Header;
