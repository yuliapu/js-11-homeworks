//Потрібно написати функцію retry, яка приймає два параметри: асинхронну функцію, яку викликатиме і кількість спроб.
//Якщо під час виклику передана функція кидає помилку, вона викликається повторно, 
//але не більше ніж задана кількість разів у другому параметрі.
//Приклад коду:

async function retry(func, { retries }){
  let errors = [];
  for (let i = 0; i < retries; i++) {
    try {      
      console.log(`Trying to execute async function. Attempt ${i+1}.`);
      return await func();
    } catch (error) {
      console.error(error);
      errors.push(error);
    }
  }

  throw new Error(`Failed to execute async function. No of retries: ${retries}.\nErrors: ${errors}`);
}

const getUserInfo = async () => {
  const response = await fetch('/api/for/user');
  const userInfo = await response.json();

  return userInfo;
}

retry(getUserInfo, { retries: 6 });
