// `pages/_app.js`
import '../styles/global.css';

/* kết hợp với global css để thiết kế toàn bộ website */
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}