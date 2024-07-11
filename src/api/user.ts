function getUser() {
  return { user: 'pikachu' };
}

function login({ account, password }: { account: string; password: string }) {
  return new Promise((resolve, reject) => {
    if (account === password) {
      setTimeout(() => resolve(crypto.randomUUID()), 3000);
    } else {
      reject(new Error('password is wrong'));
    }
  });
}

export { login, getUser };
