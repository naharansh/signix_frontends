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
import { AddSalesInvoice } from "../pages/admin/finance/salesmanagement/addSaleInvoice";
import { Add_Sale_Return } from "../pages/admin/finance/salesmanagement/AddSaleReturn";
import { Add_Recurring_Instruction } from "../pages/admin/finance/salesmanagement/AddRecurringInstruction";
import { AddRecipet } from "../pages/admin/finance/recipetmanagement/addrecipet";
import { AddProposedRespiect } from "../pages/admin/finance/recipetmanagement/addpropsedreciept";
import { AddPayment } from "../pages/admin/finance/payment/addpayment";
import { AddProposedContra } from "../pages/admin/finance/contra/addproposedcontra";
import { Adddelevery } from "../pages/admin/finance/delver/adddeleery";
import { AddRecipet_note } from "../pages/admin/finance/Receipt Note Management/Receipt_Note_Add";
import { Rejection_Out } from "../pages/admin/finance/Receipt Note Management/Rejection_Out";
import { Add_Material_TDS } from "../pages/admin/finance/material_in/material";
import { Add_Material_TDSs } from "../pages/admin/finance/material_out/material";
import { Addjournal } from "../pages/admin/finance/journals/addvouchers";
import { Purchase_Managements } from "../pages/admin/finance/journals/purchase";
import { Stocks } from "../pages/admin/finance/stock/stock";
import { BOM } from "../pages/admin/finance/production/bomproduction";
import { Manufactures } from "../pages/admin/finance/production/manfuctaure";
import {
  InspectionTable,
  Issued,
  PackingTable,
} from "../pages/admin/finance/po/packingtable";
import { Purchase_Invoice } from "../pages/admin/finance/purchasemanagement/Purchase_Invoice";
import {
  Purchase_Return,
  Purchase_Return_with_Item,
} from "../pages/admin/finance/purchasemanagement/Purchase_Return";
import {
  Material_request,
  Proporfma,
  Purchase_Order,
  Quatation,
} from "../pages/admin/finance/profemia/Proforma_Invoices";
import { Sales_Return } from "../pages/admin/finance/salesmanagement/salesreturn";
import { ProposedPayment } from "../pages/admin/finance/payment/proposed";
import { Pending } from "../pages/admin/finance/payment/pending";
import { Contra } from "../pages/admin/finance/contra/contra";
import { Material_in } from "../pages/admin/finance/material_in/materialin";
import { Material_Outs } from "../pages/admin/finance/material_out/materialout";
import { Sundry_debtor } from "../pages/admin/finances/ledger/sundrydeptors";
import { Sundry_creditors } from "../pages/admin/finances/ledger/sundrycreditors";
import { Company_Branch } from "../pages/admin/finances/ledger/company&branch";
import { L2_Customers } from "../pages/admin/finances/ledger/l2customers";
import { Outletss } from "../pages/admin/finances/ledger/outlets";
import { All_ledgers } from "../pages/admin/finances/ledger/allledgers";
import { Payment_Gateway } from "../pages/admin/finances/ledger/paymentgateway";
import { Bank_accounts } from "../pages/admin/finances/ledger/bank";
import { Cash_in_hands } from "../pages/admin/finances/ledger/cashinheads";
import { Ledger_group } from "../pages/admin/finances/ledger/ledgergroup";
import { Credit_Limit } from "../pages/admin/finances/ledger/creditlimit";
import { Opening_Balance } from "../pages/admin/finances/ledger/opening_balence";
import { Indirect_Income } from "../pages/admin/finances/ledger/indirect_income";
import { Indirect_Expenpenses } from "../pages/admin/finances/ledger/indirect_expenses";
import { Fixed_assets } from "../pages/admin/finances/ledger/fixedassets";
import { Sales_account } from "../pages/admin/finances/ledger/sales";
import { Purchase_account } from "../pages/admin/finances/ledger/purchase_account";
import { Delivery_Addresses } from "../pages/admin/finances/ledger/delevery";
import { Direct_Expenses } from "../pages/admin/finances/ledger/direct_expenses";
import { Direct_Income } from "../pages/admin/finances/ledger/directincome";
import { Duties_Taxes } from "../pages/admin/finances/ledger/duties_taxes";
import { L2_Suppliers } from "../pages/admin/finances/ledger/l2suppliers";
import { Freelencers } from "../pages/admin/finances/ledger/freelencers";
import { Sundry_debtorsss } from "../pages/admin/finances/ledger/sundrydeptorss";
import { Sites } from "../pages/admin/finances/ledger/sites";
import { L3_Customers } from "../pages/admin/finances/ledger/l3customers";
import { Subagents } from "../pages/admin/finances/ledger/subagents";
import { Add_Opening_Stock } from "../pages/admin/finances/inventory/addOpeningStock";
//
import { Distributor_Summery } from "../pages/admin/finances/inventory/Distributor_Summary";
import { Add_Contact_group } from "../pages/admin/finances/contactus/contactgroup/addcontactgroup";
import { Add_Contacts } from "../pages/admin/finances/contactus/contactus/addcontact";
import { Asset_Selection } from "../pages/admin/finances/assets/assetsaudit/assetslist/Asset_Selection";
import { Add_assets_group } from "../pages/admin/finances/assets/assetsaudit/assetsgroup/asset_group";
import { Assets_registration } from "../pages/admin/finances/assets/assetsaudit/assetregistration/asset_registration";
import AddBOM from "../pages/admin/finances/assets/assetsaudit/BOM/asset_bob";
import { Add_field_tag } from "../pages/admin/finances/barcode/fieldsettings/addfieldtag";
import { Barcode_Settings } from "../pages/admin/finances/barcode/barcodesettings/barcodeSettings";
import { Paper_Size } from "../pages/admin/finances/barcode/papersize/papersize";
import { Label_content } from "../pages/admin/finances/barcode/labelcontent/labelcontent";
import { Country } from "../pages/admin/finances/financesettings/countryPlanner/country/Country";
import { State } from "../pages/admin/finances/financesettings/countryPlanner/state/state";
import { City } from "../pages/admin/finances/financesettings/countryPlanner/city/city";
import { Pincode } from "../pages/admin/finances/financesettings/countryPlanner/pincode/pincode";
import { Add_Vouchers } from "../pages/admin/finances/financesettings/voucherfeactures/addVouchersettings";
import { Terms } from "../pages/admin/finances/financesettings/termsandConditions/term";
import { AddVoucherSeries } from "../pages/admin/finances/financesettings/VoucherCustomizations/voucherseries/addvoucherseries";
import { AddVoucherType } from "../pages/admin/finances/financesettings/VoucherCustomizations/vouchertype/addvouchertype";
import { GST_Config } from "../pages/admin/finances/financesettings/GST Plugins/gstconfig";
import { Tally_config } from "../pages/admin/finances/financesettings/TallyPlugins/tallyconfig/tallyconfig";
import { Add_InsensitiveLedger } from "../pages/admin/finances/financesettings/InsensitiveLedger/addInsensitiveledger";
import { Nimbus } from "../pages/admin/finances/financesettings/DeliveryPlugins/nimbus/nimbus";
import { Add_delevery } from "../pages/admin/finances/financesettings/DeliveryPlugins/deleveryone/adddelevery";
import { Delivery_Partners } from "../pages/admin/finances/financesettings/DeliveryPlugins/deliverypartners/delevery_partners";
import { AddPayout } from "../pages/admin/finances/financesettings/Payout/iccicpayout/icipayout/addICISpayout";
import { Transactions } from "../pages/admin/finances/financesettings/Payout/iccicpayout/transactions/transaction";
import { Sale_Type } from "../pages/admin/finances/financesettings/VoucherSettings/saletype/saletype";
import { Add_Dispatch } from "../pages/admin/finances/financesettings/VoucherSettings/DispatchMode/dispatch";
import { Delevery_patch } from "../pages/admin/finances/financesettings/VoucherSettings/delevery/delevery";
import { Payment_Terms } from "../pages/admin/finances/financesettings/VoucherSettings/paymenmode/payment";
import { Coupean_Leadger } from "../pages/admin/finances/itemmanagement/memberssettings/coupeanleadger";
import { Wallet_Coupeans } from "../pages/admin/finances/itemmanagement/memberssettings/walletcoupeans";
import { Subscribed } from "../pages/admin/finances/itemmanagement/memberssettings/Subscribed";
import { Membership } from "../pages/admin/finances/itemmanagement/memberssettings/membershiplans";
import { FeesandCharges } from "../pages/admin/finances/itemmanagement/memberssettings/feesandcharges";
import { Subscribed_Rates } from "../pages/admin/finances/itemmanagement/subscription/subscription_rate";
import { Subscription_Plan } from "../pages/admin/finances/itemmanagement/subscription/subscription_plan";
import { Subscribers } from "../pages/admin/finances/itemmanagement/subscription/subscribers";
import { Materials_item } from "../pages/admin/finances/itemmanagement/materialitems/material";

import { Add_Item } from "../pages/admin/finances/itemmanagement/itemmaster/additem";
import { Cash_free_api } from "../pages/admin/finances/financesettings/paymentgateway/Cashfree.jsx/cashfreeapi";
import { Cash_free_Transactions } from "../pages/admin/finances/financesettings/paymentgateway/Cashfree.jsx/transactions";
import { Easebuzz_Api } from "../pages/admin/finances/financesettings/paymentgateway/Easebuzz/easebuzz";
import { Easebuzz_Transactions } from "../pages/admin/finances/financesettings/paymentgateway/Easebuzz/transactions";
import { Paytm_Api } from "../pages/admin/finances/financesettings/paymentgateway/paytem/paytmapi";
import { Paytm_Transactions } from "../pages/admin/finances/financesettings/paymentgateway/paytem/transction";
import { InstaApi } from "../pages/admin/finances/financesettings/paymentgateway/instacollect/instacollect";
import { Instant_Transaction } from "../pages/admin/finances/financesettings/paymentgateway/instacollect/transactions";
import { Retailer_Management } from "../pages/admin/finances/financesettings/paymentgateway/kredmint/retailer";
import { Add_Transaction } from "../pages/admin/finances/financesettings/paymentgateway/kredmint/addtransaction";
import { Kredmint_api } from "../pages/admin/finances/financesettings/paymentgateway/kredmint/kredmintapi";
import { Add_Webhook } from "../pages/admin/finances/financesettings/paymentgateway/icci/webhook";
import {
  Hold_logs,
  Transaction_logs,
} from "../pages/admin/finances/financesettings/paymentgateway/icci/logs";
import { Virtual_Account } from "../pages/admin/finances/financesettings/paymentgateway/easebuzzvirtualaccount/virtualaccount";
import { Api_key } from "../pages/admin/finances/financesettings/paymentgateway/easebuzzvirtualaccount/apikey";
import { Virtual_Accounts } from "../pages/admin/finances/financesettings/paymentgateway/easebuzzvirtualaccount/virtuals";
import { Decimal_Settings } from "../pages/admin/finances/itemmanagement/itemsettings/unitmanagement/decimal";
import { Size } from "../pages/admin/finances/itemmanagement/itemsettings/unitmanagement/size";
import { Units } from "../pages/admin/finances/itemmanagement/itemsettings/unitmanagement/units";
import { Models } from "../pages/admin/finances/itemmanagement/itemsettings/modals";
import { Brand } from "../pages/admin/finances/itemmanagement/itemsettings/brand";
import { Item_type } from "../pages/admin/finances/itemmanagement/itemsettings/itemtype";
import { Department } from "../pages/admin/finances/itemmanagement/itemsettings/department";
import { Category } from "../pages/admin/finances/itemmanagement/itemsettings/category";
import { Sub_Category } from "../pages/admin/finances/itemmanagement/itemsettings/subcategory";
import { HAS_SAC } from "../pages/admin/finances/itemmanagement/itemsettings/hassac";
import { Sub_Sub_Category } from "../pages/admin/finances/itemmanagement/itemsettings/subsubcategory";
//hr module
import {
  Attendence,
  Employee_Applications,
  Employee_Records,
  Hr_Settings,
  Mobile_Application,
  Payroll,
} from "../pages/admin/hrcontact/hrdashboard";
import { Ai_agents } from "../pages/admin/hrcontact/employeerecords/aiagents/addaiagent";
import { OrganoTree } from "../pages/admin/hrcontact/employeerecords/orgnaotree/addorgaotree";
import { Add_Employee } from "../pages/admin/hrcontact/employeerecords/employees/addemployees";
import { Daily_AttendenceLog } from "../pages/admin/hrcontact/attendence/dailyattendencelog/createdailyattendence";
import { Attendance_Logs } from "../pages/admin/hrcontact/attendence/attendencelog/addattendencelog";
import { SignInGroup } from "../pages/admin/hrcontact/mobileapp/signinagroup/addsigning";
import { Add_Mobile } from "../pages/admin/hrcontact/mobileapp/mobileapp/addmobile";
import { Device_login } from "../pages/admin/hrcontact/mobileapp/devicelogin/devicelogin";
import { AddDeviceWhislist } from "../pages/admin/hrcontact/mobileapp/devicewhillist/adddevicelist";
import { Add_Mobileapp } from "../pages/admin/hrcontact/mobileapp/mobileapps/addmobileapps";
import { Ip_Whislist } from "../pages/admin/hrcontact/mobileapp/ipwhislist/addwhilist";
import {
  Salery_Disbursal,
  SalesSettings,
} from "../pages/admin/hrcontact/payroll/salerysettings";
import { Assign_CTC } from "../pages/admin/hrcontact/payroll/SalarySettings/AssignCTC/addctc";
import { Add_trans } from "../pages/admin/hrcontact/payroll/salerydispersal/transfiled/addtrans";
import { Leave_Type } from "../pages/admin/hrcontact/hr settings/leave/addleavetype";
import { Add_Roles } from "../pages/admin/hrcontact/hr settings/roles/addroles";
import { Add_Expense_Condition } from "../pages/admin/hrcontact/hr settings/expensecondition/addexpensecondition";
import { Add_weekoff } from "../pages/admin/hrcontact/hr settings/weekoff/addweekoff";
import { Add_Biometric } from "../pages/admin/hrcontact/hr settings/biometric/addbiometric";
import { Add_Department } from "../pages/admin/hrcontact/hr settings/department/adddepartment";
import { Add_Designation } from "../pages/admin/hrcontact/hr settings/designation/addegination";
import { Add_Profile } from "../pages/admin/hrcontact/hr settings/profile/addprofile";
import {
  Attendance_Settings,
  Holiday_settings,
  Leave_Submenu,
  Shift_Settings,
  Traninerr,
  Virtual_Acccount,
} from "../pages/admin/hrcontact/hr settings/subsubmenu";
import { Add_shift } from "../pages/admin/hrcontact/hr settings/shiftsetting/shifts/addshifts";
import { Add_Time_Slots } from "../pages/admin/hrcontact/hr settings/shiftsetting/timeslots/addtimeslots";
import { Training_Catalog } from "../pages/admin/hrcontact/hr settings/traineeingcatalog/topics/addtopics";
import { Leave_Policy } from "../pages/admin/hrcontact/hr settings/leavesettings/leavepolicies/addleavepolicies";
import { Add_Balence } from "../pages/admin/hrcontact/hr settings/leavesettings/leavebalence/addleavebalence";
import { Policy } from "../pages/admin/hrcontact/hr settings/leavesettings/leavepolicy/addleavepolicy";
import { Add_leaveGroup } from "../pages/admin/hrcontact/hr settings/leavesettings/leavegroup/addleave";
import { Add_Location } from "../pages/admin/hrcontact/hr settings/virtualsetting/virtuallocation/addlocation";
import { Virtual_Office } from "../pages/admin/hrcontact/hr settings/virtualsetting/virtualoffice/addvirtualoffice";
import { Admin_Office } from "../pages/admin/hrcontact/hr settings/virtualsetting/adminoffice/addadminoffice";
import { Add_optional } from "../pages/admin/hrcontact/hr settings/virtualsetting/optional/addoptional";
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

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<Protected_Routes />}>
        <Route element={<AppLayout />}>
        
          <Route path="dashboard" element={<DashBoard />} />
            <Route path="dashboard/customers" element={<MyDataTable />} />
             <Route path="dashboard/products" element={<ProductList />} />
             <Route path="dashboard/addcustomer" element={<AddCustomer/>} />
             <Route path='dashboard/productlist/:id' element={<Order_details/>}/>
             <Route path="dashboard/orders" element={<Orders/>} />
               <Route path="dashboard/users" element={<AddUser/>} />
           <Route path="finance" element={<Finance />} />
          <Route path="finance/vouchers" element={<Vochours />} />
          <Route
            path="finance/vouchers/Salemanagement"
            element={<Sale_Management />}
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
            path="finance/vouchers/Receipt_Management/addreciept"
            element={<AddRecipet />}
          />
          <Route
            path="finance/vouchers/Receipt_Management/addproposedreciept"
            element={<AddProposedRespiect />}
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
            path="finance/vouchers/payment_management/pending"
            element={<Pending />}
          />
          <Route
            path="finance/vouchers/contra_management"
            element={<Contra_Management />}
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
            path="finance/vouchers/Material_in/Material_In_TID"
            element={<Add_Material_TDS />}
          />
          <Route
            path="finance/vouchers/Material_in/addmaterial"
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
            path="finance/vouchers/Material_Out/addmaterial_tid"
            element={<Add_Material_TDSs />}
          />
          <Route
            path="finance/vouchers/Material_out/addmaterial"
            element={<Material_Outs />}
          />
          <Route path="finance/vouchers/addjournal" element={<Addjournal />} />
          <Route
            path="finance/vouchers/Material_Out/Purchase_Return"
            element={<Purchase_Managements />}
          />
          <Route path="finance/vouchers/proposals" element={<Proposals />} />
          <Route path="finance/vouchers/addproposal" element={<Proporfma />} />
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
          <Route path="finance/vouchers/stock" element={<Stocks />} />
          <Route path="finance/vouchers/production" element={<Production />} />
          <Route path="finance/vouchers/production/BOM" element={<BOM />} />
          <Route
            path="finance/vouchers/production/manufacture"
            element={<Manufactures />}
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
            path="finance/vouchers/Purchase_via_PO/Packing_Tables_Add"
            element={<InspectionTable />}
          />
          <Route
            path="finance/vouchers/Purchase_via_PO/Issuesd"
            element={<Issued />}
          />
          <Route path="finance/ledger" element={<Ledger />} />
          <Route
            path="finance/ledger/SundryDebtors"
            element={<Sundry_debtor />}
          />
          <Route
            path="finance/ledger/Sundrycreditors"
            element={<Sundry_creditors />}
          />
          <Route
            path="finance/ledger/company&branch"
            element={<Company_Branch />}
          />
          <Route
            path="finance/ledger/L2_Customers"
            element={<L2_Customers />}
          />
          <Route path="finance/ledger/Outlets" element={<Outletss />} />

          <Route path="finance/ledger/allledgers" element={<All_ledgers />} />
          <Route
            path="finance/ledger/paymentgateway"
            element={<Payment_Gateway />}
          />
          <Route
            path="finance/ledger/bankaccounts"
            element={<Bank_accounts />}
          />
          <Route
            path="finance/ledger/cashinhands"
            element={<Cash_in_hands />}
          />
          <Route
            path="finance/ledger/ledguregroup"
            element={<Ledger_group />}
          />
          <Route path="finance/ledger/creditlimit" element={<Credit_Limit />} />
          <Route
            path="finance/ledger/Opening_Balance"
            element={<Opening_Balance />}
          />
          <Route
            path="finance/ledger/l2_suppliers"
            element={<L2_Suppliers />}
          />
          <Route
            path="finance/ledger/Duties_taxes"
            element={<Duties_Taxes />}
          />
          <Route
            path="finance/ledger/indirect_income"
            element={<Indirect_Income />}
          />
          <Route
            path="finance/ledger/indirect_expenses"
            element={<Indirect_Expenpenses />}
          />
          <Route
            path="finance/ledger/fixed_Assets"
            element={<Fixed_assets />}
          />
          <Route
            path="finance/ledger/sales_account"
            element={<Sales_account />}
          />
          <Route
            path="finance/ledger/purchase_account"
            element={<Purchase_account />}
          />
          <Route path="finance/ledger/freelencers" element={<Freelencers />} />
          <Route path="finance/ledger/subagents" element={<Subagents />} />
          <Route
            path="finance/ledger/delevery_address"
            element={<Delivery_Addresses />}
          />
          <Route
            path="finance/ledger/sundry_debtors"
            element={<Sundry_debtorsss />}
          />
          <Route path="finance/ledger/sites" element={<Sites />} />
          <Route path="finance/ledger/l3customers" element={<L3_Customers />} />
          <Route
            path="finance/ledger/direct_expensenses"
            element={<Direct_Expenses />}
          />
          <Route
            path="finance/ledger/direct_income"
            element={<Direct_Income />}
          />
          <Route path="finance/items" element={<Items />} />
          <Route path="finance/items/additem" element={<Add_Item />} />
          <Route path="finance/items/materials" element={<Materials_item />} />
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
            path="finance/items/memebershipsettings/Coupon_Ledger"
            element={<Coupean_Leadger />}
          />
          <Route
            path="finance/items/memebershipsettings/wallet_coupeans"
            element={<Wallet_Coupeans />}
          />
          <Route
            path="finance/items/memebershipsettings/Subscribed_Members"
            element={<Subscribed />}
          />
          <Route
            path="finance/items/memebershipsettings/memberShip_plans"
            element={<Membership />}
          />
          <Route
            path="finance/items/memebershipsettings/feesandCharges"
            element={<FeesandCharges />}
          />
          <Route
            path="finance/items/suscriptionsettings/rates"
            element={<Subscribed_Rates />}
          />
          <Route
            path="finance/items/suscriptionsettings/plans"
            element={<Subscription_Plan />}
          />
          <Route
            path="finance/items/suscriptionsettings/subscribers"
            element={<Subscribers />}
          />
          <Route path="finance/items/memebers" element={<Data />} />
          <Route path="finance/financial" element={<FinacialStatements />} />
          <Route path="finance/Inventatory" element={<Inventatory />} />
          <Route
            path="finance/Inventatory/Add_Opening_Stock"
            element={<Add_Opening_Stock />}
          />
          <Route
            path="finance/Inventatory/Distributor_Summery"
            element={<Distributor_Summery />}
          />
          <Route path="finance/assets_audits" element={<AssetsAudit />} />
          <Route
            path="finance/assets_audits/Asset_Selection"
            element={<Asset_Selection />}
          />
          <Route
            path="finance/assets_audits/asset_group"
            element={<Add_assets_group />}
          />
          <Route path="finance/assets_audits/addBOM" element={<AddBOM />} />
          <Route
            path="finance/assets_audits/addassets"
            element={<Assets_registration />}
          />
          <Route path="finance/barcode" element={<BarCode />} />
          <Route path="finance/barcode/addfield" element={<Add_field_tag />} />
          <Route
            path="finance/barcode/settings"
            element={<Barcode_Settings />}
          />
          <Route path="finance/barcode/papersize" element={<Paper_Size />} />
          <Route
            path="finance/barcode/labelcontent"
            element={<Label_content />}
          />
          <Route path="finance/gst_management" element={<GST_Management />} />
          <Route path="finance/contactus" element={<ContactManagement />} />
          <Route
            path="finance/contactus/addcontactgroup"
            element={<Add_Contact_group />}
          />
          <Route
            path="finance/contactus/addcontact"
            element={<Add_Contacts />}
          />
          <Route path="finance/whitebills" element={<WhiteBills />} />
          <Route path="finance/settings" element={<FinacialSettings />} />
          <Route
            path="finance/settings/countryPlanner/Country"
            element={<Country />}
          />
          <Route
            path="finance/settings/countryPlanner/state"
            element={<State />}
          />
          <Route
            path="finance/settings/countryPlanner/city"
            element={<City />}
          />
          <Route
            path="finance/settings/countryPlanner/pincode"
            element={<Pincode />}
          />
          <Route
            path="finance/settings/paymentgateway/Cash_free_api"
            element={<Cash_free_api />}
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
            path="finance/settings/paymentgateway/easybuzztransaction"
            element={<Easebuzz_Transactions />}
          />
          <Route
            path="finance/settings/paymentgateway/Cash_free_apitransactions"
            element={<Cash_free_Transactions />}
          />
          <Route
            path="finance/settings/paymentgateway/paytmtransaction"
            element={<Paytm_Api />}
          />
          <Route
            path="finance/settings/paymentgateway/paytmtransactions"
            element={<Paytm_Transactions />}
          />
          <Route
            path="finance/settings/paymentgateway/kredmint/kredmintapi"
            element={<Kredmint_api />}
          />
          <Route
            path="finance/settings/paymentgateway/kredmint/addtransaction"
            element={<Add_Transaction />}
          />
          <Route
            path="finance/settings/paymentgateway/kredmint/retail"
            element={<Retailer_Management />}
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
            path="finance/settings/paymentgateway/icic/transaction_logs"
            element={<Transaction_logs />}
          />
          <Route
            path="finance/settings/paymentgateway/instaapi"
            element={<InstaApi />}
          />
          <Route
            path="finance/settings/paymentgateway/instatrans"
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
            path="finance/settings/paymentgateway/instatrans"
            element={<Instant_Transaction />}
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
            path="finance/settings/gst_config/E-Invoice"
            element={<GST_Config />}
          />
          <Route
            path="finance/settings/voucher_settings"
            element={<Add_Vouchers />}
          />
          <Route path="finance/terms" element={<Terms />} />
          <Route
            path="finance/settings/tally_config/addTallyConfig"
            element={<Tally_config />}
          />
          <Route
            path="finance/settings/voucher_settings/salestypes"
            element={<Sale_Type />}
          />
          <Route
            path="finance/settings/voucher_settings/delevery"
            element={<Delevery_patch />}
          />
          <Route
            path="finance/settings/voucher_settings/paymentterms"
            element={<Payment_Terms />}
          />
          <Route
            path="finance/settings/voucher_settings/dispatchtype"
            element={<Add_Dispatch />}
          />
          <Route
            path="finance/settings/payouts/ICICI_Payout"
            element={<AddPayout />}
          />
          <Route
            path="finance/settings/payouts/transactions"
            element={<Transactions />}
          />
          <Route
            path="finance/settings/deleveryplugins/Nimbus_Post"
            element={<Nimbus />}
          />
          <Route
            path="finance/settings/deleveryplugins/deleveryone"
            element={<Add_delevery />}
          />
          <Route
            path="finance/settings/deleveryplugins/partners"
            element={<Delivery_Partners />}
          />
          <Route
            path="finance/settings/insensitiveledger"
            element={<Add_InsensitiveLedger />}
          />
          <Route path="finance/sales_return" element={<Add_Sale_Return />} />
          <Route path="finance/AddSaleReturn" element={<Sales_Return />} />
          {/*without item  */}
          <Route
            path="finance/Add_Recurring_Instruction"
            element={<Add_Recurring_Instruction />}
          />
          <Route path="HR_Dashboard" element={<HR_Dashboard />} />
          <Route
            path="HR_Dashboard/employee_recrods"
            element={<Employee_Records />}
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
          <Route path="HR_Dashboard/payroll" element={<Payroll />} />
          <Route
            path="HR_Dashboard/payroll/salessetting"
            element={<SalesSettings />}
          />
          <Route
            path="HR_Dashboard/payroll/salarysettings/addctc"
            element={<Assign_CTC />}
          />
          <Route
            path="HR_Dashboard/payroll/salarydisbursal"
            element={<Salery_Disbursal />}
          />
          <Route
            path="HR_Dashboard/payroll/salarydispursal/transit"
            element={<Add_trans />}
          />
          <Route path="HR_Dashboard/attendence" element={<Attendence />} />
          <Route
            path="HR_Dashboard/attendence/dailyattendence/adddailyattendencelog"
            element={<Daily_AttendenceLog />}
          />
          <Route
            path="HR_Dashboard/attendence/dailyattendence/addattendencelog"
            element={<Attendance_Logs />}
          />
          <Route path="HR_Dashboard/payroll" element={<Payroll />} />
          <Route
            path="HR_Dashboard/employee_application"
            element={<Employee_Applications />}
          />
          <Route
            path="HR_Dashboard/employee_application/taReimbursements"
            element={<T_A_Reimbursements />}
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
            path="HR_Dashboard/employee_application/daReimbursements/adddareimbursement"
            element={<Add_Reimbursements />}
          />
          <Route
            path="HR_Dashboard/employee_application/leaveapplication"
            element={<Leave_Applications />}
          />
          <Route
            path="HR_Dashboard/employee_application/ondutycall"
            element={<On_Duty_Call />}
          />
          <Route
            path="HR_Dashboard/employee_application/workday"
            element={<Work_Day />}
          />
          <Route
            path="HR_Dashboard/employee_application/bonusincentive"
            element={<Bonou_Insentive />}
          />
          <Route
            path="HR_Dashboard/employee_application/bonusincentive/bonus"
            element={<Add_Bonous />}
          />
          <Route
            path="HR_Dashboard/employee_application/advance"
            element={<Advance />}
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
            path="HR_Dashboard/employee_application/others/Reimbursement"
            element={<Other_Reforcement />}
          />
          <Route
            path="HR_Dashboard/employee_application/kaizen"
            element={<Kaizen />}
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
            path="HR_Dashboard/employee_application/pms/addpms"
            element={<Add_Pms />}
          />
          <Route path="HR_Dashboard/hrsettings" element={<Hr_Settings />} />
          <Route
            path="HR_Dashboard/hrsettings/attendence_settings"
            element={<Attendance_Settings />}
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
            path="HR_Dashboard/hrsettings/holiday_settings/add_Shifts"
            element={<Add_shift />}
          />
          <Route
            path="HR_Dashboard/hrsettings/holiday_settings/timeslots"
            element={<Add_Time_Slots />}
          />
          <Route
            path="HR_Dashboard/hrsettings/shift_settings"
            element={<Shift_Settings />}
          />
          <Route
            path="HR_Dashboard/hrsettings/leavetype"
            element={<Leave_Submenu />}
          />
          <Route
            path="HR_Dashboard/hrsettings/leavetype/leavePolicy"
            element={<Leave_Policy />}
          />
          <Route
            path="HR_Dashboard/hrsettings/leavetype/leavebalence"
            element={<Add_Balence />}
          />
          <Route
            path="HR_Dashboard/hrsettings/leavetype/Policy"
            element={<Policy />}
          />
          <Route
            path="HR_Dashboard/hrsettings/leavetype/leavegroup"
            element={<Add_leaveGroup />}
          />
          <Route
            path="HR_Dashboard/hrsettings/virtual_acccount"
            element={<Virtual_Acccount />}
          />
          <Route
            path="HR_Dashboard/hrsettings/virtual_acccount/addvirtuallocation"
            element={<Add_Location />}
          />
          <Route
            path="HR_Dashboard/hrsettings/virtual_acccount/addvirtualoffice"
            element={<Virtual_Office />}
          />
          <Route
            path="HR_Dashboard/hrsettings/virtual_acccount/admin"
            element={<Admin_Office />}
          />
          <Route
            path="HR_Dashboard/hrsettings/virtual_acccount/assignvirtualoptional"
            element={<Add_optional />}
          />
          <Route
            path="HR_Dashboard/hrsettings/training-catalogues"
            element={<Traninerr />}
          />
          <Route
            path="HR_Dashboard/hrsettings/training-catalogues/addtopic"
            element={<Training_Catalog />}
          />
          <Route
            path="HR_Dashboard/hrsettings/addbiometric"
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
            path="HR_Dashboard/hrsettings/adddesignation"
            element={<Add_Designation />}
          />
          <Route
            path="HR_Dashboard/hrsettings/profile"
            element={<Add_Profile />}
          />
             <Route
            path="HR_Dashboard/hrsettings/role"
            element={<Roles />}
          />
          <Route
            path="HR_Dashboard/hrsettings/role/addrole"
            element={<Add_Roles />}
          />
          <Route
            path="HR_Dashboard/hrsettings/addworkgroup"
            element={<Leave_Type />}
          />
          <Route
            path="HR_Dashboard/hrsettings/addexpense"
            element={<Add_Expense_Condition />}
          />
          <Route
            path="HR_Dashboard/hrsettings/roleandpermission"
            element={<CreateRole />}
          />{" "}
          {/*it does not done*/}
          <Route
            path="HR_Dashboard/Mobileapplication"
            element={<Mobile_Application />}
          />
          <Route
            path="HR_Dashboard/Mobileapplication/wishlist"
            element={<AddDeviceWhislist />}
          />
          <Route
            path="HR_Dashboard/Mobileapplication/signingroup"
            element={<SignInGroup />}
          />
          <Route
            path="HR_Dashboard/Mobileapplication/mobile"
            element={<Add_Mobileapp />}
          />
          <Route
            path="HR_Dashboard/Mobileapplication/ipwishlist"
            element={<Ip_Whislist />}
          />
          <Route
            path="HR_Dashboard/Mobileapplication/addmobile"
            element={<Add_Mobile />}
          />
          <Route
            path="HR_Dashboard/Mobileapplication/devicelogin"
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
          <Route
            path="Data_Entry/dashboard"
            element={<Dashboard_Submenus />}
          />
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
          <Route path="outlet" element={<Outlets />} />
            <Route path="outlet/addorder" element={<Addorders/>} />
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
          <Route path="dashboard/bills/:id" element={<Print_View/>}/>
          
        </Route>
      </Route>
    </Routes>
  );
};
