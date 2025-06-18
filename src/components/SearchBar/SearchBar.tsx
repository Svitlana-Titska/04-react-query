import styles from "./SearchBar.module.css";
import { Toaster, toast } from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (query: string) => void | Promise<void>;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const query = formData.get("query")?.toString().trim() ?? "";

    if (!query) {
      toast.error("Please enter your search query.");
      return;
    }

    onSubmit(query);
    form.reset();
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

        <Toaster position="top-center" />

        <form className={styles.form} onSubmit={handleSubmit}>
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
