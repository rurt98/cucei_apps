import { Text, FlatList, SafeAreaView, StyleSheet, Alert } from 'react-native'
import { useRouter } from 'expo-router';
import { useAuth } from '../AuthContext';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';
import { Spinner } from '@/components/ui/spinner';
import { Center } from '@/components/ui/center';
import ProductListTile from '../components/product_list_tile';

export default Home = () =>{
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const router = useRouter();
  const { logout } = useAuth();

  useEffect(()  => { 
    fetchProducts();
  },  []);

  const fetchProducts = async () => { 
    let { data, error } = await supabase
    .from('Product')
    .select('*');

    setLoading(false);
    
    if (error) {
      Alert.alert('Error', error.message);
      return;
    }
    // console.log(data);

    setData(data);
 
  }
  

  const logoutMethod = async () => {
    const hasError = await logout();

    if (hasError) {
      Alert.alert('Error', hasError);
      return;
    }

    router.replace('./login');
  };

  if (isLoading) {
    return (
      <Center className="h-full w-full" >
        <Spinner size="large"   />
      </Center>
    );
  }

  if (!data.length) {
    return (
      <Center className="h-full w-full" >
        <Text>No products found</Text>
      </Center>
    );
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text className="text-5xl font-semibold text-gray-900 p-5">Bienvenido</Text>
       <FlatList
          data={data}
          renderItem={({ item }) => <ProductListTile product={item}  onPress={() => router.push(`./product_info?id=${item.id}`)} />}
          keyExtractor={(item) => item.id}
        />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});