import {
  Inbox,
  Send,
  MailOpen,
  Trash,
  Star,
  Tag,
  RefreshCcw,
  Settings,
  Search,
} from "lucide-react";
import first from '../../assets/icons/Dial-ERP-Logo.svg'
export const EmailTemplate = () => {
  const emails = [
    {
      sender: "Signixchemicals",
      subject:
        "EXPORT - Request of ItemMaster Data as on 17-Sep-2025 13:21. Count-1.",
      date: "17-Sep-2025",
    },
    {
      sender: "Signixchemicals",
      subject:
        "EXPORT - Request of ItemMaster Data as on 17-Sep-2025 13:17. Count-1.",
      date: "17-Sep-2025",
    },
  ];

  return (
   <div className="flex h-[calc(100vh-64px)] bg-gray-50">
  
  <aside className="w-48 sm:w-64 bg-white border-r p-4 text-sm overflow-y-auto">
    <div className="space-y-3">
      <img src={first} alt="" />
      <SidebarItem icon={Inbox} label="Inbox" active />
      <SidebarItem icon={Send} label="Sent" />
      <SidebarItem icon={MailOpen} label="Draft" />
      <SidebarItem icon={Trash} label="Deleted" />
    </div>

    <div className="mt-6 text-xs text-gray-500">Quick view</div>
    <div className="mt-3 space-y-3">
      <SidebarItem icon={Star} label="Starred" />
      <SidebarItem icon={Tag} label="Labels" />
      <SidebarItem icon={RefreshCcw} label="Synced Logs" />
      <SidebarItem icon={Settings} label="Email Settings" />
    </div>

    <div className="mt-6 text-xs text-gray-500">Marketing</div>
    <div className="mt-3 space-y-3">
      <SidebarItem label="Subscription List" />
      <SidebarItem label="Subscriber" />
      <SidebarItem label="Templates" />
      <SidebarItem label="Email Scheduler" />
    </div>
  </aside>

  
  <div className="flex-1 bg-white border-l relative">
    <div className="p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">Inbox</h2>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
        <div className="relative w-full sm:w-72">
          <Search
            size={16}
            className="absolute left-3 top-2.5 text-gray-400"
          />
          <input
            placeholder="Search..."
            className="w-full pl-9 pr-3 py-2 border rounded-md text-sm"
          />
        </div>

        <div className="text-sm text-gray-500 flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-6">
          <span>Items per page: 100</span>
          <span>1 - {emails.length} of {emails.length}</span>
        </div>
      </div>

      
      <div className="divide-y border rounded-md">
        {emails.map((mail, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
                {mail.sender[0]}
              </div>
              <div>
                <div className="font-medium">{mail.sender}</div>
                <div className="text-sm text-gray-600">{mail.subject}</div>
              </div>
            </div>
            <div className="text-sm text-gray-500 mt-2 sm:mt-0">{mail.date}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Compose Button */}
    <button className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md">
      ✏️ Compose
    </button>
  </div>
</div>
  );
};


const SidebarItem = ({ icon: Icon, label, active }) => {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer ${
        active ? "bg-gray-100 font-medium" : "hover:bg-gray-100"
      }`}
    >
      {Icon && <Icon size={16} />}
      <span>{label}</span>
    </div>
  );
};
