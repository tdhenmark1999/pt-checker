export class Checker {
  id?: any;
  ticketNumber?:string;
  areaCode?: string;
  branchCode?: string;
  branchName?:  string;
  clientName?: string;
  clientNo?:  string;
  regionCode?: string;
  storageGroup?:  string;
  // ticketHistories?: TicketHistories[];
  // ticketItems?: TicketItems[];
  ticketStatus?:  string;
}



export class TicketHistories {
  advanceInterest?: string;
  expiryDate?: string;
  loanDate?: string;
  maturityDate?: string;
  monthOneDate?: string;
  monthTwoDate?: string;
  netAmount?: any;
  pawnHistoryID?: any;
  principalAmount?: any;
  promoReason?: any;
  redeemedDate?: string;
 
}



export class TicketItems {
  description?: string;
  itemAppraisalValue?: string;
  karat?: string;
  storageCode?: string;
  weight?: string;
  
 
}