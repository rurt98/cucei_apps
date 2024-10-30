import React from 'react';
import { Text, Image, Pressable } from 'react-native';


import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Divider } from '@/components/ui/divider';
import { Box } from '@/components/ui/box';

const ProductListTile = ({ product, onPress  }) => {
  const { imgUrl, title, size, price } = product;

  return (
    <Pressable onPress={onPress}>
      <Box className="w-full bg-white p-4 rounded-lg shadow mb-3 ">
        <HStack className="items-center">
          <Image
            source={{ uri: imgUrl }}
            style={{ width: 60, height: 60, borderRadius: 8 }}
            className="mr-4"
          />
          <VStack className="flex-1">
            <Text className="text-lg font-semibold text-gray-900">{title}</Text>
            <Text className="text-sm text-gray-500">{size}</Text>
            <Divider className="my-2" />
            <Text className="text-lg font-bold text-blue-600">{price}</Text>
          </VStack>
        </HStack>
      </Box>
    </Pressable>
  );
};

export default ProductListTile;
