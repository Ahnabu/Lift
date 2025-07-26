"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail, MapPin } from "lucide-react"
import { siteConfig, navigation } from "@/config/site"

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className="w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-slate-900 text-white py-2">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm space-y-1 sm:space-y-0">
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-1">
                                <Phone className="h-3 w-3" />
                                <span>{siteConfig.contact.phone}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Mail className="h-3 w-3" />
                                <span>{siteConfig.contact.email}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span className="text-xs">{siteConfig.contact.address}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Navigation */}
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="font-bold text-xl text-blue-600">
                            {siteConfig.name}
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList>
                            {navigation.main.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.items ? (
                                        <>
                                            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                    {item.items.map((subItem) => (
                                                        <ListItem
                                                            key={subItem.title}
                                                            title={subItem.title}
                                                            href={subItem.href}
                                                        >
                                                            {subItem.description}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                                            <Link href={item.href}>
                                                {item.title}
                                            </Link>
                                        </NavigationMenuLink>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Emergency Contact Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="outline" size="sm" asChild>
                            <Link href={`tel:${siteConfig.contact.emergency}`}>
                                <Phone className="h-4 w-4 mr-2" />
                                Emergency: {siteConfig.contact.emergency}
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Navigation */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="sm">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <nav className="flex flex-col space-y-4">
                                <Link
                                    href="/"
                                    className="font-bold text-xl text-blue-600"
                                    onClick={() => setIsOpen(false)}>
                                    {siteConfig.name}
                                </Link>

                                {navigation.main.map((item) => (
                                    <div key={item.title} className="space-y-2">
                                        {item.items ? (
                                            <div>
                                                <div className="font-medium text-sm text-muted-foreground uppercase tracking-wider">
                                                    {item.title}
                                                </div>
                                                <div className="ml-4 space-y-2">
                                                    {item.items.map((subItem) => (
                                                        <Link
                                                            key={subItem.title}
                                                            href={subItem.href}
                                                            className="block text-sm hover:text-blue-600 transition-colors"
                                                            onClick={() => setIsOpen(false)}>
                                                            {subItem.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="font-medium hover:text-blue-600 transition-colors"
                                                onClick={() => setIsOpen(false)}>
                                                {item.title}
                                            </Link>
                                        )}
                                    </div>
                                ))}

                                <Button variant="outline" size="sm" asChild className="mt-4">
                                    <Link href={`tel:${siteConfig.contact.emergency}`}>
                                        <Phone className="h-4 w-4 mr-2" />
                                        Emergency: {siteConfig.contact.emergency}
                                    </Link>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<typeof Link>,
    React.ComponentPropsWithoutRef<typeof Link> & { title: string; children?: React.ReactNode }
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}>
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
})
ListItem.displayName = "ListItem"
