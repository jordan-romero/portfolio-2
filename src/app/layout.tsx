import ThemeRegistry from './ThemeRegistry';
import { ConfigCatProvider, } from "configcat-react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <title>Jordan Romero - Personal Portfolio</title>
      </head>
      <body>
      <ConfigCatProvider sdkKey={process.env.NEXT_PUBLIC_CONFIG_CAT_SDK_KEY || ''} > 
        <ThemeRegistry>{children}</ThemeRegistry>
      </ConfigCatProvider>
      </body>
    </html>
  );
};

export default RootLayout;
