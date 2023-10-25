import { extendTheme } from "@chakra-ui/react";

const config = {
  // initialColorMode: "dark",
  // useSystemColorMode: false,
  
  // colors: {
  //   transparent: "transparent",
  //   black: "#000",
  //   white: "#fff",
  //   gray: {
  //     50: "#f7fafc",
  //     // ...
  //     900: "#171923",
  //   },
  //   // ...
  // },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'gray.100',
        color: 'white',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
};

const theme = extendTheme({ config });

export default theme;