#! /bin/bash
npm install -f &&
cd ios &&
pod install &&
cd ../ &&
npx react-native-asset