import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/outline";
import { Categories, FeaturedRow } from "../components/exports";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <SafeAreaView className="bg-white pt-3">
      {/* Header */}
      <View className="mx-4 flex-row items-center space-x-2 p-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-9 w-9 rounded-full bg-gray-300 p-2"
        />

        <View className="m-auto flex">
          <Text className="text-xs font-bold text-gray-400">Deliver Now!</Text>
          <Text className="text-xl font-bold">
            Current Location
            <Icons.ChevronDownIcon size={20} color="#00CCBB" className="ml-2" />
          </Text>
        </View>

        <Icons.UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Search */}
      <View className="mx-4 flex-row items-center space-x-2 p-2">
        <View className="flex-1 flex-row space-x-2 bg-gray-200 p-3">
          <Icons.MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restourants and cuisines"
            keyboardType="default"
          />
        </View>
        <Icons.AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      {/*  Body */}
      <ScrollView className=" bg-gray-100" contentContainerStyle>
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}

        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid plcements from our partners!"
        />
        <FeaturedRow
          id="2"
          title="Tasty Dicsounts"
          description="Everyone's been enjoying these juicy discounts!"
        />
        <FeaturedRow
          id="3"
          title="Offers near you!"
          description="Why not support your locall restaurant tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
