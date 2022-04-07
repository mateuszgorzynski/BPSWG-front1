import React from "react";
import "./styles.css"
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import { TabMenu } from 'primereact/tabmenu';
import { Button } from 'primereact/button';

const Navigation = () =>{
    const items = [
        {label: 'Strona', icon: 'pi pi-fw pi-home', className: "item"},
        {label: 'Kalendarz', icon: 'pi pi-fw pi-calendar', className: "item"},
        {label: 'Zadania', icon: 'pi pi-fw pi-pencil', className: "item"},
        {label: 'Kontakt', icon: 'pi pi-fw pi-file', className: "item"},
        {label: 'Rejestracja godzin', icon: 'pi pi-fw pi-cog', className: "last"}
    ];

    return (
        <div>
            <div className="card">
                <TabMenu model={items} />
            </div>
        </div>
    );
}

export default Navigation;