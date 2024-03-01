
export const MENUITEMS = [
    {
        menutitle: "MAIN",
        Items: [
            { path: `${import.meta.env.BASE_URL}home`, icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3" /><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z" /></svg>), type: 'link', active: false, selected: false, title: 'Index', badge: "badge bg-success text-light ", badgetxt: "1", },
        ]
    },
    // {
    //     menutitle: "GENERAL",

    //     Items: [

    //         {
    //             title: 'Icons', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-7 0c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8zm3.5 9.5c-2.33 0-4.32-1.45-5.12-3.5h1.67c.7 1.19 1.97 2 3.45 2s2.76-.81 3.45-2h1.67c-.8 2.05-2.79 3.5-5.12 3.5z" opacity=".3" /><circle cx="15.5" cy="9.5" r="1.5" /><circle cx="8.5" cy="9.5" r="1.5" /><path d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg>), type: 'sub', active: false, children: [

    //                 { path: `${import.meta.env.BASE_URL}icons/fontawesome`, type: 'link', active: false, selected: false, title: 'Font Awesome' },
    //                 { path: `${import.meta.env.BASE_URL}icons/materialdesign`, type: 'link', active: false, selected: false, title: 'Material Design Icons' },
    //                 { path: `${import.meta.env.BASE_URL}icons/simpleline`, type: 'link', active: false, selected: false, title: 'Simple Line Icons' },
    //                 { path: `${import.meta.env.BASE_URL}icons/feather`, type: 'link', active: false, selected: false, title: 'Feather Icons' },
    //                 { path: `${import.meta.env.BASE_URL}icons/ionic`, type: 'link', active: false, selected: false, title: 'Ionic Icons' },
    //                 { path: `${import.meta.env.BASE_URL}icons/flag`, type: 'link', active: false, selected: false, title: 'Flag Icons' },
    //                 { path: `${import.meta.env.BASE_URL}icons/pe7`, type: 'link', active: false, selected: false, title: 'Pe7 Icons' },
    //                 { path: `${import.meta.env.BASE_URL}icons/themify`, type: 'link', active: false, selected: false, title: 'Themify Icons' },
    //                 { path: `${import.meta.env.BASE_URL}icons/typicons`, type: 'link', active: false, selected: false, title: 'Typicons Icons' },
    //                 { path: `${import.meta.env.BASE_URL}icons/weather`, type: 'link', active: false, selected: false, title: 'Weather Icons' },
    //                 { path: `${import.meta.env.BASE_URL}icons/material`, type: 'link', active: false, selected: false, title: 'Material Icons' },
    //                 { path: `${import.meta.env.BASE_URL}icons/bootstrap`, type: 'link', active: false, selected: false, title: 'Bootstrap Icons' },
    //             ]
    //         },
    //         {

    //             title: 'Charts', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 5H5v14h14V5zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" opacity=".3" /><path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm2 0h14v14H5V5zm2 5h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" /></svg>), type: 'sub', active: false, children: [

    //                 { path: `${import.meta.env.BASE_URL}charts/chartjs`, type: 'link', active: false, selected: false, title: 'Chart JS' },
    //                 { path: `${import.meta.env.BASE_URL}charts/echart`, type: 'link', active: false, selected: false, title: 'E Chart' },
    //                 { path: `${import.meta.env.BASE_URL}charts/sparkline`, type: 'link', active: false, selected: false, title: 'Sparkline' },

    //                 {
    //                     type: 'sub', active: false, selected: false, title: 'Apex Chart', children: [

    //                         { path: `${import.meta.env.BASE_URL}Charts/ApexChart/Area`, type: 'link', active: false, selected: false, title: 'Area Chart' },
    //                         { path: `${import.meta.env.BASE_URL}Charts/ApexChart/Bar`, type: 'link', active: false, selected: false, title: 'Bar Chart' },
    //                         { path: `${import.meta.env.BASE_URL}Charts/ApexChart/Line`, type: 'link', active: false, selected: false, title: 'Line Chart' },
    //                         { path: `${import.meta.env.BASE_URL}Charts/ApexChart/Column`, type: 'link', active: false, selected: false, title: 'Column Chart' },
    //                         { path: `${import.meta.env.BASE_URL}Charts/ApexChart/Mixed`, type: 'link', active: false, selected: false, title: 'Mixed Chart' }

    //                     ]
    //                 },
    //             ]
    //         },
    //     ]
    // },
   
]