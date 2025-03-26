import { ElementType, useState } from "react";
import { View, Modal, Button, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import PickerItem from "./PickerItem";
import Screen from "./Screen";
import AppTextInput from "./AppTextInput";
import { colors } from "@/constants/token";
interface Item {
  value: string;
  label: string;
}

export default function AppPicker({
  icon,
  items,
  numberOfColumns = 1,
  onItemSelect,
  PickerItemComponent = PickerItem,
  placeholder,
  my0,
  selectedItem,
  label,
}: {
  icon?: string;
  items: Item[];
  numberOfColumns?: number;
  onItemSelect: (item: Item) => void;
  PickerItemComponent?: ElementType;
  placeholder: string;
  my0?: boolean;
  selectedItem: string;
  label: string;
}) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleItemSelect = (item: Item) => {
    onItemSelect(item);
    setModalVisible(false);
  };

  return (
    <>
      <View>
        <AppTextInput
          onPress={() => {
            setModalVisible(true);
          }}
          icon={icon}
          my0={my0}
          label={label}
        >
          {selectedItem ? (
            <AppText>
              {items.find((item) => item.value === selectedItem)?.label}
            </AppText>
          ) : (
            <AppText>{placeholder || "Select an item"}</AppText>
          )}
          <View className="mx-2">
            <MaterialCommunityIcons
              color={colors.mediumGray}
              name="chevron-down"
              size={20}
            />
          </View>
        </AppTextInput>
      </View>
      <Modal animationType="slide" visible={modalVisible}>
        <Screen noKeyboardAwareScroll>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.label}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => handleItemSelect(item)}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}
