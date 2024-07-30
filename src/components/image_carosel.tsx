import React from "react";
import { Dimensions, StyleSheet, View, FlatList, Image, Text } from "react-native";

const { width, height } = Dimensions.get('window');

interface ImageCaroselProps {
  images: Array<number>,
}

interface ImageCaroselPicProp {
  image: number
}

const ImageCaroselPic = (props: ImageCaroselPicProp) => {
  console.log("Displaying image: ", props.image)

  return (
    <View>
      <Image source={props.image} resizeMode='contain' style={{ width: 200, height: 200 }} />
    </View>
  );
};

const ImageCarosel = (props: ImageCaroselProps) => {
  return (
    <FlatList
        data={props.images}
        renderItem={({ item }) => <ImageCaroselPic image={item} />}
        horizontal={true} // Add this prop to make the list horizontal
        pagingEnabled={true} // Add this prop to make the list snap to the next item
        keyExtractor={(item, index) => index.toString()}

    />
  );
};

export default ImageCarosel;

const styles = StyleSheet.create({
  carocelImage: {
    width: width,
    height: height
  },
    FlatListStyle: {
        width: width,
        height: height,
    }
});