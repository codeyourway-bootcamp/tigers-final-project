export const user_registration = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      labels: [
        "user_id",
        "user_email",
        "user_first_name",
        "user_last_name",
        "user_password",
        "user_currency",
      ],
      data: [
        {
          user_id: "123456",
          user_email: "josemaral@gmail.com",
          user_first_name: "Jose",
          user_last_name: "Amaral",
          user_password: "123456",
          user_currency: "BRL",
        },
        {
          user_id: "123457",
          user_email: "ivonel@gmail.com",
          user_first_name: "Ivonel",
          user_last_name: "Malegaço",
          user_password: "123457",
          user_currency: "BRL",
        },
      ],
    });
  }, 2000);
});

export const currency = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      labels: ["currency_id", "currency_title", "symbol"],
      data: { currency_id: "BRL", currency_title: "Real", symbol: "R$" },
    });
  }, 2000);
});

export const category = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      labels: ["user_id", "category_ id", "category_ name"],
      data: {
        user_id: "1",
        category_: "Casa",
        category_name: "Despesas com Casa",
      },
    });
  }, 2000);
});

export const transaction = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
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
      data: {
        user_id: "123456",
        category_id: "Casa",
        transaction_id: "1",
        transaction_date: "04/09/2023",
        transaction_name: "Energia Eletrica",
        transaction_description: "Despesas Energia Eletrica",
        transaction_value: "550,00",
        transaction_type: "D",
        transaction_attached_address: "googledrive",
      },
    });
  }, 2000);
});
