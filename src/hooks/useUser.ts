import { getUser } from '@/api/user';
import { useQuery } from '@tanstack/react-query';

//mock get user detail from token
function useUserLogin(token?: string) {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(token as string),
    enabled: !!token,
  });
}

export { useUserLogin };
