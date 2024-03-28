import React from "react"

import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { useTheme } from "@/features/theme-provider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="fixed w-screen h-16">
            <Menubar className="bg-gray-600 rounded-none border-none">
                <MenubarMenu>
                    {/* <Link to='/dashboard'>Dashboard</Link> */}
                </MenubarMenu>
            </Menubar>
        </div>

    )
}
