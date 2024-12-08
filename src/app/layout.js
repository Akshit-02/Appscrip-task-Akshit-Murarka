import {
  interExtraBold,
  interRegular,
  simplonNormBold,
  simplonNormRegular,
} from "../../public/fonts/fonts";
import "./globals.css";

export const metadata = {
  title: "Logo",
  description: "An ecommerce store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${simplonNormRegular.variable} ${simplonNormBold.variable} ${interRegular.variable} ${interExtraBold.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
