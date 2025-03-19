import { Redirect } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';
import '../global.css';

const LAND = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)/home" />;
  }

  return <Redirect href="/(auth)/welcome" />;
};

export default LAND;
