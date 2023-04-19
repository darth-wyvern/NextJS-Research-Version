
let accountCurrent = null;
let accounts = [];

export function getAccounts() {
  return accounts;
}

export function setAccounts(listAccount) {
  accounts = listAccount;
}

export function getAccountCurrent() {
  return accountCurrent;
}

export function setAccountCurrent(username, password) {
  accountCurrent.username = username;
  accountCurrent.password = password;
}

export function checkAccount(username, password) {
  return accounts.find(
    (account) => account.username === username && account.password === password
  );
}