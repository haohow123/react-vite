import { useRecoilValue } from 'recoil';

import userToken from '@/atoms/userToken';
import { ReactNode } from 'react';
import SignInForm from '@/modules/SignInForm';

type Props = {
  children: ReactNode;
};
function DetailsLayout({ children }: Props) {
  const token = useRecoilValue(userToken);
  if (!token) {
    return <SignInForm />;
  }
  return <>{children}</>;
}
export default DetailsLayout;
