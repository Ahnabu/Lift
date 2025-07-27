"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, ChevronDown, MoreVertical } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { siteConfig, navigation } from "@/config/site"

interface NavigationItem {
    title: string
    href: string
    children?: NavigationItem[]
}

interface NestedMenuProps {
    items: NavigationItem[]
    level: number
    onItemClick?: () => void
}

const NestedMenu: React.FC<NestedMenuProps> = ({ items, level, onItemClick }) => {
    const [hoveredItem, setHoveredItem] = React.useState<string | null>(null)
    const pathname = usePathname()

    return (
        <div
            className={cn(
                "absolute bg-white border border-gray-200 shadow-xl z-50 rounded-sm",
                level === 0 ? "top-full left-0 min-w-[250px]" : "top-0 left-full min-w-[280px]",
                level > 0 && "ml-1"
            )}
            style={{
                borderBottom: "4px solid rgb(var(--primary))"
            }}
        >
            {items.map((item, index) => {
                // Check if this item is the active route
                const isActive = item.href === pathname || (item.children && item.children.some(child => child.href === pathname))

                return (
                    <div
                        key={item.title}
                        className="relative"
                        onMouseEnter={() => setHoveredItem(item.title)}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        {item.children ? (
                            <>
                                <div className={cn(
                                    "px-5 py-4 cursor-pointer flex items-center justify-between font-bold transition-colors duration-200 ",
                                    isActive
                                        ? "bg-primary/10 text-primary"
                                        : "hover:bg-primary/10 text-gray-800 hover:text-primary",
                                    index !== items.length - 1 && "border-b border-gray-100"
                                )}>
                                    <span className="text-sm uppercase tracking-wide font-bold">{item.title}</span>
                                    <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                                </div>
                                {hoveredItem === item.title && (
                                    <NestedMenu
                                        items={item.children}
                                        level={level + 1}
                                        onItemClick={onItemClick}
                                    />
                                )}
                            </>
                        ) : (
                            <Link
                                href={item.href}
                                className={cn(
                                    "block px-5 py-4 text-sm uppercase tracking-wide font-bold transition-colors duration-200",
                                    isActive
                                        ? "bg-primary/10 text-primary"
                                        : "hover:bg-primary/10 text-gray-800 hover:text-primary",
                                    index !== items.length - 1 && "border-b border-gray-100"
                                )}
                                onClick={onItemClick}
                            >
                                {item.title}
                            </Link>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

interface NavigationMenuItemProps {
    item: NavigationItem
    onItemClick?: () => void
}

const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({ item, onItemClick }) => {
    const [isHovered, setIsHovered] = React.useState(false)
    const menuRef = React.useRef<HTMLDivElement>(null)
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)
    const pathname = usePathname()

    // Check if current route matches this item or any of its children
    const isActiveRoute = React.useMemo(() => {
        if (item.href === pathname) return true
        if (item.children) {
            return item.children.some(child => {
                if (child.href === pathname) return true
                if (child.children) {
                    return child.children.some(grandchild => grandchild.href === pathname)
                }
                return false
            })
        }
        return false
    }, [pathname, item])

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsHovered(false)
        }, 150) // Small delay to allow moving between elements
    }

    React.useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    return (
        <div
            ref={menuRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {item.children ? (
                <>
                    <div className={cn(
                        "px-2 py-2 cursor-pointer flex items-center space-x-1 text-sm font-bold uppercase tracking-wide transition-colors duration-200",
                        isActiveRoute || isHovered
                            ? "text-primary"
                            : "text-white hover:text-primary"
                    )}>
                        <span>{item.title}</span>
                    </div>
                    {isHovered && (
                        <NestedMenu
                            items={item.children}
                            level={0}
                            onItemClick={onItemClick}
                        />
                    )}
                </>
            ) : (
                <Link
                    href={item.href}
                    className={cn(
                        "block px-2 py-2 text-sm font-bold uppercase tracking-wide transition-colors duration-200",
                        isActiveRoute || isHovered
                            ? "text-primary"
                            : "text-white hover:text-primary"
                    )}
                    onClick={onItemClick}
                >
                    {item.title}
                </Link>
            )}
        </div>
    )
}

export function Navbar() {
    const [isNavOpen, setIsNavOpen] = React.useState(false)
    const [isContactOpen, setIsContactOpen] = React.useState(false)

    return (
        <header className="w-full bg-gray-800 text-white sticky top-0 z-50 shadow-lg">
            {/* Main Navigation */}
            <div className="bg-gray-800">
                <div className="container mx-auto px-2 lg:px-4">
                    <div className="flex items-center justify-between h-20">
                        {/* Mobile Left Side: Hamburger + Logo */}
                        <div className="lg:hidden flex items-center space-x-3">
                            <Sheet open={isNavOpen} onOpenChange={setIsNavOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="sm" className="text-white hover:text-primary hover:bg-gray-700 p-2">
                                        <Menu className="h-6 w-6" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-gray-800 text-white border-gray-700">
                                    <VisuallyHidden>
                                        <SheetTitle>Navigation Menu</SheetTitle>
                                    </VisuallyHidden>
                                    {/* Mobile Navigation Header */}
                                    <div className="flex flex-col space-y-6 mt-6 px-4">
                                        <Link
                                            href="/"
                                            className="flex items-center space-x-3 mb-6"
                                            onClick={() => setIsNavOpen(false)}
                                        >
                                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                                <span className="text-white font-bold">PL</span>
                                            </div>
                                            <div>
                                                <div className="font-bold text-white">PROPERTY LIFTS</div>
                                                <div className="text-primary text-xs">Since 1998</div>
                                            </div>
                                        </Link>

                                        {/* Mobile Navigation Items */}
                                        {navigation.main.map((item) => (
                                            <MobileNavigationItem
                                                key={item.title}
                                                item={item}
                                                onItemClick={() => setIsNavOpen(false)}
                                            />
                                        ))}
                                    </div>
                                </SheetContent>
                            </Sheet>

                            {/* Logo for Mobile */}
                            <Link href="/" className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-sm">PL</span>
                                </div>
                                <div>
                                    <div className="font-bold text-sm text-white tracking-wide">PROPERTY LIFTS</div>
                                    <div className="text-primary text-xs font-medium">Since 1998</div>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Logo (Center/Left) */}
                        <Link href="/" className="hidden lg:flex items-center space-x-3">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-lg">PL</span>
                            </div>
                            <div>
                                <div className="font-bold text-xl text-white tracking-wide">PROPERTY LIFTS</div>
                                <div className="text-primary text-sm font-medium">Since 1998</div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-4">
                            {navigation.main.map((item) => (
                                <NavigationMenuItem key={item.title} item={item} />
                            ))}
                        </nav>

                        {/* Contact Info & Mobile Contact Menu */}
                        <div className="flex items-center space-x-4">
                            {/* Contact Info - Desktop */}
                            <div className="hidden lg:flex flex-col items-end text-right">
                                <div className="text-primary font-bold text-lg">
                                    {siteConfig.contact.phone}
                                </div>
                                <div className="text-gray-300 text-sm">
                                    {siteConfig.contact.email}
                                </div>
                            </div>

                            {/* Mobile Contact Info (Three Dots - Right Side) */}
                            <div className="lg:hidden">
                                <Sheet open={isContactOpen} onOpenChange={setIsContactOpen}>
                                    <SheetTrigger asChild>
                                        <Button variant="ghost" size="sm" className="text-white hover:text-primary hover:bg-gray-700 p-3">
                                            <MoreVertical className="h-6 w-6" />
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-800 text-white border-gray-700">
                                        <VisuallyHidden>
                                            <SheetTitle>Contact Information</SheetTitle>
                                        </VisuallyHidden>
                                        {/* Mobile Contact Header */}
                                        <div className="flex flex-col space-y-6 mt-6 px-4">
                                            <div className="flex items-center space-x-3 mb-6">
                                                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                                    <span className="text-white font-bold">PL</span>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-white">PROPERTY LIFTS</div>
                                                    <div className="text-primary text-xs">Since 1998</div>
                                                </div>
                                            </div>

                                            {/* Mobile Contact Info */}
                                            <div className="bg-gray-700 rounded-lg p-6 text-center">
                                                <div className="text-primary font-bold text-2xl mb-3">
                                                    {siteConfig.contact.phone}
                                                </div>
                                                <div className="text-gray-300 text-base mb-4">
                                                    {siteConfig.contact.email}
                                                </div>
                                                <div className="text-gray-400 text-sm">
                                                    Emergency: {siteConfig.contact.emergency}
                                                </div>
                                            </div>

                                            {/* Additional Contact Information */}
                                            <div className="bg-gray-700 rounded-lg p-4">
                                                <h3 className="text-primary font-bold text-lg mb-3">Get In Touch</h3>
                                                <div className="space-y-2 text-sm">
                                                    <p className="text-gray-300">
                                                        📍 {siteConfig.contact.address}
                                                    </p>
                                                    <p className="text-gray-300">
                                                        🕒 24/7 Customer Support
                                                    </p>
                                                    <p className="text-gray-300">
                                                        ⚡ Emergency Service Available
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

interface MobileNavigationItemProps {
    item: NavigationItem
    onItemClick: () => void
    level?: number
}

const MobileNavigationItem: React.FC<MobileNavigationItemProps> = ({
    item,
    onItemClick,
    level = 0
}) => {
    const [isExpanded, setIsExpanded] = React.useState(false)
    const pathname = usePathname()

    // Check if current route matches this item or any of its children
    const isActiveRoute = React.useMemo(() => {
        if (item.href === pathname) return true
        if (item.children) {
            return item.children.some(child => {
                if (child.href === pathname) return true
                if (child.children) {
                    return child.children.some(grandchild => grandchild.href === pathname)
                }
                return false
            })
        }
        return false
    }, [pathname, item])

    return (
        <div className={cn("", level > 0 && "ml-4")}>
            {item.children ? (
                <>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={cn(
                            "flex items-center justify-between w-full py-3 text-left font-bold text-sm uppercase tracking-wide transition-colors duration-200",
                            isActiveRoute
                                ? "text-primary"
                                : "text-white hover:text-primary",
                            level > 0 && "text-gray-300 hover:text-white"
                        )}
                    >
                        <span>{item.title}</span>
                        <ChevronDown className={cn(
                            "h-4 w-4 transition-transform text-primary",
                            isExpanded && "rotate-180"
                        )} />
                    </button>
                    {isExpanded && (
                        <div className="mt-2 space-y-1 bg-gray-700 rounded-lg p-3">
                            {item.children.map((child) => (
                                <MobileNavigationItem
                                    key={child.title}
                                    item={child}
                                    onItemClick={onItemClick}
                                    level={level + 1}
                                />
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <Link
                    href={item.href}
                    className={cn(
                        "block py-3 font-bold text-sm uppercase tracking-wide transition-colors duration-200",
                        isActiveRoute
                            ? "text-primary"
                            : "text-white hover:text-primary",
                        level > 0 && "text-gray-300 hover:text-white py-2"
                    )}
                    onClick={onItemClick}
                >
                    {item.title}
                </Link>
            )}
        </div>
    )
}
