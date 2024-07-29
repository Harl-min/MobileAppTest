export interface Account {
    account_name: string;
    account_number: string;
    account_opening_date: string;
    account_type: string;
    bvn: string;
    currency: string;
    customer_id: string;
    last_transaction_date: string;
    status: string;
  }
  
export interface UserResponse {
    data: Account[];
    message: string;
    status: string;
  }
