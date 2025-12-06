'use client';

import { FormEvent, useEffect, useState, type CSSProperties } from 'react';

type WatchSafeProps = {
  gradientColor?: string | null;
};

export function WatchSafe({ gradientColor }: WatchSafeProps) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('');
  const placeholders = [
    'Love Actually',
    'Home Alone',
    'Elf',
    'The Holiday',
    'The Office S03E10',
  ];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholderVisible, setPlaceholderVisible] = useState(true);
  const gradientOptions = [
    { id: 'ocean', gradient: 'linear-gradient(135deg, #2563eb, #0ea5e9)' },
    { id: 'sunset', gradient: 'linear-gradient(135deg, #f97316, #fb7185)' },
    { id: 'forest', gradient: 'linear-gradient(135deg, #059669, #22c55e)' },
    { id: 'twilight', gradient: 'linear-gradient(135deg, #7c3aed, #2563eb)' },
  ];

  const selectedGradient =
    gradientOptions.find((option) => option.id === gradientColor) ?? gradientOptions[0];

  useEffect(() => {
    let fadeTimeout: ReturnType<typeof setTimeout>;
    const interval = window.setInterval(() => {
      setPlaceholderVisible(false);
      fadeTimeout = window.setTimeout(() => {
        setPlaceholderIndex((current) => (current + 1) % placeholders.length);
        setPlaceholderVisible(true);
      }, 260);
    }, 4200);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(fadeTimeout);
    };
  }, [placeholders.length]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query.trim()) return;
    setStatus(`Scanning "${query}"… we will post results here.`);
  };

  return (
    <section className="watch-safe">
      <div className="watch-safe__shell">
        <div className="watch-safe__hero" style={{ background: selectedGradient.gradient }}>
          <div className="watch-safe__hero-bg" />
          <h2 className="watch-safe__title">Watch Safe</h2>
        </div>

        <div className="watch-safe__body">
          <header className="watch-safe__header">
            <p className="watch-safe__subtitle">
              Any moment is an opportunity to go out, and your favorite movies and TV shows are no
              exception. Find out if you can safely hit play by searching here!
            </p>
          </header>

          <form className="watch-safe__form" onSubmit={handleSubmit}>
            <label className="watch-safe__label" htmlFor="watch-safe-query">
              Movie or Show
            </label>
            <div className="watch-safe__input-row">
              <input
                id="watch-safe-query"
                name="watch-safe-query"
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={placeholders[placeholderIndex]}
                className="watch-safe__input"
                style={{ '--placeholder-opacity': placeholderVisible ? 1 : 0 } as CSSProperties}
                autoComplete="off"
              />
              <button
                type="submit"
                className="button button--secondary watch-safe__button"
                disabled={!query.trim()}
              >
                Bham!
              </button>
            </div>
          </form>

          <div className="watch-safe__status">
            {status ? <p className="watch-safe__status-text">{status}</p> : null}
            <div className="watch-safe__tags">
              <span className="watch-safe__pill">Whamageddon</span>
              <span className="watch-safe__pill">Drummer Boy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
