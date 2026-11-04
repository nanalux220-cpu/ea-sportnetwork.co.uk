import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page not found | E.A Sport Graphics';
  }, []);

  return (
    <main className="nf">
      <p className="nf-code">404</p>
      <h1>Page not found</h1>
      <p>Sorry, the page you were looking for doesn’t exist or has moved.</p>
      <a className="btn" href="/">
        Back to home <i className="ri-arrow-right-line" />
      </a>
    </main>
  );
}
