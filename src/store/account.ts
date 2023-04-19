
const initialAccount: account = {
  id: '',
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  address: '',
  phone: '',
};

let current: account = initialAccount;

let accounts: account[] = [];

export function getAccounts() : account[] {
  return accounts;
}

export function setAccounts(listAccount: account[]) {
  accounts = listAccount;
}

export function getCurrent() : account {
  return current;
}

export function setCurrent(username: string, password: string) {
  current.username = username;
  current.password = password;
}

export function checkAccount(username: string, password: string) {
  return accounts.find(
    (account) => account.username === username && account.password === password
  );
}