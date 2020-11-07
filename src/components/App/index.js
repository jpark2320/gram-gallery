import UploadForm from 'components/UploadForm';
import styles from './App.module.scss';

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.title}>
        <h1>Gram Gallery</h1>
        <h2>Your Pictures</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <UploadForm />
    </div>
  );
}
