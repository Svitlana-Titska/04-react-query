import styles from "./SearchBar.module.css";
import { Toaster, toast } from "react-hot-toast";

interface SearchBarProps {
  action: (formData: FormData) => void | Promise<void>;
}

export default function SearchBar({ action }: SearchBarProps) {
  const handleFormAction = async (formData: FormData) => {
    const query = formData.get("query")?.toString().trim();

    if (!query) {
      toast.error("Please enter your search query.");
      return;
    }

    await action(formData);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>

        {/* ✅ Toaster вставлено саме тут */}
        <Toaster position="top-center" />

        <form className={styles.form} action={handleFormAction}>
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
