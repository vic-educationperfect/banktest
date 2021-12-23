import { Transaction } from "../_models/transaction";

export const mockIdentity = {
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIwZjk3NWUyNi1iNGFlLTQ2ODMtOGI0NC00OGI0MTJlNzA5MzQiLCJlbWFpbCI6ImxpbmguZGFuZ0BpbnNwZWN0b3Jpby5tYWlsaW5hdG9yLmNvbSIsImNyZWF0ZWRfYXQiOjE2MTg4MDY5NTU1MjQsImxhc3RfbG9naW4iOjE2NDAyMjc3MDA2OTYsImRpc2FibGVkIjpmYWxzZSwidXNlcm5hbWUiOiJsaW5oLmRhbmdAaW5zcGVjdG9yaW8ubWFpbGluYXRvci5jb20iLCJ1c2VyIjp7ImlkIjo3NDkzLCJuYW1lIjoiTGluaCBEYW5nIiwidXVpZCI6IjBmOTc1ZTI2LWI0YWUtNDY4My04YjQ0LTQ4YjQxMmU3MDkzNCIsImVtYWlsIjoibGluaC5kYW5nQGluc3BlY3RvcmlvLm1haWxpbmF0b3IuY29tIiwidXNlcm5hbWUiOiJsaW5oLmRhbmdAaW5zcGVjdG9yaW8ubWFpbGluYXRvci5jb20ifSwic3lzX3JvbGVzIjpbXSwic2Vzc2lvbl9pZCI6IjliNTA5YTc1LTdlYzQtNDNkYS1hMTNkLTBiNmEyZDIzNmE3NiIsImlzX3Jpc2VfdXNlciI6ZmFsc2UsImlzX3NpZ2h0X3VzZXIiOnRydWUsInJvbGVzIjp7IjIxODg5NSI6WyJJTlNQRUNUT1IiLCJUTkFfTUVSQ0hBTkRJU0VSIiwiVE5BX0FETUlOIiwiVE5BX01BTkFHRVIiLCJBQ0NPVU5UX09XTkVSIiwiQURNSU4iLCJNQU5BR0VSIl19LCJvcmdfaWQiOjIxODg5NSwic3Vic2NyaWJlcl9pZCI6MjE4ODk1LCJzdWJzY3JpYmVyX3R5cGUiOiJSIiwidXNlcl9pZCI6NzQ5Mywicm9sZV9pZCI6eyIyMTg4OTUiOls1LDE2NiwxNjcsMTY4LDMsMTIsNF19LCJvcmdfdHlwZSI6IlIiLCJwbGFuX2lkIjozLCJwYXJlbnRfb3JnX2lkcyI6WzIxODg5NV0sImNoaWxkcmVuX29yZ19pZHMiOlsyMTg4OTUsMjE4OTM5LDIxODk0MCwyMTk0NDYsMjE5MjIwXSwidHRsIjoxNjQwMzE0MTExfQ.BX_F8wG0KyfGYyB4PoFySZWNPEKRit0k166FhnmoSUo",
  expires_in: new Date().toDateString(),
};

export const mockProfile = {
  name: "Hoang Hong Quang",
  primaryEmail: "hoanghoangquang@gmail.com",
  secondaryEmail: "hoanghoangquang@cmcglobal.vn",
  mobilePhone: "0123456789",
  officePhone: "+84(24)123456",
  address: "Thanh Cong Building, 80 Dich Vong Hau str., Cau Giay dist., Ha Noi",
}

export const mockTransactionHistory: Transaction[] = [
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description Description '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description 123 '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description 456 '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description 1 '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description 2 '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description 3 '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description 4 '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description 5 '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description 6 '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description 7 '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description 8 '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description 9 '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description 10 '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description 11 '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description 12 '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description 13 '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description 14 '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description 15 '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description 16 '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description 17 '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description 18 '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description Description '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description Description '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description Description '
  },
  {
    time: randomDate(new Date(2021, 0, 1), new Date()),
    receiptNo: Math.floor(Math.random() * 1000000),
    amount: Math.floor(Math.random() * 1000000),
    description: 'Description Description Description Description '
  },
]

function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
