import React, { useState } from 'react';
import SidebarVisible from "../panel/SidebarVisible";
import ResponsiveAppBar from "../panel/AppBar";
import MainPane from "../panel/MainPane";
import {NumberProvider} from "../provider/NumProvider";
export default function Main() {
    const [activeSection, setActiveSection] = useState('library');
    return (
        <NumberProvider>
            <div className={'bg-graygpt h-screen'}>
                <main>
                    <ResponsiveAppBar/>
                    <div className={'flex flex-row'}>
                        <SidebarVisible setSection={setActiveSection}/>
                        <MainPane activeSection={activeSection}/>
                    </div>
                </main>
            </div>
        </NumberProvider>
    );
}
