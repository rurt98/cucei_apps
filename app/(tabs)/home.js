import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router';
import CustomButton from '../components/custom_button';
import { useAuth } from '../AuthContext';

export default Home = () =>{
  const router = useRouter();
  const { logout } = useAuth();

  const logoutMethod = async () => {
    const hasError = await logout();

    if (hasError) {
      Alert.alert('Error', hasError);
      return;
    }

    router.replace('./login');
  };

  return (
    <SafeAreaView style={styles.container}>
        <View>
          <Text>Home</Text>
          <CustomButton title={'Logout'} onPress={logoutMethod} ></CustomButton>
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});