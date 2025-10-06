import DashboardTab from "../components/DashboardTab";
import InvoiceTab from "../components/InvoiceTab";
import ProfileTab from "../components/ProfileTab";
import SettingsTab from "../components/SettingsTab";

export const tabsData = [
    {
        id: 0,
        title: "Profile",
        component: ProfileTab,
        props: {
            firstName: "Prerak",
            lastName: "Parekh"
        }
    },
    {
        id: 1,
        title: "Dashboard",
        component: DashboardTab,
        props: {
            itemPrize: 100
        }
    },
    {
        id: 2,
        title: "Settings",
        component: SettingsTab,
        props: {
            subtitles: "off"
        }
    },
    {
        id: 3,
        title: "Invoice",
        component: InvoiceTab,
        props: {
            invoiceValue: 'Rs. 20'
        }
    },
];

export const dummyApiData = {
    0: {
        firstName: "Vedant",
        lastName: "Mehta"
    },
    1: {
        itemPrize: 500
    },
    2: {
        subtitles: "off"
    },
    3: {
        actualValue: "Rs. 500"
    }
};
