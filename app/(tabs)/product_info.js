import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';
import { Spinner } from '@/components/ui/spinner';
import { Center } from '@/components/ui/center';
import { useLocalSearchParams } from 'expo-router';
import { Divider } from '@/components/ui/divider';


import {
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  Text,
} from 'react-native';



export default ProductInfo = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const params = useLocalSearchParams();
    const productId = params?.id;

    useEffect(()  => { 
        fetchProducts();
      },  []);
    
      const fetchProducts = async () => { 
        let { data, error } = await supabase
        .from('Product')
        .select('*')
        .eq('id', productId)
        .single();
    
        setLoading(false);
        
        if (error) {
          Alert.alert('Error', error.message);
          return;
        }
    
        setData(data);
     
      }

if (isLoading) {
    return (
      <Center className="h-full w-full" >
        <Spinner size="large"   />
      </Center>
    );
  }

  if (!data) {
    return (
      <Center className="h-full w-full" >
        <Text>No product found</Text>
      </Center>
    );
  }
      

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        keyboardDismissMode="on-drag"
        style={{ padding: 16 }}
      > 
        <Center >
            <Image
                source={{ uri: data.imgUrl }}
                style={{ width: 400, height: 400, borderRadius: 8 }}
                className="2xl"
            />
        </Center>
        <Text className="text-lg font-semibold text-gray-900 pt-3">{data.title}</Text>
        <Text className="text-sm text-gray-500">{data.size}</Text>
        <Text className="text-lg font-bold text-blue-600">{data.price}</Text>
        <Divider className="my-2" />
        <Text className="text-sm text-gray-500">{data.description}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});


