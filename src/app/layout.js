import './globals.css'
import * as themes from './theme/schema.json'
import { setToLS } from './utils/storage';

export default function RootLayout({ children }) {

        console.log(themes.default);
        setToLS('all-themes', themes.default);
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
