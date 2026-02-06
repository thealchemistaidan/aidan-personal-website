export function Footer() {
    return (
        <footer className="flex justify-between items-center pt-6 border-t border-border-light">
            <p className="text-sm text-text-tertiary">© 2026 Evan Ferreira</p>
            <p className="text-sm text-text-tertiary">
                Inspired by{' '}
                <a
                    href="https://www.silin.ca/"
                    className="text-accent hover:underline transition-all duration-200"
                >
                    Silin Gupta
                </a>
            </p>
        </footer>
    );
}
