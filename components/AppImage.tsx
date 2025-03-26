import React from "react";
import { Image, StyleProp, ImageStyle } from "react-native";
import CachedImage from "expo-cached-image";
import shorthash from "shorthash2";

type AppImageProps = {
  source: { uri: string };
  alt: string;
  className?: string;
  style?: StyleProp<ImageStyle>;
  contain?: boolean;
  noCache?: boolean;
};

const AppImage: React.FC<AppImageProps> = ({
  source,
  alt,
  style,
  contain = false,
  noCache = false,
}) => {
  const imageProps = {
    source: noCache
      ? { uri: source.uri }
      : { uri: source.uri, expiresIn: 2628288 },
    style: [
      style,
      { resizeMode: contain ? "contain" : "cover" }, // Use concise conditional logic
    ],
    alt,
  };

  return noCache ? (
    <Image {...imageProps} />
  ) : (
    <CachedImage {...imageProps} cacheKey={shorthash(source.uri)} />
  );
};

export default AppImage;
