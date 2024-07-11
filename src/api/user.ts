function getUser(token: string) {
  const [account, password] = atob(token).split(':');
  return { account, password };
}

function signIn({ account, password }: { account: string; password: string }) {
  return new Promise<string>((resolve, reject) => {
    if (account === password) {
      setTimeout(() => resolve(btoa(`${account}:${password}`)), 3000);
    } else {
      reject(new Error('password is wrong'));
    }
  });
}

export { signIn, getUser };
