import { Stack, stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const Layout = () => {
  const [fontsLodaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),

  });

  const onLayoutRootView = useCallback(async () => {
    if(fontsLodaded){
        await SplashScreen.hideAsync();
    }
  },[fontsLodaded])

  if (!fontsLodaded) return null;
  return <Stack onLayout = {onLayoutRootView}/>;
};

export default Layout;
