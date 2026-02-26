import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../components/layout/applayout";

import { CRMs } from "../pages/admin/crm";
import { Outlets } from "../pages/admin/outlet";
import { TaskTrails } from "../pages/admin/tasktrail";
import { EmailTemplate } from "../pages/admin/email";
import {
  Data_Entry,
  Download,
  File_Manager,
  Finance,
  HR_Dashboard,
  SMS_Connect,
} from "../pages/admin/dashboards";
import {
  AssetsAudit,
  BarCode,
  ContactManagement,
  FinacialSettings,
  FinacialStatements,
  GST_Management,
  Inventatory,
  Items,
  Ledger,
  Vochours,
  WhiteBills,
} from "../pages/admin/finances";
import { Data } from "../pages/admin/membershiplist";
import {
  Contra_Management,
  Delivery_Note,
  Material_In,
  Material_Out,
  Payment_Management,
  Production,
  Proposals,
  Purchase_Management,
  Purchase_Via_PO,
  Receipt_Management,
  Receipt_Note,
  Sale_Management,
} from "../pages/admin/vochours";
import {
  AddSalesInvoice,
  Sales_Invoice,
} from "../pages/admin/finance/salesmanagement/addSaleInvoice";
import { Add_Sale_Return } from "../pages/admin/finance/salesmanagement/AddSaleReturn";
import {
  Add_Recurring_Instruction,
  Recurrening_Projection,
} from "../pages/admin/finance/salesmanagement/AddRecurringInstruction";
import {
  AddRecipet,
  Reciepet,
} from "../pages/admin/finance/recipetmanagement/addrecipet";
import {
  AddProposedRespiect,
  ProposedRespiect,
} from "../pages/admin/finance/recipetmanagement/addpropsedreciept";
import {
  AddPayment,
  Payment_lists,
} from "../pages/admin/finance/payment/addpayment";
import {
  AddProposedContra,
  Proposed_Contra_list,
} from "../pages/admin/finance/contra/addproposedcontra";
import { Adddelevery } from "../pages/admin/finance/delver/adddeleery";
import {
  AddRecipet_note,
  Rejection_note_list,
} from "../pages/admin/finance/Receipt Note Management/Receipt_Note_Add";
import {
  Rejection_Out,
  Rejection_Out_list,
} from "../pages/admin/finance/Receipt Note Management/Rejection_Out";
import {
  Add_Material_TDS,
  Add_Material_TDS_list,
} from "../pages/admin/finance/material_in/material";
import {
  Add_Material_TDSs,
  Material_Out_TDSs,
} from "../pages/admin/finance/material_out/material";
import {
  Addjournal,
  Journal_list,
} from "../pages/admin/finance/journals/addvouchers";
import { Purchase_Managements } from "../pages/admin/finance/journals/purchase";
import {
  Stocks,
  Stocks_Genernal_list,
} from "../pages/admin/finance/stock/stock";
import { BOM, BOM_list } from "../pages/admin/finance/production/bomproduction";
import {
  Manufactures,
  Manufactures_list,
} from "../pages/admin/finance/production/manfuctaure";
import {
  InspectionTable,
  Issued,
  PackingTable,
} from "../pages/admin/finance/po/MDN/packingtable";
import {
  Purchase_Invoice,
  Purchase_Invoices_list,
} from "../pages/admin/finance/purchasemanagement/Purchase_Invoice";
import {
  Purchase_Return,
  Purchase_Return_List,
  Purchase_Return_with_Item,
} from "../pages/admin/finance/purchasemanagement/Purchase_Return";
import {
  Material_request,
  Proporfma,
  Purchase_Order,
  Quatation,
} from "../pages/admin/finance/profemia/Proforma_Invoices";
import {
  Sales_Return,
  Sales_Return_list,
} from "../pages/admin/finance/salesmanagement/salesreturn";
import {
  Proposed_Payment_list,
  ProposedPayment,
} from "../pages/admin/finance/payment/proposed";
import { Payment_list, Pending } from "../pages/admin/finance/payment/pending";
import { Contra } from "../pages/admin/finance/contra/contra";
import {
  Material_in,
  Material_in_List,
} from "../pages/admin/finance/material_in/materialin";
import {
  Material_Outs,
  Material_Outs_list,
} from "../pages/admin/finance/material_out/materialout";
import {
  Sundry_debtor,
  Sundry_debtor_list,
} from "../pages/admin/finances/ledger/sundrydeptors";
import {
  Sundry_creditors,
  Sundry_creditors_list,
} from "../pages/admin/finances/ledger/sundrycreditors";
import {
  Company_Branch,
  Company_Branch_list,
} from "../pages/admin/finances/ledger/company&branch";
import {
  L2_Customers,
  L2_Customers_list,
} from "../pages/admin/finances/ledger/l2customers";
import {
  Outletss,
  Outletss_list,
} from "../pages/admin/finances/ledger/outlets";
import {
  All_ledgers,
  All_ledgers_list,
} from "../pages/admin/finances/ledger/allledgers";
import {
  Payment_Gateway,
  Payment_Gateway_list,
} from "../pages/admin/finances/ledger/paymentgateway";
import {
  Bank_accounts,
  Bank_accounts_list,
} from "../pages/admin/finances/ledger/bank";
import {
  Cash_in_hands,
  Cash_in_hands_list,
} from "../pages/admin/finances/ledger/cashinheads";
import {
  Ledger_group,
  Ledger_group_list,
} from "../pages/admin/finances/ledger/ledgergroup";
import {
  Credit_Limit,
  Credit_Limit_list,
} from "../pages/admin/finances/ledger/creditlimit";
import {
  Opening_Balance,
  Opening_Balance_List,
} from "../pages/admin/finances/ledger/opening_balence";
import {
  Indirect_Income,
  Indirect_Income_list,
} from "../pages/admin/finances/ledger/indirect_income";
import {
  Indirect_Expenpenses,
  Indirect_Expenpenses_list,
} from "../pages/admin/finances/ledger/indirect_expenses";
import {
  Fixed_assets,
  Fixed_assets_list,
} from "../pages/admin/finances/ledger/fixedassets";
import {
  Sales_account,
  Sales_account_list,
} from "../pages/admin/finances/ledger/sales";
import {
  Purchase_account,
  Purchase_account_list,
} from "../pages/admin/finances/ledger/purchase_account";
import {
  Delivery_Addresses,
  Delivery_Addresses_list,
} from "../pages/admin/finances/ledger/delevery";
import {
  Direct_Expenses,
  Direct_Expenses_list,
} from "../pages/admin/finances/ledger/direct_expenses";
import {
  Direct_Income,
  Direct_Income_list,
} from "../pages/admin/finances/ledger/directincome";
import {
  Duties_Taxes,
  Duties_Taxes_list,
} from "../pages/admin/finances/ledger/duties_taxes";
import {
  L2_Suppliers,
  L2_Suppliers_list,
} from "../pages/admin/finances/ledger/l2suppliers";
import {
  Freelencers,
  Freelencers_list,
} from "../pages/admin/finances/ledger/freelencers";
import {
  Sundry_debtorsss,
  Sundry_debtorsss_list,
} from "../pages/admin/finances/ledger/sundrydeptorss";
import { Sites, Sites_list } from "../pages/admin/finances/ledger/sites";
import {
  L3_Customers,
  L3_Customers_list,
} from "../pages/admin/finances/ledger/l3customers";
import {
  Subagents,
  Subagents_list,
} from "../pages/admin/finances/ledger/subagents";
import {
  Add_Opening_Stock,
  Stock,
  Stock_In_Hand,
} from "../pages/admin/finances/inventory/stockin hand/addOpeningStock";
//
import {
  Distributor_Summeries,
  Distributor_Summery,
} from "../pages/admin/finances/inventory/Distributor_Summary";
import {
  Add_Contact_group,
  Contact_Group,
} from "../pages/admin/finances/contactus/contactgroup/addcontactgroup";
import {
  Add_Contacts,
  Contacts,
} from "../pages/admin/finances/contactus/contactus/addcontact";
import {
  Asset_Selection,
  Asset_selection_list,
} from "../pages/admin/finances/assets/assetsaudit/assetslist/Asset_Selection";
import {
  Add_Asset_Subgroup,
  Add_assets_group,
} from "../pages/admin/finances/assets/assetsaudit/assetsgroup/asset_group";
import {
  Asset_registration_table,
  Assets_registration,
} from "../pages/admin/finances/assets/assetsaudit/assetregistration/asset_registration";
import AddBOM, {
  Asset_bob,
} from "../pages/admin/finances/assets/assetsaudit/BOM/asset_bob";
import {
  Add_field_tag,
  Field_tag,
} from "../pages/admin/finances/barcode/fieldsettings/addfieldtag";
import {
  Barcode_Settings,
  Barcode_Settings_list,
} from "../pages/admin/finances/barcode/barcodesettings/barcodeSettings";
import {
  Paper_Size,
  Paper_Size_list,
} from "../pages/admin/finances/barcode/papersize/papersize";
import {
  Label_content,
  Label_Content_list,
} from "../pages/admin/finances/barcode/labelcontent/labelcontent";
import {
  Country,
  CountryList,
} from "../pages/admin/finances/financesettings/countryPlanner/country/Country";
import {
  State,
  StateList,
} from "../pages/admin/finances/financesettings/countryPlanner/state/state";
import {
  City,
  CityList,
} from "../pages/admin/finances/financesettings/countryPlanner/city/city";
import {
  Pincode,
  PincodeList,
} from "../pages/admin/finances/financesettings/countryPlanner/pincode/pincode";
import {
  Add_Vouchers,
  VoucherSettingsList,
} from "../pages/admin/finances/financesettings/voucherfeactures/addVouchersettings";
import {
  Terms,
  TermsList,
} from "../pages/admin/finances/financesettings/termsandConditions/term";
import {
  AddVoucherSeries,
  VoucherSeriesList,
} from "../pages/admin/finances/financesettings/VoucherCustomizations/voucherseries/addvoucherseries";
import {
  AddVoucherType,
  VoucherTypeList,
} from "../pages/admin/finances/financesettings/VoucherCustomizations/vouchertype/addvouchertype";
import {
  GST_Config,
  GSTConfigList,
} from "../pages/admin/finances/financesettings/GST Plugins/gstconfig";
import {
  Tally_config,
  TallyConfigList,
} from "../pages/admin/finances/financesettings/TallyPlugins/tallyconfig/tallyconfig";
import {
  Add_InsensitiveLedger,
  InsensitiveLedgerList,
} from "../pages/admin/finances/financesettings/InsensitiveLedger/addInsensitiveledger";
import {
  Nimbus,
  Nimbus_List,
} from "../pages/admin/finances/financesettings/DeliveryPlugins/nimbus/nimbus";
import {
  Add_delevery,
  Add_Delevery_List,
} from "../pages/admin/finances/financesettings/DeliveryPlugins/deleveryone/adddelevery";
import {
  Delivery_Partners,
  DeliveryPartnersList,
} from "../pages/admin/finances/financesettings/DeliveryPlugins/deliverypartners/delevery_partners";
import {
  AddPayout,
  PayoutList,
} from "../pages/admin/finances/financesettings/Payout/iccicpayout/icipayout/addICISpayout";
import {
  Transactions,
  TransactionsList,
} from "../pages/admin/finances/financesettings/Payout/iccicpayout/transactions/transaction";
import {
  Sale_Type,
  Sale_Type_List,
} from "../pages/admin/finances/financesettings/VoucherSettings/saletype/saletype";
import {
  Add_Dispatch,
  Add_Dispatch_list,
} from "../pages/admin/finances/financesettings/VoucherSettings/DispatchMode/dispatch";
import {
  Delevery_patch,
  Delevery_patch_list,
} from "../pages/admin/finances/financesettings/VoucherSettings/delevery/delevery";
import {
  Payment_Terms,
  Payment_Terms_list,
} from "../pages/admin/finances/financesettings/VoucherSettings/paymenmode/payment";
import {
  Coupean_Leadger,
  Coupean_Leadger_list,
} from "../pages/admin/finances/itemmanagement/memberssettings/coupeanleadger";
import {
  Wallet_Coupeans,
  Wallet_Coupeans_list,
} from "../pages/admin/finances/itemmanagement/memberssettings/walletcoupeans";
import {
  Subscribed,
  Subscribed_list,
} from "../pages/admin/finances/itemmanagement/memberssettings/Subscribed";
import {
  Membership,
  Membership_plan,
} from "../pages/admin/finances/itemmanagement/memberssettings/membershiplans";
import {
  FeesandCharges,
  FeesandCharges_list,
} from "../pages/admin/finances/itemmanagement/memberssettings/feesandcharges";
import {
  Subscribed_Rates,
  Subscribed_Rates_list,
} from "../pages/admin/finances/itemmanagement/subscription/subscription_rate";
import {
  Subscription_Plan,
  Subscription_Plan_list,
} from "../pages/admin/finances/itemmanagement/subscription/subscription_plan";
import {
  Subscribers,
  Subscribers_list,
} from "../pages/admin/finances/itemmanagement/subscription/subscribers";
import {
  Material_list,
  Materials_item,
} from "../pages/admin/finances/itemmanagement/materialitems/material";

import {
  Add_Item,
  Item_List,
} from "../pages/admin/finances/itemmanagement/itemmaster/additem";
import {
  Cash_free_api,
  Cashfree,
} from "../pages/admin/finances/financesettings/paymentgateway/Cashfree.jsx/cashfreeapi";
import {
  Cash_free_Transactions,
  Cash_free_transactions_list,
} from "../pages/admin/finances/financesettings/paymentgateway/Cashfree.jsx/transactions";
import {
  Easebuzz_Api,
  Easebuzz_Api_List,
} from "../pages/admin/finances/financesettings/paymentgateway/Easebuzz/easebuzz";
import {
  Easebuzz_Transactions,
  Easebuzz_transactions_list,
} from "../pages/admin/finances/financesettings/paymentgateway/Easebuzz/transactions";
import {
  Paytm_Api,
  Paytm_Api_list,
} from "../pages/admin/finances/financesettings/paymentgateway/paytem/paytmapi";
import {
  Paytm_Transactions,
  Paytm_Transactions_List,
} from "../pages/admin/finances/financesettings/paymentgateway/paytem/transction";
import {
  InstaApi,
  Instant_api_list,
} from "../pages/admin/finances/financesettings/paymentgateway/instacollect/instacollect";
import {
  Instant_Transaction,
  Instant_Transaction_List,
} from "../pages/admin/finances/financesettings/paymentgateway/instacollect/transactions";
import {
  Retailer_Management,
  Retailer_Management_List,
} from "../pages/admin/finances/financesettings/paymentgateway/kredmint/retailer";
import {
  Add_Transaction,
  Kreddit_Transactions_List,
} from "../pages/admin/finances/financesettings/paymentgateway/kredmint/addtransaction";
import {
  Kredit_Api_List,
  Kredmint_api,
} from "../pages/admin/finances/financesettings/paymentgateway/kredmint/kredmintapi";
import { Add_Webhook } from "../pages/admin/finances/financesettings/paymentgateway/icci/webhook";
import {
  Hold_logs,
  Hold_logs_list,
  Transaction_logs,
  Transaction_logs_list,
} from "../pages/admin/finances/financesettings/paymentgateway/icci/logs";
import {
  Virtual_Account,
  Virtual_Account_List,
} from "../pages/admin/finances/financesettings/paymentgateway/easebuzzvirtualaccount/virtualaccount";
import {
  Api_key,
  Api_KEy_List,
} from "../pages/admin/finances/financesettings/paymentgateway/easebuzzvirtualaccount/apikey";
import {
  Virtual_Accounts,
  Virtual_Accounts_List,
} from "../pages/admin/finances/financesettings/paymentgateway/easebuzzvirtualaccount/virtuals";
import {
  Decimal_Settings,
  Decimal_Settings_list,
} from "../pages/admin/finances/itemmanagement/itemsettings/unitmanagement/decimal";
import {
  Size,
  Size_List,
} from "../pages/admin/finances/itemmanagement/itemsettings/unitmanagement/size";
import {
  Units,
  Units_list,
} from "../pages/admin/finances/itemmanagement/itemsettings/unitmanagement/units";
import {
  Models,
  Models_list,
} from "../pages/admin/finances/itemmanagement/itemsettings/modals";
import {
  Brand,
  Brand_list,
} from "../pages/admin/finances/itemmanagement/itemsettings/brand";
import {
  Item_type,
  Item_type_list,
} from "../pages/admin/finances/itemmanagement/itemsettings/itemtype";
import {
  Department,
  Departmet_list,
} from "../pages/admin/finances/itemmanagement/itemsettings/department";
import {
  Category,
  Category_list,
} from "../pages/admin/finances/itemmanagement/itemsettings/category";
import {
  Sub_Category,
  Sub_Category_list,
} from "../pages/admin/finances/itemmanagement/itemsettings/subcategory";
import {
  HAS_SAC,
  HAS_SAC_List,
} from "../pages/admin/finances/itemmanagement/itemsettings/hassac";
import {
  Sub_Sub_Category,
  Sub_Sub_Category_list,
} from "../pages/admin/finances/itemmanagement/itemsettings/subsubcategory";
//hr module
import {
  Attendence,
  Employee_Applications,
  Employee_Records,
  Hr_Settings,
  Mobile_Application,
  Payroll,
} from "../pages/admin/hrcontact/hrdashboard";
import {
  Ai_agents,
  Ai_agents_list,
} from "../pages/admin/hrcontact/employeerecords/aiagents/addaiagent";
import { OrganoTree } from "../pages/admin/hrcontact/employeerecords/orgnaotree/addorgaotree";
import { Add_Employee } from "../pages/admin/hrcontact/employeerecords/employees/addemployees";
import { Daily_Attendence_list, Daily_AttendenceLog } from "../pages/admin/hrcontact/attendence/dailyattendencelog/createdailyattendence";
import { Attendance_Logs, Attendence_Logs_list } from "../pages/admin/hrcontact/attendence/attendencelog/addattendencelog";
import { SignInGroup, SignInGroup_list } from "../pages/admin/hrcontact/mobileapp/signinagroup/addsigning";
import { Add_Mobile, Add_Mobile_list } from "../pages/admin/hrcontact/mobileapp/assignmobileapp/addmobile";
import { Device_Login, Device_login } from "../pages/admin/hrcontact/mobileapp/devicelogin/devicelogin";
import { AddDeviceWhislist, AddDeviceWhislist_list } from "../pages/admin/hrcontact/mobileapp/devicewhillist/adddevicelist";
import { Add_Mobileapp, Mobile_app_list } from "../pages/admin/hrcontact/mobileapp/mobileapps/addmobileapps";
import { Ip_Whishlist_list, Ip_Whislist } from "../pages/admin/hrcontact/mobileapp/ipwhislist/addwhilist";
import {
  Salery_Disbursal,
  SalesSettings,
} from "../pages/admin/hrcontact/payroll/salerysettings";
import {
  Assign_CTC,
  Assign_CTC_list,
} from "../pages/admin/hrcontact/payroll/SalarySettings/AssignCTC/addctc";
import {
  Add_trans,
  Salery_Distributes,
} from "../pages/admin/hrcontact/payroll/salerydispersal/transfiled/addtrans";
import { Leave, Leave_Type } from "../pages/admin/hrcontact/hr settings/leave/addleavetype";
import { Add_Roles } from "../pages/admin/hrcontact/hr settings/roles/addroles";
import { Add_Expense_Condition, Expenses } from "../pages/admin/hrcontact/hr settings/expensecondition/addexpensecondition";
import { Add_weekoff, Weekoff_list } from "../pages/admin/hrcontact/hr settings/weekoff/addweekoff";
import { Add_Biometric, Biometric } from "../pages/admin/hrcontact/hr settings/biometric/addbiometric";
import { Add_Department } from "../pages/admin/hrcontact/hr settings/department/adddepartment";
import { Add_Designation, Designation } from "../pages/admin/hrcontact/hr settings/designation/addegination";
import { Add_Profile, Profile_list } from "../pages/admin/hrcontact/hr settings/profile/addprofile";
import {
  Attendance_Settings,
  Holiday_settings,
  Leave_Submenu,
  Shift_Settings,
  Traninerr,
  Virtual_Acccount,
} from "../pages/admin/hrcontact/hr settings/subsubmenu";
import { Add_shift, Shifts } from "../pages/admin/hrcontact/hr settings/shiftsetting/shifts/addshifts";
import { Add_Time_Slots, Time_Slots } from "../pages/admin/hrcontact/hr settings/shiftsetting/timeslots/addtimeslots";
import { Topics, Training_Catalog } from "../pages/admin/hrcontact/hr settings/traineeingcatalog/topics/addtopics";
import { Leave_Poilcy_list, Leave_Policy } from "../pages/admin/hrcontact/hr settings/leavesettings/leavepolicies/addleavepolicies";
import { Add_Balence, Leave_list } from "../pages/admin/hrcontact/hr settings/leavesettings/leavebalence/addleavebalence";
import { Policies, Policy } from "../pages/admin/hrcontact/hr settings/leavesettings/leavepolicy/addleavepolicy";
import { Add_leaveGroup, Leave_Group_list } from "../pages/admin/hrcontact/hr settings/leavesettings/leavegroup/addleave";
import { Add_Location, Location_list } from "../pages/admin/hrcontact/hr settings/virtualsetting/virtuallocation/addlocation";
import { Virtual_Office } from "../pages/admin/hrcontact/hr settings/virtualsetting/virtualoffice/addvirtualoffice";
import { Admin_list, Admin_Office } from "../pages/admin/hrcontact/hr settings/virtualsetting/adminoffice/addadminoffice";
import { Add_optional, Optionals } from "../pages/admin/hrcontact/hr settings/virtualsetting/optional/addoptional";
import CreateRole from "../pages/admin/hrcontact/hr settings/roleandpermission/addrolepermission";
import {
  Advance,
  Bonou_Insentive,
  DA_Reimbursements,
  Kaizen,
  Leave_Applications,
  On_Duty_Call,
  Others,
  PMS,
  T_A_Reimbursements,
  Work_Day,
} from "../pages/admin/hrcontact/employeeapplication/subsubmenu";
import { Trip_Expenses } from "../pages/admin/hrcontact/employeeapplication/MyTAReimbursements/tripexpenses";
import { AddVechcle } from "../pages/admin/hrcontact/employeeapplication/MyTAReimbursements/addvehcletypes";
import { Add_Vechecel } from "../pages/admin/hrcontact/employeeapplication/MyTAReimbursements/addvehceletype";
import { Add_Reimbursements } from "../pages/admin/hrcontact/employeeapplication/DAReimbursements/adddareimbursements";
import { Add_Bonous } from "../pages/admin/hrcontact/employeeapplication/bonusincentive/addbounus";
import { Add_advance } from "../pages/admin/hrcontact/employeeapplication/advance/addadvance";
import { Other_Reforcement } from "../pages/admin/hrcontact/employeeapplication/otherresburment/addother";
import { Add_kaizen } from "../pages/admin/hrcontact/employeeapplication/kaizen/addkaizen";
import { Add_Pms } from "../pages/admin/hrcontact/employeeapplication/PMSGoals/addpms";
//sms config
import { Config, Sms_reports } from "../pages/admin/smsconfig/submenus";
import { Add_Check } from "../pages/admin/smsconfig/smsreports/checkbalence/addcheck";
import { Add_Balences } from "../pages/admin/smsconfig/smsreports/addrecharge/addrecharge";
import { Add_History } from "../pages/admin/smsconfig/smsreports/history/addhistory";
import { Add_SenderID } from "../pages/admin/smsconfig/config/senderid/addsenderid";
import { Add_Templates } from "../pages/admin/smsconfig/config/templates/addtemplate";
import { DashBoards } from "../pages/admin/filemanager/submenu";
import { Add_files } from "../pages/admin/filemanager/files/addfiles";
import { Download_SubMenus } from "../pages/admin/download/submenus";
import { Add_Historys } from "../pages/admin/download/downloadhistory/addhistory";
import { Download_SubsubMenus } from "../pages/admin/download/user/subsubmenus";
import { TL } from "../pages/admin/download/user/TL/addTL";
import { Excutive } from "../pages/admin/download/user/excutive/addexcutive";
import { Add_role } from "../pages/admin/download/user/role/addrole";
import { Add_Dltent } from "../pages/admin/smsconfig/config/dltentities/adddltentities";
import { Add_userList } from "../pages/admin/download/user/userlist/adduserlist";
import { View_Company } from "../pages/secondmenu/viewcompany";
import { ListEmployees } from "../pages/secondmenu/employeelist";
import { Subscription_List } from "../pages/secondmenu/subscription";
import { Change_Password } from "../pages/secondmenu/changepassword";
import { View_Employee } from "../pages/secondmenu/viewemployee";
import { Add_Employees } from "../pages/secondmenu/addemployee";
import { Dashboard_Submenus } from "../pages/admin/dataentry/submenu";
import { Data_Subsubmenus } from "../pages/admin/dataentry/settings/addsubsubmenu";
import { Input_Type } from "../pages/admin/dataentry/settings/inputtype/addinputtype";
import { Add_answer } from "../pages/admin/dataentry/settings/answer/addanswer";
import { Add_Process } from "../pages/admin/dataentry/settings/process/addprocess";
import { Protected_Routes } from "../context/protectedroute";
import { DashBoard } from "../pages/admin/dashboard";
import MyDataTable from "../pages/admin/dashboard/customerlist";
import { ProductList } from "../pages/admin/dashboard/product";
import { AddProuduct } from "../pages/admin/dashboard/addproduct";
import { Orders } from "../pages/admin/dashboard/order";
import { Order_details } from "../pages/admin/dashboard/showorderdetails";
import { Addorders } from "../pages/admin/outlet/addorders";
import { AddCustomer } from "../pages/admin/dashboard/addcustomer";
import { Show_Employees } from "../pages/admin/hrcontact/employeerecords/employees/showemployees";
import { AddUser } from "../pages/admin/dashboard/adduser";
import { Roles } from "../pages/admin/hrcontact/hr settings/roles/role";
import { Departments } from "../pages/admin/hrcontact/hr settings/department/department";
import { Print_View } from "../pages/admin/dashboard/bills";
import {
  DisPatch,
  PJP,
  PriceList,
  Reports,
  Settings,
} from "../pages/admin/outlet/outletmenus";
import { Subsubmenus } from "../pages/admin/outlet/dispatch/l1advdispatch/dispatchsub";
import { Vanubmenus } from "../pages/admin/outlet/dispatch/vansettings/vansubmenus";
import { L1PJP } from "../pages/admin/outlet/PJP/l1pjp.jsx/L1 PJP";
import { L2PJP } from "../pages/admin/outlet/PJP/l2pjp/l2pjp";
import { SettingsMenu } from "../pages/admin/outlet/settings/users/settings";
import { Organization } from "../pages/admin/outlet/settings/organization/organization";
import { Geotracker } from "../pages/admin/outlet/geotracker/geotracker";
import { SalesSubmenu } from "../pages/admin/outlet/settings/organization/salesroute/salessubmenu";
import { SalesSubmenus } from "../pages/admin/outlet/settings/organization/deleveryroute/adddelevery";
import { DisPatchSettings } from "../pages/admin/outlet/dispatch/dispatchsettings/settings";
import { SubcategoryWithDemand_table } from "../pages/admin/outlet/reports/subcategorywithdemand";
import { Item_wise_Demand } from "../pages/admin/outlet/reports/itemwisedemand";
import { Route_wise_Demand } from "../pages/admin/outlet/reports/routewisedemand";
import { Status_wise_Demand } from "../pages/admin/outlet/reports/statuswisedemand";
import { L2_Balence } from "../pages/admin/outlet/reports/l2balence";
import { Distance_Logs } from "../pages/admin/outlet/reports/distancelogs";
import { Division } from "../pages/admin/outlet/dispatch/pricelist/divison";
import { Distributor_wise_Demand } from "../pages/admin/outlet/reports/distributorwisedemand";
import { Price_Contract } from "../pages/admin/outlet/dispatch/pricelist/pricecontract";
import { DiscountList } from "../pages/admin/outlet/dispatch/pricelist/discountlist";
import { Offers_Scheme } from "../pages/admin/outlet/dispatch/pricelist/offers&scheme";
import { Price_settings } from "../pages/admin/outlet/dispatch/pricelist/pricesettings";
import { Price_List } from "../pages/admin/outlet/dispatch/pricelist/pricelist";
import { Activity_Type } from "../pages/admin/outlet/PJP/activitytype";
import { Beat_PJP } from "../pages/admin/outlet/PJP/l2pjp/beatpjp";
import { WHBEAT_PJP } from "../pages/admin/outlet/PJP/l2pjp/whbeatpjp";
import { L2Activities } from "../pages/admin/outlet/PJP/l2pjp/l2activities";
import { L2EOMReport } from "../pages/admin/outlet/PJP/l2pjp/l2eomreport";
import { L2IndividualReport } from "../pages/admin/outlet/PJP/l2pjp/l2indiviualEODReports";
import { L2TeamEODReport } from "../pages/admin/outlet/PJP/l2pjp/L2TeamEODReport";
import { L2PJPEODReport } from "../pages/admin/outlet/PJP/l2pjp/l2pjpeodreport";
import { Distributor_PJP } from "../pages/admin/outlet/PJP/l1pjp.jsx/distributor";
import { WHPJP } from "../pages/admin/outlet/PJP/l1pjp.jsx/WhPJP";
import { L1Activities } from "../pages/admin/outlet/PJP/l1pjp.jsx/l1activities";
import { L1_Long_lod } from "../pages/admin/outlet/PJP/l1pjp.jsx/l1longold";
import { L1_individual } from "../pages/admin/outlet/PJP/l1pjp.jsx/l1indivivual";
import { L1_Team } from "../pages/admin/outlet/PJP/l1pjp.jsx/l1team";
import { L1_PJP_EOD } from "../pages/admin/outlet/PJP/l1pjp.jsx/l1pjpeod";
import { L1_EOM } from "../pages/admin/outlet/PJP/l1pjp.jsx/l1eom";
import { Zero_Order_Reason } from "../pages/admin/outlet/settings/zeroreason";
import { Not_Delivered_Reason } from "../pages/admin/outlet/settings/notdeleverdreason";
import { Vacation } from "../pages/admin/outlet/settings/vacation";
import { Sales_Team_Manager } from "../pages/admin/outlet/settings/users/sale_team_manager";
import { RSM } from "../pages/admin/outlet/settings/users/RSM";
import { ASM } from "../pages/admin/outlet/settings/users/ASM";
import { DSO } from "../pages/admin/outlet/settings/users/DSO";
import { BO } from "../pages/admin/outlet/settings/users/BO";
import { Role } from "../pages/admin/outlet/settings/users/role";
import { Delevery_Routes } from "../pages/admin/outlet/settings/organization/deleveryroute/deleveryroutes";
import { Assign_Distributor } from "../pages/admin/outlet/settings/organization/deleveryroute/assign_distributor";
import { Targret_Vs_Achv } from "../pages/admin/outlet/settings/organization/deleveryroute/archvstargets/tragetvsarchamt";
import { Targret_Vs_AchvQuantity } from "../pages/admin/outlet/settings/organization/deleveryroute/archvstargets/achvvstarget";
import { Achviev_Log } from "../pages/admin/outlet/settings/organization/deleveryroute/archvstargets/achvievlog";
import { Godown } from "../pages/admin/outlet/settings/organization/godown";
import { Zone } from "../pages/admin/outlet/settings/organization/salesroute/zone";
import { WareHouseRegion } from "../pages/admin/outlet/settings/organization/salesroute/warehouse";
import { WareHouseArea } from "../pages/admin/outlet/settings/organization/salesroute/WareHouseArea";
import { Distributor_beat } from "../pages/admin/outlet/settings/organization/salesroute/distributor";
import { WH_Beat } from "../pages/admin/outlet/settings/organization/salesroute/wh";
import { Assign_WH_To_BO } from "../pages/admin/outlet/settings/organization/salesroute/assign_wh_To_bo";
import {
  BatchMaster,
  SerialMaster,
} from "../pages/admin/finances/inventory/stock_master/batchandserialmaster";
import { TradeHistory } from "../pages/admin/finances/inventory/tradehistory";
import { Outstanding_Bills } from "../pages/admin/finances/whitebills/outstanding_bills";
import { Outstanding_payment_amt } from "../pages/admin/finances/whitebills/outstanding_payment_amt";
import { Unadjusted_Voucher } from "../pages/admin/finances/whitebills/unadjustedvouchers";
import { Outstanding_collection_material } from "../pages/admin/finances/whitebills/outstanding_material";
import { LocationList } from "../pages/admin/finances/financesettings/countryPlanner/locationd/location";
import { XML } from "../pages/admin/finances/financesettings/TallyPlugins/tallyconfig/xmlconfig";
import { Customers_on_Map } from "../pages/admin/finances/ledger/customeronmap";
import { Month_Attendence } from "../pages/admin/hrcontact/attendence/monthattendence/addmonth";
import GSTReturnPage from "../pages/admin/finances/gstreports/gstconfig3";
import { SubSubMenus } from "../pages/admin/finances/assets/subsubmenu";
import {
  SecondSubsubmenu,
  Subsubmenu,
} from "../pages/admin/finances/inventory/stock_master/subsubmenu";
import {
  ITEM_Subsubmenu,
  Membership_menus,
} from "../pages/admin/finances/itemmanagement/subscription/submenus";
import { Country_Planner_Submenu } from "../pages/admin/finances/financesettings/countryPlanner/countryplannermenu";
import { Voucher_custoization_Submenu } from "../pages/admin/finances/financesettings/VoucherCustomizations/vouchercustomization";
import { Tally_Configs_Menus } from "../pages/admin/finances/financesettings/TallyPlugins/tallysubmenu";
import { Voucher_settings_Submenu } from "../pages/admin/finances/financesettings/VoucherSettings/vouchersettings";
import { Payout_Submenu } from "../pages/admin/finances/financesettings/Payout/payoutsubmenu";
import { Delevery_Submenu } from "../pages/admin/finances/financesettings/DeliveryPlugins/delevery";
import { Proposed_payments_menus } from "../pages/admin/finance/payment/proposed_payments";
import { Purchase_Return_TID } from "../pages/admin/finance/purchasemanagement/purchase_tid";
import { Reciept_note_Tids } from "../pages/admin/finance/Receipt Note Management/receipt_note_tid";
import { Tids } from "../pages/admin/finance/salesmanagement/tids";
import { BI_sales } from "../pages/admin/finance/salesmanagement/BIsales";
import {
  Material_Request,
  Proforma_Invoices,
  Quatation_TIDs,
} from "../pages/admin/finance/profemia/tables";
import {
  Allocation_Area,
  Inspections_area,
  Packing_Table,
  Pickup_area,
} from "../pages/admin/finance/po/MDN/inspectionareas";
import { Packageing_list } from "../pages/admin/finance/po/packageing/packageing";
import { GRN } from "../pages/admin/finance/po/GRN/GRN";
import { Invoices } from "../pages/admin/finance/po/invoices/invoices";
import {
  PO_delevery_submenus,
  PO_MDN_submenus,
  PO_quality_submenus,
  PO_submenus,
} from "../pages/admin/finance/po/submenu";
import { Purchase_orders } from "../pages/admin/finance/po/purchase_order/purchase_order_table";
import { Deleveries } from "../pages/admin/finance/po/deleveries/deleveries";
import { Quality_Check } from "../pages/admin/finance/po/quality_check/quality_check";
import {
  Item_Submenu,
  Item_Subsubmenu,
} from "../pages/admin/finances/itemmanagement/itemsettings/item_submenu";
import { CTC_Components } from "../pages/admin/hrcontact/payroll/SalarySettings/ctccomponets";
import { CTC_group } from "../pages/admin/hrcontact/payroll/SalarySettings/ctcgroups";
import { Calculator } from "../pages/admin/hrcontact/payroll/Earning_Calculator/calculator";
import { Attendence_Group } from "../pages/admin/hrcontact/hr settings/attendencesetting/attendencegroup";
import { Attendence_Status } from "../pages/admin/hrcontact/hr settings/attendencesetting/attendencestatus";
import { Holiday_Group } from "../pages/admin/hrcontact/hr settings/holidaysetting/holidaygroup";
import { Holidays } from "../pages/admin/hrcontact/hr settings/holidaysetting/holidaylist";
import { Categories } from "../pages/admin/hrcontact/hr settings/traineeingcatalog/categories";
import { Add_role_and_Permission } from "../pages/admin/hrcontact/hr settings/roleandpermission/roleandpernission";
import { All_Reimbursements, TA_Reimbursements, Team_Reimbursements, Vehicle } from "../pages/admin/hrcontact/employeeapplication/MyTAReimbursements/subsubmenu";
import { All_DA_Reimbursements, My_DA_Reimbursements, Team_DA_Reimbursements } from "../pages/admin/hrcontact/employeeapplication/DAReimbursements/subsubmenu";
import { All_Applications, My_Applications, Team_Applications } from "../pages/admin/hrcontact/employeeapplication/leaveapplication/leavemenu";
import { All_OnDuty_Applications, My_OnDuty_Applications, Team_OnDuty_Applications } from "../pages/admin/hrcontact/employeeapplication/dutyapplication/submeu";
import { All_WorkDay_Applications, My_WorkDay_Applications, Team_WorKday_Applications } from "../pages/admin/hrcontact/employeeapplication/workdayonoffday/submenu";
import { All_Bonus, My_Bonus, Team_Bonus } from "../pages/admin/hrcontact/employeeapplication/bonusincentive/submenu";
import { All_Advance, My_Advance, Team_Advance } from "../pages/admin/hrcontact/employeeapplication/advance/advancemenu";
import { All_Reimbursementss, My_Reimbursements, Teams_Reimbursementss } from "../pages/admin/hrcontact/employeeapplication/otherresburment/othermenu";
import { All_Kaizen_list, Kaizen_list, Team_Kaizen_list } from "../pages/admin/hrcontact/employeeapplication/kaizen/submenus";
import { PMS_goals, Teams_All_Goals, Teams_PMS_goals } from "../pages/admin/hrcontact/employeeapplication/PMSGoals/pmsgoals";
import { Day_wise } from "../pages/admin/hrcontact/attendence/daywise/daywise";
// import { Distributor_Summeries } from "../pages/admin/finances/inventory/distributorsummery";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<Protected_Routes />}>
        <Route element={<AppLayout />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="dashboard/customers" element={<MyDataTable />} />
          <Route path="dashboard/products" element={<ProductList />} />
          <Route path="dashboard/addcustomer" element={<AddCustomer />} />
          <Route path="dashboard/productlist/:id" element={<Order_details />} />
          <Route path="dashboard/orders" element={<Orders />} />
          <Route path="dashboard/users" element={<AddUser />} />
          <Route path="finance" element={<Finance />} />
          {/* vouchers */}
          <Route path="finance/vouchers" element={<Vochours />} />
          <Route
            path="finance/vouchers/Salemanagement"
            element={<Sale_Management />}
          />
          <Route
            path="finance/vouchers/Salemanagement/SaleTids"
            element={<Tids />}
          />
          <Route
            path="finance/vouchers/Salemanagement/Salereturn"
            element={<Sales_Return_list />}
          />
          <Route
            path="finance/vouchers/Salemanagement/recurrence"
            element={<Recurrening_Projection />}
          />
          <Route
            path="finance/vouchers/Salemanagement/bisales"
            element={<BI_sales />}
          />
          <Route
            path="finance/vouchers/Salemanagement/salesinvoice"
            element={<Sales_Invoice />}
          />
          <Route
            path="finance/vouchers/purchasemanagement"
            element={<Purchase_Management />}
          />
          <Route
            path="finance/vouchers/purchasemanagement/addpurchaseinvoice"
            element={<Purchase_Invoice />}
          />
          <Route
            path="finance/vouchers/purchasemanagement/purchaseinvoice"
            element={<Purchase_Invoices_list />}
          />
          <Route
            path="finance/vouchers/purchasemanagement/purchasereturn"
            element={<Purchase_Return_List />}
          />
          <Route
            path="finance/vouchers/purchasemanagement/purchasereturntid"
            element={<Purchase_Return_TID />}
          />
          <Route
            path="finance/vouchers/purchasemanagement/addPurchaseReturne"
            element={<Purchase_Return />}
          />
          <Route
            path="finance/vouchers/purchasemanagement/addPurchaseReturn_withitem"
            element={<Purchase_Return_with_Item />}
          />
          <Route
            path="finance/vouchers/Receipt_Management"
            element={<Receipt_Management />}
          />
          <Route
            path="finance/vouchers/Receipt_Management/list"
            element={<Reciepet />}
          />
          <Route
            path="finance/vouchers/Receipt_Management/addreciept"
            element={<AddRecipet />}
          />
          <Route
            path="finance/vouchers/Receipt_Management/addproposedreciept"
            element={<AddProposedRespiect />}
          />
          <Route
            path="finance/vouchers/Receipt_Management/recipt"
            element={<ProposedRespiect />}
          />
          <Route
            path="finance/vouchers/payment_management"
            element={<Payment_Management />}
          />
          <Route
            path="finance/vouchers/payment_management/addPayment"
            element={<AddPayment />}
          />
          <Route
            path="finance/vouchers/payment_management/proposed"
            element={<ProposedPayment />}
          />
          <Route
            path="finance/vouchers/payment_management/list"
            element={<Payment_lists />}
          />
          <Route
            path="finance/vouchers/payment_management/proposed_list"
            element={<Proposed_Payment_list />}
          />
          <Route
            path="finance/vouchers/payment_management/proposed_payment_management"
            element={<Proposed_payments_menus />}
          />
          <Route
            path="finance/vouchers/payment_management/proposed_payment_management/pending/add"
            element={<Pending />}
          />
          <Route
            path="finance/vouchers/payment_management/proposed_payment_management/pending"
            element={<Payment_list />}
          />
          <Route
            path="finance/vouchers/contra_management"
            element={<Contra_Management />}
          />
          <Route
            path="finance/vouchers/contra_management/list"
            element={<Proposed_Contra_list />}
          />
          <Route
            path="finance/vouchers/contra_management/AddProposedContra"
            element={<AddProposedContra />}
          />
          <Route
            path="finance/vouchers/contra_management/Contra"
            element={<Contra />}
          />
          <Route
            path="finance/vouchers/Delivery_Note_Management"
            element={<Delivery_Note />}
          />
          <Route
            path="finance/vouchers/delevierynote/adddelevery"
            element={<Adddelevery />}
          />
          <Route
            path="finance/vouchers/Receipt_Note_Management"
            element={<Receipt_Note />}
          />
          <Route
            path="finance/vouchers/Receipt_Note_Management/receipt_list"
            element={<Rejection_note_list />}
          />
          <Route
            path="finance/vouchers/Receipt_Note_Management/receipt_note"
            element={<Reciept_note_Tids />}
          />
          <Route
            path="finance/vouchers/Receipt_Note_Management/rejection_out"
            element={<Rejection_Out_list />}
          />
          <Route
            path="finance/vouchers/delevierynote/Receipt_Note"
            element={<AddRecipet_note />}
          />
          <Route
            path="finance/vouchers/delevierynote/Rejection_Out"
            element={<Rejection_Out />}
          />
          <Route
            path="finance/vouchers/Material_In"
            element={<Material_In />}
          />
          <Route
            path="finance/vouchers/Material"
            element={<Add_Material_TDS_list />}
          />
          <Route
            path="finance/vouchers/Material_in/Material_In_TID/add"
            element={<Add_Material_TDS />}
          />
          <Route
            path="finance/vouchers/Materials_in"
            element={<Material_in_List />}
          />
          <Route
            path="finance/vouchers/Material/add"
            element={<Material_in />}
          />
          <Route
            path="finance/vouchers/materialin/Rejection_Out"
            element={<Rejection_Out />}
          />
          <Route
            path="finance/vouchers/Material_Out"
            element={<Material_Out />}
          />
          <Route
            path="finance/vouchers/Material_Out/list"
            element={<Material_Outs_list />}
          />
          <Route
            path="finance/vouchers/Material_Out/addmaterial_tid"
            element={<Add_Material_TDSs />}
          />
          <Route
            path="finance/vouchers/Material_Out/list"
            element={<Material_Out_TDSs />}
          />
          <Route
            path="finance/vouchers/Material_out/addmaterial"
            element={<Material_Outs />}
          />
          <Route
            path="finance/vouchers/addjournal/add"
            element={<Addjournal />}
          />
          <Route
            path="finance/vouchers/addjournal"
            element={<Journal_list />}
          />
          <Route
            path="finance/vouchers/Material_Out/Purchase_Return"
            element={<Purchase_Managements />}
          />
          <Route path="finance/vouchers/proposals" element={<Proposals />} />
          <Route
            path="finance/vouchers/proposals/list"
            element={<Proforma_Invoices />}
          />
          <Route
            path="finance/vouchers/proposals/listtid"
            element={<Quatation_TIDs />}
          />
          <Route path="finance/vouchers/addproposal" element={<Proporfma />} />
          <Route
            path="finance/vouchers/materiallist"
            element={<Material_Request />}
          />
          <Route
            path="finance/vouchers/addpurchaseorder"
            element={<Purchase_Order />}
          />
          <Route
            path="finance/vouchers/materialrequest"
            element={<Material_request />}
          />
          <Route
            path="finance/vouchers/proposal/qoautation"
            element={<Quatation />}
          />
          <Route
            path="finance/vouchers/stock_journal/add"
            element={<Stocks />}
          />
          <Route
            path="finance/vouchers/stock_journal"
            element={<Stocks_Genernal_list />}
          />
          <Route path="finance/vouchers/production" element={<Production />} />
          <Route path="finance/vouchers/production/BOM/add" element={<BOM />} />
          <Route
            path="finance/vouchers/production/BOM"
            element={<BOM_list />}
          />
          <Route
            path="finance/vouchers/production/manufacture/add"
            element={<Manufactures />}
          />
          <Route
            path="finance/vouchers/production/manufacture"
            element={<Manufactures_list />}
          />
          <Route
            path="finance/vouchers/production/Mfg_Journal"
            element={<Production />}
          />
          <Route
            path="finance/vouchers/Purchase_via_PO"
            element={<Purchase_Via_PO />}
          />
          <Route
            path="finance/vouchers/Purchase_via_PO/Inspection_Areas_Add"
            element={<PackingTable />}
          />
          <Route
            path="finance/vouchers/Purchase_via_PO/packageing"
            element={<Packageing_list />}
          />
          <Route
            path="finance/vouchers/Purchase_via_PO/GRN"
            element={<GRN />}
          />
          <Route
            path="finance/vouchers/Purchase_via_PO/Invoices"
            element={<Invoices />}
          />
          <Route
            path="finance/vouchers/Purchase_via_PO/purchase_order"
            element={<PO_submenus />}
          />
          <Route
            path="finance/vouchers/Purchase_via_PO/purchase_order/list"
            element={<Purchase_orders />}
          />
          <Route
            path="finance/vouchers/Purchase_via_PO/deleveries"
            element={<PO_delevery_submenus />}
          />
          <Route
            path="finance/vouchers/Purchase_via_PO/deleveries/list"
            element={<Deleveries />}
          />
          <Route
            path="finance/vouchers/Purchase_via_PO/quality"
            element={<PO_quality_submenus />}
          />
          <Route
            path="finance/vouchers/Purchase_via_PO/quality/list"
            element={<Quality_Check />}
          />
          <Route
            path="finance/vouchers/Purchase_via_PO/MDN/inspection/list"
            element={<Inspections_area />}
          />
          <Route
            path="finance/vouchers/Purchase_via_PO/MDN/packing/list"
            element={<Packing_Table />}
          />
          <Route
            path="finance/vouchers/Purchase_via_PO/MDN/pickup/list"
            element={<Pickup_area />}
          />
          <Route
            path="finance/vouchers/Purchase_via_PO/MDN/allocation/list"
            element={<Allocation_Area />}
          />
          <Route
            path="finance/vouchers/Purchase_via_PO/MDN"
            element={<PO_MDN_submenus />}
          />
          <Route
            path="finance/vouchers/Purchase_via_PO/Inspection_Areas"
            element={<Inspections_area />}
          />
          <Route
            path="finance/vouchers/Purchase_via_PO/Packing_Tables_Add"
            element={<InspectionTable />}
          />
          <Route
            path="finance/vouchers/Purchase_via_PO/Issuesd"
            element={<Issued />}
          />
          {/* ledger */}
          <Route path="finance/ledger" element={<Ledger />} />
          <Route
            path="finance/ledger/SundryDebtors"
            element={<Sundry_debtor_list />}
          />
          <Route
            path="finance/ledger/SundryDebtors/add"
            element={<Sundry_debtor />}
          />
          <Route
            path="finance/ledger/Sundrycreditors"
            element={<Sundry_creditors_list />}
          />
          <Route
            path="finance/ledger/Sundrycreditors/add"
            element={<Sundry_creditors />}
          />
          <Route
            path="finance/ledger/company&branch"
            element={<Company_Branch_list />}
          />
          <Route
            path="finance/ledger/company&branch/add"
            element={<Company_Branch />}
          />
          <Route
            path="finance/ledger/L2_Customers"
            element={<L2_Customers_list />}
          />
          <Route
            path="finance/ledger/L2_Customers/add"
            element={<L2_Customers />}
          />
          <Route path="finance/ledger/Outlets" element={<Outletss_list />} />
          <Route path="finance/ledger/Outlets/add" element={<Outletss />} />
          <Route
            path="finance/ledger/allledgers"
            element={<All_ledgers_list />}
          />
          <Route
            path="finance/ledger/allledgers/add"
            element={<All_ledgers />}
          />
          <Route
            path="finance/ledger/paymentgateway"
            element={<Payment_Gateway_list />}
          />
          <Route
            path="finance/ledger/paymentgateway/add"
            element={<Payment_Gateway />}
          />
          <Route
            path="finance/ledger/bankaccounts"
            element={<Bank_accounts_list />}
          />
          <Route
            path="finance/ledger/bankaccounts/add"
            element={<Bank_accounts />}
          />
          <Route
            path="finance/ledger/cashinhands"
            element={<Cash_in_hands_list />}
          />
          <Route
            path="finance/ledger/cashinhands/add"
            element={<Cash_in_hands />}
          />
          <Route
            path="finance/ledger/ledguregroup"
            element={<Ledger_group_list />}
          />
          <Route
            path="finance/ledger/ledguregroup/add"
            element={<Ledger_group />}
          />
          <Route
            path="finance/ledger/creditlimit"
            element={<Credit_Limit_list />}
          />
          <Route
            path="finance/ledger/creditlimit/add"
            element={<Credit_Limit />}
          />
          <Route
            path="finance/ledger/Opening_Balance"
            element={<Opening_Balance_List />}
          />
          <Route
            path="finance/ledger/l2_suppliers"
            element={<L2_Suppliers_list />}
          />
          <Route
            path="finance/ledger/Duties_taxes"
            element={<Duties_Taxes_list />}
          />
          <Route
            path="finance/ledger/Opening_Balance/add"
            element={<Opening_Balance />}
          />
          <Route
            path="finance/ledger/l2_suppliers/add"
            element={<L2_Suppliers />}
          />
          <Route
            path="finance/ledger/Duties_taxes/add"
            element={<Duties_Taxes />}
          />
          <Route
            path="finance/ledger/indirect_income"
            element={<Indirect_Income_list />}
          />
          <Route
            path="finance/ledger/indirect_expenses"
            element={<Indirect_Expenpenses_list />}
          />
          <Route
            path="finance/ledger/fixed_Assets"
            element={<Fixed_assets_list />}
          />
          <Route
            path="finance/ledger/sales_account"
            element={<Sales_account_list />}
          />
          <Route
            path="finance/ledger/indirect_income/add"
            element={<Indirect_Income />}
          />
          <Route
            path="finance/ledger/indirect_expenses/add"
            element={<Indirect_Expenpenses />}
          />
          <Route
            path="finance/ledger/fixed_Assets/add"
            element={<Fixed_assets />}
          />
          <Route
            path="finance/ledger/sales_account/add"
            element={<Sales_account />}
          />
          <Route
            path="finance/ledger/customer_on_map"
            element={<Customers_on_Map />}
          />
          <Route
            path="finance/ledger/purchase_account"
            element={<Purchase_account_list />}
          />
          <Route
            path="finance/ledger/freelencers"
            element={<Freelencers_list />}
          />
          <Route path="finance/ledger/subagents" element={<Subagents_list />} />
          <Route
            path="finance/ledger/delevery_address"
            element={<Delivery_Addresses_list />}
          />
          <Route
            path="finance/ledger/sundry_debtors"
            element={<Sundry_debtorsss_list />}
          />
          <Route path="finance/ledger/sites" element={<Sites_list />} />
          <Route
            path="finance/ledger/l3customers"
            element={<L3_Customers_list />}
          />
          <Route
            path="finance/ledger/direct_expensenses"
            element={<Direct_Expenses_list />}
          />
          <Route
            path="finance/ledger/direct_income"
            element={<Direct_Income_list />}
          />
          <Route
            path="finance/ledger/purchase_account/add"
            element={<Purchase_account />}
          />
          <Route
            path="finance/ledger/freelencers/add"
            element={<Freelencers />}
          />
          <Route path="finance/ledger/subagents/add" element={<Subagents />} />
          <Route
            path="finance/ledger/delevery_address/add"
            element={<Delivery_Addresses />}
          />
          <Route
            path="finance/ledger/sundry_debtors/add"
            element={<Sundry_debtorsss />}
          />
          <Route path="finance/ledger/sites/add" element={<Sites />} />
          <Route
            path="finance/ledger/l3customers/add"
            element={<L3_Customers />}
          />
          <Route
            path="finance/ledger/direct_expensenses/add"
            element={<Direct_Expenses />}
          />
          <Route
            path="finance/ledger/direct_income/add"
            element={<Direct_Income />}
          />
          {/* Item management */}
          <Route path="finance/items" element={<Items />} />
          <Route path="finance/items/itemsettings" element={<Item_Submenu />} />
          <Route
            path="finance/items/itemsettings/brand_list"
            element={<Brand_list />}
          />
          <Route
            path="finance/items/itemsettings/category_list"
            element={<Category_list />}
          />
          <Route
            path="finance/items/itemsettings/department_list"
            element={<Departmet_list />}
          />
          <Route
            path="finance/items/itemsettings/hassac_list"
            element={<HAS_SAC_List />}
          />
          <Route
            path="finance/items/itemsettings/item_type_list"
            element={<Item_type_list />}
          />
          <Route
            path="finance/items/itemsettings/models_list"
            element={<Models_list />}
          />
          <Route
            path="finance/items/itemsettings/sub_Category_list"
            element={<Sub_Category_list />}
          />
          <Route
            path="finance/items/itemsettings/sub_sub_Category_list"
            element={<Sub_Sub_Category_list />}
          />
          <Route
            path="finance/items/itemsettings/unit_management"
            element={<Item_Subsubmenu />}
          />
          <Route
            path="finance/items/itemsettings/unit_management/units"
            element={<Units_list />}
          />
          <Route
            path="finance/items/itemsettings/unit_management/size"
            element={<Size_List />}
          />
          <Route
            path="finance/items/itemsettings/unit_management/decimal_settings"
            element={<Decimal_Settings_list />}
          />
          <Route path="finance/items/additem" element={<Add_Item />} />
          <Route path="finance/items/itemlist" element={<Item_List />} />
          <Route path="finance/items/materials" element={<Materials_item />} />
          <Route
            path="finance/items/materialslist"
            element={<Material_list />}
          />
          <Route
            path="finance/items/itemssettings/modals"
            element={<Models />}
          />
          <Route
            path="finance/items/itemssettings/brands"
            element={<Brand />}
          />
          <Route
            path="finance/items/itemssettings/item_type"
            element={<Item_type />}
          />
          <Route
            path="finance/items/itemssettings/department"
            element={<Department />}
          />
          <Route
            path="finance/items/itemssettings/category"
            element={<Category />}
          />
          <Route
            path="finance/items/itemssettings/subcategory"
            element={<Sub_Category />}
          />
          <Route
            path="finance/items/itemssettings/has_sac"
            element={<HAS_SAC />}
          />
          <Route
            path="finance/items/itemssettings/sub_sub_category"
            element={<Sub_Sub_Category />}
          />
          <Route
            path="finance/items/itemssettings/unitmanagement/decimal"
            element={<Decimal_Settings />}
          />
          <Route
            path="finance/items/itemssettings/unitmanagement/size"
            element={<Size />}
          />
          <Route
            path="finance/items/itemssettings/unitmanagement/units"
            element={<Units />}
          />
          <Route
            path="finance/items/memebership"
            element={<Membership_menus />}
          />
          <Route
            path="finance/items/memebership/Coupon_Ledger/add"
            element={<Coupean_Leadger />}
          />
          <Route
            path="finance/items/memeberships/Coupon_Ledger"
            element={<Coupean_Leadger_list />}
          />
          <Route
            path="finance/items/memebership/wallet_coupeans/add"
            element={<Wallet_Coupeans />}
          />
          <Route
            path="finance/items/memebership/wallet_coupeans"
            element={<Wallet_Coupeans_list />}
          />
          <Route
            path="finance/items/memebership/Subscribed_Members/add"
            element={<Subscribed />}
          />
          <Route
            path="finance/items/memebership/Subscribed_Members"
            element={<Subscribed_list />}
          />
          <Route
            path="finance/items/memebership/memberShip_plans/add"
            element={<Membership />}
          />
          <Route
            path="finance/items/memebership/memberShip_plans"
            element={<Membership_plan />}
          />
          <Route
            path="finance/items/memebership/feesandCharges/add"
            element={<FeesandCharges />}
          />
          <Route
            path="finance/items/memebership/feesandCharges"
            element={<FeesandCharges_list />}
          />
          <Route
            path="finance/items/subscriptionsettings"
            element={<ITEM_Subsubmenu />}
          />
          <Route
            path="finance/items/subscriptionsettings/subscription_Rate_list"
            element={<Subscribed_Rates_list />}
          />
          <Route
            path="finance/items/suscriptionsettings/rates"
            element={<Subscribed_Rates />}
          />
          <Route
            path="finance/items/suscriptionsettings/subscription_plan_list"
            element={<Subscription_Plan_list />}
          />
          <Route
            path="finance/items/suscriptionsettings/plans"
            element={<Subscription_Plan />}
          />
          <Route
            path="finance/items/suscriptionsettings/subscribers_list"
            element={<Subscribers_list />}
          />
          <Route
            path="finance/items/suscriptionsettings/subscribers"
            element={<Subscribers />}
          />
          <Route path="finance/items/memebers" element={<Data />} />
          <Route path="finance/financial" element={<FinacialStatements />} />
          {/* finaceial statement */}
          <Route path="finance/Inventatory" element={<Inventatory />} />
          {/* inventory management */}
          <Route
            path="finance/Inventatory/stock_master"
            element={<Subsubmenu />}
          />
          <Route
            path="finance/Inventatory/stockmaster/batchmaster"
            element={<BatchMaster />}
          />
          <Route
            path="finance/Inventatory/stockmaster/serialmaster"
            element={<SerialMaster />}
          />
          <Route
            path="finance/Inventatory/tradehistory"
            element={<TradeHistory />}
          />
          <Route
            path="finance/Inventatory/stockinhand/stocks"
            element={<Stock_In_Hand />}
          />
          <Route
            path="finance/Inventatory/stockinhand/location_wise"
            element={<Stock />}
          />
          <Route
            path="finance/Inventatory/stockinhand"
            element={<SecondSubsubmenu />}
          />
          <Route
            path="finance/Inventatory/Add_Opening_Stock"
            element={<Add_Opening_Stock />}
          />
          {/* godown summery is not done */}
          <Route
            path="finance/Inventatory/distributor"
            element={<Distributor_Summeries />}
          />
          <Route
            path="finance/Inventatory/Distributor_Summery/adddistributor"
            element={<Distributor_Summery />}
          />
          {/* assets audit controll */}
          <Route path="finance/assets_audits" element={<AssetsAudit />} />
          <Route
            path="finance/assets_audits/asset_audit_console"
            element={<SubSubMenus />}
          />
          <Route
            path="finance/assets_audits/asset_audit_console/Asset_Selection"
            element={<Asset_Selection />}
          />
          <Route
            path="finance/assets_audits/asset_audit_console/Asset_Selection_list"
            element={<Asset_selection_list />}
          />
          <Route
            path="finance/assets_audits/asset_audit_console/asset_group"
            element={<Add_assets_group />}
          />
          <Route
            path="finance/assets_audits/asset_audit_console/asset_group/asset_subgroup"
            element={<Add_Asset_Subgroup />}
          />
          <Route
            path="finance/assets_audits/asset_audit_console/assetbom"
            element={<Asset_bob />}
          />
          <Route
            path="finance/assets_audits/asset_audit_console/addBOM"
            element={<AddBOM />}
          />
          <Route
            path="finance/assets_audits/asset_audit_console/asset_Registration"
            element={<Asset_registration_table />}
          />
          <Route
            path="finance/assets_audits/asset_audit_console/addassets"
            element={<Assets_registration />}
          />
          {/* barcode */}
          <Route path="finance/barcode" element={<BarCode />} />
          <Route path="finance/barcode/addfield" element={<Add_field_tag />} />
          {/* <Route path='finance/barcode/field' element={<Field_tag/> */}
          <Route path="finance/barcode/field" element={<Field_tag />} />
          <Route
            path="finance/barcode/settings"
            element={<Barcode_Settings />}
          />
          <Route
            path="finance/barcode/settingslist"
            element={<Barcode_Settings_list />}
          />
          <Route path="finance/barcode/papersize" element={<Paper_Size />} />
          <Route
            path="finance/barcode/papersize/list"
            element={<Paper_Size_list />}
          />
          <Route
            path="finance/barcode/labelcontent/addcontent"
            element={<Label_content />}
          />
          <Route
            path="finance/barcode/labelcontent"
            element={<Label_Content_list />}
          />
          {/* gst management */}
          <Route path="finance/gst_management" element={<GST_Management />} />
          {/* contact mangement */}
          <Route path="finance/contactus" element={<ContactManagement />} />
          <Route
            path="finance/contactus/contactlist"
            element={<Contact_Group />}
          />
          <Route
            path="finance/contactus/addcontactgroup"
            element={<Add_Contact_group />}
          />
          <Route path="finance/contactus/contact" element={<Contacts />} />
          <Route
            path="finance/contactus/addcontact"
            element={<Add_Contacts />}
          />
          {/* <Route path="finance/gstconfig" element={<GSTReturnPage />} /> */}
          {/* whitebills report */}
          <Route path="finance/whitebills" element={<WhiteBills />} />
          <Route
            path="finance/whitebills/outstandingcollectionamt"
            element={<Outstanding_Bills />}
          />
          <Route
            path="finance/whitebills/outstandingpaymentamt"
            element={<Outstanding_payment_amt />}
          />
          <Route
            path="finance/whitebills/unadjustedvoucher"
            element={<Unadjusted_Voucher />}
          />
          <Route
            path="finance/whitebills/outstandingcollectionmaterial"
            element={<Outstanding_collection_material />}
          />
          {/* finacial settings */}
          <Route path="finance/settings" element={<FinacialSettings />} />
          <Route
            path="finance/settings/countryPlanner"
            element={<Country_Planner_Submenu />}
          />
          <Route
            path="finance/settings/countryPlanner/countrylist"
            element={<CountryList />}
          />
          <Route
            path="finance/settings/countryPlanner/Countrylist/add"
            element={<Country />}
          />
          <Route
            path="finance/settings/countryPlanner/state"
            element={<StateList />}
          />
          <Route
            path="finance/settings/countryPlanner/state/add"
            element={<State />}
          />
          <Route
            path="finance/settings/countryPlanner/city"
            element={<CityList />}
          />
          <Route
            path="finance/settings/countryPlanner/city/add"
            element={<City />}
          />
          <Route
            path="finance/settings/countryPlanner/pincode"
            element={<PincodeList />}
          />
          <Route
            path="finance/settings/countryPlanner/pincode/add"
            element={<Pincode />}
          />
          <Route
            path="finance/settings/countryPlanner/location"
            element={<LocationList />}
          />
          <Route
            path="finance/settings/paymentgateway/Cash_free_api"
            element={<Cash_free_api />}
          />
          <Route
            path="finance/settings/paymentgateway/Cash_/list"
            element={<Cashfree />}
          />
          <Route
            path="finance/settings/paymentgateway/Cash_free_apitransactions"
            element={<Cash_free_Transactions />}
          />
          <Route
            path="finance/settings/paymentgateway/Cash_free_apitransactions/list"
            element={<Cash_free_transactions_list />}
          />
          <Route
            path="finance/settings/paymentgateway/Cash_free_apitransactions"
            element={<Cash_free_Transactions />}
          />
          <Route
            path="finance/settings/paymentgateway/Easebuzz_Api"
            element={<Easebuzz_Api />}
          />
          <Route
            path="finance/settings/paymentgateway/Easebuzz_Api/list"
            element={<Easebuzz_Api_List />}
          />
          <Route
            path="finance/settings/paymentgateway/easybuzztransaction"
            element={<Easebuzz_Transactions />}
          />
          <Route
            path="finance/settings/paymentgateway/easybuzztransaction"
            element={<Easebuzz_transactions_list />}
          />
          <Route
            path="finance/settings/paymentgateway/paytmtransaction"
            element={<Paytm_Api />}
          />
          <Route
            path="finance/settings/paymentgateway/paytmtransaction/list"
            element={<Paytm_Api_list />}
          />
          <Route
            path="finance/settings/paymentgateway/paytmtransactions"
            element={<Paytm_Transactions />}
          />
          <Route
            path="finance/settings/paymentgateway/paytmtransactions/list"
            element={<Paytm_Transactions_List />}
          />
          <Route
            path="finance/settings/paymentgateway/kredmint/kredmintapi"
            element={<Kredmint_api />}
          />
          <Route
            path="finance/settings/paymentgateway/kredmint/kredmintapi/list"
            element={<Kredit_Api_List />}
          />
          <Route
            path="finance/settings/paymentgateway/kredmint/addtransaction"
            element={<Add_Transaction />}
          />
          <Route
            path="finance/settings/paymentgateway/kredmint/addtransaction/list"
            element={<Kreddit_Transactions_List />}
          />
          <Route
            path="finance/settings/paymentgateway/kredmint/retail"
            element={<Retailer_Management />}
          />
          <Route
            path="finance/settings/paymentgateway/kredmint/retail_management"
            element={<Retailer_Management_List />}
          />
          <Route
            path="finance/settings/paymentgateway/icic/hook"
            element={<Add_Webhook />}
          />
          <Route
            path="finance/settings/paymentgateway/icic/logs"
            element={<Hold_logs />}
          />
          <Route
            path="finance/settings/paymentgateway/icic/logs/list"
            element={<Hold_logs_list />}
          />
          <Route
            path="finance/settings/paymentgateway/icic/transaction_logs/list"
            element={<Transaction_logs_list />}
          />
          <Route
            path="finance/settings/paymentgateway/icic/transaction_logs"
            element={<Transaction_logs />}
          />
          <Route
            path="finance/settings/paymentgateway/instaapi"
            element={<InstaApi />}
          />
          <Route
            path="finance/settings/paymentgateway/instaapi/list"
            element={<Instant_api_list />}
          />
          <Route
            path="finance/settings/paymentgateway/instatrans/list"
            element={<Instant_Transaction_List />}
          />
          <Route
            path="finance/settings/paymentgateway/instatransactions"
            element={<Instant_Transaction />}
          />
          <Route
            path="finance/settings/paymentgateway/virtualaccount/apis"
            element={<Api_key />}
          />
          <Route
            path="finance/settings/paymentgateway/virtualaccount/virtualtransaction"
            element={<Virtual_Accounts />}
          />
          <Route
            path="finance/settings/paymentgateway/virtualaccount/virtualaccount"
            element={<Virtual_Account />}
          />
          <Route
            path="finance/settings/paymentgateway/virtualaccount/apis/list"
            element={<Api_KEy_List />}
          />
          <Route
            path="finance/settings/paymentgateway/virtualaccount/virtualtransaction/list"
            element={<Virtual_Accounts_List />}
          />
          <Route
            path="finance/settings/paymentgateway/virtualaccount/virtualaccount"
            element={<Virtual_Account_List />}
          />
          <Route
            path="finance/settings/paymentgateway/instatrans"
            element={<Instant_Transaction />}
          />
          <Route
            path="finance/settings/vouchercustomization"
            element={<Voucher_custoization_Submenu />}
          />
          <Route
            path="finance/settings/vouchercustomization/Voucher_Series_list"
            element={<VoucherSeriesList />}
          />
          <Route
            path="finance/settings/vouchercustomization/Voucher_Series_Settings"
            element={<AddVoucherSeries />}
          />
          <Route
            path="finance/settings/vouchercustomization/Voucher_types"
            element={<AddVoucherType />}
          />
          <Route
            path="finance/settings/vouchercustomization/Voucher_types_list"
            element={<VoucherTypeList />}
          />
          <Route
            path="finance/settings/gst_config/E-Invoice/addgstconfig"
            element={<GST_Config />}
          />
          <Route
            path="finance/settings/gst_config/E-Invoice"
            element={<GSTConfigList />}
          />
          <Route
            path="finance/settings/voucher_features/addvouchers"
            element={<Add_Vouchers />}
          />
          <Route
            path="finance/settings/voucher_features"
            element={<VoucherSettingsList />}
          />
          <Route path="finance/terms" element={<Terms />} />
          <Route path="finance/settings/termslist" element={<TermsList />} />
          <Route
            path="finance/settings/tally_config"
            element={<Tally_Configs_Menus />}
          />
          <Route
            path="finance/settings/tally_config/addTallyConfig"
            element={<Tally_config />}
          />
          <Route
            path="finance/settings/tally_config/TallyConfig"
            element={<TallyConfigList />}
          />
          <Route
            path="finance/settings/tally_config/xmlconfig"
            element={<XML />}
          />
          <Route
            path="finance/settings/voucher_settings"
            element={<Voucher_settings_Submenu />}
          />
          <Route
            path="finance/settings/voucher_settings/salestypes/add"
            element={<Sale_Type />}
          />
          <Route
            path="finance/settings/voucher_settings/salestypes"
            element={<Sale_Type_List />}
          />
          <Route
            path="finance/settings/voucher_settings/delevery"
            element={<Delevery_patch_list />}
          />
          <Route
            path="finance/settings/voucher_settings/delevery/add"
            element={<Delevery_patch />}
          />
          <Route
            path="finance/settings/voucher_settings/paymentterms"
            element={<Payment_Terms_list />}
          />
          <Route
            path="finance/settings/voucher_settings/paymentterms/add"
            element={<Payment_Terms />}
          />
          <Route
            path="finance/settings/voucher_settings/dispatchtype/add"
            element={<Add_Dispatch />}
          />
          <Route
            path="finance/settings/voucher_settings/dispatchtype"
            element={<Add_Dispatch_list />}
          />
          <Route path="finance/settings/payout" element={<Payout_Submenu />} />
          <Route
            path="finance/settings/payouts/ICICI_Payout"
            element={<AddPayout />}
          />
          <Route
            path="finance/settings/payouts/ICICI_Payout_list"
            element={<PayoutList />}
          />
          <Route
            path="finance/settings/payouts/transactions"
            element={<Transactions />}
          />
          <Route
            path="finance/settings/payouts/transactions_list"
            element={<TransactionsList />}
          />
          <Route
            path="finance/settings/deleveryplugins"
            element={<Delevery_Submenu />}
          />
          <Route
            path="finance/settings/deleveryplugins/Nimbus_Post/add"
            element={<Nimbus />}
          />
          <Route
            path="finance/settings/deleveryplugins/Nimbus_Post_list"
            element={<Nimbus_List />}
          />
          <Route
            path="finance/settings/deleveryplugins/deleveryone/add"
            element={<Add_delevery />}
          />
          <Route
            path="finance/settings/deleveryplugins/deleveryone"
            element={<Add_Delevery_List />}
          />
          <Route
            path="finance/settings/deleveryplugins/partners"
            element={<Delivery_Partners />}
          />
          <Route
            path="finance/settings/deleveryplugins/partners_list"
            element={<DeliveryPartnersList />}
          />
          <Route
            path="finance/settings/insensitiveledger"
            element={<Add_InsensitiveLedger />}
          />
          <Route
            path="finance/settings/insensitiveledgerlist"
            element={<InsensitiveLedgerList />}
          />
          <Route path="finance/sales_return" element={<Add_Sale_Return />} />
          <Route path="finance/AddSaleReturn" element={<Sales_Return />} />
          {/*without item  */}
          <Route
            path="finance/Add_Recurring_Instruction"
            element={<Add_Recurring_Instruction />}
          />
          {/***************************** HRM CONNECT******************************************************* */}
          <Route path="HR_Dashboard" element={<HR_Dashboard />} />
          {/***************************** Employee Records******************************************************* */}
          <Route
            path="HR_Dashboard/employee_recrods"
            element={<Employee_Records />}
          />
          <Route
            path="HR_Dashboard/employee_recrods/aiagent"
            element={<Ai_agents_list />}
          />
          <Route
            path="HR_Dashboard/employee_recrods/aiagent/addaiagent"
            element={<Ai_agents />}
          />
          <Route
            path="HR_Dashboard/employee_recrods/organotree/addorganotree"
            element={<OrganoTree />}
          />
          <Route
            path="HR_Dashboard/employee_recrods/employee/employeelist"
            element={<Show_Employees />}
          />
          <Route
            path="HR_Dashboard/employee_recrods/employee/addemployee"
            element={<Add_Employee />}
          />
          {/***************************** Payroll******************************************************* */}
          <Route path="HR_Dashboard/payroll" element={<Payroll />} />
          <Route
            path="HR_Dashboard/payroll/salarysettings"
            element={<SalesSettings />}
          />
          <Route
            path="HR_Dashboard/payroll/salarysettings/ctc_list"
            element={<Assign_CTC_list />}
          />
          <Route
            path="HR_Dashboard/payroll/salarysettings/ctc_group"
            element={<CTC_group />}
          />
          <Route
            path="HR_Dashboard/payroll/salarysettings/addctc"
            element={<Assign_CTC />}
          />
          <Route
            path="HR_Dashboard/payroll/salarysettings/ctcomponent"
            element={<CTC_Components />}
          />
          <Route path="HR_Dashboard/payroll/salery" element={<Calculator />} />
          <Route
            path="HR_Dashboard/payroll/salarydisbursal"
            element={<Salery_Disbursal />}
          />
          <Route
            path="HR_Dashboard/payroll/salarydisbursal/salary_disbursal_list"
            element={<Salery_Distributes />}
          />
          <Route
            path="HR_Dashboard/payroll/salarydisbursal/transit"
            element={<Add_trans />}
          />
            {/***************************** Attendance Reports ******************************************************* */}
          <Route path="HR_Dashboard/attendence" element={<Attendence />} />
          <Route path='HR_Dashboard/attendence/dailyattendence' element={<Attendence_Logs_list/>}/>
               <Route
            path="HR_Dashboard/attendence/monthlyattendence"
            element={<Month_Attendence />}
          />
            <Route
            path="HR_Dashboard/attendence/dailyattendence"
            element={<Daily_Attendence_list />}
          />
          <Route
            path="HR_Dashboard/attendence/dailyattendence/adddailyattendencelog"
            element={<Daily_AttendenceLog />}
          />
          <Route
            path="HR_Dashboard/attendence/dailyattendence/addattendencelog"
            element={<Attendance_Logs />}
          />
           <Route
            path="HR_Dashboard/attendence/daywiseattendence"
            element={<Day_wise />}
          />
      
           {/***************************** employee applications******************************************************* */}
          <Route
            path="HR_Dashboard/employee_application"
            element={<Employee_Applications />}
          />
          <Route
            path="HR_Dashboard/employee_application/taReimbursements"
            element={<T_A_Reimbursements />}
          />
          <Route
            path="HR_Dashboard/employee_application/taReimbursements/my_taReimbursements"
            element={<TA_Reimbursements />}
          />
        
          <Route
            path="HR_Dashboard/employee_application/taReimbursements/team_taReimbursements"
            element={<Team_Reimbursements />}
          />
            <Route
            path="HR_Dashboard/employee_application/taReimbursements/all_taReimbursements"
            element={<All_Reimbursements />}
          />
            <Route
            path="HR_Dashboard/employee_application/taReimbursements/vehicle_management"
            element={<Vehicle />}
          />
          <Route
            path="HR_Dashboard/employee_application/taReimbursements/tripexpenses"
            element={<Trip_Expenses />}
          />
          <Route
            path="HR_Dashboard/employee_application/taReimbursements/vehecledetails"
            element={<AddVechcle />}
          />
          <Route
            path="HR_Dashboard/employee_application/taReimbursements/addvehecle"
            element={<Add_Vechecel />}
          />
          <Route
            path="HR_Dashboard/employee_application/daReimbursements"
            element={<DA_Reimbursements />}
          />
           <Route
            path="HR_Dashboard/employee_application/daReimbursements/myda"
            element={<My_DA_Reimbursements />}
          />
          <Route
            path="HR_Dashboard/employee_application/daReimbursements/teamda"
            element={<Team_DA_Reimbursements />}
          />
           <Route
            path="HR_Dashboard/employee_application/daReimbursements/allda"
            element={<All_DA_Reimbursements />}
          />
          <Route
            path="HR_Dashboard/employee_application/daReimbursements/adddareimbursement"
            element={<Add_Reimbursements />}
          />
          <Route
            path="HR_Dashboard/employee_application/leaveapplication"
            element={<Leave_Applications />}
          />
          <Route
            path="HR_Dashboard/employee_application/leaveapplication/my"
            element={<My_Applications />}
          />
           <Route
            path="HR_Dashboard/employee_application/leaveapplication/team"
            element={<Team_Applications />}
          />
            <Route
            path="HR_Dashboard/employee_application/leaveapplication/all"
            element={<All_Applications />}
          />
          <Route
            path="HR_Dashboard/employee_application/ondutycall"
            element={<On_Duty_Call />}
          />
          <Route
            path="HR_Dashboard/employee_application/ondutycall/my"
            element={< My_OnDuty_Applications />}
          />
           <Route
            path="HR_Dashboard/employee_application/ondutycall/all"
            element={<All_OnDuty_Applications />}
          />
            <Route
            path="HR_Dashboard/employee_application/ondutycall/team"
            element={<Team_OnDuty_Applications />}
          />
          <Route
            path="HR_Dashboard/employee_application/workday"
            element={<Work_Day />}
          />
            <Route
            path="HR_Dashboard/employee_application/workday/my"
            element={<My_WorkDay_Applications />}
          />
            <Route
            path="HR_Dashboard/employee_application/workday/all"
            element={<All_WorkDay_Applications />}
          />
            <Route
            path="HR_Dashboard/employee_application/workday/team"
            element={<Team_WorKday_Applications />}
          />
          <Route
            path="HR_Dashboard/employee_application/bonusincentive"
            element={<Bonou_Insentive />}
          />
           <Route
            path="HR_Dashboard/employee_application/bonusincentive/my"
            element={<My_Bonus />}
          />
           <Route
            path="HR_Dashboard/employee_application/bonusincentive/team"
            element={<Team_Bonus />}
          />
          <Route
            path="HR_Dashboard/employee_application/bonusincentive/all"
            element={<All_Bonus />}
          />
          <Route
            path="HR_Dashboard/employee_application/advance"
            element={<Advance />}
          />
          <Route
            path="HR_Dashboard/employee_application/advance/my"
            element={<My_Advance />}
          />
            <Route
            path="HR_Dashboard/employee_application/advance/team"
            element={<Team_Advance />}
          />
            <Route
            path="HR_Dashboard/employee_application/advance/all"
            element={<All_Advance />}
          />
          <Route
            path="HR_Dashboard/employee_application/advance/addadvance"
            element={<Add_advance />}
          />
          <Route
            path="HR_Dashboard/employee_application/others"
            element={<Others />}
          />
          <Route
            path="HR_Dashboard/employee_application/others/my"
            element={<My_Reimbursements />}
          />
          <Route
            path="HR_Dashboard/employee_application/others/team"
            element={<Teams_Reimbursementss />}
          />
          <Route
            path="HR_Dashboard/employee_application/others/all"
            element={<All_Reimbursementss />}
          />
          <Route
            path="HR_Dashboard/employee_application/others/Reimbursement"
            element={<Other_Reforcement />}
          />
          <Route
            path="HR_Dashboard/employee_application/kaizen"
            element={<Kaizen />}
          />
          <Route
            path="HR_Dashboard/employee_application/kaizen/my"
            element={<Kaizen_list />}
          />
          <Route
            path="HR_Dashboard/employee_application/kaizen/team"
            element={<Team_Kaizen_list/>}
          />
           <Route
            path="HR_Dashboard/employee_application/kaizen/all"
            element={<All_Kaizen_list/>}
          />

          <Route
            path="HR_Dashboard/employee_application/kaizen/addkaizen"
            element={<Add_kaizen />}
          />
          <Route
            path="HR_Dashboard/employee_application/pms"
            element={<PMS />}
          />
           <Route
            path="HR_Dashboard/employee_application/pms/my"
            element={<PMS_goals />}
          />
          <Route
            path="HR_Dashboard/employee_application/pms/team"
            element={<Teams_PMS_goals/>}
          />
          <Route
            path="HR_Dashboard/employee_application/pms/all"
            element={<Teams_All_Goals/>}
          />
          <Route
            path="HR_Dashboard/employee_application/pms/addpms"
            element={<Add_Pms />}
          />
           {/*****************************HR Settings******************************************************* */}
          <Route path="HR_Dashboard/hrsettings" element={<Hr_Settings />} />
          <Route
            path="HR_Dashboard/hrsettings/attendence_settings"
            element={<Attendance_Settings />}
          />
          <Route
            path="HR_Dashboard/hrsettings/attendence_settings/attendence_group"
            element={<Attendence_Group />}
          />
           <Route
            path="HR_Dashboard/hrsettings/attendence_settings/attendence_status"
            element={<Attendence_Status />}
          />
           <Route
            path="HR_Dashboard/hrsettings/weefoff"
            element={<Weekoff_list />}
          />
          <Route
            path="HR_Dashboard/hrsettings/addweekoff"
            element={<Add_weekoff />}
          />
          <Route
            path="HR_Dashboard/hrsettings/holiday_settings"
            element={<Holiday_settings />}
          />
          <Route
            path="HR_Dashboard/hrsettings/holiday_settings/holiday_group"
            element={<Holiday_Group />}
          />
            <Route
            path="HR_Dashboard/hrsettings/holiday_settings/holiday_list"
            element={<Holidays />}
          />
               <Route
            path="HR_Dashboard/hrsettings/shift_settings"
            element={<Shift_Settings />}
          />
            
          <Route
            path="HR_Dashboard/hrsettings/shift_settings/timeslots"
            element={<Time_Slots />}
          />
             
          <Route
            path="HR_Dashboard/hrsettings/shift_settings/shift"
            element={<Shifts  />}
          />
           <Route
            path="HR_Dashboard/hrsettings/shift_settings/timeslots/add"
            element={<Add_Time_Slots />}
          />
             
          <Route
            path="HR_Dashboard/hrsettings/shift_settings/shift/add"
            element={<Add_shift />}
          />
          <Route
            path="HR_Dashboard/hrsettings/leavetype"
            element={<Leave_Submenu />}
          />
          <Route
            path="HR_Dashboard/hrsettings/leavetype/leavePolicies"
            element={<Leave_Poilcy_list />}
          />
          <Route
            path="HR_Dashboard/hrsettings/leavetype/leavePolicy"
            element={<Leave_Policy />}
          />
           <Route
            path="HR_Dashboard/hrsettings/leavetype/leavebalence"
            element={<Leave_list />}
          />
          <Route
            path="HR_Dashboard/hrsettings/leavetype/leavebalence/add"
            element={<Add_Balence />}
          />
              <Route
            path="HR_Dashboard/hrsettings/leavetype/Policy"
            element={<Policies />}
          />
          <Route
            path="HR_Dashboard/hrsettings/leavetype/Policy/add"
            element={<Policy />}
          />
           <Route
            path="HR_Dashboard/hrsettings/leavetype/leavegroup"
            element={<Leave_Group_list />}
          />
          <Route
            path="HR_Dashboard/hrsettings/leavetype/leavegroup/add"
            element={<Add_leaveGroup />}
          />
          <Route
            path="HR_Dashboard/hrsettings/virtual_acccount"
            element={<Virtual_Acccount />}
          />
            <Route
            path="HR_Dashboard/hrsettings/virtual_acccount/virtual_location"
            element={<Location_list />}
          />
          <Route
            path="HR_Dashboard/hrsettings/virtual_acccount/addvirtuallocation"
            element={<Add_Location />}
          />
           <Route
            path="HR_Dashboard/hrsettings/virtual_acccount/virtual_office"
            element={<Location_list />}
          />
          <Route
            path="HR_Dashboard/hrsettings/virtual_acccount/addvirtualoffice"
            element={<Virtual_Office />}
          />
          <Route
            path="HR_Dashboard/hrsettings/virtual_acccount/admin"
            element={<Admin_list />}
          />
          <Route
            path="HR_Dashboard/hrsettings/virtual_acccount/addadmin"
            element={<Admin_Office />}
          />
          <Route path="HR_Dashboard/hrsettings/virtual_acccount/virtualoptional"element={<Optionals />}/>
          <Route
            path="HR_Dashboard/hrsettings/virtual_acccount/assignvirtualoptional"
            element={<Add_optional />}
          />
          <Route
            path="HR_Dashboard/hrsettings/training-catalogues"
            element={<Traninerr />}
          />
           <Route
            path="HR_Dashboard/hrsettings/training-catalogues/topic"
            element={<Topics />}
          />
            <Route
            path="HR_Dashboard/hrsettings/training-catalogues/catalog"
            element={<Categories />}
          />
          <Route
            path="HR_Dashboard/hrsettings/training-catalogues/addtopic"
            element={<Training_Catalog />}
          />
          <Route
            path="HR_Dashboard/hrsettings/biometric"
            element={<Biometric />}
          />
          <Route
            path="HR_Dashboard/hrsettings/biometric/addbiometric"
            element={<Add_Biometric />}
          />
          <Route
            path="HR_Dashboard/hrsettings/department"
            element={<Departments />}
          />
          <Route
            path="HR_Dashboard/hrsettings/department/adddepartment"
            element={<Add_Department />}
          />
          <Route
            path="HR_Dashboard/hrsettings/designation"
            element={<Designation />}
          />
          <Route
            path="HR_Dashboard/hrsettings/designation/adddesignation"
            element={<Add_Designation />}
          />
             <Route
            path="HR_Dashboard/hrsettings/profile"
            element={<Profile_list />}
          />
          <Route
            path="HR_Dashboard/hrsettings/profile/addprofile"
            element={<Add_Profile />}
          />
          <Route path="HR_Dashboard/hrsettings/role" element={<Roles />} />
          <Route
            path="HR_Dashboard/hrsettings/role/addrole"
            element={<Add_Roles />}
          />
          <Route
            path="HR_Dashboard/hrsettings/leavetypes"
            element={<Leave />}
          />
          <Route
            path="HR_Dashboard/hrsettings/leavetypes/addleavetype"
            element={<Leave_Type />}
          />
           <Route
            path="HR_Dashboard/hrsettings/expenses"
            element={<Expenses />}
          />
          <Route
            path="HR_Dashboard/hrsettings/expenses/addexpense"
            element={<Add_Expense_Condition />}
          />
            <Route
            path="HR_Dashboard/hrsettings/roleandpremission"
            element={<Add_role_and_Permission />}
          />
          <Route
            path="HR_Dashboard/hrsettings/roleandpremission/add"
            element={<CreateRole />}
          />{" "}
          {/*it does not done*/}
            {/***************************** Mobile Application******************************************************* */}
          <Route
            path="HR_Dashboard/Mobileapplication"
            element={<Mobile_Application />}
          />
          <Route
            path="HR_Dashboard/Mobileapplication/wishlist"
            element={<AddDeviceWhislist_list />}
          />
          <Route
            path="HR_Dashboard/Mobileapplication/wishlist/add"
            element={<AddDeviceWhislist />}
          />
           <Route
            path="HR_Dashboard/Mobileapplication/signingroup"
            element={<SignInGroup_list />}
          />
          <Route
            path="HR_Dashboard/Mobileapplication/signingroup/add"
            element={<SignInGroup />}
          />
            <Route
            path="HR_Dashboard/Mobileapplication/mobile"
            element={<Mobile_app_list />}
          />
          <Route
            path="HR_Dashboard/Mobileapplication/mobile"
            element={<Add_Mobileapp />}
          />
          <Route
            path="HR_Dashboard/Mobileapplication/ipwishlist"
            element={<Ip_Whishlist_list />}
          />
           <Route
            path="HR_Dashboard/Mobileapplication/ipwishlist/add"
            element={<Ip_Whislist />}
          />
          <Route
            path="HR_Dashboard/Mobileapplication/assignapp"
            element={<Add_Mobile_list />}
          />
             <Route
            path="HR_Dashboard/Mobileapplication/assignapp/add"
            element={<Add_Mobile />}
          />
           <Route
            path="HR_Dashboard/Mobileapplication/devicelogin"
            element={<Device_Login />}
          />
          <Route
            path="HR_Dashboard/Mobileapplication/devicelogin/add"
            element={<Device_login />}
          />
          <Route path="sms_Dashboard" element={<SMS_Connect />} />
          <Route path="sms_Dashboard/sms_config" element={<Sms_reports />} />
          <Route
            path="sms_Dashboard/sms_config/add_Check"
            element={<Add_Check />}
          />
          <Route
            path="sms_Dashboard/sms_config/add_Balence"
            element={<Add_Balences />}
          />
          <Route
            path="sms_Dashboard/sms_config/sent_history"
            element={<Add_History />}
          />
          <Route path="sms_Dashboard/config" element={<Config />} />
          <Route
            path="sms_Dashboard/config/senderid"
            element={<Add_SenderID />}
          />
          <Route path="sms_Dashboard/config/dlt" element={<Add_Dltent />} />
          <Route
            path="sms_Dashboard/config/addtemplates"
            element={<Add_Templates />}
          />
          <Route path="crmdashboard" element={<CRMs />} />
          <Route path="file_manager" element={<File_Manager />} />
          <Route path="file_manager/dashboard" element={<DashBoards />} />
          <Route
            path="file_manager/dashboard/addfiles"
            element={<Add_files />}
          />
          <Route path="Data_Entry" element={<Data_Entry />} />
          <Route path="Data_Entry/dashboard" element={<Dashboard_Submenus />} />
          <Route
            path="Data_Entry/dashboard/settings"
            element={<Data_Subsubmenus />}
          />
          <Route
            path="Data_Entry/dashboard/settings/inputtype"
            element={<Input_Type />}
          />
          <Route
            path="Data_Entry/dashboard/settings/answer"
            element={<Add_answer />}
          />
          <Route
            path="Data_Entry/dashboard/settings/process"
            element={<Add_Process />}
          />
          {/* Outlet connect */}
          <Route path="outlet" element={<Outlets />} />
          <Route path="outlet/geotracker" element={<Geotracker />} />
          <Route path="outlet/addorder" element={<Addorders />} />
          <Route path="outlet/reports" element={<Reports />} />
          <Route
            path="outlet/reports/subcategorywithdemand"
            element={<SubcategoryWithDemand_table />}
          />
          <Route
            path="outlet/reports/itemwisedemand"
            element={<Item_wise_Demand />}
          />
          <Route
            path="outlet/reports/routewisedemand"
            element={<Route_wise_Demand />}
          />
          <Route
            path="outlet/reports/distributorwisedemand"
            element={<Distributor_wise_Demand />}
          />
          <Route
            path="outlet/reports/statuswisedemand"
            element={<Status_wise_Demand />}
          />
          <Route path="outlet/reports/L2_Balence" element={<L2_Balence />} />
          <Route
            path="outlet/reports/distance_logs"
            element={<Distance_Logs />}
          />
          <Route path="outlet/pricelist" element={<PriceList />} />
          <Route path="outlet/pricelist/division" element={<Division />} />
          <Route
            path="outlet/pricelist/price_contract"
            element={<Price_Contract />}
          />
          <Route
            path="outlet/pricelist/discount_list"
            element={<DiscountList />}
          />
          <Route
            path="outlet/pricelist/offersschemes"
            element={<Offers_Scheme />}
          />
          <Route
            path="outlet/pricelist/price_settings"
            element={<Price_settings />}
          />
          <Route path="outlet/pricelist/price_list" element={<Price_List />} />
          <Route path="outlet/dispatch" element={<DisPatch />} />
          <Route
            path="outlet/dispatch/l1advdispatch"
            element={<Subsubmenus />}
          />
          <Route
            path="outlet/dispatch/l1advdispatch/list"
            element={<DisPatchSettings />}
          />
          <Route path="outlet/dispatch/l1vans" element={<Vanubmenus />} />
          <Route path="outlet/PJP" element={<PJP />} />
          <Route path="outlet/PJP/l1pjp" element={<L1PJP />} />
          <Route
            path="outlet/PJP/l1pjp/distributor_pjp"
            element={<Distributor_PJP />}
          />
          <Route path="outlet/PJP/l1pjp/WH_pjp" element={<WHPJP />} />
          <Route
            path="outlet/PJP/l1pjp/l1activities"
            element={<L1Activities />}
          />
          <Route
            path="outlet/PJP/l1pjp/l1_long_lod"
            element={<L1_Long_lod />}
          />
          <Route
            path="outlet/PJP/l1pjp/l1_indiviual_eod_report"
            element={<L1_individual />}
          />
          <Route
            path="outlet/PJP/l1pjp/l1_indiviual_team_report"
            element={<L1_Team />}
          />
          <Route
            path="outlet/PJP/l1pjp/l1_PJP_report"
            element={<L1_PJP_EOD />}
          />
          <Route path="outlet/PJP/l1pjp/l1_eom_report" element={<L1_EOM />} />
          <Route path="outlet/PJP/l2pjp" element={<L2PJP />} />
          <Route path="outlet/PJP/l2pjp/beat_pjp" element={<Beat_PJP />} />
          <Route path="outlet/PJP/l2pjp/whbeat_pjp" element={<WHBEAT_PJP />} />
          <Route
            path="outlet/PJP/l2pjp/l2_activities"
            element={<L2Activities />}
          />
          <Route
            path="outlet/PJP/l2pjp/l2_eom_individual_report"
            element={<L2IndividualReport />}
          />
          <Route
            path="outlet/PJP/l2pjp/l2_eom_team_report"
            element={<L2TeamEODReport />}
          />
          <Route
            path="outlet/PJP/l2pjp/l2_eod_report"
            element={<L2PJPEODReport />}
          />
          <Route
            path="outlet/PJP/l2pjp/l2_eom_report"
            element={<L2EOMReport />}
          />
          <Route path="outlet/PJP/activity_type" element={<Activity_Type />} />
          <Route path="outlet/settings" element={<Settings />} />
          <Route path="outlet/settings/users" element={<SettingsMenu />} />
          <Route
            path="outlet/settings/users/sale_team_members"
            element={<Sales_Team_Manager />}
          />
          <Route path="outlet/settings/users/RSM" element={<RSM />} />
          <Route path="outlet/settings/users/ASM" element={<ASM />} />
          <Route path="outlet/settings/users/DSO" element={<DSO />} />
          <Route
            path="outlet/settings/users/sale_team_members"
            element={<BO />}
          />
          <Route path="outlet/settings/users/RSM" element={<Role />} />
          <Route
            path="outlet/settings/organizaton"
            element={<Organization />}
          />
          <Route
            path="outlet/settings/organizaton/godown"
            element={<Godown />}
          />
          <Route
            path="outlet/settings/organizaton/salesroute"
            element={<SalesSubmenu />}
          />
          <Route
            path="outlet/settings/organizaton/salesroute/zone"
            element={<Zone />}
          />
          <Route
            path="outlet/settings/organizaton/salesroute/warehouse_region"
            element={<WareHouseRegion />}
          />
          <Route
            path="outlet/settings/organizaton/salesroute/warehouse_area"
            element={<WareHouseArea />}
          />
          <Route
            path="outlet/settings/organizaton/salesroute/distributor_beat"
            element={<Distributor_beat />}
          />
          <Route
            path="outlet/settings/organizaton/salesroute/Wh_beat"
            element={<WH_Beat />}
          />
          <Route
            path="outlet/settings/organizaton/salesroute/assign_wh_to_bo"
            element={<Assign_WH_To_BO />}
          />
          <Route
            path="outlet/settings/organizaton/deleveryy"
            element={<SalesSubmenus />}
          />
          <Route
            path="outlet/settings/organizaton/delevery_route/delevery_routes"
            element={<Delevery_Routes />}
          />
          <Route
            path="outlet/settings/organizaton/delevery_route/assign_distributor"
            element={<Assign_Distributor />}
          />
          <Route
            path="outlet/settings/organizaton/delevery_route/achvstragets"
            element={<Targret_Vs_Achv />}
          />
          <Route
            path="outlet/settings/organizaton/delevery_route/achvstragetquantity"
            element={<Targret_Vs_AchvQuantity />}
          />
          <Route
            path="outlet/settings/organizaton/delevery_route/achvstragetlog"
            element={<Achviev_Log />}
          />
          <Route
            path="outlet/settings/zero_order_reason"
            element={<Zero_Order_Reason />}
          />
          <Route
            path="outlet/settings/not_delevired_reason"
            element={<Not_Delivered_Reason />}
          />
          <Route path="outlet/settings/vacation" element={<Vacation />} />
          <Route path="tasktrail" element={<TaskTrails />} />
          <Route path="download" element={<Download />} />
          <Route
            path="download/downloadmanager"
            element={<Download_SubMenus />}
          />
          <Route
            path="download/downloadmanager/downloadhistory"
            element={<Add_Historys />}
          />
          <Route
            path="download/downloadmanager/user"
            element={<Download_SubsubMenus />}
          />
          <Route path="download/downloadmanager/user/addTl" element={<TL />} />
          <Route
            path="download/downloadmanager/user/excutive"
            element={<Excutive />}
          />
          <Route
            path="download/downloadmanager/user/rolelist"
            element={<Add_role />}
          />
          <Route
            path="download/downloadmanager/user/userlist"
            element={<Add_userList />}
          />
          <Route path="email" element={<EmailTemplate />} />
          <Route path="dashboard/viewcompany" element={<View_Company />} />
          <Route path="dashboard/employeeslist" element={<ListEmployees />} />
          <Route
            path="dashboard/viewEmployee/:id"
            element={<View_Employee />}
          />
          <Route
            path="dashboard/subscriptionlist"
            element={<Subscription_List />}
          />
          <Route
            path="dashboard/changepassword"
            element={<Change_Password />}
          />
          <Route path="dashboard/addemployee" element={<Add_Employees />} />
          <Route path="dashboard/bills/:id" element={<Print_View />} />
        </Route>
      </Route>
    </Routes>
  );
};
