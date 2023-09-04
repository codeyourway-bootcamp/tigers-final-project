export const user_registration = {
  labels: [
    "user_id",
    "user_email",
    "user_first_name",
    "user_last_name",
    "user_passoword",
    "user_currency",
  ],
  data: ["123456", "josemaral@gmail.com", "Jose", "Amaral", "123456", "BRL"],
};
export const currency = {
  labels: ["currency_id", "currency_title", "symbol"],
  data: ["BRL", "Real", "R$"],
};

export const category = {
  labels: ["user_id", "category_ id", "category_ name"],
  data: ["1", "Casa", "Despesas com Casa"],
};

export const transaction = {
  labels: [
    "user_id",
    "category_ id",
    "transaction_id",
    "transaction_date",
    "transaction_name",
    "transaction_description",
    "transaction_value",
    "transaction_type",
    "transaction_attached_address",
  ],
  data: [
    "123456",
    "Casa",
    "1",
    "04/09/2023",
    "Energia Eletrica",
    "Despesas Energia Eletrica",
    "550,00",
    "D",
    "googledrive",
  ],
};
